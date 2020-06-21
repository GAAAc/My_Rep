let text = document.getElementsByClassName('exampleText')[0];
let span = document.getElementsByClassName('n')[0];

span.innerText = text.getAttribute('maxlength');
text.oninput = function() {
	span.innerText = text.getAttribute('maxlength') - text.value.length;
}
