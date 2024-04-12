const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    console.log("clicked");
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li"); // creating the li element
        li.innerHTML = inputBox.value; // adding value in text inside the li
        listContainer.appendChild(li); // add this li is displyed inside the li-container class
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); // we have this because we have to add this in front of the list
    }
    inputBox.value = ""; // this is for the empty the search box after the adding the element
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // storing the all list items in data
}

// whenever we refresh the browser
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();