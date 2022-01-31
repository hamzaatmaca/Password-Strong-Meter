let password = document.getElementById('password');
let calculate = document.getElementById('calculate');
let passLength = document.getElementById('passLength')
let passStatus = document.getElementById('passStatus')
let passStrong = document.getElementById('passStrong')
let showPass = document.getElementById('showPass');
let toggle = false


function PassVisible(){
	toggle = !toggle

	if(toggle == true){
		
		password.type="text";
		showPass.innerHTML = "Close Password"	
		showPass.className="btn btn-danger"
	}else{
		
		password.type="password";
		showPass.innerHTML = "Show Password"
		showPass.className="btn btn-success"
	}
	
}

function status(text){
	passStatus.innerHTML += " * " + "<b style='color:red'>" + text + "</b>" +"<br><br>"

}

function strong(text){
	passStrong.innerHTML += "<b style='color:blue; font-size:25px'>&nbsp&nbsp" + text + "</b>"

}

calculate.addEventListener('click',()=>{

	passStatus.innerHTML = "";
	passStrong.innerHTML = "";
	passLength.innerHTML = password.value.length 

	let letters = password.value.match(/[ A-Za-z]/g)
	let numbers = password.value.match(/[0-9]/g)


	if(password.value.length < 4){

		status('Your password is little 4 character')

		strong('Weak')
	}
	else if(password.value.length < 8){

		strong("Normal")
	}
	else{

		strong("Strong")
	
	}

	if(letters !== null){

		if(letters.length < 2){
			status("Your password hasn't enough letters")
			
		}
	}else{
		status("Your password hasn't  letters")
		
	}

	if(numbers !== null){

		if(numbers.length < 2){
			status("Your password hasn't enough numbers")
			
		}

	}else{
		status("Your password hasn't  numbers")
	}


});