const controller = {
	getRoot: function(req, res) {
		res.render(`login`);
	},

	redirectToRoot: function(req, res) {
		res.redirect(`/`);
	},

	checkAcct: function(req, res) {
		var email = req.body.user_email;
		var password = req.body.user_pw;

		res.send(email);
	}
};

module.exports = controller;