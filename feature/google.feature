Feature: Google

  Scenario: search in google
    When open '$GOOGLE_HOME' url
     And type '@cucumber-e2e/po2 npm' to 'Google Input'
     And click 'Google Search'
     And click '#cucumber-e2e in Google Results > Header'
    Then url should be 'https://www.npmjs.com/package/@cucumber-e2e/po'
		