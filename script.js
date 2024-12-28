const button = document.getElementById("submit");
let hasil = document.getElementById("hasil");
button.addEventListener("click", () => {
  let inputKata = String(document.getElementById("inputKata").value);
  let cekKata = inputKata.replaceAll(" ", "");
  console.log(cekKata);
  hasil.innerHTML = cekKata.length;
});
