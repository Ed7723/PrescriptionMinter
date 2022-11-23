require('dotenv').config({path: '../config.env'}); // module to prevent exposure of MongoDB credentials
const {MongoClient} = require('mongodb'); // MongoDB module

// Function to connect to the MongoDB cluster
async function mongo_connect() {

    const uri = `mongodb+srv://${process.env.MongoDB_Username}:${process.env.MongoDB_Password}@prescriptoken-cluster.dwtcg4i.mongodb.net/?retryWrites=true&w=majority`; // link to MongoDB cluster
    
    const client = new MongoClient(uri); // creates connection to MongoDB cluster

    try {
        await client.connect();

        // Add a patient
/*         await createPatient(client, 
            {
                firstname: "",
                surname: "",
                dob: "",
                sex: ""
            }
        ) */

        // Find a patient
        //await retrievePatient(client, "Bro")

        // Update a patient
        //await updatePatient(client, "Bro", {firstname: "Dude", surname: "Dank"});

        // Upsert a patient
        //await upsertPatient(client, "Bro", {firstname: "Bro", surname: "Thers", dob: "2001-11-11", sex: "F"});

        // Delete a patient
        await deletePatient(client, "Bro");
    }
    catch (e) {
        console.error(e);
    } 
    finally {
        await client.close();
    }
}


// Creates a patient entry
async function createPatient(client, Patient){

    const result = await client.db("Medical_Records").collection("Patient_Info").insertOne(Patient);
        //patient object
/*         {
            firstname: "",// first name field
            surname: "",// surname field
            dob: "",// date of birth field
            sex: "",// sex field
            _id: 000// account seed field
        } */

    console.log(`New patient created with the following id: ${result.insertedId}`);
}

// Finds a patient
async function retrievePatient(client, ID){

    const result = await client.db("Medical_Records").collection("Patient_Info").findOne({firstname: ID}); // change firstname from {firstname: ID} to anything else to query based off other variables

    if (result) {
        console.log(`Found patient: ${ID}`);
        console.log(result);
    }
    else {
        console.log(`No patients found with ID: ${ID}`);
    }

}

// Updates a patient's information
// Finds a patient based off one variable -> modify any number of variables in the entry
async function updatePatient(client, info, newinfo){

    const result = await client.db("Medical_Records").collection("Patient_Info").updateOne({firstname: info}, {$set: newinfo});

    console.log(`${result.matchedCount} patient(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} patient(s) was/were updated.`)
}

// Upserts a patient's information
// Combines create, read, and update functionality
async function upsertPatient(client, info, newinfo){

    const result = await client.db("Medical_Records").collection("Patient_Info").updateOne({firstname: info}, {$set: newinfo}, {upsert: true}); // change firstname from {firstname: info} to anything else to query based off other variables

    console.log(`${result.matchedCount} patient(s) matched the query criteria.`);
    
    if (result.upsertedCount > 0){
        console.log(`One document was inserted with ID: ${result.upsertedId}`);
    }
    else{
        console.log(`${result.modifiedCount} patient(s) was/were updated.`)
    }
}

// Deletes a patient
async function deletePatient(client, ID){

    const result = await client.db("Medical_Records").collection("Patient_Info").deleteOne({firstname: ID}); // change firstname from {firstname: info} to anything else to query based off other variables

    console.log(`${result.deletedCount} patient(s) was/were deleted.`)

}

mongo_connect().catch(console.error);