// test.js
const core = require('@actions/core');

async function testRun() {
  core.info('Hello from ncc test!');
  core.setOutput('test-output', 'success');
}

testRun();
