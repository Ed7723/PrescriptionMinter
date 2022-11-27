const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/database");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
// This section will help you create a new patient
recordRoutes.route("/routing/add").post(function (req, response) {
 let myobj = {
  firstName:req.body.firstName,
  lastName:req.body.lastName,
  dateOfBirth:req.body.dateOfBirth,
  sex:req.body.sex,
  patientIDSeed:req.body.patientIDSeed,
 };
 dbo.createPatient(ObjectId,myobj);
});
// This section will help delete a patient.
recordRoutes.route("/:id").post(function (req, response) {
  let myobj = {
   patientIDSeed:req.body.patientIDSeed,
  };
  dbo.deletePatient(patientIDSeed);
 });

module.exports = recordRoutes;