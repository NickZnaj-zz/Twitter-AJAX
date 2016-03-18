var FollowToggle = require("./follow_toggle.js");
var UsersSearch = require("./users_search.js");

$(function () {
	$(".follow-toggle").each(function (idx, el) {
		new FollowToggle(el);
	});

	$(".users-search").each(function (idx, el) {
		new UsersSearch(el);
	});
});
