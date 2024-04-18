const data = new Date();
const divDate = document.querySelector('.divDate');
divDate.innerHTML = data.toLocaleString("pt-BR", {
  dateStyle: "full",
  timeStyle: "short"
});




