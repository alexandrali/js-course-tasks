require('../styles/day.css');
var EventView = require('./event');

function DayView(context){
	var day = document.createElement('li');
	day.classList.add('day');

	day.innerHTML = `
		<span class = "date">${context.date}</span>
		<ul class = "schedule"></ul>
	`;

	var events = day.querySelector('.schedule');

	context.events.forEach(function(Event) {
		events.appendChild(new EventView(Event));
	});

	return day;
}

module.exports = DayView;