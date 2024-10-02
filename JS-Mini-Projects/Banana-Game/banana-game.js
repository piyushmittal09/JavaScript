	
	let countEl = document.querySelector("#count-el");
	let count = 0;
	let hasCompleted = false;
	let isAlive = true;
	let message = "";
	let messageEl = document.querySelector(".message-el");
	
	function increment() {
		count = count + 1;
		countEl.innerText = count;
	}
	
	function decrement() {
		count = count - 1;
		countEl.innerText = count;
	}
	
	function save() {
		
		if (count <= 6) {
			message = "You're out of the game!"
		} 
		else if (count === 7) {
			message = "You've completed the challenge!"
			hasCompleted = true
		}
		else {
			message = "You're out of the game!"
			isAlive = false
		}
		messageEl.textContent = message;
		console.log(count);
	}
	
	let adjustment = document.querySelector("h1").style;
	let adjustment2 = document.querySelector("h2").style;
	let banana1 = document.querySelector(".banana1").style;
	let banana2 = document.querySelector(".banana2").style;
	let banana3 = document.querySelector(".banana3").style;
	let banana4 = document.querySelector(".banana4").style;
	let banana5 = document.querySelector(".banana5").style;
	let banana6 = document.querySelector(".banana6").style;
	let banana7 = document.querySelector(".banana7").style;

	function newGame() {
		location. reload();
		document.body.style.width = "100vw";
		document.body.style.height = "100vh";
		document.body.style.backgroundImage = "url('background2.png')";
		document.body.style.backgroundSize = "cover";
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.textAlign = "center";
		Banana1();
		Banana2();
		Banana3();
		Banana4();
		Banana5();
		Banana6();
		Banana7();
	}
	

	function Banana1() {

		// For Banana 1

		let top = "0"
		top = Math.floor(Math.random() * 100);
		top += "px";
		banana1.top = top;
		console.log(top);

		let bottom = "0"
		bottom = Math.floor(Math.random() * 100);
		bottom += "px";
		banana1.bottom = bottom;
		console.log(bottom);

		let left = "0"
		left = Math.floor(Math.random() * 100);
		left += "px";
		banana1.left = left;
		console.log(left);

		let right = "0"
		right = Math.floor(Math.random() * 100);
		right += "px";
		banana1.right = right;
		console.log(right);
	}

	function Banana2() {

		// For Banana 2

		let top = "0"
		top = Math.floor(Math.random() * 300);
		top += "px";
		banana2.top = top;
		console.log(top);

		let bottom = "0"
		bottom = Math.floor(Math.random() * 300);
		bottom += "px";
		banana2.bottom = bottom;
		console.log(bottom);

		let left = "0"
		left = Math.floor(Math.random() * 300);
		left += "px";
		banana2.left = left;
		console.log(left);

		let right = "0"
		right = Math.floor(Math.random() * 300);
		right += "px";
		banana2.right = right;
		console.log(right);
	}


	function Banana3() {

		// For Banana 3

		let top = "0"
		top = Math.floor(Math.random() * 100);
		top += "px";
		banana3.top = top;
		console.log(top);

		let bottom = "0"
		bottom = Math.floor(Math.random() * 100);
		bottom += "px";
		banana3.bottom = bottom;
		console.log(bottom);

		let left = "0"
		left = Math.floor(Math.random() * 100);
		left += "px";
		banana3.left = left;
		console.log(left);

		let right = "0"
		right = Math.floor(Math.random() * 100);
		right += "px";
		banana3.right = right;
		console.log(right);
	}



	function Banana4() {

		// For Banana 4

		let top = "0"
		top = Math.floor(Math.random() * 300);
		top += "px";
		banana4.top = top;
		console.log(top);

		let bottom = "0"
		bottom = Math.floor(Math.random() * 300);
		bottom += "px";
		banana4.bottom = bottom;
		console.log(bottom);

		let left = "0"
		left = Math.floor(Math.random() * 300);
		left += "px";
		banana4.left = left;
		console.log(left);

		let right = "0"
		right = Math.floor(Math.random() * 300);
		right += "px";
		banana4.right = right;
		console.log(right);
	}




	function Banana5() {

		// For Banana 5

		let top = "0"
		top = Math.floor(Math.random() * 100);
		top += "px";
		banana5.top = top;
		console.log(top);

		let bottom = "0"
		bottom = Math.floor(Math.random() * 100);
		bottom += "px";
		banana5.bottom = bottom;
		console.log(bottom);

		let left = "0"
		left = Math.floor(Math.random() * 100);
		left += "px";
		banana5.left = left;
		console.log(left);

		let right = "0"
		right = Math.floor(Math.random() * 100);
		right += "px";
		banana5.right = right;
		console.log(right);
	}


	function Banana6() {

		// For Banana 6

		let top = "0"
		top = Math.floor(Math.random() * 300);
		top += "px";
		banana6.top = top;
		console.log(top);

		let bottom = "0"
		bottom = Math.floor(Math.random() * 300);
		bottom += "px";
		banana6.bottom = bottom;
		console.log(bottom);

		let left = "0"
		left = Math.floor(Math.random() * 300);
		left += "px";
		banana6.left = left;
		console.log(left);

		let right = "0"
		right = Math.floor(Math.random() * 300);
		right += "px";
		banana6.right = right;
		console.log(right);
	}


	function Banana7() {

		// For Banana 7

		let top = "0"
		top = Math.floor(Math.random() * 100);
		top += "px";
		banana7.top = top;
		console.log(top);

		let bottom = "0"
		bottom = Math.floor(Math.random() * 100);
		bottom += "px";
		banana7.bottom = bottom;
		console.log(bottom);

		let left = "0"
		left = Math.floor(Math.random() * 100);
		left += "px";
		banana7.left = left;
		console.log(left);

		let right = "0"
		right = Math.floor(Math.random() * 100);
		right += "px";
		banana7.right = right;
		console.log(right);
	}


		Banana1();
		Banana2();
		Banana3();
		Banana4();
		Banana5();
		Banana6();
		Banana7();


	// window.onload = Banana1;
	// window.onload = Banana2;
	// window.onload = Banana3;
	// window.onload = Banana4;
	// window.onload = Banana5;
	// window.onload = Banana6;
	// window.onload = Banana7;