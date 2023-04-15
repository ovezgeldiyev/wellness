const total = document.getElementById("total");
const adults = document.getElementById("adults");
const children = document.getElementById("children");
const baby = document.getElementById("baby");
const inputsWrapper = document.querySelectorAll(".HeroCalendar__dropdown-item-input");

const dropdown = document.querySelector(".HeroCalendar__dropdown");
const dropdownBtn = document.querySelector(".HeroCalendar__dropdown-title");
const dropdownContent = document.querySelector(".HeroCalendar__dropdown-content");

dropdownBtn.onclick = () => {
  dropdownContent.classList.toggle("active");
  dropdownBtn.classList.toggle("active");
};

inputsWrapper.forEach((item) => {
  const minusBtn = item.querySelector(".minus");
  const plusBtn = item.querySelector(".plus");
  const input = item.querySelector("input");
  if (input.value <= 0) {
    minusBtn.disabled = true;
  }
  minusBtn.onclick = () => {
    if (input.value <= 0 || (input.id === "adults" && input.value <= 1)) {
      minusBtn.disabled = true;
    } else {
      input.value--;
      if (
        parseInt(adults.value) === 0 &&
        parseInt(children.value) + parseInt(baby.value) !== 0
      ) {
        total.value =
          adults.value +
          " dospělí " +
          (parseInt(children.value) + parseInt(baby.value)) +
          " dítě";
      } else if (
        parseInt(adults.value) !== 0 &&
        parseInt(children.value) + parseInt(baby.value) === 0
      ) {
        total.value =
          adults.value +
          " dospělí " +
          (parseInt(children.value) + parseInt(baby.value)) +
          " dítě";
      } else if (
        parseInt(adults.value) !== 0 &&
        parseInt(children.value) + parseInt(baby.value) !== 0
      ) {
        total.value =
          adults.value +
          " dospělí " +
          (parseInt(children.value) + parseInt(baby.value)) +
          " dítě";
      } else {
        total.value = "2 dospělí 0 dítě";
      }
      if (input.value <= 0) {
        minusBtn.disabled = true;
      }
    }
  };
  plusBtn.onclick = () => {
    input.value++;
    minusBtn.disabled = false;
    if (
      parseInt(adults.value) === 0 &&
      parseInt(children.value) + parseInt(baby.value) !== 0
    ) {
      total.value =
        adults.value +
        " dospělí " +
        (parseInt(children.value) + parseInt(baby.value)) +
        " dítě";
    } else if (
      parseInt(adults.value) !== 0 &&
      parseInt(children.value) + parseInt(baby.value) === 0
    ) {
      total.value =
        adults.value +
        " dospělí " +
        (parseInt(children.value) + parseInt(baby.value)) +
        " dítě";
    } else if (
      parseInt(adults.value) !== 0 &&
      parseInt(children.value) + parseInt(baby.value) !== 0
    ) {
      total.value =
        adults.value +
        " dospělí " +
        (parseInt(children.value) + parseInt(baby.value)) +
        " dítě";
    } else {
      total.value = "2 dospělí 0 dítě";
    }
  };
});
// easypick calendar start
const picker = new easepick.create({
  element: "#checkin",
  // css: [
  //   "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css",
  // ],
  css: ["css/main.css"],
  zIndex: 10,
  format: "DD.MM.YYYY",
  grid: 2,
  calendars: 2,
  lang: "cs-CZ",
  RangePlugin: {
    elementEnd: "#checkout",
    delimiter: ".",
    locale: {
      one: "noc",
      few: "nocí",
      other: "nocí",
    },
  },

  plugins: ["RangePlugin"],
});
// easypick calendar end

