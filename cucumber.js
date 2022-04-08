const stepDefinitions = '--require step_definition/*.js';
const jsonFormatter = '--format json:report/report.json';
const allFeatures = 'feature/**/*.feature';

module.exports = {
    default: `${stepDefinitions} ${jsonFormatter} ${allFeatures}`
}
