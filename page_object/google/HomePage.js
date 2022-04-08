const { $, $$ } = require('@cucumber-e2e/po2');
const GoogleResults = require('./ResultsPage');

class GooglePage {
    GoogleInput = $('input.gLFyf.gsfi');
    GoogleSearch = $('.FPdoLc.lJ9FBc input[name="btnK"]');
    GoogleResults = $$(new GoogleResults());
}

module.exports = new GooglePage();
