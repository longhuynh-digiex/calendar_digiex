const DAY = 31;
const MONTH = 12;
const monthAndYearInfo = document.querySelector(".month-year");
const dateInfo = document.querySelector(".date");
const dowInfo = document.querySelector(".dow");
const tableTitle = document.querySelector(".table__title");
const prevMonth = document.querySelector("#prev-month");
const prevYear = document.querySelector("#prev-year");
const nextMonth = document.querySelector("#next-month");
const nextYear = document.querySelector("#next-year");
const current = document.querySelector("#current");
const datesSelect = document.querySelector("#dates-select");
const monthsSelect = document.querySelector("#months-select");
const yearInput = document.querySelector("#year-input");
const browseDate = document.querySelector("#browse-date");

let today = new Date();

const dayName = ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}
const firstDateOfMonth = (date = new Date()) =>
  new Date(date.getFullYear(), date.getMonth(), 1).getDate();

function renderView(date = new Date()) {
  monthAndYearInfo.textContent = `tháng ${
    date.getMonth() + 1
  } năm ${date.getFullYear()}`;
  dateInfo.textContent = date.getDate();
  dowInfo.textContent = dayName[date.getDay()];
  const startDow = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  tableTitle.innerHTML = ` <div class="content">CN</div>
            <div class="content">T2</div>
            <div class="content">T3</div>
            <div class="content">T4</div>
            <div class="content">T5</div>
            <div class="content">T6</div>
            <div class="content">T7</div>`;
  for (let i = 0; i < startDow; i++) {
    const content = document.createElement("div");
    content.setAttribute("class", "content");
    content.textContent = "";
    tableTitle.appendChild(content);
  }

  for (let i = 1; i <= daysInMonth(date.getMonth(), date.getFullYear()); i++) {
    const content = document.createElement("div");
    content.setAttribute("class", "content");
    content.textContent = i;

    if (content.textContent == date.getDate()) {
      content.classList.add("selected");
    }
    tableTitle.appendChild(content);
  }
}
const renderNavigator = () => {
  for (let i = 1; i <= DAY; i++) {
    const opt = document.createElement("option");
    opt.classList.add("value", i);
    opt.textContent = i;
    datesSelect.appendChild(opt);
  }
  for (let i = 1; i <= MONTH; i++) {
    const opt = document.createElement("option");
    opt.classList.add("value", i);
    opt.textContent = i;
    monthsSelect.appendChild(opt);
  }
};
tableTitle.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("content") &&
    isFinite(event.target.textContent) &&
    event.target.textContent !== ""
  ) {
    const clickedDate = event.target.textContent;
    today.setDate(clickedDate)

    renderView(new Date(today.getFullYear(), today.getMonth(), clickedDate));
  }
});
prevMonth.addEventListener("click", () => {
  const lastMonth = new Date(today.setMonth(today.getMonth() - 1));
  renderView(lastMonth);
});
prevYear.addEventListener("click", () => {
  const lastYear = new Date(today.setFullYear(today.getFullYear() - 1));
  renderView(lastYear);
});
nextMonth.addEventListener("click", () => {
  const nextMonth = new Date(today.setMonth(today.getMonth() + 1));
 
  
  renderView(nextMonth);
});
nextYear.addEventListener("click", () => {
  const nextYear = new Date(today.setFullYear(today.getFullYear() + 1));
  renderView(nextYear);
});
current.addEventListener("click", () => {
  today = new Date();
  renderView();
});
browseDate.addEventListener("click", () => {
  const selectedMonth = monthsSelect.value - 1;  
  const inputedyear = yearInput.value;  
  const selectedDate = datesSelect.value;
  const dayNums = daysInMonth(selectedMonth, inputedyear);
  if (selectedDate > dayNums) {
    window.alert("date not exist");
  } else {
    today.setDate(datesSelect.value);
    today.setMonth(monthsSelect.value - 1);
    today.setFullYear(yearInput.value);
  }
  renderView(today);
});
renderView(today);
renderNavigator();
