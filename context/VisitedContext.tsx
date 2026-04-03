import { VISITED_STORAGE_KEY } from "@/constants/storage";
import { isKnownLocationId, LOCATIONS } from "@/data/locations";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type VisitedMap = Record<string, boolean>;

type VisitedContextValue = {
  visited: VisitedMap;
  isVisited: (id: string) => boolean;
  toggleVisited: (id: string) => void;
  loading: boolean;
  persistError: string | null;
  clearPersistError: () => void;
  reloadFromStorage: () => Promise<void>;
};

const VisitedContext = createContext<VisitedContextValue | null>(null);

const VALID_IDS = new Set(LOCATIONS.map((l) => l.id));

function sanitizeVisitedIds(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter((x): x is string => typeof x === "string" && VALID_IDS.has(x));
}

function visitedArrayToMap(ids: string[]): VisitedMap {
  const m: VisitedMap = {};
  for (const id of ids) m[id] = true;
  return m;
}

async function readVisitedFromStorage(): Promise<VisitedMap> {
  const raw = await AsyncStorage.getItem(VISITED_STORAGE_KEY);
  if (raw == null || raw === "") return {};

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw) as unknown;
  } catch {
    throw new Error("Saved checklist data is corrupted and could not be read.");
  }

  if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
    const rec = parsed as Record<string, unknown>;
    const v = rec.v;
    const ids = rec.ids;
    if (v === 1 && Array.isArray(ids)) {
      return visitedArrayToMap(sanitizeVisitedIds(ids));
    }
  }

  // Unknown shape: do not execute arbitrary object keys as visited flags.
  return {};
}

async function writeVisitedToStorage(visited: VisitedMap): Promise<void> {
  const ids = Object.keys(visited).filter((id) => visited[id] && isKnownLocationId(id));
  const payload = JSON.stringify({ v: 1 as const, ids });
  await AsyncStorage.setItem(VISITED_STORAGE_KEY, payload);
}

export function VisitedProvider({ children }: { children: React.ReactNode }) {
  const [visited, setVisited] = useState<VisitedMap>({});
  const [loading, setLoading] = useState(true);
  const [persistError, setPersistError] = useState<string | null>(null);
  const persistChainRef = useRef(Promise.resolve());

  const reloadFromStorage = useCallback(async () => {
    setLoading(true);
    setPersistError(null);
    try {
      const next = await readVisitedFromStorage();
      setVisited(next);
    } catch (e) {
      const message =
        e instanceof Error ? e.message : "Could not load your saved checklist.";
      setPersistError(message);
      setVisited({});
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void reloadFromStorage();
  }, [reloadFromStorage]);

  const persist = useCallback((next: VisitedMap) => {
    persistChainRef.current = persistChainRef.current
      .catch(() => {
        /* keep queue alive after a failed write */
      })
      .then(async () => {
        setPersistError(null);
        try {
          await writeVisitedToStorage(next);
        } catch {
          setPersistError(
            "Could not save your checklist. Your changes may be lost after closing the app.",
          );
        }
      });
  }, []);

  const toggleVisited = useCallback(
    (id: string) => {
      if (!isKnownLocationId(id)) return;
      setVisited((prev) => {
        const next = { ...prev };
        if (next[id]) delete next[id];
        else next[id] = true;
        void persist(next);
        return next;
      });
    },
    [persist],
  );

  const isVisited = useCallback(
    (id: string) => {
      return Boolean(visited[id]);
    },
    [visited],
  );

  const clearPersistError = useCallback(() => setPersistError(null), []);

  const value = useMemo<VisitedContextValue>(
    () => ({
      visited,
      isVisited,
      toggleVisited,
      loading,
      persistError,
      clearPersistError,
      reloadFromStorage,
    }),
    [
      visited,
      isVisited,
      toggleVisited,
      loading,
      persistError,
      clearPersistError,
      reloadFromStorage,
    ],
  );

  return <VisitedContext.Provider value={value}>{children}</VisitedContext.Provider>;
}

export function useVisited() {
  const ctx = useContext(VisitedContext);
  if (!ctx) {
    throw new Error("useVisited must be used within VisitedProvider");
  }
  return ctx;
}
