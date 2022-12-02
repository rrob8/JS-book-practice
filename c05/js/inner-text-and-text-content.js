var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent ;
var showInnerText = firstItem.innerText ;

var msg = '<p>textContent: ' + showTextContent + '</p>';
msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'sourdough bread';

// the first time i wrote this is did not work, all because i capitalized ScriptResults by accident