require('dotenv').config({path: '../config.env'}); // module to prevent exposure of MongoDB credentials
const { MongoClient} = require('mongodb'); // MongoDB module
const uri = `mongodb+srv://${process.env.MongoDB_Username}:${process.env.MongoDB_Password}@prescriptoken-cluster.dwtcg4i.mongodb.net/?retryWrites=true&w=majority`; // link to MongoDB cluster
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true}); // creates connection to MongoDB cluster

const account = require("../account");
// Function to connect to the MongoDB cluster
module.exports = {
    mongoConnect: async function mongoConnect(){
        try {
            // Connect the client to the server (optional starting in v4.7)
            await client.connect();
            // Establish and verify connection
            await client.db("Medical_Records").command({ ping: 1 });
            console.log("Connected successfully to server");
        } 
        catch (e){
            console.error(e);
        }
    },

    // Creates a patient entry from data passsed into its parameter.
    createPatient: async function createPatient(Patient){
        const thisPatient = {
            firstName: Patient.firstName,
            lastName: Patient.lastName,
            sex: Patient.sex,
            dateOfBirth: Patient.dateOfBirth,
            patientIDSeed: await account.getAccount(),
        }
        const result = await client.db("Medical_Records").collection("Patient_Info").insertOne(thisPatient);
        //account.getAccount(insertedId);
        console.log(`New patient created with the following id: ${result.insertedId}`);
    },

    // Finds a patient
    retrievePatient: async function retrievePatient(ID){

        const result = await client.db("Medical_Records").collection("Patient_Info").findOne({firstname: ID}); // change firstname from {firstname: ID} to anything else to query based off other variables

        if (result) {
            console.log(`Found patient: ${ID}`);
            console.log(result);
        }
        else {
            console.log(`No patients found with ID: ${ID}`);
        }

    },
    // Returns all patient and their information.
    retrieveAllPatients: async function retrieveAllPatients(){
        const result = await client.db("Medical_Records".collection("Patient_Info").find({}));
        return result;
    },

    // Updates a patient's information
    // Finds a patient based off one variable -> modify any number of variables in the entry
    updatePatient: async function updatePatient( info, newinfo){

        const result = await client.db("Medical_Records").collection("Patient_Info").updateOne({firstname: info}, {$set: newinfo});

        console.log(`${result.matchedCount} patient(s) matched the query criteria.`);
        console.log(`${result.modifiedCount} patient(s) was/were updated.`)
    },

    // Upserts a patient's information
    // Combines create, read, and update functionality
    upsertPatient: async function upsertPatient(info, newinfo){

        const result = await client.db("Medical_Records").collection("Patient_Info").updateOne({firstname: info}, {$set: newinfo}, {upsert: true}); // change firstname from {firstname: info} to anything else to query based off other variables

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

        const result = await client.db("Medical_Records").collection("Patient_Info").deleteOne({patientIDSeed: ID}); // change firstname from {firstname: info} to anything else to query based off other variables

        console.log(`${result.deletedCount} patient(s) was/were deleted.`)

    },

    // Updates a patient's information to add NFTokenID
    addNFTID: async function addNFTID(patientID, drug, NFTID){

        const result = await client.db("Medical_Records").collection("Prescription_Info").updateOne({patientIDSeed: patientID, drugName: drug}, {$addFields: {NFTokenID: NFTID}}, {upsert: true});
    
        console.log(`${result.matchedCount} patient(s) matched the query criteria.`);
        console.log(`${result.modifiedCount} patient(s) was/were updated.`)
    },

    // Creates a prescription entry from data passsed into its parameter.
    createPrescription: async function createPrescription(Prescription){
        const thisPrescript= {
            patientIDSeed: Prescription.patientIDSeed,
            drugName: Prescription.drugName,
            expiryDate: Prescription.expiryDate,
        }
        const result = await client.db("Medical_Records").collection("Prescription_Info").insertOne(thisPrescript);
        console.log(`New prescription created with the following id: ${result.insertedId}`);
        const NFTID = await account.mintToken(Prescription.patientIDSeed, result.insertedId);
        const fullresult = await client.db("Medical_Records").collection("Prescription_Info").updateOne({patientIDSeed: Prescription.patientIDSeed, drugName: Prescription.drugName}, 
                                                                                                         {$set: {NFTokenID: NFTID}}, 
                                                                                                         {upsert: true});
        console.log(`Prescriptoken complete.`);
    },

    // Upserts a prescription's information
    // Combines create, read, and update functionality
    upsertPrescription: async function upsertPrescription(info, newinfo){

        const result = await client.db("Medical_Records").collection("Prescription_Info").updateOne({drug: info}, {$set: newinfo}, {upsert: true}); // change drug from {drug: info} to anything else to query based off other variables

        console.log(`${result.matchedCount} prescription(s) matched the query criteria.`);
        
        if (result.upsertedCount > 0){
            console.log(`One document was inserted with ID: ${result.upsertedId}`);
        }
        else{
            console.log(`${result.modifiedCount} prescription(s) was/were updated.`)
        }
    },

    // Deletes a prescription
    deletePrescription: async function deletePrescription(ID){

        const result = await client.db("Medical_Records").collection("Prescription_Info").deleteOne({nftID: ID});
    
        console.log(`${result.deletedCount} prescription(s) was/were deleted.`)
    
    },

    // Finds a prescription based off patient first and last name, drug name, and date of prescription and returns the prescription's ID
    findPrescription: async function findPrescription(fn, ln, dr, dop){

        const result = await client.db("Medical_Records").collection("Prescription_Info").findOne({firstname: fn, lastname: ln, drug: dr, dateOfPrescription: dop});
        result._id.toString();

    },

    // Returns the NFT ID of a prescription
    findNFT: async function findNFT(ID){

        const result = await client.db("Medical_Records").collection("Prescription_Info").findOne({_id: ID});            
        result.nftID.toString();
    
    }
};