# Employee Tracker

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

## Description

Budget Tracker is an application that allows the user to enter their expenses or deposite in a form and view a graph of their account value that updates in real time. This application was already mostly built, so the purpose of this assignment was to focus on how to give offline functionality to the application. This involves storing a database object in offline mode and then kicking off functions that push the object to the database once the user goes online again. I was able to dig through the IndexedDB docs a lot during this assignment, and came out of it feeling rather capable with regard to this API. I also got to play around with cursors, and refactored the skeleton code that was provided a bit.

## Installation

Pull the project down from the GitHub repository, npm install the necessary dependencies, and run node rosterCode in your command line.

## Usage

Enter your deposits and expenses in the form at the top of the page. To view offline functionality, open up your console, navigate to the network tab, and select the "offline" option in the drop down menu. Enter a new transaction in this form, switch back to online, and enter another record in online mode. Watch as the record you entered offline stays in your table of transactions!

## Tests

There are no tests for this application.

## Questions

[Github](http://github.com/carolinem15)
----
carolinemanson15@gmail.com

## Credits

Trilogy Education Services
IndexedDB docs: https://developer.mozilla.org/en-US/docs/Web/API/IDBCursor/
W3 schools: https://www.w3schools.com/default.asp
Stack Overflow: https://stackoverflow.com/
