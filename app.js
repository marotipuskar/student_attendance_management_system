// document.getElementById("attendanceForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     // Collect form data
//     const prnno = document.getElementsByName("prnno")[0].value;
//     const Name = document.getElementsByName("Name")[0].value;
//     const Class = document.getElementsByName("class")[0].value;
//     const Branch = document.getElementsByName("Branch")[0].value;
//     const Dates = document.getElementsByName("Dates")[0].value;

//     // Create an object with the form data
//     const formData = {
//         prnno: prnno,
//         Name: Name,
//         Class: Class,
//         Branch: Branch,
//         Dates: Dates
//     };

//     // Send the form data to the server (you can use AJAX/fetch for this)
//     fetch("/submit-attendance", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data); // Handle the response from the server
//         // Optionally, you can redirect or show a success message to the user
//     })
//     .catch(error => {
//         console.error("Error:", error);
//         // Handle errors if any
//     });
// });