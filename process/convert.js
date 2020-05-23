const fs = require('fs').promises
const csvParse = require('csv-parse/lib/sync')

const convertToDecimalLocation = location => {
  const splitNumbers = location.split('.').map(entry => parseInt(entry))
  return splitNumbers[0]
    + (splitNumbers[1] / 60)
    + (splitNumbers[2] / (60*60))
    + (splitNumbers[3] / (60*60*100))
}

const convert = async () => {
  try {
    const fileContent = await fs.readFile('data.csv', 'utf8')
    const unfilteredRows = csvParse(fileContent, {
      delimiter: ';'
    })

    const rows = unfilteredRows.filter(row => {
      return !isNaN(row[1]) && row[1].length > 0
    }).map(row => {
      return {
        id: row[2],
        name: row[3],
        id2: row[4],
        loc: row[6],
        status: row[7],
        lat: convertToDecimalLocation(row[11]),
        lon: convertToDecimalLocation(row[12]),
      }
    })

    const rowsAsString = JSON.stringify(rows, null, 2)

    await fs.writeFile('results.json', rowsAsString)
  } catch(err) {
    console.error(err)
  }
}

convert()
