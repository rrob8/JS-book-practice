var newEl = document.createElement('li'); // element cannot be blank

var newText = document.createTextNode('quinoa');  // you have to create a text node using the document object before you append
newEl.appendChild(newText);

var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);