function highlightWords(paragraph, colours) {
  // creating elements
  const content = document.getElementById("content");
  const paragraphEl = document.createElement("p");
  const select = document.createElement("select");
  // adding options to select element
  colours.forEach((colour) => {
    colour;
    const option = document.createElement("option");
    option.value = colour;
    option.innerText = colour;
    select.appendChild(option);
  });
  // creating span elements and add event listner for each
  paragraph.split(" ").forEach((word) => {
    const span = document.createElement("span");
    span.innerText = word + " ";
    span.addEventListener("click", function () {
      const selectColor = select.value;
      if (selectColor === "yellow") {
        span.style.backgroundColor = selectColor;
      } else if (selectColor === "green") {
        span.style.backgroundColor = selectColor;
      } else if (selectColor === "blue") {
        span.style.backgroundColor = selectColor;
      } else {
        span.style.backgroundColor = "white";
      }
    });
    paragraphEl.appendChild(span);
  });
  // adding elements to html
  content.appendChild(select);
  content.appendChild(paragraphEl);
}
const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
