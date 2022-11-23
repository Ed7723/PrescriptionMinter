const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/connect");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
// This section will help you create a new record.
recordRoutes.route("/routing/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
  firstName:req.body.firstName,
  lastName:req.body.lastName,
  dateOfBirth:req.body.dateOfBirth,
  patientIDResult:req.body.patientIDResult,
  patientIDSeed:req.body.patientIDSeed,
 };
 db_connect.collection("patients").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 

module.exports = recordRoutes;