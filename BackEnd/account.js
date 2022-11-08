async function getAccount(type){
    let net = "wss://xls20-sandbox.rippletest.net:51233" //XLS20-NFT

    const client = new xrpl.Client(net)
    results = 'Connecting to ' + net + '...'

    let faucetHost = "faucet-nft.ripple.com"

    document.getElementById('PatientResultField').value = results
    await client.connect()

    results += '\nConnected, creating patient profile.'
    document.getElementById('PatientResultField').value = results
    
    const my_wallet = (await client.fundWallet(null, { faucetHost })).wallet
    results += '\nProfile created.'
    document.getElementById('PatientResultField').value = results

    const my_balance = (await client.getXrpBalance(my_wallet.address))
    document.getElementById('patIDField').value = my_wallet.address
    document.getElementById('patIDPubKeyField').value = my_wallet.publicKey
    document.getElementById('patIDPrivKeyField').value = my_wallet.privateKey
    document.getElementById('patIDSeedField').value = my_wallet.seed
    results += '\nPatient ID created.'
    client.disconnect()
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