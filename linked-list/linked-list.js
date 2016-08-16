function Node(data, prev, next){
	this.data = data;
	this.prev = prev;
	this.next = next;
}

function List(){
	this.length = 0;
	this.first = null;
	this.last = null;
	
}

List.prototype.head = function(){
	if (this.length == 0){
		console.log("List is Empty");
	} 		
	return this.first;
}

List.prototype.tail  = function(){
	if (this.length == 0) {
		console.log("List is Empty");
	}
	return this.last;
}

List.prototype.append = function(data){
	
	if (this.first == null){
		this.first = new Node (data, null, null);
		this.last = this.first;
	}
	else {
		this.last = new Node (data, this.last, null);
		this.last.prev.next = this.last;
	}
	this.length++;
	return this;
}

List.prototype.at = function(index){
	var current = this.first;
	if ( index >= 0 && index < this.length){
		for (var i=0; i<index; i++){
			current = current.next;
		}
		return current.data;
	}
	else {
		console.log("wrong index");
		return null;
	}
}

List.prototype.insertAt = function(index, data){
	var current = this.first;
	if (index >= 0 && index < this.length){
		for (var i=0; i<index; i++){
			current = current.next;
		}
		var temp = new Node (data, current.prev, current);
		if (current.prev == null){
			this.first = temp;
		}
		else{
			current.prev.next = temp;
		}	
		current.prev = temp;
		this.length++;
	}
	else { console.log("wrong index");
		return null; 
	}
	return this;
}

List.prototype.deleteAt = function(index){
	var current = this.first;

	if (index == 0){
			this.first = this.first.next;
			this.first.next.prev = null;
		}
	else if (index == this.length-1){
		this.last.prev.next = null;
		this.last = this.last.prev;
		
	}
	else if (index > 0 || index < this.length ){
		for (var i=0; i<index; i++){
			current = current.next;
		}
		current.prev.next = current.next;
		current.next.prev = current.prev;	
	}
	this.length--;
	return this;
}

List.prototype.reverse = function(){
	var temp = this.first;
		this.first = this.last;
		this.last = temp;

	var current = this.first;

	while (current!=null){
		var temp = current.prev;
		current.prev = current.next;
		current.next = temp;
		current = current.next;
	}
	
	return this;
}

List.prototype.each = function(fun){
	var current = this.first;
	while(current != null){
		current.data = fun(current.data);
		current = current.next;
	}
	return this;
}


List.prototype.indexOf = function(data){
	var current = this.first;
	var index = 0;
	while (current!=null){
		if (current.data == data){
			return index;
		}
		index++;
		current = current.next;
	}
	return -1;
}