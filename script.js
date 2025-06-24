
document.getElementById("toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.querySelectorAll(".like-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    let count = parseInt(btn.innerText.split(" ")[1]);
    count++;
    btn.innerText = `❤️ ${count}`;
  });
});


document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    const title = card.querySelector("h2").innerText.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});
