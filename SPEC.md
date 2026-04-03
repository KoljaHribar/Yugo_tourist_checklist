Build a Yugoslavia Tourism Checklist app. It should have 2 screens, the first one (named My Accomplishments) for all the different locations, visited or unvisited, and the second screen for a user's stats (named My Stats).

My Accomplishments screen:
    The screen should be 3 parts:
    FILTER ROW
        - should be 7 different options to filter the locations (All, Slovenia, Croatia, Serbia, Bosnia, Macedonia and Montenegro)
        - once a user clicks a filter, the only locations to pop up on the screen should be ones from that filter
        - if a user clicks the All filter, all the locations should pop up

    LOCATIONS
        - it should be all the locations that match the current filter
        - when user opens the app, the default filter should be All
        - locations should be listed in alphabetical order
        - there should be a box next to the location
        - the box can be checked or unchecked
        - if the user checks the box that means they visited the location
        - the user can check or uncheck the box whenever they click the box
        - the user should be able to scroll down if there are too many locations to go through

    BOTTOM ROW
        - there should be two buttons that allow the user to switch between My Accomplishments screen and My Stats screen
        - The buttons should have the name of the screen they lead to
        - the buttons should be in the same row at the bottom

My Stats screen:
    The screen should be 5 parts:
    FILTER ROW
        - should be 7 different options to filter the locations (All, Slovenia, Croatia, Serbia, Bosnia, Macedonia and Montenegro)
        - if the user clicks a filter, the specific stats only for that country's location should pop up
        - if the user clicks the All filter, stats for all the locations combined should pop up
    
    TASKS COMPLETED
        - Under the filter row there must be a bar which shows the user the percentage fo all the locations for the specific filter they have visited (example, if user clicks SLovenia, the bar should be half its length if the user visited 10 out of 20 locations in slovenia)
        - Next to the bar there should be a number of what percentage was completed by the user for the specific filter
        - Above the bar it should say ("SIGHTS VISITED")

    ELEVATION GAINED
        - this should be located beneath the TASKS COMPLETED part
        - it should be the text "Elevation Gained (In Meters)" and next to the text there should be a number
        - the number should be all the elevations of the locations for a specific filter combined
        - example (if user went to Bled (10m) and Bohinj (23m) it should say Elevation Gained (In Meters) 33m)

    COVERED REGIONS
        - this should be located beneath the ELEVATION GAINED part
        - it should be the text "Covered Regions" and next to the text there should be a number and a / and the total number of regions
        - example: if the user visited all the locations in Gorenjska, but hasn't visited all the other locations in the other 5 regions, and Gorenjska is one of the regions in Slovenia, when the user clicks filter Slovenia, it should say "Covered Regions 1/5"
        - if user clicked the All filter, it should say total regions completely visited / total regions (all 6 countries regions combined)

    BOTTOM ROW
        - there should be two buttons that allow the user to switch between My Accomplishments screen and My Stats screen
        - The buttons should have the name of the screen they lead to
        - the buttons should be in the same row at the bottom


These are all the locations that should be present on the checklist:
COLUMNS ARE: Destination Name,	Country,	Region,	Elevation (m)

The entries are:
Lake Bled	Slovenia	Gorenjska (Slovenija)	475 m
Lake Bohinj	Slovenia	Gorenjska (Slovenija)	526 m
Kranjska Gora	Slovenia	Gorenjska (Slovenija)	806 m
Portorož	Slovenia	Primorska (Slovenija)	2 m
Piran	Slovenia	Primorska (Slovenija)	5 m
Koper	Slovenia	Primorska (Slovenija)	3 m
Maribor (Pohorje)	Slovenia	Štajerska (Slovenija)	275 m
Ptuj	Slovenia	Štajerska (Slovenija)	225 m
Moravske Toplice	Slovenia	Prekmurje (Slovenija)	162 m
Murska Sobota	Slovenia	Prekmurje (Slovenija)	190 m
Otočec Castle	Slovenia	Dolenjska (Slovenija)	170 m
Novo Mesto	Slovenia	Dolenjska (Slovenija)	202 m
Postojna Cave	Slovenia	Notranjska (Slovenija)	554 m
Lake Cerknica	Slovenia	Notranjska (Slovenija)	558 m
Dubrovnik	Croatia	Dalmatia (Croatia)	3 m
Split	Croatia	Dalmatia (Croatia)	15 m
Makarska Riviera	Croatia	Dalmatia (Croatia)	5 m
Pula	Croatia	Istria (Croatia)	30 m
Rovinj	Croatia	Istria (Croatia)	10 m
Poreč	Croatia	Istria (Croatia)	29 m
Plitvice Lakes	Croatia	Central Croatia (Croatia)	580 m
Zagreb	Croatia	Central Croatia (Croatia)	122 m
Osijek	Croatia	Slavonia (Croatia)	94 m
Vukovar	Croatia	Slavonia (Croatia)	108 m
Opatija	Croatia	Kvarner Gulf (Croatia)	5 m
Rijeka	Croatia	Kvarner Gulf (Croatia)	15 m
Island of Krk	Croatia	Kvarner Gulf (Croatia)	0 m
Čakovec	Croatia	Medimurje (Croatia)	164 m
Sveti Martin na Muri	Croatia	Medimurje (Croatia)	165 m
Lake Palić	Serbia	Vojvodina (Serbia)	102 m
Novi Sad	Serbia	Vojvodina (Serbia)	80 m
Subotica	Serbia	Vojvodina (Serbia)	109 m
Belgrade (Kalemegdan)	Serbia	Belgrade (Serbia)	117 m
Mount Avala	Serbia	Belgrade (Serbia)	511 m
Ada Ciganlija	Serbia	Belgrade (Serbia)	73 m
Zlatibor	Serbia	Šumadija and Western Serbia (Serbia)	1,010 m
Tara National Park	Serbia	Šumadija and Western Serbia (Serbia)	1,200 m
Kragujevac (Šumarice)	Serbia	Šumadija and Western Serbia (Serbia)	173 m
Kopaonik	Serbia	Southern and Eastern Serbia (Serbia)	1,770 m
Niš (Niška Banja)	Serbia	Southern and Eastern Serbia (Serbia)	248 m
Sokobanja	Serbia	Southern and Eastern Serbia (Serbia)	400 m
Brezovica	Serbia	Kosovo and Metohija (Serbia)	1,718 m
Prizren	Serbia	Kosovo and Metohija (Serbia)	415 m
Peć (Patriarchate)	Serbia	Kosovo and Metohija (Serbia)	550 m
Višegrad	Bosnia and Herzegovina	Podrinje (Bosnia)	300 m
Foča (Sutjeska National Park)	Bosnia and Herzegovina	Podrinje (Bosnia)	400 m
Banja Luka	Bosnia and Herzegovina	Bosanska Krajina (Bosnia)	163 m
Kozara National Park	Bosnia and Herzegovina	Bosanska Krajina (Bosnia)	804 m
Bihać (Una River)	Bosnia and Herzegovina	Bosanska Krajina (Bosnia)	230 m
Sarajevo	Bosnia and Herzegovina	Central Bosnia (Bosnia)	518 m
Jajce	Bosnia and Herzegovina	Central Bosnia (Bosnia)	400 m
Travnik	Bosnia and Herzegovina	Central Bosnia (Bosnia)	514 m
Brčko	Bosnia and Herzegovina	Posavina (Bosnia)	92 m
Bosanski Brod	Bosnia and Herzegovina	Posavina (Bosnia)	88 m
Bijeljina	Bosnia and Herzegovina	Semberija (Bosnia)	112 m
Banja Dvorovi	Bosnia and Herzegovina	Semberija (Bosnia)	104 m
Livno	Bosnia and Herzegovina	Tropolje (Bosnia)	730 m
Tomislavgrad	Bosnia and Herzegovina	Tropolje (Bosnia)	900 m
Sveti Stefan (Budva)	Montenegro	Primorje (Montenegro)	5 m
Kotor	Montenegro	Primorje (Montenegro)	2 m
Ulcinj	Montenegro	Primorje (Montenegro)	15 m
Cetinje	Montenegro	Central Montenegro (Montenegro)	650 m
Podgorica (Titograd)	Montenegro	Central Montenegro (Montenegro)	44 m
Žabljak (Durmitor)	Montenegro	Northern Montenegro (Montenegro)	1,456 m
Kolašin (Biogradska Gora)	Montenegro	Northern Montenegro (Montenegro)	954 m
Skopje Center	North Macedonia	Skopje (Macedonia)	240 m
Mount Vodno	North Macedonia	Skopje (Macedonia)	1,066 m
Matka Canyon	North Macedonia	Skopje (Macedonia)	300 m
Bitola	North Macedonia	Pelagonia (Macedonia)	576 m
Prilep	North Macedonia	Pelagonia (Macedonia)	620 m
Tetovo (Šar Mountains)	North Macedonia	Polog (Macedonia)	468 m
Mavrovo National Park	North Macedonia	Polog (Macedonia)	1,200 m
Veles	North Macedonia	Vardar (Macedonia)	206 m
Kavadarci	North Macedonia	Vardar (Macedonia)	278 m
Štip	North Macedonia	Eastern Macedonia (Macedonia)	340 m
Berovo (Maleševo)	North Macedonia	Eastern Macedonia (Macedonia)	986 m
Strumica	North Macedonia	Southeastern Macedonia (Macedonia)	227 m
Lake Dojran	North Macedonia	Southeastern Macedonia (Macedonia)	148 m
Kumanovo	North Macedonia	Northeastern Macedonia (Macedonia)	340 m
Kratovo	North Macedonia	Northeastern Macedonia (Macedonia)	600 m
Ohrid	North Macedonia	Southwestern	695 m
Struga	North Macedonia	Southwestern	693 m
Sveti Naum	North Macedonia	Southwestern	700 m

WHAT TO BE CAREFUL OF:
    -if there is too much content to fit once on the screen, the user should be able to scroll up and down. When the user scrolls, the filter row and the BOTTOM ROW follow with him
    
    - Put some space between the locations and between the statistics. the suer should eb able to comfortably read what is presented, it shouldnt be all cramped up