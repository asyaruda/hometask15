const tableContainer = document.getElementById('multiplication-table')

const table = document.createElement('table')
table.classList.add('table')

const thead = document.createElement('thead')
const headerRow = document.createElement('tr')

const emptyHeaderCell = document.createElement('th')
headerRow.appendChild(emptyHeaderCell)

for (let i = 1; i <= 10; i++) {
  const th = document.createElement('th')
  th.textContent = i
  headerRow.appendChild(th)
}

thead.appendChild(headerRow)
table.appendChild(thead)

const tbody = document.createElement('tbody')

for ( i = 1; i <= 10; i++) {
  const row = document.createElement('tr')

  const verticalHeaderCell = document.createElement('th')
  verticalHeaderCell.textContent = i
  row.appendChild(verticalHeaderCell)

  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement('td')
    cell.textContent = i * j
    row.appendChild(cell)
  }

  tbody.appendChild(row)
}

table.appendChild(tbody)

tableContainer.appendChild(table)