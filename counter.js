export function setupCounter(element) {
  let countern = 0;
  const setCounter = (count) => {
    countern = count;
    element.innerHTML = `count is ${countern}`;
  };
  element.addEventListener("click", () => setCounter(countern + 1));
  setCounter(0);
}
