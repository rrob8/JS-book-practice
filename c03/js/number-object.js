var originalNumber = 10.23456;

var msg = '<h2>original number</h2><p>' + originalNumber + '</p>';
msg += '<h2>3 decimal places</h2><p>' + originalNumber.toFixed(3) + '</p>';
msg += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(3) + '</p>';
// error was being thrown here because you declared var in front of msg +=, which wasn't necessary
var el = document.getElementById('info');
el.innerHTML = msg;