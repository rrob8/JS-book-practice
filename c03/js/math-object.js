var randomNum = Math.floor((Math.random() * 10) +1);
var el= document.getElementById('info');
el.innerHTML= '<h2>Random Number 1 through 10</h2><p>' + randomNum + '</p>';
// math.random is the proper math method, not randomNum
