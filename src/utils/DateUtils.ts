export function getLastFourMonths() {
  let currentMonth = new Date().getMonth();
  const lastFourMonths = [];

  for (let i = 0; i < 4; i++) {
    if (currentMonth < 0) {
      currentMonth = 11;
    }
    lastFourMonths.unshift(monthNames[currentMonth]);
    currentMonth--;
  }

  return lastFourMonths;
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
