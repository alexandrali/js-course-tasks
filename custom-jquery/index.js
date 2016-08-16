var customjquery = function(elem){
	var elements = document.querySelectorAll(elem);

	return{
		addClass : function(className){	
			if (typeof(className) == "string") {
				var classArray = className.split(" ");
				for(var i = 0; i < elements.length; i++){
					for(var j = 0; j < classArray.length; j++){
						elements[i].classList.add(classArray[j]);
					}
				}
			} 
			if (typeof(className) == 'function'){
				for(var i = 0; i < elements.length; i++){
					var classArray = className(i, elem.replace(".", ""));
					if (classArray != undefined){
						classArray = classArray.split(" ");
						for(var j = 0; j < classArray.length; j++){
							elements[i].classList.add(classArray[j]);
						}
					}
				}
			}
		},

		append: function(content){
			if (typeof(content) == 'string') {
				for(var i = 0; i < elements.length; i++){
					elements[i].innerHTML += content;
				}
			} 
			else {
				for(var i = 0; i < elements.length; i++){
					elements[i].appendChild(content.cloneNode(true));
				}
			}
		},

		html: function(htmlStr){
			if (typeof(htmlStr) == 'string'){
				for (var i = 0; i < elements.length; i++){
					elements[i].innerHTML = htmlStr;
				}
			}
			else return elements[0].innerHTML;
		},

		attr: function(attributeName, value){
			if (value != undefined) {
				for(var i = 0; i < elements.length; i++){
					elements[i].setAttribute(attributeName, value);
				}
			}
			else return elements[0].getAttribute(attributeName); 
		},

		children: function(selector){
			if(typeof(selector) == 'string')
				return elements[0].querySelectorAll(selector);
			else return elements[0].children;	 
		},

		each: function(func){
			for (var i = 0; i < elements.length; i++){
				var temp = func.call(elements[i], i, elements[i]);
				if (typeof(temp) == 'boolean' && !temp) return;
			}
		},

		on: function(events, selector, handler){
			if(typeof(selector) == 'string' && typeof(handler) == 'function'){
				var listener = function(events){
					if (events.target.classList.contains(selector.replace(".", ""))){
						handler();
					}
				}
				elements[0].addEventListener(events, listener);
			}
			else elements[0].addEventListener(events, selector);
		},

		one: function(events, handler){
			var listener = function(){
				handler();
				elements[0].removeEventListener(events, listener);
			}
			elements[0].addEventListener(events, listener);
		},

		css: function(property){
			if (typeof(property) == 'string'){
				return elements[0].style[property];
			} 
			if (typeof(property) == 'object'){
				for(var i = 0; i < elements.length; i++){
					for(var temp in property){
						elements[i].style[temp] = property[temp];
					}
				}
			}
		},

		data: function(key, value){
			if(typeof(key) == 'string'){ 
				if (value != undefined){
					for(var i = 0; i < elements.length; i++)
						elements[i].dataset[key] = value;
					return;
				}	
				else return elements[0].dataset[key];
			} 
			else if (typeof(key) == 'object'){
				for(var i = 0; i < elements.length; i++){
					for(var temp in key){
						elements[i].dataset[temp] = key[temp];
					}
				}
				return;
			}
			else return elements[0].dataset; 
		}		
	}
}

window.$ = customjquery;