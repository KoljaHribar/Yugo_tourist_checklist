# PROMPT LOG

## EXTRA PROMPTS
1.
I'm brand new to React Native. Can you explain at a high level how these files create a working app?

2.
Give me a simple couple sentence long explanation of how this thing works and where the code for the app is

3.
what are the most crucial things i must understand to tackle building my first IOS app this way?
Make the list short and simple

4.
Give me a number between 1 and 10 of how hard it is to do the follwoing things:
have two screens for an app, home and my tasks
add bullet points to the screen
add a filter at the top of the screen which would fileter between certain kind of bullet points
do calculations (calculate how many bullet points were checkmakred)
Store bullet points as checkmarked or not

5.
how should i give a list of items i want on the bullet points to an agent who will build my map? should i putan excel sheet or csv into the folder and tell him to add it on the screen (if so, hwere should i put it in the directory) or just plain text in the spec?

## AGENT BUILDER
Prompt 1

Read SPEC.md in this project. Implement the full mobile app exactly as specified.
Create all necessary files, components, and navigation. Make sure that appropriate data is persistent.
Avoid security risks for sensitive data. Include proper error handling.
Make sure the app starts without errors and displays the home screen (My accomplishments screen) correctly.

Prompt 2

When I run npx expo start in my terminal everything works fine, but when I use the camera on my iPhone 13 it takes me to the Expo Go app and its loading screen. After that it loads for a minute or two and says there has been an error loading this app (check your internet connection). But I checked my internet connection and it all works perfectly.

Prompt 3

(Terminal paste — summary of content:)

Ran npx expo start — Metro on exp://11.22.6.101:8081, QR code shown, then server stopped.

Ran npx expo start --tunnel — prompted to install @expo/ngrok globally, user chose yes, then:

Error: Failed to install @expo/ngrok@^4.1.0 globally: npm install --global @expo/ngrok@^4.1.0 exited with non-zero code: 243

## CODE REVIEW AGENT 

1.
Review the React Native/Expo code against SPEC.md; for each acceptance criterion, verify implementation; also check bugs/logic, error handling, code quality, and RN/Expo best practices; output a numbered list with [PASS] / [FAIL] / [WARN], be specific with files and line numbers, and save the review as REVIEW.md at the project root.


## CODE REVIEW IMPROVEMENT AGENT

1.
Read the code in the project and then read the REVIEW.md

From the REVIEW.md file look at the warnings, but only those which dont have a fake warning beneath them (it should be 3 warnings you focus on in total)

Make changes in order to "fix" the warnings. feel free to also add small features which make the code more bullet proof.

## VISUAL IMPROVEMENTS AGENT

1.
Read the whole code in this folder. I want to make visual imporvements to this app. I want to improve the user experience. make it more colourful. make the buttons more clickable, make everything fit better. Make changes to improve the visual aspects fo this app

2.
Make the My accomplishments and my stats button appear better. Currently they are not centralized and the screen cuts unsatisfyingly across both the right and left corners of the screen.

3.
can you change the readme to include only information about this: How to set up and run the app (any extra dependencies or API keys needed)

Make it visually appealing and simple to understand

4.
give me all of the prompts i have given you so far in a readable text format

