const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Song extends Model {}

Song.init(
	{
		song_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
		},
		lyrics: {
			type: DataTypes.TEXT,
		},
	},
	{
		sequelize,
	}
);

module.exports = Song;
