const board = document.getElementById('board');
const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const reversedAlphabets = [...alphabets].reverse();

for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
  const row = document.createElement('tr');

  for (let colIndex = 0; colIndex < 8; colIndex++) {
    const cell = document.createElement('td');

    // Top row labels with alphabets
    if (rowIndex === 0) {
      cell.textContent = alphabets[colIndex];
      cell.style.fontWeight = 'bold';
      cell.style.textAlign = 'center';
    }
    // Bottom row labels with reversed alphabets
    else if (rowIndex === 7) {
      cell.textContent = reversedAlphabets[colIndex];
      cell.style.fontWeight = 'bold';
      cell.style.textAlign = 'center';
    }

    else {
      cell.textContent = '';
    }

    row.appendChild(cell);
  }

  board.appendChild(row);
}
