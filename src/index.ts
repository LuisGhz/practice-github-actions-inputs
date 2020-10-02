import * as core from '@actions/core';
const YAML = require('yaml');

function run() {
  const name: string = core.getInput('my_input');
  const objectStr: any = core.getInput('my_object');
  const boolean: boolean = core.getInput('my_boolean') == "true";

  if(objectStr) {
    const object = YAML.parse(objectStr)
    console.log(JSON.stringify(object, null, 4))
  }

  console.log(typeof boolean);

  if (name) {
    console.log(name);
    core.info(`Hello ${name}!`);
    return core.setOutput('my_output', `Hello ${name}!`);
  } else {
    core.setFailed('my_input not specified!');
  }
}

run();
