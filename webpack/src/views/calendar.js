require('../styles/calendar.css');
var DayView = require('./day');

function WeekView(context){

	var plan = document.createElement('div');
	plan.classList.add('calendar');

	plan.innerHTML = `
		<h1 class = "center">WEEKLY PLANNER</h1>
		<ul class = "days"></ul>
	`;

	var days = plan.querySelector('.days');
plan
	context.days.forEach(function(day) {
		days.appendChild(new DayView(day));
	});

	return plan;
}

module.exports = WeekView;