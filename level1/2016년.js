function solution(a, b) {
  const day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const month = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  let daysMonthly = 0;
  let count = 1;
  while (count < a) {
    daysMonthly += month[count];
    count++;
  }
  const dayIndex = (daysMonthly + b) % 7;
  return day[dayIndex];
}
console.log(solution(9, 1));
