const errorValidMail = 'Oh, what a shame, this doesn’t look \
like an e-mail address. Please make sure you are typing it correctly!';
const successSendData = 'We have sent you our offer, please check your Email!';
var emailPattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

const cutForm = document.querySelector('#cut-form');


cutForm && cutForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let form = e.target;
	let name = form.querySelector('[name="name"]').value;
	let email = form.querySelector('[name="email"]').value;
	if (!emailPattern.test(email)) {
		alert(errorValidMail);
	} else {
		let data = JSON.stringify({ name, email });
		let body = "sms=" + encodeURIComponent( data );
		fetch("../send.php", {
			method: 'POST',
			headers: { 'content-type': 'application/x-www-form-urlencoded' },
            body: body
		})
		.then(() => {
			form.querySelector('[name="name"]').value = '';
			form.querySelector('[name="email"]').value = '';
			alert(successSendData);
			console.log(data);
			console.log(body);
		})
		.catch(e => console.log(e))
	}
})
