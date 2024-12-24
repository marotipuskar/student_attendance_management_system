// document.addEventListener("DOMContentLoaded", function () {
//     fetch('/getAttendanceData')
//         .then(response => response.json())
//         .then(data => {
//             displayAttendanceData(data);
//             originalData = data; // Store the original data for resetting the filter
//         })
//         .catch(error => console.error('Error fetching attendance data:', error));
// });

// let originalData; // Store the original data for resetting the filter

// function displayAttendanceData(attendanceData) {
//     const attendanceListDiv = document.getElementById('attendanceList');
//     attendanceListDiv.innerHTML = '';

//     if (attendanceData.length === 0) {
//         attendanceListDiv.innerHTML = '<p>No attendance records available.</p>';
//         return;
//     }

//     const table = document.createElement('table');
//     table.innerHTML = `
//         <tr>
//             <th>PRN No.</th>
//             <th>Name</th>
//             <th>Class</th>
//             <th>Branch</th>
//             <th>Date</th>
//         </tr>
//     `;

//     attendanceData.forEach(record => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${record.prnNo}</td>
//             <td>${record.name}</td>
//             <td>${record.class}</td>
//             <td>${record.branch}</td>
//             <td>${new Date(record.date).toLocaleDateString()}</td>
//         `;
//         table.appendChild(row);
//     });

//     attendanceListDiv.appendChild(table);
// }

function searchRecords() {
    console.log("search records")
    const prnSearchValue = document.getElementById('prnSearch').value;
    const nameSearchValue = document.getElementById('nameSearch').value.toLowerCase();

    const filteredData = originalData.filter(record => {
        const prnMatch = prnSearchValue ? record.prnNo.toString().includes(prnSearchValue) : true;
        const nameMatch = nameSearchValue ? record.name.toLowerCase().includes(nameSearchValue) : true;

        return prnMatch && nameMatch;
    });

    displayAttendanceData(filteredData);
}

























































document.addEventListener("DOMContentLoaded", function () {
    fetch('/getAttendanceData')
        .then(response => response.json())
        .then(data => displayAttendanceData(data))
        .catch(error => console.error('Error fetching attendance data:', error));
});

function displayAttendanceData(attendanceData) {
    const attendanceListDiv = document.getElementById('attendanceList');
    attendanceListDiv.innerHTML = '';

    if (attendanceData.length === 0) {
        attendanceListDiv.innerHTML = '<p>No attendance records available.</p>';
        return;
    }

    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>PRN No.</th>
                
                <th>Class</th>
                <th>Branch</th>
                <th>Date</th>
            </tr>
        </thead>
    `;

    attendanceData.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.prnNo}</td>
            
            <td>${record.class}</td>
            <td>${record.branch}</td>
            <td>${new Date(record.date).toLocaleDateString()}</td>
        `;
        table.appendChild(row);
    });

    attendanceListDiv.appendChild(table);
}
