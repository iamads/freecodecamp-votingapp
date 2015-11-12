'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
	pollname : String,
	options : Array,
	date : {type: Date, default: Date.now()},
	author : {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

PollSchema.statics = {
	loadRecent: function(callback){
		this.find({})
			.populate({path:'author', select:'name'})
			.sort('-date')
			.limit(20)
			.exec(callback);
	}
};

module.exports = mongoose.model('Poll', PollSchema);
