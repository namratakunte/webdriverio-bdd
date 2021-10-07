@ALLScenarios
Feature: Register and product checkout
  @Register
  Scenario Outline: As a new user, I can able to register and login to website

    Given I am on the login page
    When I register with <email>
    Then I enter personal information title "<title>" firstname "<Firstname>" lastName "<Lastname>" email "<email>" password "<password>"
    When i enter personal information DOB "<days>" months "<months>" years "<years>"
    Then I enter address detail "<Firstname>" lastname "<Lastname>" company "<company>" address "<address>" city "<city>"
    When I select state "<state>" postalcode "<postalcode>" mobilenumber "<mobilenumber>" myaddress "<myaddress>"
    Then I click on register button
    Then I validate correct "<Firstname>" lastname "<Lastname>" is displayed
    Then I sign out from application

    Examples:
      | email                     | title | Firstname | Lastname | password  | days | months | years | company | address | city | state | postalcode | mobilenumber | myaddress |
      | testing777700@testtest.com | MR    | abc       | xyz      | 123456789 | 7    | 5      | 1991  | IT      | MIDC    | pune | 8     | 11104      | 8888888888   | Allise    |

  @Loginlogout
  Scenario Outline: As a registered user, I can able to login to website and logout

    Given I am on the login page
    Then I click on sign in link
    When I Login with "<email>" and "<password>"
    Then I validate correct "<Firstname>" lastname "<Lastname>" is displayed
    Then I sign out from application
    Examples:
      | email                     | password  | Firstname | Lastname |
      | testing777700@testtest.com | 123456789 | abc       | xyz      |

  @Checkout
  Scenario Outline: As a registered user, I can able to add products to cart and CheckOut

    Given I am on the login page
    Then I click on sign in link
    When I Login with "<email>" and "<password>"
    Then I validate correct "<Firstname>" lastname "<Lastname>" is displayed
    Then I add product to cart
    Then I checkout till payment
    Then I validate product details "<ProductName>"
    Then I sign out from application
    Examples:
      | email                     | password  | Firstname | Lastname | ProductName                 |
      | testing777700@testtest.com | 123456789 | abc       | xyz      | Faded Short Sleeve T-shirts |
