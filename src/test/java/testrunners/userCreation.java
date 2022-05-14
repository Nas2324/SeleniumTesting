package testrunners;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;
import tools.Browser;

public class userCreation {

    @Before
    public void setUp() {
        Browser.setup();
    }

    @After
    public void tearDown() {
        Browser.quit();
    }

    @Given("the user open the browser")
    public void theUserOpenTheBrowser() {
        Browser.driver.get("http://shop.pragmatic.bg/");
    }

    @And("ne go to account creation Page")
    public void neGoToAccountCreationPage() {
        Actions actions = new Actions(Browser.driver);
        actions.moveToElement(Browser.driver.findElement(By.cssSelector("[title^='My Account']"))).click().build().perform();
        Browser.driver.findElement(By.linkText("Register")).click();
    }
    @When("he enters {string}for firstname and {string} for lastname and {string} and personal phonenumber {string} and  pasword {string} and for repeatpassword {string}")
    public void heEntersForFirstnameAndForLastnameAndAndPersonalPhonenumberAndPaswordAndForRepeatpassword(String firstname, String lastname, String email, String phone, String pasword, String repeatpassword) {

        Browser.driver.findElement(By.id("input-firstname")).sendKeys(firstname);
        Browser.driver.findElement(By.id("input-lastname")).sendKeys(lastname);
        Browser.driver.findElement(By.id("input-email")).sendKeys(email);
        Browser.driver.findElement(By.id("input-telephone")).sendKeys(phone);
        Browser.driver.findElement(By.id("input-password")).sendKeys(pasword);
        Browser.driver.findElement(By.id("input-confirm")).sendKeys(repeatpassword);
        Browser.driver.findElement(By.name("agree")).click();
        Browser.driver.findElement(By.xpath("//div/input[2]")).click();

    }
    @Then("ensure the new account is create successfully whit {string} message")
    public void ensureTheNewAccountIsCreateSuccessfullyWhitMessage(String expectedAccountCreatedText) {

        String actualAccountCreatedText = Browser.driver.findElement(By.xpath("//*[@id=\"content\"]/h1")).getText();

        Assert.assertEquals(actualAccountCreatedText, expectedAccountCreatedText);

        System.out.println(Browser.driver.findElement(By.xpath("//*[@id=\"content\"]/h1")).getText());
        Browser.driver.findElement(By.linkText("Continue")).click();
    }

    @Then("ensure the new account is failure whit message {string} is displayed")
    public void ensureTheNewAccountIsFailureWhitMessageIsDisplayed(String expectedFailureMessage) {
        Assert.assertEquals(Browser.driver.findElement(By.xpath("//*[@id=\"account-register\"]/div[1]")).getText(), expectedFailureMessage);
    }

}
