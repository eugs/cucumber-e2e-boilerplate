const jsonFormatter = '--format json:report/report.json';
const stepDefinitions = '--require step_definition/*.js';
const allFeatures = 'feature/**/*.feature';
const publishQuiet = '--publish-quiet';
const testTags = '--tags @test';

module.exports = {
    default: `${stepDefinitions} ${allFeatures} ${publishQuiet} ${jsonFormatter} ${testTags}`
}
