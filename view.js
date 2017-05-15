function changeColor() {
 setTimeout(function() {
    document.getElementById("firstName").style.background = "green";
    setTimeout(function() {
      document.getElementById("firstName").style.color = "red";
    }, 2000);
  }, 2000);
}