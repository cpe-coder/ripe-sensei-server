const { Schema, model } = require("mongoose");

const recordsSchema = new Schema({
	ripe: { type: Number, required: true },
	raw: { type: Number, required: true },
	email: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = model("Records", recordsSchema);
