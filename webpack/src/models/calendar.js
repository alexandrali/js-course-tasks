var Day = require('./day')

function Calendar(){
	this.days = [
		new Day('13.06.2016'),
		new Day('14.06.2016'),
		new Day('15.06.2016'),
		new Day('16.06.2016'),
		new Day('17.06.2016'),
		new Day('18.06.2016'),
		new Day('19.06.2016')
	];
}

Calendar.prototype.addEvent = function(day, time, note){
	debugger;
	this.days[day].addEvent(time, note);
}

module.exports = Calendar