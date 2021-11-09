## Citadex Web
Just a simple portal for showing notices, classes, files etc. in a single place. This app was built using React and Google Sheets API.

## Structure
```
- docs
    - // react static files

- src
    - route
        - Drive
        - Notice
        - Classes
        - Files
    - App.js
    - index.js
    - index.css
    - config.json

- public
    - index.html
    - favicon
```
The `config.json` contains some necessary keys.

## The API Call
```
https://sheets.googleapis.com/v4/spreadsheets/1HCQMeqnhiBWMs69CmuT_zrs9kyq03oQm90zL2Uqkxi0/values/web_classes?key=AIzaSyABCH_RDZQAp46P3dXfiyTTfZPDfT3wPJ8
```
The `GET` request format is structured in this way:
```https://sheets.googleapis.com/v4/spreadsheets/SHEETS_ID/values/SHEET_NAME?key=GOOGLE_API_KEY```
