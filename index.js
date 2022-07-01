const core = require('@actions/core');
const github = require('@actions/github');

// const { exec } = require('child_process');
//
// exec('ls -lh', (error, stdout, stderr) => {
//     if (error) {
//         console.error(`error: ${error.message}`);
//         return;
//     }
//
//     if (stderr) {
//         console.error(`stderr: ${stderr}`);
//         return;
//     }
//
//     console.log(`stdout:\n${stdout}`);
// });

// console.log(`::set-output name=version::${nextVersion}`);
const suffix = core.getInput('suffix');
console.log(`Suffix: ${suffix}`);
