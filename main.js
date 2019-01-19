const btnSign = document.getElementById('sign');
const modal = document.getElementById('myModal');

btnSign.onclick = () => {
  modal.style.display = "block";
}

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}