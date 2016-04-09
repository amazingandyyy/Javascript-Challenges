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
	// $("#addCard").click(addCardHandler);
	addCardHandler();
}

var userCount = 0;
var organizationCount = 0;
var site_adminCount = 0;
var loginLength5Gr = 0;
var loginLength5Lr = 0;

function addCardHandler() {

	var $usernameInput = $("#username");
	var username = $usernameInput.val();

	$.getJSON("https://api.github.com/users", function(data, status) {
		console.log("data: ", data);
		console.log("status: ", status);

		$.each(data, function(key, value) {

			if (value.type === "User") {
				userCount++;
			} else if (value.type === "Organization") {
				organizationCount++;
			}

			if (value.site_admin === true) {
				site_adminCount++;
			}

			if (value.login.length > 5) {
				loginLength5Gr++;
			} else {
				loginLength5Lr++;
			}

		});

		$("#userCount").text(userCount);
		$("#organizationCount").text(organizationCount);
		$("#site_adminCount").text(site_adminCount);
		$("#loginLength5Gr").text(loginLength5Gr);
		$("#loginLength5Lr").text(loginLength5Lr);

	} );

	// .done(function(data, status) {
	// 	console.log("data", data);
	// 	console.log("status", status);
	// 	var $card = makeCard(data);
	// 	$("#output").append($card);
	// })
	// .fail(function(data, status) {
	// 	console.log("data", data);
	// 	console.log("status", status);
	// })

	// $.get("https://api.github.com/users/" + username)

	// .done(function(data, status) {
	// 	console.log("data", data);
	// 	console.log("status", status);
	// 	var $card = makeCard(data);
	// 	$("#output").append($card);
	// })
	// .fail(function(data, status) {
	// 	console.log("data", data);
	// 	console.log("status", status);
	// })
}


function makeCard(data) {

	var $card = $('<div>').addClass('card').css('width', '150px');
	var $avatar = $('<img>').attr('src', data.avatar_url);
	var $name = $('<div>').text(data.name);
	$card.append($avatar).append($name);
	return $card;
}


