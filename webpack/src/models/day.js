var Event = require('./event')

function Day(date){
	this.date = date;
	this.events = [];
}

Day.prototype.addEvent = function(time, note){
	var newEvent = new Event(time, note);
	this.events.push(newEvent);

	return newEvent;
};

module.exports = Day