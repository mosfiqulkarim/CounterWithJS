let count = 0;
    const display = document.getElementById("count");

    function updateDisplay() {
  display.textContent = count;

  if (count < 0) {
    display.style.color = "#d10000";
  } else if (count > 0) {
    display.style.color = "#20a100";
  } else {
    display.style.color = "";
  }
}

    document.getElementById("plus").addEventListener("click", () => {
      count++;
      display.textContent = count;
      updateDisplay();
    });

    document.getElementById("minus").addEventListener("click", () => {
      count--;
      display.textContent = count;
      updateDisplay();
    });
    document.getElementById("reset").addEventListener("click", ()=> {
        count = 0;
        display.textContent = count;
        updateDisplay();
    });
    document.getElementById("theme").addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });

    