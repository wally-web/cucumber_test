package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	
	@Given("^user is already on login page$")
	public void user_already_on_login_page() throws InterruptedException{
		System.setProperty("webdriver.chrome.driver","C:/Users/wail/Downloads/WebDri/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://app.hubspot.com/login");
		driver.manage().window().maximize();
		Thread.sleep(5000);
		
	}
	
	@When("^title of login page is HubSpot Login$")
	public void title_of_login_page_is_HubSput_Login(){
		String title =driver.getTitle();
		System.out.println("Login page title is " + title);
		Assert.assertEquals("HubSpot Login", title);
	}
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password){
		driver.findElement(By.id("username")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
	}
	
	@Then("^user click on login button$")
	public void user_click_on_login_button(){
		driver.findElement(By.id("loginBtn")).click();

	}
	
	@Then("^user on home page$")
	public void user_on_home_page() {
		String title = driver.getTitle();
		System.out.println("Home page title is " + title);
		//Assert.assertEquals("HubSpot Login", title);
	}
	
	@Then("^user ckick on contacts$")
	public void user_ckick_on_contacts() throws InterruptedException {
		Thread.sleep(6000);
		driver.findElement(By.id("nav-primary-contacts-branch")).click();
	}
	
	@Then("^user click on contacts on dropdown$")
	public void user_click_on_contacts_on_dropdown() throws InterruptedException{
		Thread.sleep(6000);
	    driver.findElement(By.id("nav-secondary-contacts")).click();
	}
	
	@Then("^user click on create contact$")
	public void user_click_on_create_contact() throws InterruptedException {
		Thread.sleep(6000);
	   driver.findElement(By.xpath("//div//button//span[text()='Create contact']")).click();
	}
	
	@Then("^user enter \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and_and(String email, String firstname, String lastname) throws InterruptedException {
		Thread.sleep(8000);
	    driver.findElement(By.id("UIFormControl-31")).sendKeys(email);
	    driver.findElement(By.id("UIFormControl-33")).sendKeys(firstname);
	    driver.findElement(By.id("UIFormControl-37")).sendKeys(lastname);
	}
	
	@Then("^user click on create contact to save$")
	public void user_create_contact() throws InterruptedException {
		Thread.sleep(7000);
		Actions action = new Actions (driver);
		WebElement button = driver.findElement(By.xpath("(//span[text()='Create contact'])[2]"));
		action.click(button).build().perform();
	  // driver.findElement(By.xpath("(//span[text()='Create contact'])[2]")).click();
	}



}
