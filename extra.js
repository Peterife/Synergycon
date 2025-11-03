
const quotes = document.querySelectorAll(".quote");
    const dots = document.querySelectorAll(".dot");
    let index = 0;

    function showQuote(i) {
      quotes.forEach((q, idx) => {
        q.classList.toggle("active", idx === i);
        dots[idx].classList.toggle("active", idx === i);
      });
    }

    function nextQuote() {
      index = (index + 1) % quotes.length;
      showQuote(index);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        showQuote(i);
      });
    });

    setInterval(nextQuote, 5000); // cha
