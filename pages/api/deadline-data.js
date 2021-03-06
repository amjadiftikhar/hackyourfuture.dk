// google api to get data from google spreadsheet
const { google } = require('googleapis')
require('dotenv').config()

const privateKey = process.env.PRIVATE_KEY.split(`\\n`).join(`
`)

const client = new google.auth.JWT(process.env.CLIENT_EMAIL, null, privateKey, [
  'https://www.googleapis.com/auth/spreadsheets'
])

client.authorize(function(err, tokens) {
  if (err) {
    console.log(err)
    return
  } else {
    console.log('Spreadsheet connected')
  }
})

async function gsrun(client) {
  const gsapi = google.sheets({ version: 'v4', auth: client })

  const spreadsheetDetails = {
    spreadsheetId: '1edSXrvn_avbnqJNMdAJEDeuFOKMZ97Z5UyIOgdWld4w',
    range: 'A1:C2'
  }

  let gsdata = await gsapi.spreadsheets.values.get(spreadsheetDetails)
  let deadlineInfoData = gsdata.data.values
  return deadlineInfoData
}

export default async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    const data = await gsrun(client)
    res.end(JSON.stringify({ data }))
  } catch (error) {
    console.error(error)
  }
}
