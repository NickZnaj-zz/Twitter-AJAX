function FollowToggle (el){
	this.$el = $(el);
	this.userId = this.$el.data("user-id");
	this.followState = this.$el.data("initial-follow-state");
	this.render();

	this.$el.on("click", this.handleClick.bind(this));
	// debugger;
}

FollowToggle.prototype = {
	render: function () {
		// debugger;
		if(this.followState === "unfollowed") {
			this.$el.html("Follow!");
			this.$el.prop("disabled", false);
		}
		else if(this.followState === "followed") {
			this.$el.html("Unfollow!");
			this.$el.prop("disabled", false);
		}
		else {
			this.$el.prop("disabled", true);
		}
	},

	handleClick: function (e) {
		var action,
				url;

		e.preventDefault();
		// debugger;

		if (this.followState === "unfollowed") {
			action = 'POST';
			this.followState = "following";
		} else {
			action = 'DELETE';
			this.followState = "unfollowing";
		}
		this.render();
		// debugger;

		url = '/users/' + this.userId + '/follow';

		$.ajax({
			url: url,
			method: action,
			dataType: 'json',
			success: function (res) {
				// debugger;
				if (this.followState === "unfollowing") {
					this.followState = "unfollowed";
				} else if (this.followState === "following") {
					this.followState = "followed";
				}
				this.render();
			}.bind(this)
		});
	}

};

module.exports = FollowToggle;
