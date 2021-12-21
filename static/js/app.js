// Import data file
import { data } from './data.js';

// Grab "tbody" tag
const tbody = d3.select("tbody");

// Create a function that builds the table
const buildTable = (someData) => {
    // Clear any existing data
    tbody.html("");

    // Loop through data
    someData.forEach(dataRow => {
        // Append 'tr' to 'tbody'
        const row = tbody.append("tr");

        //Loop through each object value
        Object.values(dataRow).forEach(value => {
            // Append each object value (cell) to the row 
            const cell = row.append("td")
            cell.text(value)
        });
    })
}

// Create a function that allows you to filter through the data
const filterTable = (event) => {
    // Prevent page refresh
    d3.event.preventDefault();

    // Grab the filter box values
    const date = d3.select("#datetime").property("value");

    if (date) {
        return buildTable(data.filter(row => row.datetime === date))
    } else {
        alert('Please enter a valid date range')
    }
}

// Attach the filtering function on click
d3.selectAll("#filter-btn").on("click", filterTable)

// Attach the filtering function on submit
d3.selectAll("#search-form").on("submit", filterTable)

buildTable(data);
