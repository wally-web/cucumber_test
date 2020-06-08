$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "HubSpot login Feature",
  "description": "",
  "id": "hubspot-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: HubSpot login test Scenario"
    },
    {
      "line": 5,
      "value": "#this is a practice without Examples keyword"
    },
    {
      "line": 6,
      "value": "#Given user is already on login page"
    },
    {
      "line": 7,
      "value": "#When title of login page is HubSpot Login"
    },
    {
      "line": 8,
      "value": "#Then user enters \"wailhachlaf@hotmail.com\" and \"KH6002kh\""
    },
    {
      "line": 9,
      "value": "#Then user click on login button"
    },
    {
      "line": 10,
      "value": "#Then user on home page"
    },
    {
      "line": 13,
      "value": "#this is a practice with Examples keyword"
    }
  ],
  "line": 14,
  "name": "HubSpot login test Scenario",
  "description": "",
  "id": "hubspot-login-feature;hubspot-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is HubSpot Login",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user ckick on contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user click on contacts on dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user click on create contact",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enter \"\u003cemail\u003e\" and \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user click on create contact to save",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "hubspot-login-feature;hubspot-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "email",
        "firstname",
        "lastname"
      ],
      "line": 30,
      "id": "hubspot-login-feature;hubspot-login-test-scenario;;1"
    },
    {
      "cells": [
        "wailhachlaf@hotmail.com",
        "KH6002kh",
        "test@gmail.com",
        "tommy",
        "ronny"
      ],
      "line": 31,
      "id": "hubspot-login-feature;hubspot-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "HubSpot login test Scenario",
  "description": "",
  "id": "hubspot-login-feature;hubspot-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is HubSpot Login",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"wailhachlaf@hotmail.com\" and \"KH6002kh\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user ckick on contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user click on contacts on dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user click on create contact",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enter \"test@gmail.com\" and \"tommy\" and \"ronny\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user click on create contact to save",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 11637121794,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_HubSput_Login()"
});
formatter.result({
  "duration": 54970576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wailhachlaf@hotmail.com",
      "offset": 13
    },
    {
      "val": "KH6002kh",
      "offset": 43
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 855041862,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 201751922,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_on_home_page()"
});
formatter.result({
  "duration": 96518082,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_ckick_on_contacts()"
});
formatter.result({
  "duration": 6096034288,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_contacts_on_dropdown()"
});
formatter.result({
  "duration": 7296499981,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_create_contact()"
});
formatter.result({
  "duration": 6234793611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 12
    },
    {
      "val": "tommy",
      "offset": 33
    },
    {
      "val": "ronny",
      "offset": 45
    }
  ],
  "location": "LoginStepDefinition.user_enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 9249793093,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_create_contact()"
});
formatter.result({
  "duration": 7367952679,
  "status": "passed"
});
});