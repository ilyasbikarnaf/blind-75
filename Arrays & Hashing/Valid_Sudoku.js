class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    const rows = new Map();
    const cols = new Map();
    const squares = new Map();

    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board.length; c++) {
        if (board[r][c] === ".") continue;

        const squareKey = `${Math.floor(c / 3)}, ${Math.floor(r / 3)}`;

        if (
          (rows.has(r) && rows.get(r).has(board[r][c])) ||
          (cols.has(c) && cols.get(c).has(board[r][c])) ||
          (squares.has(squareKey) && squares.get(squareKey).has(board[r][c]))
        ) {
          return false;
        }

        if (!rows.has(r)) rows.set(r, new Set());
        if (!cols.has(c)) cols.set(c, new Set());
        if (!squares.has(squareKey)) squares.set(squareKey, new Set());

        rows.get(r).add(board[r][c]);
        cols.get(c).add(board[r][c]);
        squares.get(squareKey).add(board[r][c]);
      }
    }

    return true;
  }
}
