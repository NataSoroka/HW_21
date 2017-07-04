window.onload = function() {

    var container = document.querySelector(".container");
    var rect;

    container.querySelector(".left").addEventListener("mouseover", function() {
        rect = container.getBoundingClientRect();
        container.style.left = rect.left + 30 + "px";
    })
    container.querySelector(".right").addEventListener("mouseover", function() {
        rect = container.getBoundingClientRect();
        container.style.left = rect.left - 30 + "px";
    })
    container.querySelector(".top").addEventListener("mouseover", function() {
        rect = container.getBoundingClientRect();
        container.style.top = rect.top + 30 + "px";
    })
    container.querySelector(".bottom").addEventListener("mouseover", function() {
        rect = container.getBoundingClientRect();
        container.style.top = rect.top - 30 + "px";
    })

}