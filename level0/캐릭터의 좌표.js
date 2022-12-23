//나의 풀이
function solution(keyinput, board) {
  const arr = [0, 0];
  for (let i = 0; i < keyinput.length; i++) {
    if ((keyinput[i] === "left") & (arr[0] > Math.ceil(board[0] / -2))) {
      arr[0]--;
    } else if (
      (keyinput[i] === "right") &
      (arr[0] < Math.floor(board[0] / 2))
    ) {
      arr[0]++;
    } else if ((keyinput[i] === "up") & (arr[1] < parseInt(board[1] / 2))) {
      arr[1]++;
    } else if ((keyinput[i] === "down") & (arr[1] > parseInt(board[1] / -2))) {
      arr[1]--;
    }
  }
  return arr;
}
console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));

// switch를 이용한 풀이
function solution(keyinput, board) {
  let res = [0, 0];
  for (let dir of keyinput) {
    switch (dir) {
      case "left":
        res[0] > Math.ceil((board[0] / 2) * -1)
          ? (res = [res[0] - 1, res[1]])
          : null;
        break;
      case "right":
        res[0] < Math.floor(board[0] / 2) ? (res = [res[0] + 1, res[1]]) : null;
        break;
      case "up":
        res[1] < Math.floor(board[1] / 2) ? (res = [res[0], res[1] + 1]) : null;
        break;
      case "down":
        res[1] > Math.ceil((board[1] / 2) * -1)
          ? (res = [res[0], res[1] - 1])
          : null;
        break;
    }
  }
  return res;
}
console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));

//굳이 삼항 연산자 쓸 필요 없음. else일 때 아무것도 안하므로 if가 더 간단.
//이를 반영하여 코드 정리
function solution(keyinput, board) {
  let res = [0, 0];
  for (let dir of keyinput) {
    switch (dir) {
      case "left":
        if (res[0] > Math.ceil((board[0] / 2) * -1)) res = [res[0] - 1, res[1]];
        break;
      case "right":
        if (res[0] < Math.floor(board[0] / 2)) res = [res[0] + 1, res[1]];
        break;
      case "up":
        if (res[1] < Math.floor(board[1] / 2)) res = [res[0], res[1] + 1];
        break;
      case "down":
        if (res[1] > Math.ceil((board[1] / 2) * -1)) res = [res[0], res[1] - 1];
        break;
    }
  }
  return res;
}
console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
