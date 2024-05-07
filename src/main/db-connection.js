const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://Susmitagiri:Susmita%402024@cluster1.tlsbvrw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function runDBConnection() {
  try {
    await client.connect();
    console.log('connected to MongoDB successfully!');
  } catch (ex) {
    console.error('failed to connect to MongoDB!');
    console.error(ex);
  }
}

runDBConnection();

module.exports = client;
