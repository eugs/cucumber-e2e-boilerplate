Feature: Wikipedia
@test
	Scenario: search in wikipedia
		When open '$WIKI_HOME' url
		 And type 'Alps' to 'Search Input'
		 And I click 'Search Button'
		Then text of 'Article Header' should be equal to 'Alps'
		 And text of 'Article Body' should contain 'Alps'