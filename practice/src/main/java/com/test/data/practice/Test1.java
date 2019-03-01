package com.test.data.practice;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;


public class Test1  {
	
	WebDriver driver;

	
@Test
	public void Webdriverdata()
	{
	String exePath="C:/Users/Nilkanth Patel/Downloads/chromedriver_win32/chromedriver.exe";
	System.setProperty("webdriver.chrome.driver", exePath);
		
		driver = new ChromeDriver();
		driver.get(System.getProperty("URL"));
		
		String data =driver.getTitle();
		System.out.println(data);
		
}
}