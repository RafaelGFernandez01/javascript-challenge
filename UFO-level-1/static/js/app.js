// from data.js
var tableData = data;

const clearTable = () => {
    const oldTbody = document
        .getElementById('ufo-data-table')
        .getElementsByTagName('tbody' )[0];
    const newTbody = document.createElement('tbody');
    oldTbody.parentNode.replaceChild(newTbody, oldTbody);
};

const getData = () => {
    const filterValue = document
        .getElementById('datetime').value;
        
    if (filterValue === '') {
        return tableData;
    } else {
        return tableData.filter((element) => {
            return element.datetime === filterValue;
        });    
    }
};

const render = () => {
    clearTable();
    const dataToRender = getData();

    const tbodyRef = document
        .getElementById('ufo-data-table')
        .getElementsByTagName('tbody' )[0];

    for (const element of dataToRender) {
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

document
    .getElementById('filter-btn')
    .addEventListener('click', render);

render();
