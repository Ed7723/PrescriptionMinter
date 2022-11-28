require('dotenv').config({path: '../config.env'}); // module to prevent exposure of MongoDB credentials
const { MongoClient} = require('mongodb'); // MongoDB module
const uri = `mongodb+srv://${process.env.MongoDB_Username}:${process.env.MongoDB_Password}@prescriptoken-cluster.dwtcg4i.mongodb.net/?retryWrites=true&w=majority`; // link to MongoDB cluster
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true}); // creates connection to MongoDB cluster
var _db;

// Function to connect to the MongoDB cluster
module.export={
    mongoConnect: async function mongoConnect(){
        try {
            // Connect the client to the server (optional starting in v4.7)
            await client.connect();
            // Establish and verify connection
            await client.db("Medical_Records").command({ ping: 1 });
            console.log("Connected successfully to server");
          } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
          }
    },

    // Creates a patient entry from data passsed into its parameter.
    createPatient: async function createPatient(Patient){

        const result = await _db.db("Medical_Records").collection("Patient_Info").insertOne(Patient);
        console.log(`New patient created with the following id: ${result.insertedId}`);
    },

    // Finds a patient
    retrievePatient: async function retrievePatient(ID){

        const result = await _db.db("Medical_Records").collection("Patient_Info").findOne({firstname: ID}); // change firstname from {firstname: ID} to anything else to query based off other variables

        if (result) {
            console.log(`Found patient: ${ID}`);
            console.log(result);
        }
        else {
            console.log(`No patients found with ID: ${ID}`);
        }

    },

    // Updates a patient's information
    // Finds a patient based off one variable -> modify any number of variables in the entry
    updatePatient: async function updatePatient( info, newinfo){

        const result = await _db.db("Medical_Records").collection("Patient_Info").updateOne({firstname: info}, {$set: newinfo});

        console.log(`${result.matchedCount} patient(s) matched the query criteria.`);
        console.log(`${result.modifiedCount} patient(s) was/were updated.`)
    },

    // Upserts a patient's information
    // Combines create, read, and update functionality
    upsertPatient: async function upsertPatient(info, newinfo){

        const result = await _db.db("Medical_Records").collection("Patient_Info").updateOne({firstname: info}, {$set: newinfo}, {upsert: true}); // change firstname from {firstname: info} to anything else to query based off other variables

        console.log(`${result.matchedCount} patient(s) matched the query criteria.`);
        
        if (result.upsertedCount > 0){
            console.log(`One document was inserted with ID: ${result.upsertedId}`);
        }
        else{
            console.log(`${result.modifiedCount} patient(s) was/were updated.`)
        }
    },

    // Deletes a patient
    deletePatient: async function deletePatient(ID){

        const result = await _db.db("Medical_Records").collection("Patient_Info").deleteOne({patientIDSeed: ID}); // change firstname from {firstname: info} to anything else to query based off other variables

        console.log(`${result.deletedCount} patient(s) was/were deleted.`)

    },
};