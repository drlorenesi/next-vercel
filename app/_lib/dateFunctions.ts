export function getFirstDayOfMonth(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);

  const formattedFirstDay = `${firstDay.getFullYear()}-${String(
    firstDay.getMonth() + 1
  ).padStart(2, "0")}-${String(firstDay.getDate()).padStart(2, "0")}`;

  return formattedFirstDay;
}
