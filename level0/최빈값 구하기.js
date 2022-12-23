function solution(array) {
  //for문 돌리면서 직전값과 비교할 수 있도록 오름차순 정렬
  const arraySorted = array.sort((a, b) => a - b);

  let result = [];
  let counter = 0;
  // 오름차순된 정렬을 원소 하나씩 돌면서 counter를 빈 배열에 넣어줌.
  // 직전값과 같은 경우 Counter 1씩 증가, 다를 경우 counter를 0으로 초기화하고 1 증가.
  for (let i = 0; i < arraySorted.length; i++) {
    if (arraySorted[i] === arraySorted[i - 1]) {
      counter++;
      result.push(counter);
    } else {
      counter = 0;
      counter++;
      result.push(counter);
    }
  }

  // 배열에서 가장 큰 값들만 필터해서 새로운 배열을 만듦.
  // 배열의 길이가 1보다 크면 최빈값이 2개 이상이므로 -1 리턴.
  // 배열의 길이가 1보다 크지 않을 경우, 최대값에 상응한 기존 오름차순 배열 내 인덱스를 반환.
  return result.filter((v) => v === Math.max(...result)).length > 1
    ? -1
    : arraySorted[result.indexOf(Math.max(...result))];
}
console.log(solution([1, 2, 3, 3, 3, 4, 4]));

function solution(array) {
  // 빈 맵 선언
  let m = new Map();

  // array를 for..of 문으로 한 바퀴 돌면서 빈 맵에 키와 밸류 추가.
  // 키 : 배열의 원소
  // 밸류 : 배열 원소의 빈도
  // 기존 맵에 아직 해당 키가 정의 되어 있지 않을 경우 밸류가 0일 것이다. 이때는 1을 더한다.
  // 만약 해당 키기 이미 정의되어 있다면, 그 키를 찾아 기존 밸류에 1을 더해준다.
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);

  //맵을 쫙 펴서 배열로 만들고, 빈도수 기준으로 내림차순 정렬.
  m = [...m].sort((a, b) => b[1] - a[1]);

  // 배열의 첫번째 원소와 두번째 원소의 빈도수를 비교.
  // 첫번째 원소의 빈도수가 두번째 원소의 빈도수보다 크면 최빈값이 유일하기 때문에 해당값 리턴.
  // 배열의 길이가 1이면 값이 유일하여 자기 자신이 최빈값이므로 해당값 리턴
  // 배열의 길이가 1도 아니고 첫번째 원소의 빈도수와 두번째 원소의 빈도수가 같다면 2개 이상의 최빈값이 나타나므로 -1 리턴
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
console.log(solution([1, 2, 3, 3, 3, 4, 4]));
