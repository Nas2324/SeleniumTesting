$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/NewUserCreation");
formatter.feature({
  "name": "New User Creation",
  "description": "  As a user,\n  I want to register so I can buy",
  "keyword": "Feature"
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
  "name": "the user open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "userCreation.theUserOpenTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ne go to account creation Page",
  "keyword": "And "
});
formatter.match({
  "location": "userCreation.neGoToAccountCreationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Creation",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "he enters \"Atanas\"for firstname and \"Todorov\" for lastname and \"alreadyregistered@abv.bg\" and personal phonenumber \"0877456123\" and  password \"123456\" and for repeatpassword \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "userCreation.heEntersForFirstnameAndForLastnameAndAndPersonalPhonenumberAndPaswordAndForRepeatpassword(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure the new account is create successfully whit \"Your Account Has Been Created!\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "userCreation.ensureTheNewAccountIsCreateSuccessfullyWhitMessage(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [Your Account Has Been Created!] but found [Register Account]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat stepdefinitions.userCreation.ensureTheNewAccountIsCreateSuccessfullyWhitMessage(userCreation.java:75)\r\n\tat ✽.ensure the new account is create successfully whit \"Your Account Has Been Created!\" message(src/test/java/features/NewUserCreation:11)\r\n",
  "status": "failed"
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
  "name": "the user open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "userCreation.theUserOpenTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ne go to account creation Page",
  "keyword": "And "
});
formatter.match({
  "location": "userCreation.neGoToAccountCreationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Creation",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "he enters \"Atanas\"for firstname and \"Todorov\" for lastname and \"alreadyregistered@abv.bg\" and personal phonenumber \"0877456123\" and  password \"123456\" and for repeatpassword \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "userCreation.heEntersForFirstnameAndForLastnameAndAndPersonalPhonenumberAndPaswordAndForRepeatpassword(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure the new account is failure whit message \"Warning: E-Mail Address is already registered!\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "userCreation.ensureTheNewAccountIsFailureWhitMessageIsDisplayed(String)"
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
formatter.scenarioOutline({
  "name": "data driven negative",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "he enters \"\u003cname\u003e\"for firstname and \"\u003csurname\u003e\" for lastname and \"\u003cemail\u003e\" and personal phonenumber \"\u003cphone\u003e\" and  password \"\u003cpass\u003e\" and for repeatpassword \"\u003crepass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "ensure the new account is failure whit message \"\u003cexpected_message_failure\u003e\" is displayed",
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
        "surname",
        "email",
        "phone",
        "pass",
        "repass",
        "expected_message_failure"
      ]
    },
    {
      "cells": [
        "Atanas",
        "Todorov",
        "alreadyregistered@abv.bg",
        "0877456123",
        "123456",
        "123456",
        "Warning: E-Mail Address is already registered!"
      ]
    },
    {
      "cells": [
        "Atanas",
        "Todorov",
        "alreadyregistered@abv.bg",
        "0877456123",
        "123456",
        "123456",
        "Your Account Has Been Created!"
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
  "name": "the user open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "userCreation.theUserOpenTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ne go to account creation Page",
  "keyword": "And "
});
formatter.match({
  "location": "userCreation.neGoToAccountCreationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "data driven negative",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "he enters \"Atanas\"for firstname and \"Todorov\" for lastname and \"alreadyregistered@abv.bg\" and personal phonenumber \"0877456123\" and  password \"123456\" and for repeatpassword \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "userCreation.heEntersForFirstnameAndForLastnameAndAndPersonalPhonenumberAndPaswordAndForRepeatpassword(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure the new account is failure whit message \"Warning: E-Mail Address is already registered!\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "userCreation.ensureTheNewAccountIsFailureWhitMessageIsDisplayed(String)"
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
  "name": "the user open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "userCreation.theUserOpenTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ne go to account creation Page",
  "keyword": "And "
});
formatter.match({
  "location": "userCreation.neGoToAccountCreationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "data driven negative",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "he enters \"Atanas\"for firstname and \"Todorov\" for lastname and \"alreadyregistered@abv.bg\" and personal phonenumber \"0877456123\" and  password \"123456\" and for repeatpassword \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "userCreation.heEntersForFirstnameAndForLastnameAndAndPersonalPhonenumberAndPaswordAndForRepeatpassword(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ensure the new account is failure whit message \"Your Account Has Been Created!\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "userCreation.ensureTheNewAccountIsFailureWhitMessageIsDisplayed(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [Your Account Has Been Created!] but found [Warning: E-Mail Address is already registered!]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat stepdefinitions.userCreation.ensureTheNewAccountIsFailureWhitMessageIsDisplayed(userCreation.java:87)\r\n\tat ✽.ensure the new account is failure whit message \"Your Account Has Been Created!\" is displayed(src/test/java/features/NewUserCreation:21)\r\n",
  "status": "failed"
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