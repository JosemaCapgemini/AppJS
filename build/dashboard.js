firebase.auth().onAuthStateChanged(function (user) {
    document.getElementById("userName").innerHTML = user['email']
});

function selectTag(tag) {
    if (tag == 'tasks') {
        document.getElementById("tasksId").style.backgroundColor = "black"
        document.getElementById("contactId").style.backgroundColor = "transparent"
        appendHTMLTasks()
    }
    else if (tag == 'contact') {
        document.getElementById("contactId").style.background = "black"
        document.getElementById("tasksId").style.backgroundColor = "transparent"
        appendHTMLContact()
    }
}

window.onload = function () {
    document.getElementById("tasksId").onclick = function taskEventController() {
        selectTag('tasks')
    }

    document.getElementById("contactId").onclick = function ContactEventController() {
        selectTag('contact')
    }
}

function appendHTMLTasks() {
    document.getElementById("buttonsId").innerHTML = "\
    <button type='submit' class='button'>ADD PROJECT +</button>"

    document.getElementById("bottomContainer").innerHTML = ""


}

function appendHTMLContact() {
    document.getElementById("buttonsId").innerHTML = ""

    document.getElementById("bottomContainer").innerHTML = "\
    <div class='container-contact100'>\
		<div class='wrap-contact100'>\
			<form class='contact100-form'>\
				<span class='contact100-form-title'>Get in Touch</span>\
				<div class='wrap-input100' data-validate='Name is required'>\
					<input class='input100' id='name' type='text' name='name' placeholder='Name'>\
					<label class='label-input100' for='name'>\
						<span class='lnr lnr-user'></span>\
					</label>\
				</div>\
				<div class='wrap-input100' data-validate='Valid email is required: ex@abc.xyz'>\
					<input class='input100' id='email' type='text' name='email' placeholder='Email'>\
					<label class='label-input100' for='email'>\
						<span class='lnr lnr-envelope'><\span>\
					</label>\
				</div>\
				<div class='wrap-input100' data-validate='Phone is required'>\
					<input class='input100' id='phone' type='text' name='phone' placeholder='Phone'>\
					<label class='label-input100' for='phone'>\
						<span class='lnr lnr-phone-handset'></span>\
					</label>\
				</div>\
				<div class='wrap-input100' data-validate='Message is required'>\
					<textarea class='input100' name='message' placeholder='Your message...'></textarea>\
				</div>\
				<div class='contact100-form-checkbox'>\
					<input class='input-checkbox100' id='ckb1' type='checkbox' name='copy-mail'>\
					<label class='label-checkbox100' for='ckb1'>Send copy to my-email</label>\
				</div>\
				<div class='container-contact100-form-btn'>\
					<div class='wrap-contact100-form-btn'>\
						<div class='contact100-form-bgbtn'></div>\
						<button class='contact100-form-btn'>Send Email</button>\
					</div>\
				</div>\
			</form>\
		</div>\
	</div>"
}

    
