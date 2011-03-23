$(document).ready(function () {
  var req = new XMLHttpRequest();
  req.open('GET', '/streaming', true);
  req.onreadystatechange = function (aEvt) {
    if (req.readyState == 3) {
      if (req.status == 200) {
        $('#data').append('<p>' + req.responseText + '</p>');
      }
    }
  };
  req.send(null);
});
