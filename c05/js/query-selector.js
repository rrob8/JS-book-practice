var el = document.querySelector('li.hot');
el.className = 'cool';

var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';
/* remember, even though we used bracket notation to refer to node 3 on the collection, after the first statement where we changed node #1
from hot to cool, node 3 is now the 2nd node (i.e. index 1 ) to have a css-style selector of 'hot'. IT IS A NEW NODE LIST called els, not 
same list as 'el' */