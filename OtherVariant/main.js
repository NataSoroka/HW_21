window.onload = function() {
    var mouseX, mouseY, rect, left, top;
    var block = document.querySelector(".block");

    document.body.addEventListener("mousemove", function(event) {
        mouseX = event.offsetX;
        mouseY = event.offsetY;



        rect = block.getBoundingClientRect();

        left = Math.floor(rect.left);
        top = Math.floor(rect.top);

        // console.log(left);
        // console.log(top);

        // console.log("Мышка Х = " + mouseX, "Блок слева = " + (left - 50));
        // console.log("Мышка по У = " + mouseY, "Блок сверху = " + (top - 50));

        // console.log("Подход к блоку по Х " + (mouseX == (left - 50)));
        // console.log("В пределах блока по У от верха " + (mouseY > top));
        // console.log("В пределах блока по У от низа " + (mouseY < (top + 200)));

        console.log(mouseX < left);



        if ((mouseX < left) && (mouseX > (left - 100)) && (mouseY > top) && (mouseY < (top + 200))) {
            block.style.left = rect.left + 50 + "px";
        }
        if ((mouseX > (left + 250)) && (mouseX < (left + 300)) && (mouseY > top) && (mouseY < (top + 200))) {
            block.style.left = rect.left - 50 + "px";
        }
        if ((mouseY < top) && (mouseY > (top - 100)) && (mouseX > left) && (mouseX < (left + 200))) {
            block.style.top = rect.top + 50 + "px";
        }
        if ((mouseY > (top + 250)) && (mouseY < (top + 300)) && (mouseX > left) && (mouseX < (left + 200))) {
            block.style.top = rect.top - 50 + "px";
        }
    })

}