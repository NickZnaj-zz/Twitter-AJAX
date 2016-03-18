function UsersSearch (el) {
	this.$el = $(el);
	this.$input = this.$el.find("input");
	this.$ul = this.$el.find("ul");

	this.$el.on("input", this.handleInput.bind(this));
}

UsersSearch.prototype.handleInput = function (e) {
	// e.preventDefault();
	var formData = this.$input.val();

	console.log(this.$input.serialize());
	console.log(formData);

	$.ajax({
		url: '/users/search',
		// data: "query=" + formData,
		data: { query: formData },
		method: "GET",
		dataType: 'json',
		success: function(res) {
			this.$ul.empty();
			var argFound = [].slice.call(res);

			for(var i = 0; i < argFound.length; i++)
			{
				// debugger;
				var $curr = $("<li>" + argFound[i].username + "</li>");
				this.$ul.append($curr);
			}
		}.bind(this)
	});
};

module.exports = UsersSearch;
