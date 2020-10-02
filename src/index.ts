import * as core from '@actions/core';
const YAML = require('yaml');

function run() {
  const name: string = core.getInput('my_input');
  const objectStr: any = core.getInput('my_object');

  if (name) {
    console.log(name);
    core.info(`Hello ${name}!`);
    return core.setOutput('my_output', `Hello ${name}!`);
  } else {
    core.setFailed('my_input not specified!');
  }

  if(objectStr) {
    const object = YAML.parse(objectStr)
    console.log(object)
  }
}

run();
