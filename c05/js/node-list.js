var hotItems = document.querySelectorAll('li.hot');
if (hotItems.length > 0) {
    for (var i = 0; i < hotItems.length; i++ ){
        hotItems[i].className = 'cool';
    }
}

/* cannot use getElementsByClassName('hot') because that would create a LIVE nodelist, which means
that after the first loop runs, the hotItems.length has changed and is not equal to the length of querySelectorAll statement */