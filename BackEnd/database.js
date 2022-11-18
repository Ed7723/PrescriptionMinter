require('dotenv').config({path: 'config.env'});
const {MongoClient} = require('mongodb');


async function main() {

    const uri = `mongodb+srv://${process.env.MongoDB_Username}:${process.env.MongoDB_Password}@patient-prescription-da.mlaoml8.mongodb.net/?retryWrites=true&w=majority`; // link to MongoDB cluster

    const client = new MongoClient(uri); // creates connection to MongoDB cluster

    try {
        await client.connect();
        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

async function createPatient(client, newPatient){

    const result = await client.db("prescriptoken_db").collection("patients").insertOne(newPatient);

    console.log(`New listing created with the following id: ${result.insertedId}`); // returns patient's account seed
}
main().catch(console.error);