const { $  } = require('@cucumber-e2e/po2');

class ArticlePage {
    ArticleHeader = $('.firstHeading');
    ArticleBody = $('div#mw-content-text');
}

module.exports = new ArticlePage();
