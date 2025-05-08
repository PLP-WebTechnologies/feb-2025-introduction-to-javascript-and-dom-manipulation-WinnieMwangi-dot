// Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", function() {
    document.getElementById("text-content").textContent = "The text has been changed!";
});

// Modify CSS styles via JavaScript
document.getElementById("change-style-btn").addEventListener("click", function() {
    const styleText = document.getElementById("style-text");
    styleText.style.color = "red";
    styleText.style.fontSize = "24px";
    styleText.style.fontWeight = "bold";
});

// Add or remove an element when a button is clicked
document.getElementById("add-element-btn").addEventListener("click", function() {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new element added dynamically!";
    newElement.style.backgroundColor = "#ecf0f1";
    newElement.style.padding = "10px";
    newElement.style.borderRadius = "5px";
    newElement.style.marginTop = "10px";
    document.getElementById("new-element-container").appendChild(newElement);
});
