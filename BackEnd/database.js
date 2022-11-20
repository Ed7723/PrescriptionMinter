//require('dotenv').config({path: 'config.env'});
//const {MongoClient} = require('mongodb');

/* async function main() {

    const uri = `mongodb+srv://${process.env.MongoDB_Username}:${process.env.MongoDB_Password}@prescriptoken-cluster.dwtcg4i.mongodb.net/?retryWrites=true&w=majority`; // link to MongoDB cluster
    
    const client = new MongoClient(uri); // creates connection to MongoDB cluster

    try {
        await client.connect();
        createPatient();
        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

} */

async function createPatient(){

    const result = await client.db("Medical_Records").collection("Patient_Info").insertOne(
        //patient object
        {
            firstname: "",// first name field
            surname: "",// surname field
            dob: "",// date of birth field
            sex: "",// sex field
            _id: 000// account seed field
        }
    );

/*     const log = `\nNew patient created with the following id: ${result.insertedId}`; // returns patient's account seed
    document.getElementById('PatientResultField').value += log; */
}

//main().catch(console.error);