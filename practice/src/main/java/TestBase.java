import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class TestBase {
	
	File src;
	FileInputStream fis=null;
	Properties prop;
	@BeforeTest
	public void filereader() 
	{
		src = new File("C:/Users/Nilkanth Patel/Downloads/cucumberSeleniumFramework-master/practice/src/main/java/config/Config.properties");
		 try {
			fis = new FileInputStream(src);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		prop = new Properties();
		try {
			prop.load(fis);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		prop.getProperty("URL");
		System.out.println(prop.getProperty("URL"));
	}
		

		
		
		
	


	}
	



