async function getAccount(type){
  require('dotenv').config({path: 'config.env'});
  const {MongoClient} = require('mongodb');

  // creates patient wallet on the XRPL
    let net = "wss://xls20-sandbox.rippletest.net:51233"; //XLS20-NFT

    const xrpl_client = new xrpl.Client(net);
    log = 'Connecting to ' + net + '...';

    let faucetHost = "faucet-nft.ripple.com";

    document.getElementById('PatientResultField').value = log;
    await xrpl_client.connect();

    log += '\nConnected, creating patient profile.';
    document.getElementById('PatientResultField').value = log;
    
    const my_wallet = (await xrpl_client.fundWallet(null, { faucetHost })).wallet;
    //const my_balance = (await xrpl_client.getXrpBalance(my_wallet.address));
    document.getElementById('patIDSeedField').value = my_wallet.seed;
    log += '\nPatient ID created.';
    document.getElementById('PatientResultField').value = log;
    xrpl_client.disconnect();

    // creates patient entry in the MongoDB cluster
    const uri = `mongodb+srv://${process.env.MongoDB_Username}:${process.env.MongoDB_Password}@prescriptoken-cluster.dwtcg4i.mongodb.net/?retryWrites=true&w=majority`; // link to MongoDB cluster
    const mongo_client = new MongoClient(uri); // creates connection to MongoDB cluster

    await mongo_client.connect();
    createPatient();
    
    await mongo_client.close();
}  

async function getAccountsFromSeeds(){
    let net = "wss://xls20-sandbox.rippletest.net:51233" //XLS20-NFT

    const client = new xrpl.Client(net)
    results = 'Connecting to ' + net + '...'
    document.getElementById('PatientResultField').value = results
    await client.connect()
    results += '\nConnected, generating patient profile.\n'
    document.getElementById('PatientResultField').value = results

    const patient_id = xrpl.Wallet.fromSeed(seeds.value)

    document.getElementById('patIDField').value = patient_id.address
    document.getElementById('patIDPubKeyField').value = patient_id.publicKey
    document.getElementById('patIDPrivKeyField').value = patient_id.privateKey
    document.getElementById('patIDSeedField').value = patient_id.seed

    results += '\nPatient profile retrieved.\n'
    document.getElementById('PatientResultField').value = results
    
    client.disconnect()
}

async function mintToken() {
  let net = "wss://xls20-sandbox.rippletest.net:51233" //XLS20-NFT
  results = 'Connecting to ' + net + '....'
  document.getElementById('PatientResultField').value = results
  const patient_id = xrpl.Wallet.fromSeed(patIDSeedField.value)
  const client = new xrpl.Client(net)
  await client.connect()
  results += '\nConnected. Minting NFToken.'
  document.getElementById('PatientResultField').value = results
      
  // Note that you must convert the token URL to a hexadecimal 
  // value for this transaction.
  // ------------------------------------------------------------------------
  const transactionBlob = {
    "TransactionType": "NFTokenMint",
    "Account": patient_id.classicAddress,
    "URI": xrpl.convertStringToHex(prescriptionURL.value),
    "Flags": 1,
    "TransferFee": 0,
    "NFTokenTaxon": 0 //Required, but if you have no use for it, set to zero.
  }

  // ----------------------------------------------------- Submit signed blob 
  const tx = await client.submitAndWait(transactionBlob, { wallet: patient_id} )
  const nfts = await client.request({
    method: "account_nfts",
    account: patient_id.classicAddress
  })

  // ------------------------------------------------------- Report results
  results += '\n\nTransaction result: '+ tx.result.meta.TransactionResult
  results += '\n\nnfts: ' + JSON.stringify(nfts, null, 2)
  document.getElementById('PatientResultField').value = results    
  client.disconnect()
} 