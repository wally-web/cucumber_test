Feature: HubSpot login Feature

#Scenario: HubSpot login test Scenario

#this is a practice without Examples keyword
#Given user is already on login page
#When title of login page is HubSpot Login
#Then user enters "wailhachlaf@hotmail.com" and "KH6002kh" 
#Then user click on login button
#Then user on home page


#this is a practice with Examples keyword
Scenario Outline: HubSpot login test Scenario

Given user is already on login page
When title of login page is HubSpot Login
Then user enters "<username>" and "<password>" 
Then user click on login button
Then user on home page
Then user ckick on contacts
Then user click on contacts on dropdown
Then user click on create contact
Then user enter "<email>" and "<firstname>" and "<lastname>"
Then user click on create contact to save


Examples:

	|  username					|	password	| email          | firstname  |  lastname  |
	| wailhachlaf@hotmail.com   |   KH6002kh	|test@gmail.com  | tommy      |  ronny     |
	