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
  "keyword": "And "
});
formatter.step({
  "name": "user check if the review is available",
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
  "keyword": "And "
});
formatter.match({
  "location": "IphoneReviewSteps.adminChangeTheStatusOfReviewToEnable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check if the review is available",
  "keyword": "Then "
});
formatter.match({
  "location": "IphoneReviewSteps.userCheckIfTheReviewIsAvailable()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"review\"]/table/tbody/tr[2]/td/p\"}\n  (Session info: chrome\u003d121.0.6167.140)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [250ae2b3d00a98a4a8349d21582d7621, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"review\"]/table/tbody/tr[2]/td/p}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 121.0.6167.140, chrome: {chromedriverVersion: 121.0.6167.85 (3f98d690ad7e..., userDataDir: C:\\Users\\User\\AppData\\Local...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57598}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57598/devtoo..., se:cdpVersion: 121.0.6167.140, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 250ae2b3d00a98a4a8349d21582d7621\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat stepdefinitions.IphoneReviewSteps.userCheckIfTheReviewIsAvailable(IphoneReviewSteps.java:82)\r\n\tat ✽.user check if the review is available(src/test/java/features/IphoneReview:15)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});