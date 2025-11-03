const quotes = document.querySelectorAll(".quote");
    const dotsContainer = document.querySelector(".dots");

    // Create navigation dots based on number of quotes
    quotes.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        index = i;
        showQuote(index);
      });
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");
    let index = 0;

    function showQuote(i) {
      quotes.forEach((quote, idx) => {
        quote.classList.toggle("active", idx === i);
        dots[idx].classList.toggle("active", idx === i);
      });
    }

    function nextQuote() {
      index = (index + 1) % quotes.length;
      showQuote(index);
    }

    setInterval(nextQuote, 5000); // change quote every 5 seconds
