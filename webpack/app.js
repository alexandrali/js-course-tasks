
var calendar = require('./src/');

var planner = new calendar.Model();
	planner.addEvent(0,'09:00','ism - exam');
	planner.addEvent(0,'21:00','Stretching');
	planner.addEvent(3,'09:00','PiRV - exam');
	planner.addEvent(3,'16:00','Algebra');
	planner.addEvent(5,'11:15','Computer Graphics');

window.addEventListener('load', function(){
  document.body.appendChild(calendar.View(planner));
});
