// 4. Working with Data

// Start from this array of GitHub objects: https://api.github.com/users

// Load it up data in your program using jQuery .ajax (or getJSON)

// Write a program to count the following:

// How many of the listed objects are of type "User" and how many are of type "Organization"
// How many site admins are there in that list?
// How many users have a GitHub handle that is 5 characters or shorter?

'use strict';

$(document).ready(init);

function init() {
	// addCardHandler();
}

var userCount = 0;
var organizationCount = 0;
var site_adminCount = 0;
var loginLength5Gr = 0;
var loginLength5Lr = 0;

function addCardHandler() {
}