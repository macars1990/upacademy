function like(button){
	console.log(button.parentNode);
	button.parentNode.classList.remove("active");
	// console.log(button.parentNode.nextElementSibling);
	button.parentNode.nextElementSibling.classList.add("active");


	// appendChild(button.parentNode);
}

function dislike(button){
	console.log(button.parentNode);
	button.parentNode.classList.remove("active");
	// console.log(button.parentNode.nextElementSibling);
	button.parentNode.nextElementSibling.classList.add("active");


	// appendChild(button.parentNode);
}

// function alterActive(button){
// button.parentNode.classList.remove("active");
// console.log(button.parentNode.nextElementSibling);
// button.parentNode.nextElementSibling.classList.add("active");

// }



