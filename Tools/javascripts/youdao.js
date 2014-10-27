function ajax(){
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    var path = 'http://nunn.cnblogs.com/';
    xmlhttp.open('get', path, true);
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4){
            if(xmlhttp.status == 200){
                console.log(123123);
            }
        }
    }
    xmlhttp.send()
}
ajax();