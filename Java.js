function getTextBar() {
  let oldText = document.getElementById("par1");
  let newText = document.getElementById("textBar").value
  oldText.innerHTML = newText.toString();
}
