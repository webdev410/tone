const User = require("./User");
const Song = require("./Song");

// !connects songs to users
Song.belongsTo(User, {
	foreignKey: "userId",
	onDelete: "CASCADE",
});

module.exports = { User, Song };
