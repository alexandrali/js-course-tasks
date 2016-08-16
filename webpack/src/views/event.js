require('../styles/event.css');
function EventView(context){
	var li = document.createElement('li');
	li.classList.add('event');

	li.innerHTML = `
		<span class = "time">${context.time}</span>
		<span class = "note">${context.note}</span>
	`;

	return li;
}

module.exports = EventView;