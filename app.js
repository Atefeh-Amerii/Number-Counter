const items = [...document.querySelectorAll('.number')];
const updateCount = (num) => {
  const value = parseInt(num.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;
  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      num.textContent = `${value}`;
      clearInterval(increaseCount);
      return;
    }

    num.textContent = `${initialValue}`;
  }, 1);

};

items.forEach((item) => {
  updateCount(item);
});
