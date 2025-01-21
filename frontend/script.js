// light and dark mode
document.addEventListener('DOMContentLoaded', () => {
   document.getElementById("light-mode").onclick = function() {
    document.body.style.backgroundColor = "white";
    document.getElementById("light-mode").style.display = 'none';
    document.getElementById("dark-mode").style.display = 'block';
    document.body.classList.remove("dark-mode");
   }

   document.getElementById("dark-mode").onclick = function() {
    document.body.style.backgroundColor = "#2b2b2b";
    document.getElementById("light-mode").style.display = 'block';
    document.getElementById("dark-mode").style.display = 'none';
    document.body.classList.add("dark-mode");
   }

   
// Adding event 

// Adding event

var tableData = [];

document.getElementById("addEventBtn").onclick = function() {
  document.getElementById("myModal").style.display = "block";
};

document.querySelector("#addEventForm").onsubmit = function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var location = document.getElementById("location").value;
    var ticket = document.getElementById("ticket").value;
    var time = document.getElementById("time").value;
    var date = document.getElementById("date").value;
    var image = document.getElementById("image").files[0];
    if (tableData.some(data => data.name === name && data.description === description && data.location === location &&  data.ticket === ticket && data.time === time && data.date === date)) {
      alert("Duplicate entry not allowed.");
      return;
    }
    tableData.push({name: name, description: description, location: location,ticket: ticket, time: time, date: date, image: image});
    saveTableData();
    var table = document.getElementById("eventTable");
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    cell1.innerHTML = name;
    cell2.innerHTML = description;
    cell3.innerHTML = location;
    cell4.innerHTML = ticket;
    cell5.innerHTML = time;
    cell6.innerHTML = date;
    cell7.innerHTML = `<img src="${data.image}" alt="Image" style="width:50px;height:50px;">`;
    cell8.innerHTML = '<i class="fa-solid fa-pen-to-square" class="editButton" onclick="editRow(.this)"></i> <i class="fa-solid fa-trash" class="deleteButton" onclick="deleteRow(.this)"></i>';
    document.getElementById("myModal").style.display = "none";
    document.getElementById("messageArea").innerHTML = "Success!";
};

document.querySelector(".close").onclick = function() {
  document.getElementById("myModal").style.display = "none";
};
document.getElementById("submitEvent").onclick = function() {
    document.getElementById("myModal").style.display = "none";
}

// Function to save table data to sessionStorage
function saveTableData() {
    sessionStorage.setItem("tableData", JSON.stringify(tableData));
}

// Function to load table data from sessionStorage
function loadTableData() {
    tableData = JSON.parse(sessionStorage.getItem("tableData")) || [];
    var table = document.getElementById("eventTable");
    tableData.forEach(function(data) {
        var newRow = table.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
        var cell7 = newRow.insertCell(6);
        var cell8 = newRow.insertCell(7);
        cell1.innerHTML = data.name;
        cell2.innerHTML = data.description;
        cell3.innerHTML = data.location;
        cell4.innerHTML = data.ticket;
        cell5.innerHTML = data.time;
        cell6.innerHTML = data.date;
        cell7.innerHTML = `<img src="${data.image}" alt="Image" style="width:50px;height:50px;">`;
        cell8.innerHTML = '<i class="fa-solid fa-pen-to-square" class="editButton" onclick="editRow(.this)"></i> <i class="fa-solid fa-trash" class="deleteButton" onclick="deleteRow(.this)"></i>';
    });
}

// Load table data when the page loads
window.onload = function() {
    loadTableData();
};

// Function to filter events based on search input
document.getElementById("search-bar").addEventListener("input", function() {
  var searchValue = this.value.toLowerCase();
  var table = document.getElementById("eventTable");
  var rows = table.getElementsByTagName("tr");  // Get all rows in the table
  for (var i = 1; i < rows.length; i++) {  // Start from 1 to skip the header row
      var cells = rows[i].getElementsByTagName("td");
      var found = false;

      // Loop through each cell in the row and check if any cell contains the search value
      for (var j = 0; j < cells.length - 1; j++) { // Exclude the action buttons cell
          if (cells[j].innerHTML.toLowerCase().indexOf(searchValue) > -1) {
              found = true;
              break;
          }
      }

      // Show or hide the row based on whether the search value was found
      if (found) {
          rows[i].style.display = "";
      } else {
          rows[i].style.display = "none";
      }
  }
});




});
