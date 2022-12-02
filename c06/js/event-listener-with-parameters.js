var elUsername = document.getElementById('username');

var elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
    if (elUsername.value.length < minLength ) { // when i try to type .value is always suggesting ariaValuemax????
        elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
            }
    else {
    elMsg.innerHTML = ''; // why is innerHTML used here rather than textContent?
     } 
}

elUsername.addEventListener('blur',function(){checkUsername(6)},false);