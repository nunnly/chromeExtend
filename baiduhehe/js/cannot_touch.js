function btn_move(ele, mouseLeft,mouseTop){
    var leftRnd = (Math.random()-0.5)*20;
    var topRnd = (Math.random()-0.5)*20;
    var btnLeft = mouseLeft+(leftRnd>0?104:-104)+leftRnd;
    var btnTop = mouseTop+(topRnd>0?40:-40)+topRnd;
    btnLeft = btnLeft<100?(btnLeft+window.innerWidth-200):(btnLeft>window.innerWidth-100?btnLeft-window.innerWidth+200:btnLeft);
    btnTop = btnTop<100?(btnTop+window.innerHeight-200):(btnTop>window.innerHeight-100?btnTop-window.innerHeight+200:btnTop);
    ele.style.position = "fixed";
    ele.style.left = btnLeft+'px';
    ele.style.top = btnTop+'px'
}

function over_btn(e){
    if(!e){
        e = window.event;
    }
    btn_move(this, e.clientX, e.clientY);
}
document.getElementById('su').onmouseover = over_btn;