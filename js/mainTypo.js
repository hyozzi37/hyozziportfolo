const content =
  "SUCCESS IS \n THE RESULT OF RELENTLESS\nEFFORT,\nNOT MERE CHANCE.\nBELIEVE IN YOURSELF,\nAND LET GRATITUDE \nLIGHT YOUR PATH.";
const text = document.querySelector(".text");
let i = 0;
let intervalId;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;

  if (i >= content.length) {
    clearInterval(intervalId); // 모든 텍스트가 나타났을 때 clearInterval 호출
  }
}

intervalId = setInterval(typing, 150);
