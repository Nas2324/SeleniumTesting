package core;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import tools.Browser;

public class BaseTest {

    @BeforeMethod
    public void setUp(){
        Browser.setup();
        this.setUp();
    }
    @AfterMethod
    public void quit(){
        this.quit();

    }
}
