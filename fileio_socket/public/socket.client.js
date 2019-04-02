$(function(){
  var socket = io();
  
  socket.on("sendToClient", function(data) {
    $("#socketLogs").append("<div>받음 : " + data.msg + "</div>");
  });

  $("form").submit(function(e) {
    e.preventDefault();
    var $msgForm = $("#msgForm");
    socket.emit("sentFromClient", { msg: $msgForm.val() });
    $("#socketLogs").append("<div>보냄 : " + $msgForm.val() + "</div>");
    $msgForm.val("");
  });
});