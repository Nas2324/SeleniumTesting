$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/IphoneReview");
formatter.feature({
  "name": "As a satisfied user,",
  "description": "  I want to write a review for a product.\n  The administrator will then approve it.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to header and select iphone\u0026pda and choose iphone review",
  "keyword": "When "
});
formatter.step({
  "name": "user enter \u003cname\u003e for name and reviewText \u003creviewText\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user verify successful review creation with expected message \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "admin log and navigate to review section",
  "keyword": "Given "
});
formatter.step({
  "name": "admin check that review with name \u003cname\u003e and reviewText \u003creviewText\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "admin change the status of review to Enable",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "reviewText",
        "message"
      ]
    },
    {
      "cells": [
        "\"Atanas\"",
        "\"One of the best models,Perfect machine:)\"",
        "\"Thank you for your review\""
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user start the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "IphoneReviewSteps.userStartTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to header and select iphone\u0026pda and choose iphone review",
  "keyword": "When "
});
formatter.match({
  "location": "IphoneReviewSteps.userNavigateToHeaderAndSelectIphonePdaAndChooseIphoneReview()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Atanas\" for name and reviewText \"One of the best models,Perfect machine:)\"",
  "keyword": "And "
});
formatter.match({
  "location": "IphoneReviewSteps.userEnterForNameAndReviewText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify successful review creation with expected message \"Thank you for your review\"",
  "keyword": "Then "
});
formatter.match({
  "location": "IphoneReviewSteps.userVerifySuccessfulReviewCreationWithExpectedMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin log and navigate to review section",
  "keyword": "Given "
});
formatter.match({
  "location": "IphoneReviewSteps.adminLogAndNavigateToReviewSection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin check that review with name \"Atanas\" and reviewText \"One of the best models,Perfect machine:)\"",
  "keyword": "When "
});
formatter.match({
  "location": "IphoneReviewSteps.adminCheckThatReviewWithNameAndReviewText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin change the status of review to Enable",
  "keyword": "Then "
});
formatter.match({
  "location": "IphoneReviewSteps.adminChangeTheStatusOfReviewToEnable()"
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
formatter.after({
  "status": "passed"
});
});