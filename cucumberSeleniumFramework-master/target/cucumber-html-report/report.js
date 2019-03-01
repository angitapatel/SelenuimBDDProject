$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/productCategory/TestProductsCountBasedOnColor.feature");
formatter.feature({
  "line": 2,
  "name": "ProductCategoryPage1",
  "description": "",
  "id": "productcategorypage1",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 7923009500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify Total Number Of Products based on color filters",
  "description": "",
  "id": "productcategorypage1;verify-total-number-of-products-based-on-color-filters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "navigate to application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on women navigation menu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on orange color filter",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify total number of products dispalyed as \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginToAutomationPractices.navigate_to_application()"
});
formatter.result({
  "duration": 4026684100,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d72.0.3626.109)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.1\u0027, revision: \u00279c21bb67ef\u0027, time: \u00272017-08-17T15:26:08.955Z\u0027\nSystem info: host: \u0027DESKTOP-3JER1AI\u0027, ip: \u0027192.168.43.187\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb), userDataDir\u003dC:\\Users\\NILKAN~1\\AppData\\Local\\Temp\\scoped_dir21004_26754}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d72.0.3626.109, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 74a09ce3298fda3246498c1bb53941fe\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:368)\r\n\tat com.cucumber.framework.stepdefinition.login.LoginToAutomationPractices.navigate_to_application(LoginToAutomationPractices.java:22)\r\n\tat ✽.Given navigate to application(featurefile/productCategory/TestProductsCountBasedOnColor.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ProductCategory.user_click_on_women_navigation_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProductCategory.click_on_orange_color_filter()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 46
    }
  ],
  "location": "ProductCategory.verify_total_number_of_products_dispalyed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 344200,
  "status": "passed"
});
});