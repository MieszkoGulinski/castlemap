# Map of castles in Poland
Map of castles in Poland, based on a list of castles compiled for the purpose of ham radio award Zamki w Polsce:
http://zamkisp.pl/index.php?option=com_content&view=article&id=64&Itemid=71

Markers are:
- Green - existing castle (preserved in good condition)
- Olive - ruin
- Red - fragments (e.g. remains of a castle incorporated into another building)
- Blue - location (known from archaeological research, or known only from historical documents with no surviving remains to modern day)

For the purpose of the list, a building qualifies as a castle if it's built with a defensive purpose, build of brick or stone, during Middle Ages or Renaissance.

After clicking a marker, the page displays a bubble showing name of the castle, and the castle identification code for the ham radio award.

## Supported browsers
To load the data, the browser has to support Fetch API. To check if your browser supports it, see: https://caniuse.com/#feat=fetch

## Errors
The locations are extracted from the column with latitude and longitude. Some locations have errors, e.g. the castle in Kołobrzeg is mistakenly marked on the sea.

## How to generate data:
The original list is a spreadsheet (XLS). Then it was converted to CSV under name `data.csv`, and after that, to JSON. The code for converting CSV to JSON is located in `/process`.
