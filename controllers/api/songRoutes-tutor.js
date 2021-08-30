const router = require("express").Router();

const Song = require("../../models/Song");
const withAuth = require("../../utils/auth");

// GET all songs
router.get("/", (req, res) => {
	// Get all songs from the song table
	Song.findAll().then((songData) => {
		res.json(songData);
	});
});
router.get("/:song_id", (req, res) => {
	// Get all songs from the song table
	Song.findByPk(req.params.song_id).then((songData) => {
		res.json(songData);
	});
});

// Updates song based on its song_id
router.put("/:song_id", (req, res) => {
	//Calls the update method on the song model
	Song.update(
		{
			// All the fields you can update and the data attached to the request body.
			title: req.body.title,
			author: req.body.author,
			lyrics: req.body.lyrics,
		},
		{
			// Gets a song based on the song_id given in the request parameters
			where: {
				song_id: req.params.song_id,
			},
		}
	)
		.then((updatedSong) => {
			res.json(updatedSong);
		})
		.catch((err) => {
			console.log(err);
			res.json(err);
		});
});

// Delete route for a song with a matching song_id
router.delete("/:song_id", (req, res) => {
	// Looks for the songs based song_id given in the request parameters
	Song.destroy({
		where: {
			song_id: req.params.song_id,
		},
	})
		.then((deletedSong) => {
			res.json(deletedSong);
		})
		.catch((err) => res.json(err));
});

// CREATE a new song
router.post("/", withAuth, async (req, res) => {
	try {
		const newSong = req.body;
		// passes everything from req.body
		const songData = await Song.create({
			...newSong,
			userId: req.session.userId,
		});
		res.status(200).json(songData);
	} catch (err) {
		res.status(400).json(err);
	}
});

module.exports = router;
