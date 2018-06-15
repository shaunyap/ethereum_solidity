// Compile once after doing in Remix - so it doesn't recompile everytime the app starts up
const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build'); // assign the root/build to the constant buildPath
fs.removeSync(buildPath); // fs-extra command to delete buildPath

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts; // compile the file!

fs.ensureDirSync(buildPath); //Check if build folder exists, if not, create it

// In this instance of the solidity code, there are two contracts, so we loop over it
for (let contract in output) {
  fs.outputJsonSync( // write out a Json file
    path.resolve(buildPath, contract.replace(':', '') + '.json'), // save said JSON file as a '[contract].json' in the buildpath
    output[contract] // the contents of the file is the entire contract
  );
}
