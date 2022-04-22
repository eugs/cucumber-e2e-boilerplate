const { $  } = require('@cucumber-e2e/po2');

class WikiHome {
    SearchInput = $('input#searchInput');
    SearchButton = $('button.pure-button');
}

module.exports = new WikiHome();
