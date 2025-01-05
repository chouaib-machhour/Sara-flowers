
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const messages = [
      "Sara, your smile holds the warmth of dawn's first light, 🌅",
      "Like tulips and daisies, you make life's beauty take flight, 🌷🌼",
      "In your glow, hearts find peace, and the world feels just right. ✨❤️"
    ];

    const titleElement = document.getElementById("title");
    let index = 0;

    function showMessage() {
      if (index < messages.length) {
        const span = document.createElement("span");
        span.className = "title-line";
        span.style.opacity = "0";
        span.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
        span.style.transform = "translateY(20px)";
        span.innerText = messages[index];
        titleElement.appendChild(span);

        // Trigger animation
        setTimeout(() => {
          span.style.opacity = "1";
          span.style.transform = "translateY(0)";
        }, 50);

        index++;
        setTimeout(showMessage, 3000); // Delay before showing the next message
      }
    }

    showMessage();
    clearTimeout(c);
  }, 1000);
};
