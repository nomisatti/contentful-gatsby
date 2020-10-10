// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const faunafb = require('faunadb')
const faunafbQuery = faunafb.query;
const dotenv = require('dotenv');
dotenv.config();

exports.handler = async (event, context) => {

  try {
    const subject = event.queryStringParameters.name || 'World'

      var client = new faunafb.Client({ secret: 'fnAD3sxQ67ACBxmxdEmCjtl68gzqV8yH7Sa-rnC2'})

        var result = await client.query(
          faunafbQuery.Get(
            faunafbQuery.Ref(
              faunafbQuery.Collection('posts'), "278940534887678471"
            )
          )
        )
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${result.data.title}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
