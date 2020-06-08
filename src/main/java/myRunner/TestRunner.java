package myRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = " C:/Users/wail/workspace/FreeCRMBDDProject/src/main/java/Features", 
		glue={"stepDefinitions"},
		format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit.xml/cucumber.xml"},
		dryRun = false,
		monochrome= true,
		strict = true
		
		)




public class TestRunner {
	
	
	

}
