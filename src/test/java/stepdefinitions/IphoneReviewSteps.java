package stepdefinitions;

import adminarea.AdminLogin;
import adminarea.PageReviews;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import tools.Browser;
import userarea.IphonePage;
import utils.HomePageHeaderNavigation;

public class IphoneReviewSteps {

    @Before
    public void setUp() {
        Browser.setup();
    }

    @After
    public void tearDown() {
        Browser.quit();
    }

    @Given("user start the browser")
    public void userStartTheBrowser() {

    }

    @When("user navigate to header and select iphone&pda and choose iphone review")
    public void userNavigateToHeaderAndSelectIphonePdaAndChooseIphoneReview() {
        HomePageHeaderNavigation homePageHeaderNavigation = new HomePageHeaderNavigation();
        homePageHeaderNavigation.goToHomePage();
        homePageHeaderNavigation.pickPhonesAndPDAs();
    }



    @And("user enter {string} for name and reviewText {string}")
    public void userEnterForNameAndReviewText(String name, String reviewText) {

        IphonePage.iPhoneAndReview();
        IphonePage.reviewCreation("Atanas", "One of the best models,Perfect machine:)");

    }

    @Then("user verify successful review creation with expected message {string}")
    public void userVerifySuccessfulReviewCreationWithExpectedMessage(String message) {

        IphonePage.verifySuccessfulCreateReview("Thank you for your review");
    }

    @Given("admin log and navigate to review section")
    public void adminLogAndNavigateToReviewSection() {

        AdminLogin.login("admin", "parola123!");
        PageReviews.chooseReviewSection();
    }

    @When("admin check that review with name {string} and reviewText {string}")
    public void adminCheckThatReviewWithNameAndReviewText(String name, String reviewText) {

        PageReviews.checkReviewExist("Atanas", "One of the best models,Perfect machine:)");
    }



    @Then("admin change the status of review to Enable")
    public void adminChangeTheStatusOfReviewToEnable() {

        PageReviews.enableReview();
    }
}
