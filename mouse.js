window.onload = function() {
    document.getElementById("box").addEventListener('mousemove', mouseShowHandler);
    document.getElementById("box").addEventListener('click', sendd);
    document.getElementById("box").addEventListener('wheel', changeZ);
};
function mouseShowHandler(e){
    e = e || window.event
    var x = Number(e.clientX)
    var y = Number(e.clientY)
    x = (x - 213)/2
    y = (213 - y)/2
    document.getElementById('mouseX').value = x
    document.getElementById('mouseY').value = y
}

function sendd(){
    var str = 'X'+ document.getElementById('mouseX').value + 'Y' + document.getElementById('mouseY').value + 'Z' + document.getElementById('mouseZ').value + '\n';
    document.getElementById("send").value += str;
    document.getElementById("send").scrollTop = document.getElementById("send").scrollHeight;
    connection.send(str);
}

var str2ab = function(str) {
    var encodedString = unescape(encodeURIComponent(str));
    var bytes = new Uint8Array(encodedString.length);
    for (var i = 0; i < encodedString.length; ++i) {
        bytes[i] = encodedString.charCodeAt(i);
    }
    return bytes.buffer;
};

function changeZ(e){
    var z = Number(e.deltaY)/100;
    z = Number(document.getElementById('mouseZ').value) - z;
    document.getElementById('mouseZ').value = z;
}