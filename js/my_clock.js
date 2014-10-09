function my_click(el){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMonth();
    var s = today.getSeconds();
    m = m >= 10?m:('0'+m);
    s = s >= 10?s:('0'+s);
    el.innerHTML = h + ":" + m + ":" + s ;
    setTimeout(function(){my_click(el)},1000);
}
var clock_div = document.getElementById("clock_div");
my_click(clock_div);