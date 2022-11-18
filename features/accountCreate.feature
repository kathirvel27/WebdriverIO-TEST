Feature: Create account in E-commerce site

 Scenario Outline: TC-001 Create New user

 	Given I am on the home page
 	When I click on create an account
    Then I provide information "<FirstName>" "<LastName>" "<Email>" "<Password>" and "<PasswordConfirmation>"
 	Then Verify User in home page

    Examples:
     |FirstName|LastName|Email               |Password|PasswordConfirmation|
     |dummy    |id      |dummyid301@gmail.com|Pass@000|Pass@000            |

   