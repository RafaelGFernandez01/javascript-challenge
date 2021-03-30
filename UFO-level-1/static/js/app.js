// from data.js
var tableData = data;
console.log( 'tableData:', tableData);

const render = (data) => {
    const tbodyRef = document
    .getElementById('ufo-data-table')
    .getElementsByTagName('tbody' )[0];

    console.log('tbodyRef', tbodyRef);

    for (const element of tableData) {
        console.log('element' , element);

        addRow(tbodyRef, element);
    }
};

const addRow = (tbodyRef, element) => {
    // Insert a row at the end of the table
    const newRow = tbodyRef.insertRow();

    //for each col add a new cell
    const colsAttr = [
        'datetime',
        'city',
        'state',
        'country',
        'shape',
        'durationMinutes',
        'comments',
    ];

    for (const col of colsAttr) {
        const value = element[col];
    
        // Insert a cell at the end of the row
    const newCell = newRow.insertCell();

    //Append a text node to the cell
    const newText = document.createTextNode(value);
    newCell.appendChild(newText);
    }
};

render(tableData);








