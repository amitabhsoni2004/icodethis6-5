let icons = document.querySelectorAll(".icon");
let previousIcon = null; // Variable to keep track of the previously clicked icon

icons.forEach(icon => {
    icon.addEventListener("click", () => {
        // If there was a previously clicked icon, reset its color to the default
        if (previousIcon) {
            previousIcon.querySelector("svg").style.color = "#465795";
            previousIcon.style.color = "#465795";
        }

        // First, hide all hr elements
        document.querySelectorAll(".hr").forEach(hr => {
            hr.style.display = "none";
        });

        // Display the hr that is a child of the clicked icon
        icon.querySelector(".hr").style.display = "block";
        icon.querySelector(".hr").style.width = `100%`;

        // Change the color of the SVG icon and the text to white
        icon.querySelector("svg").style.color = "white";
        icon.style.color = "white";

        // Store the currently clicked icon as the previous icon
        previousIcon = icon;
    });
});
icons[1].click(); // Simulate a click on the second icon


let Followers = document.querySelector(".Followers");
let followBtn = document.querySelector(".followBtn");

followBtn.addEventListener("click", () => {
    let currentFollowers = parseInt(Followers.textContent, 10);
    
    if (followBtn.textContent === "Follow") {
        Followers.textContent = currentFollowers + 1;
        followBtn.textContent = "Unfollow"; 
    } else {
        Followers.textContent = currentFollowers - 1;
        followBtn.textContent = "Follow";
    }
});






let icon1 = document.querySelector(".icon1");
let icon2 = document.querySelectorAll(".icon2");
let icon3 = document.querySelectorAll(".icon3");
let article = document.querySelector("article");
let header = document.querySelector("header");
let aside = document.querySelector("aside");
let gallery = document.querySelector(".gallery");

// icon2.addEventListener("click",()=>{
// })
icon2.forEach(icon => {
    icon.addEventListener("click", () => {
        visible(aside)
        none(gallery)
        none(article);

    })
});
icon1.addEventListener("click", () => {
    visible(gallery)
    none(article);
    none(aside);
})

icon3.forEach(icon => {
    icon.addEventListener("click",()=>{
        visible(article)
        none(gallery)
        none(aside);
    })
});

// icon3.addEventListener("click", () => {
// })
function none(value) {
    value.style.display = "none";
}
function visible(value) {
    value.style.display = "flex";
}