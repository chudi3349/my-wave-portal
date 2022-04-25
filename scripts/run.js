const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.1"),
  });
  await waveContract.deployed();
  console.log("Contract chudi", waveContract.address);

  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.address
  );
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );


  const waveTxn = await waveContract.wave("This is my first wave #1");
  await waveTxn.wait();

  const waveTxn2 = await waveContract.wave("This is my second wave #2");
  await waveTxn2.wait()


 // let waveTxn = await waveContract.wave("A message");
 // await waveTxn.wait();

  contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );


/**
 * 
 let waveCount;
 waveCount = await waveContract.getTotalWaves();
 console.log(waveCount.toNumber());
 
 
 const [_, randomPerson] = await hre.ethers.getSigners();
 waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
 await waveTxn.wait();
 */

  let allWaves = await waveContract.getAllWaves()
  console.log(allWaves);
 

  ///console.log("Contract deployed to:", waveContract.address);
  //console.log("Contract deployed by:", _.address);

  //const contractAddresses = [];
  //contractAddresses[0] = _.address;

  //console.log(contractAddresses);

};



const runMain = async () => {
  try{
    await main();
    process.exit(0);
  }catch(error){
    console.log(error);
    process,exit(1);
  }
};

runMain();