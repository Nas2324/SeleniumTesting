$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/WishList");
formatter.feature({
  "name": "As a user I want to log in to my account,",
  "description": "  select a product, add it to the wishlist,\n  then add it to the cart and then remove it\n  and log out of my account.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Positive",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user will enter his email \u003cemail\u003e and password \u003cpasword\u003e on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "he  go to Product page and add a product to Wishlist",
  "keyword": "And "
});
formatter.step({
  "name": "And he will check if the product is added to the Wishlist",
  "keyword": "And "
});
formatter.step({
  "name": "he add the product from WishLIst to Cart",
  "keyword": "When "
});
formatter.step({
  "name": "he remove the product from the Cart",
  "keyword": "And "
});
formatter.step({
  "name": "he logout with confirm message \u003cexpectedLogoutText\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "pasword",
        "expectedLogoutText"
      ]
    },
    {
      "cells": [
        "\"alreadyregistered@abv.bg\"",
        "\"123456\"",
        "\"You have been logged off your account. It is now safe to leave the computer.\""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "WishListSteps.userOpenTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he navigate to login page",
  "keyword": "And "
});
formatter.match({
  "location": "WishListSteps.heNavigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user will enter his email \"alreadyregistered@abv.bg\" and password \"123456\" on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "WishListSteps.userWillEnterHisEmailAndPasswordOnTheLoginPage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he  go to Product page and add a product to Wishlist",
  "keyword": "And "
});
formatter.match({
  "location": "WishListSteps.heGoToProductPageAndAddAProductToWishlist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "And he will check if the product is added to the Wishlist",
  "keyword": "And "
});
formatter.match({
  "location": "WishListSteps.andHeWillCheckIfTheProductIsAddedToTheWishlist()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he add the product from WishLIst to Cart",
  "keyword": "When "
});
formatter.match({
  "location": "WishListSteps.heAddTheProductFromWishLIstToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he remove the product from the Cart",
  "keyword": "And "
});
formatter.match({
  "location": "WishListSteps.heRemoveTheProductFromTheCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he logout with confirm message \"You have been logged off your account. It is now safe to leave the computer.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "WishListSteps.heLogoutWithConfirmMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});