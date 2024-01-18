Feature: Add books to cart

  Background: 
    Given User navigates to the book cart application

  @passScenario
  Scenario Outline: Authenticated Users - Add to cart
    And User logs in successfully with "<username>" and "<password>"
    When user search for a "<book>"
    And user add the "<book>" to the cart

    Examples:
      | username | password  | book            |
      | test-user1   | Test@123 | Roomies         |
      | test-user2 | Test@123  | The Simple Wild |

@failScenario
Scenario: Unauthenticed Users
  And User logs in successfully with "hello" and "hello"