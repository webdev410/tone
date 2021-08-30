const router = require("express").Router();
const { User, Song } = require("../models");
const withAuth = require("../utils/auth");

// !FRONT END ROUTES
// !add roles to users
// !add logic for where to send the user for admin area
// root domain (after logging in)
router.get("/", withAuth, async (req, res) => {
	try {
		const userData = await User.findAll({
			attributes: { exclude: ["password"] },
			order: [["last_name", "ASC"]],
		});
		
		const users = userData.map((project) => project.get({ plain: true }));
		// render dashboard if logged in
		res.render("dashboard", {
			logged_in: req.session.logged_in,
		
			title: "Dashboard"

		});
	} catch (err) {
		res.status(500).json(err);
	}
});
// ! checks if logged in
router.get("/login", (req, res) => {
	if (req.session.logged_in) {
		res.redirect("/");
		return;
	}

	res.render("login", {
		title: "Login"
	});
});

// handbook front end

router.get("/handbook", (req, res) => {
	console.info(`${req.method} request received for handbook`);
	if (!req.session.logged_in) {
		res.redirect('/login')
	} else {
		res.render("handbook", {
			logged_in: req.session.logged_in,
			title: "Handbook"
		});
	}
});
router.get("/song", (req, res) => {
	console.info(`${req.method} request received for song`);
	if (!req.session.logged_in) {
		res.redirect('/login')
	} else {
		res.render("song", {
			logged_in: req.session.logged_in,
			title: "Song"
		});
	}
});

module.exports = router;
