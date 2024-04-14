var request = document.querySelector("h3");

var addBtn = document.querySelector("#add");

var removeBtn = document.querySelector("#remove");

addBtn.addEventListener("click", function (dets) {
    request.innerHTML = "Friends";
})

removeBtn.addEventListener("click", function () {
    request.innerHTML = "Unknown";
});

