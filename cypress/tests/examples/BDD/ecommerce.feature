Feature: End to end Ecommerce validation

	application Regression

	# Scenario: Ecommerce products delivery
	# Given I open the Ecommerce page
	# When I add items to Cart
	# And Validate the total prices
	# Then select the country submit and verify Thankyou

	Scenario: Filling the for to shop
	Given I open the Ecommerce page
	When I fill the form details
		|name | gender |
		| Bob | Male |
	And validate the froms behaviour
		| name |
		| Bob |
	Then select the shop page