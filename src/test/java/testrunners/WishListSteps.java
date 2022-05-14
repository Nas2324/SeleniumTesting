package testrunners;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import tools.Browser;
import tools.WaitTool;

public class WishListSteps {

    @Before
    public void setUp(){
        Browser.setup();
    }

    @After
    public void tearDown(){
        Browser.quit();
    }

    @Given("user open the browser")
    public void userOpenTheBrowser() {

        Browser.driver.get("http://shop.pragmatic.bg/");
    }

    @And("he navigate to login page")
    public void heNavigateToLoginPage() {

        Actions actions = new Actions(Browser.driver);
        actions.moveToElement(Browser.driver.findElement(By.cssSelector("[title^='My Account']"))).click().build().perform();
        Browser.driver.findElement(By.linkText("Login")).click();
    }


    @Given("user will enter his email {string} and password {string} on the login page")
    public void userWillEnterHisEmailAndPasswordOnTheLoginPage(String email, String pasword) {

        Browser.driver.findElement(By.id("input-email")).sendKeys(email);
        Browser.driver.findElement(By.name("password")).sendKeys(pasword);
        Browser.driver.findElement(By.xpath("//div/div[2]/div/form/input")).click();
    }

    @And("he  go to Product page and add a product to Wishlist")
    public void heGoToProductPageAndAddAProductToWishlist() {

        Browser.driver.findElement(By.xpath("//*[@id=\"logo\"]/a/img")).click();
        Browser.driver.findElement(By.xpath("//div[2]/div[4]/div/div[3]/button[2]")).click();
        Browser.driver.findElement(By.id("wishlist-total")).click();
    }

    @And("And he will check if the product is added to the Wishlist")
    public void andHeWillCheckIfTheProductIsAddedToTheWishlist() {

        Browser.driver.findElement(By.xpath("//*[@id= 'content'] //*[contains(text(), 'Product 3')]")).getText();
        System.out.println(Browser.driver.findElement(By.xpath("//*[@id= 'content'] //*[contains(text(), 'Product 3')]")).getText());
    }

    @When("he add the product from WishLIst to Cart")
    public void heAddTheProductFromWishLIstToCart() {

        Browser.driver.findElement(By.cssSelector("td.text-right > [type=\"button\"]")).click();
        WaitTool.wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("input-quantity")));

        Browser.driver.findElement(By.linkText("Canon")).getText();
        System.out.println(Browser.driver.findElement(By.linkText("Canon")).getText());

        Select dropDown = new Select(Browser.driver.findElement(By.id("input-option226")));
        dropDown.selectByValue("15");
        Browser.driver.findElement(By.id("button-cart")).click();

    }

    @And("he remove the product from the Cart")
    public void heRemoveTheProductFromTheCart() {

        Browser.driver.findElement(By.id("cart-total")).click();
        WaitTool.wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//ul/li[1]/table/tbody/tr/td[2]/small")));
        System.out.println(Browser.driver.findElement(By.xpath("//ul/li[1]/table/tbody/tr/td[2]/small")).getText());

        Browser.driver.findElement(By.cssSelector("[title^='Remove']")).click();
        Browser.driver.findElement(By.xpath("//*[@id=\"top-links\"]/ul/li[5]/a/i")).click();
        Browser.driver.findElement(By.xpath("//div/div/a")).click();
    }


    @Then("he logout with confirm message {string}")
    public void heLogoutWithConfirmMessage(String expectedLogoutText) {

        WaitTool.wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//ul/li[2]/a/span[2]"))).click();

        Browser.driver.findElement(By.xpath("//ul/li[2]/ul/li[5]/a")).click();
        String successfulLogoutText = Browser.driver.findElement(By.xpath("//*[@id=\"content\"]/p[1]")).getText();
        Assert.assertEquals(successfulLogoutText, expectedLogoutText);

        System.out.println(Browser.driver.findElement(By.xpath("//*[@id=\"content\"]/p[1]")).getText());
        Browser.driver.findElement(By.linkText("Continue")).click();
    }
}
