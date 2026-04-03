# Yugoslavia Tourist Checklist

This is an app that would hypothetically help you track your landmarks visited in Yugoslaiva (back when it was a country). You can filter through many different sights you want to visit and track your stats of locations visited.

## SCREEN 1 -> MY ACCOMPLISHMENTS

    This screen features all of the locations that the Yugoslav government recommneded toursists to visit. The user can filter the locations based on the country they are currently located in. The locations also include Elevation and the region it belongs to along with the country of the location.

 ## SCREEN 2 -> MY STATS

    This screen tracks the user's stats. The user can filter for which country they want to see their stats. The screen shows them what percentage of locations they have visited, what their total elevation is and how many regions they have already completed.

 ## One thing I learned about mobile development that surprised me

    How a small visual change can make the app more pleasant to use but also more addictive. I watched a couple of phone app design videos and all of them were talking about making each feature as addictive as possible. I wasn't thinking about designing the app to be adictive when I started, but I could 100% see the former Yugoslav government think about that and optimize most of the features to exploit our pshychology.

Local checklist app built with **Expo** and **React Native**. Everything below is what you need to run it on your machine.

---

## Before you start

| Requirement | Notes |
|-------------|--------|
| **Node.js** | **v18** or newer (LTS recommended) |
| **npm** | Comes with Node; or use **yarn** / **pnpm** if you prefer |

Install Node from [nodejs.org](https://nodejs.org/) if you do not have it yet.

---

## Set up & run

### 1. Install dependencies

From the project folder:

```bash
npm install
```

All libraries the app uses are listed in `package.json`. Running this command installs them—**no extra manual packages** are required.

### 2. Start the dev server

```bash
npx expo start
```

A QR code and a menu will appear in the terminal.

### 3. Open the app

| Where you want to run | What to do |
|------------------------|------------|
| **Phone (Expo Go)** | Install [Expo Go](https://expo.dev/go), scan the QR code (same Wi‑Fi as your computer). |
| **iOS Simulator** | Press `i` in the terminal (macOS + Xcode). |
| **Android Emulator** | Press `a` in the terminal (Android Studio emulator running). |
| **Web browser** | Press `w` in the terminal, or run `npm run web`. |

**Shortcut scripts** (same as `expo start` with a target):

```bash
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # web
```

---

## API keys & environment variables

**None.** The app stores progress on the device with **Async Storage** only. You do **not** need `.env` files, API keys, or backend accounts to run it.

---

That’s it—install, `npx expo start`, then pick a platform from the menu.
