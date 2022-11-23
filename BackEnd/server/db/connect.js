const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://testuser:testpass@cluster0.pc1k1nf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function(err,db) {
            if (db)
            {
                _db = db.db("test");
                console.log("Successfully connected to MongoDB."); 
            }
            return callback(err)
          });
        },
    getDb: function () {
      return _db;
    },
  };


