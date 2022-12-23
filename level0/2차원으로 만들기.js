function solution(num_list, n) {
  let bigArr = [];

  //조그마한 배열에 원소를 n개 씩 넣는데에 for문 하나,
  // 조그마한 배열을 큰 배열에 넣는데에 for문 하나
  //2중 for문 사용(이럴 필요가 없었따)
  for (let j = 0; j < num_list.length; j += n) {
    let array = [];
    //작은 for문 n바퀴 돌아 작은 배열 하나가 완성되면, 2번째 작은 배열 만들 때 n+1번째 원소부터 돌아야하므로 j에 n을 더하고 n+1~n+j바퀴 돈다.
    for (let i = j; i < j + n; i++) {
      array.push(num_list[i]);
    }
    bigArr.push(array);
  }
  return bigArr;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));

function solution(num_list, n) {
  var answer = [];

  console.log(num_list.splice(0, n)); //인덱스 0부터 n개의 원소를 잘라 배열로 반환
  console.log(num_list); // num_list가 앞에서 splice 당해버렸으므로 배열 자체가 잘린 채로 반환

  //기존 배열의 길이가 0이 될 때까지 앞에서부터 n개씩 자른 배열을 빈 배열(answer)에 push
  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
