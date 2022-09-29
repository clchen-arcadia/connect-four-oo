class Board{
  constructor(height = 6, width = 7, p1Color 'red', p2Color = 'blue'){
    this.height = height;
    this.width = width;
    this.p1Color = p1Color;
    this.p2Color = p2Color;

    this.board = [];
    this.currPlayer = 1;

    this.makeBoard();
  }

  makeBoard() {
    for (let y = 0; y < this.height; y++) {
      this.board.push(Array.from({ length: this.width })); //TODO: don't understand 'length' here
    }

  makeHtmlBoard() {
      const board = document.getElementById('board');

      // make column tops (clickable area for adding a piece to that column)
      const top = document.createElement('tr');
      top.setAttribute('id', 'column-top');
      top.addEventListener('click', handleClick);

      for (let x = 0; x < this.width; x++) {
        const headCell = document.createElement('td');
        headCell.setAttribute('id', x);
        top.append(headCell);
      }

      board.append(top);

      // make main part of board
      for (let y = 0; y < this.height; y++) {
        const row = document.createElement('tr');

        for (let x = 0; x < this.width; x++) {
          const cell = document.createElement('td');
          cell.setAttribute('id', `${y}-${x}`);
          row.append(cell);
        }

        board.append(row);
      }
    }

    /** findSpotForCol: given column x, return top empty y (null if filled) */

    findSpotForCol(x) {
      for (let y = this.height - 1; y >= 0; y--) {
        if (!board[y][x]) {
          return y;
        }
      }
      return null;
    }

}
