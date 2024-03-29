$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/GiftVoucher");
formatter.feature({
  "name": "The customer has confused his gift voucher  and wants",
  "description": "  to be replaced by a new one,\n  providing us with information about the existing and the new voucher",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Removing and Creating Voucher",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "he fulfill username \u003cusername\u003e and fulfill password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "he check if he is on administrator Page with text \u003ctext\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "he assert if the voucher exist with existing code \u003ccode\u003e and message if failure \u003cfailure\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "he delete the Voucher  FromName \u003cFromName\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "he create a new voucher with  Code \u003cCode\u003e and FromName \u003cFromName\u003e and FromEmail\u003cFromEmail\u003e for ToName \u003cToName\u003e and ToEmail \u003cToEmail\u003e and Amount \u003cAmount\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "he verify the New Voucher is created with Successfully \u003cSuccess\u003e and notCreated \u003cnotCreated\u003e message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "text",
        "code",
        "failure",
        "FromName",
        "Code",
        "FromEmail",
        "ToName",
        "ToEmail",
        "Amount",
        "Successfully",
        "notCreated"
      ]
    },
    {
      "cells": [
        "\"admin\"",
        "\"parola123!\"",
        "\"Dashboard\"",
        "\"2356\"",
        "\"The voucher does not exist\"",
        "\"Atanas Yordanov\"",
        "\"ForRy\"",
        "\"alreadyregistered@abv.bg\"",
        "\"Radost Yordanova\"",
        "\"radiyo@abv.bg\"",
        "\"300\"",
        "\"Success: You have modified vouchers!\"",
        "\"Voucher not created\""
      ]
    }
  ]
});
formatter.background({
  "name": "Administrator page",
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
  "name": "admin open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "GiftVoucherSteps.adminStartTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Removing and Creating Voucher",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "he fulfill username \"admin\" and fulfill password \"parola123!\"",
  "keyword": "When "
});
formatter.match({
  "location": "GiftVoucherSteps.heFulfillUsernameAndFulfillPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he check if he is on administrator Page with text \"Dashboard\"",
  "keyword": "And "
});
formatter.match({
  "location": "GiftVoucherSteps.heCheckIfHeIsOnAdministratorPageWithText(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he assert if the voucher exist with existing code \"2356\" and message if failure \"The voucher does not exist\"",
  "keyword": "And "
});
formatter.match({
  "location": "GiftVoucherSteps.heAssertIfTheVoucherExistWithExistingCodeAndMessageIfFailure(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: The voucher does not exist expected [2356] but found [njgfhfh]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat stepdefinitions.GiftVoucherSteps.heAssertIfTheVoucherExistWithExistingCodeAndMessageIfFailure(GiftVoucherSteps.java:88)\r\n\tat ✽.he assert if the voucher exist with existing code \"2356\" and message if failure \"The voucher does not exist\"(src/test/java/features/GiftVoucher:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "he delete the Voucher  FromName \"Atanas Yordanov\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GiftVoucherSteps.heDeleteTheVoucherFromName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "he create a new voucher with  Code \"ForRy\" and FromName \"Atanas Yordanov\" and FromEmail\"alreadyregistered@abv.bg\" for ToName \"Radost Yordanova\" and ToEmail \"radiyo@abv.bg\" and Amount \"300\"",
  "keyword": "And "
});
formatter.match({
  "location": "GiftVoucherSteps.heCreateANewVoucherWithCodeAndFromNameAndFromEmailForToNameAndToEmailAndAmount(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "he verify the New Voucher is created with Successfully \u003cSuccess\u003e and notCreated \"Voucher not created\" message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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