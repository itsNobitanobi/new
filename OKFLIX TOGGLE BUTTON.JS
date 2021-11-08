var acc = document.getElementsByClassName("ytbtn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var ytcontainer = this.nextElementSibling;
    if (ytcontainer.style.maxHeight) {
      ytcontainer.style.maxHeight = null;
    } else {
      ytcontainer.style.maxHeight = ytcontainer.scrollHeight + "px";
    } 
  });
}