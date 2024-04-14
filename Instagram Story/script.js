var clutter = "";

for (var i = 0; i < 6; i++) {
    clutter += `<div class="story">
    <img src="./sage.jpg" alt="">
</div>`
};

document.querySelector(".nav").innerHTML = clutter;