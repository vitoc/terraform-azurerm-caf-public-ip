const fs = require('fs');
const assert = require('assert').strict;

if (process.env.JSON_PLAN_PATH.length === 0) {
    assert.Fail(t, "JSON_PLAN_PATH env variable is empty")
}

let tfPlan = JSON.parse(fs.readFileSync(process.env.JSON_PLAN_PATH));

assert.equal(tfPlan.resource_changes.length, 10, "Expected resources count are the same");

assert.equal(tfPlan.resource_changes[0].change.actions.length, 1, "Only one action by TF for first change to create resource group");