// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const random = require('random-name')
exports.handler = async (event, context) => {
  try {
    //const subject = event.queryStringParameters.name || 'World'

    let name = random.first();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Our Eployee of the Month is :  ${name}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
