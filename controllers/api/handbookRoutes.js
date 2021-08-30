const handbook = require("express").Router();
const uuidv4 = require("uuidv4");

const {
	readFromFile,
	readAndAppend,
	writeToFile,
} = require("../../helpers/fsUtils");

// !WORKING GET Route for retrieving all the handboook entries
// /api/handbook

handbook.get("/", (req, res) => {
	console.info(`${req.method} request received for handbook/vocals`);
	readFromFile("./db/handbook.json").then((data) => res.json(JSON.parse(data)));
});
handbook.get("/vocals/mics/dynamic", (req, res) => {
	console.info(`${req.method} request received for handbook/vocals/mics`);
	readFromFile("./db/vocals-mics-dynamic.json").then((data) =>
		res.json(JSON.parse(data))
	);
});
handbook.get("/vocals/mics/condenser", (req, res) => {
	console.info(`${req.method} request received for handbook/vocals/mics`);
	readFromFile("./db/vocals-mics-condenser.json").then((data) =>
		res.json(JSON.parse(data))
	);
});

//* Route is localhost:3001/api/handbook
handbook.post("/", (req, res) => {
	console.info(`${req.method} request received to add a song`);
	console.log("req.body", req.body);

	if (req.body) {
		readAndAppend(req.body, "./db/handbook.json");
		res.json(`Handbook Entry added successfully 🚀`);
	} else {
		res.error("Error in adding Handbook Entry");
	}
});
handbook.post("/vocals", (req, res) => {
	console.info(`${req.method} request received to add a vocal item`);
	console.log("req.body", req.body);

	if (req.body) {
		readAndAppend(req.body, "./db/vocals.json");
		res.json(`Handbook Entry added successfully 🚀`);
	} else {
		res.error("Error in adding Handbook Entry");
	}
});
handbook.post("/vocals/mics", (req, res) => {
	console.info(`${req.method} request received to add a vocal mic 🎤`);
	console.log("req.body", req.body);

	if (req.body) {
		readAndAppend(req.body, "./db/vocals-mics.json");
		res.json(`Vocal Mic Entry added successfully 🎤`);
	} else {
		res.error("Error in adding Handbook Entry");
	}
});

module.exports = handbook;
