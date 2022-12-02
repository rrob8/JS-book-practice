//page 127 , see more on page 195, and p 228
var msg = '<p><b>page title: </b>' + document.title + '<br />';
msg += '<b> page address: </b>' + document.URL + '<br />';
msg += '<b> last modifieid: </b>' + document.lastModified + '<br />';
msg += '<b> domain: </b>' + document.domain + '<br />';

var el= document.getElementById('footer');
el.innerHTML= msg;

/*JIMMYJIMMYJIMMYJIMMYJIMMYJIMMYJIMMY
another flaw, domain does not print to the page , see page 126, properties of the DOM */
