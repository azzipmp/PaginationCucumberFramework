$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/UserregistrationDatadrivenTest.feature");
formatter.feature({
  "name": "Testing the Datadriven",
  "description": "\tI want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Testing the user registration with multiple userids",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Navigate to the Mercury flight application",
  "keyword": "Given "
});
formatter.step({
  "name": "Click on Register Link",
  "keyword": "When "
});
formatter.step({
  "name": "Enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and \"\u003cconfirmpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on submit",
  "keyword": "And "
});
formatter.step({
  "name": "I verify the \"\u003cusername\u003e\" creation",
  "keyword": "Then "
});
formatter.step({
  "name": "Close the appliaction",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "confirmpassword"
      ]
    },
    {
      "cells": [
        "test1",
        "test123",
        "test123"
      ]
    },
    {
      "cells": [
        "test2",
        "hello",
        "hello"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Testing the user registration with multiple userids",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to the Mercury flight application",
  "keyword": "Given "
});
formatter.match({
  "location": "MerucryFlightTest.navigate_to_the_Mercury_flight_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Register Link",
  "keyword": "When "
});
formatter.match({
  "location": "MerucryFlightTest.click_on_Register_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"test1\" and \"test123\" and \"test123\"",
  "keyword": "And "
});
formatter.match({
  "location": "UserregistrationDatadrivenTest.populatevalues(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit",
  "keyword": "And "
});
formatter.match({
  "location": "UserregistrationDatadrivenTest.clickonsubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"test1\" creation",
  "keyword": "Then "
});
formatter.match({
  "location": "UserregistrationDatadrivenTest.usernameverification(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the appliaction",
  "keyword": "And "
});
formatter.match({
  "location": "MerucryFlightTest.close_the_appliaction()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing the user registration with multiple userids",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to the Mercury flight application",
  "keyword": "Given "
});
formatter.match({
  "location": "MerucryFlightTest.navigate_to_the_Mercury_flight_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Register Link",
  "keyword": "When "
});
formatter.match({
  "location": "MerucryFlightTest.click_on_Register_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"test2\" and \"hello\" and \"hello\"",
  "keyword": "And "
});
formatter.match({
  "location": "UserregistrationDatadrivenTest.populatevalues(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit",
  "keyword": "And "
});
formatter.match({
  "location": "UserregistrationDatadrivenTest.clickonsubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"test2\" creation",
  "keyword": "Then "
});
formatter.match({
  "location": "UserregistrationDatadrivenTest.usernameverification(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the appliaction",
  "keyword": "And "
});
formatter.match({
  "location": "MerucryFlightTest.close_the_appliaction()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});