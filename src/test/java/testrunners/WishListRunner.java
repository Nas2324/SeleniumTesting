package testrunners;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(plugin = { "progress" , "html:target/cucumber-html-report02" } ,
        features = "src/test/java/features/WishList")


public class WishListRunner extends AbstractTestNGCucumberTests {
}
