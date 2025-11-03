const monthAndYearInfo = document.querySelector(".month-year");
const dateInfo = document.querySelector(".date");
const dowInfo = document.querySelector(".dow");
const tableTitle = document.querySelector(".table__title");

const today = new Date();

const dayName = ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
const firstDateOfMonth = (date = new Date()) =>
  new Date(date.getFullYear(), date.getMonth(), 1).getDate();

function renderView(date = new Date()) {
  console.log(date);
  monthAndYearInfo.textContent = `tháng ${
    date.getUTCMonth() + 1
  } năm ${date.getFullYear()}`;
  dateInfo.textContent = date.getDate();
  dowInfo.textContent = dayName[date.getDay()];
  const startDow = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  console.log(startDow);

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
    content.textContent = null;
    tableTitle.appendChild(content);
  }

  for (let i = 1; i <= daysInMonth(date.getMonth(), date.getFullYear()); i++) {
    const content = document.createElement("div");
    content.setAttribute("class", "content");
    content.textContent = i;
    // console.log(content.textContent);
    if (content.textContent == date.getDate()) {
      content.classList.add("selected");
    }
    tableTitle.appendChild(content);
  }
}

tableTitle.addEventListener("click", (event) => {
  if (event.target.classList.contains("content")) {
    const clickedDate = event.target.textContent;
    console.log(clickedDate);
    renderView(new Date(2025, 10, clickedDate));
  }
});

renderView(new Date(2025, 10, 2));
