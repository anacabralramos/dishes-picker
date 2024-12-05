const createBackground = () => {
  const background = document.getElementById("background");
  const horizontalLines = document.getElementById("horizontal-lines");

  for (let i = 0; i < 70; i++) {
    const line = document.createElement("div");
    const horizontalLine = document.createElement("div");

    line.classList.add("line");
    horizontalLine.classList.add("horizontal-line");

    background.appendChild(line);
    horizontalLines.appendChild(horizontalLine);
  }
};

createBackground();
