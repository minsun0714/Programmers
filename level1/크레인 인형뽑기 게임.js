function solution(board, moves) {
  let rooms = [];
  for (let i = 0; i < board.length; i++) {
    let room = [];
    for (let j = 0; j < board.length; j++) {
      room.push(board[board.length - j - 1]?.[i]);
    }
    rooms.push(room.filter((v) => v));
  }
  let basket = [];
  let count = 0;
  for (let v of moves) {
    if (!rooms[v - 1].length) break;
    basket.push(rooms[v - 1][rooms[v - 1].length - 1]);
    rooms[v - 1].pop();
    while (
      (basket.length > 1) &
      (basket[basket.length - 1] === basket[basket.length - 2])
    ) {
      basket.pop();
      basket.pop();
      count += 2;
    }
  }
  return count;
}
console.log(
  solution(
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [2, 3, 4, 5]
  )
);
