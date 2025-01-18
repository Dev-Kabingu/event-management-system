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
//    adding event
document.getElementById("addEventBtn").onclick = function() { document.getElementById("add-event-modal").style.display = "block"; 
}; 
document.getElementById("add-event-form").onsubmit = function(event) {
     event.preventDefault(); 
     const table = document.getElementById("eventTable"); 
     const newRow = table.insertRow(); 
     const cells = newRow.insertCell(); 
     cells.innerHTML = document.getElementById("event-name").value; 
     cells = newRow.insertCell(); 
     cells.innerHTML = document.getElementById("location").value; 
     cells = newRow.insertCell(); 
     cells.innerHTML = document.getElementById("time").value; cells = newRow.insertCell();
     cells.innerHTML = document.getElementById("date").value; cells = newRow.insertCell(); 
     cells.innerHTML = `<i class="fa-solid fa-trash" onclick="confirmDelete(this)"></i> <i class="fa-solid fa-pen-to-square"></i>`; 
     closeModal(); 
    };
document.getElementById("close").onclick = function() {
    document.getElementById("add-event-modal").style.display = 'none';
}

});
