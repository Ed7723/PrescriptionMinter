const xrpl = require("xrpl")

module.exports={ 
  getAccount: async function getAccount(){

    // creates patient wallet on the XRPL
      let net = "wss://xls20-sandbox.rippletest.net:51233"; //XLS20-NFT

      const xrpl_client = new xrpl.Client(net);
      let faucetHost = "faucet-nft.ripple.com";

      await xrpl_client.connect();
      
      const my_wallet = (await xrpl_client.fundWallet(null, { faucetHost })).wallet;
      //const my_balance = (await xrpl_client.getXrpBalance(my_wallet.address));
      
      const patientIDSeed = my_wallet.seed;
      //console.log(patientIDSeed);

      xrpl_client.disconnect();

      console.log(patientIDSeed);
      return patientIDSeed;
  },

  // irrelevant function, do not use
  getAccountsFromSeeds: async function getAccountsFromSeeds(){
      let net = "wss://xls20-sandbox.rippletest.net:51233" //XLS20-NFT

      const client = new xrpl.Client(net)
      await client.connect()

      const patient_id = xrpl.Wallet.fromSeed(seeds.value)

      document.getElementById('patIDField').value = patient_id.address
      document.getElementById('patIDPubKeyField').value = patient_id.publicKey
      document.getElementById('patIDPrivKeyField').value = patient_id.privateKey
      document.getElementById('patIDSeedField').value = patient_id.seed

      
      client.disconnect()
  },

  mintToken: async function mintToken(prescriptionID) {                               // connect input with findPrescription on database.js
    let net = "wss://xls20-sandbox.rippletest.net:51233" //XLS20-NFT
    
    const patient_id = xrpl.Wallet.fromSeed(patIDSeedField.value)                     // replace patIDSeedField.value with input value for patient ID on the prescription page
    const client = new xrpl.Client(net)
    await client.connect()
        
    // Note that you must convert the token URL to a hexadecimal 
    // value for this transaction.
    // ------------------------------------------------------------------------
    const transactionBlob = {
      "TransactionType": "NFTokenMint",
      "Account": patient_id.classicAddress,
      "URI": "mongodb://" + prescriptionID,  // prescriptionID should be a string
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

    // ------------------------------------------------------- Report results <--- not needed, I think(?)
    //results += '\n\nTransaction result: '+ tx.result.meta.TransactionResult
    //results += '\n\nnfts: ' + JSON.stringify(nfts, null, 2)
    //document.getElementById('PatientResultField').value = results    

    // sends NFTokenID of transaction to MongoDB prescription entry
    // nfts.NFTokenID  // use this call to return NFTokenID from mint transaction
    
    client.disconnect()
  }, 

  burnToken: async function burnToken(prescriptionID) {                             // connect input with findNFT on database.js

    const patient_id = xrpl.Wallet.fromSeed(patIDSeedField.value)                   // replace patIDSeedField.value with input value for patient ID on the prescription page
    let net = "wss://xls20-sandbox.rippletest.net:51233" //XLS20-NFT
    const client = new xrpl.Client(net)
    await client.connect()

    const transactionBlob = {
      "TransactionType": "NFTokenBurn",
      "Account": patient_id.classicAddress,
      "TokenID": prescriptionID, // prescription ID should be a string
    }

  },
 };