const canvas = document.querySelector('#canvas');

canvas.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    let color = "aqua";
    let size = document.querySelector('input[name="width"]:checked').value;

    if (x >= canvas.offsetLeft + canvas.offsetWidth || x <= canvas.offsetLeft || 
        y >= canvas.offsetTop + canvas.offsetHeight || y <= canvas.offsetTop) {
        return;
    }
    
    let pixel = document.createElement("div");
    pixel.style.backgroundColor = color;
    pixel.style.width = `${size}px`;
    pixel.style.height = `${size}px`;
    pixel.style.position = "absolute";
    pixel.style.left = `${x - size / 2}px`;
    pixel.style.top = `${y - size / 2}px`;
    
    canvas.appendChild(pixel);
  });

const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", () => {
  canvas.innerHTML = "";
});





