(function(){
	// Variables
	var list = document.getElementById("list"),
		taskInput = document.getElementById("taskInput"),
		btnNewTask = document.getElementById("btn-add");

	// Functions
	var addTask = function(){
		var task = taskInput.value,
			newTask = document.createElement("li"),
			link = document.createElement("a"),
			content = document.createTextNode(task);

		if (task === "") {
			taskInput.setAttribute("placeholder", "Add a valid task");
			taskInput.className = "error";
			return false;
		}

		// Add the content to the link
		link.appendChild(content);
		// Set a href attribute
		link.setAttribute("href", "#");
		// Add the link (a) to the new task (li)
		newTask.appendChild(link);
		// Add the new task to the list
		list.appendChild(newTask);

		taskInput.value = "";

		for (var i = 0; i <= list.children.length -1; i++) {
			list.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};
	var checkInput = function(){
		taskInput.className = "";
		tashInput.setAttribute("placeholder", "Add your task");
	};

	var deleteTask = function(){
		this.parentNode.removeChild(this);
	};

	// Events

	// Add task
	btnNewTask.addEventListener("click", addTask);

	// Check Input
	taskInput.addEventListener("click", checkInput);

	// Deleting Items from the list
	for (var i = 0; i <= list.children.length -1; i++) {
		list.children[i].addEventListener("click", deleteTask);
	}
}());