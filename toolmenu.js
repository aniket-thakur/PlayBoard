pencil.addEventListener("click", function () {
    if (cTool == "pencil") {
        option[0].style.display = "flex";
    }
    else {
        cTool = "pencil";
        // <!-- pencil.style.border = "1px solid red"; -->
        for (let i = 0; i < option.length; i++) {
            option[i].style.display = "none";
            tool.lineWidth = 1;
        }
    }
})
eraser.addEventListener("click", function () {
    tool.strokeStyle = "white";
    if (cTool == "eraser") {
        option[1].style.display = "flex";
    }
    else {
        cTool = "eraser";
        for (let i = 0; i < option.length; i++) {
            option[i].style.display = "none";
            tool.lineWidth = 1;
        }
    }
})
getRec.addEventListener("click", function () {
    if (cTool == "rec") {
        option[2].style.display = "flex";
    }
    else {
        cTool = "rec";
        for (let i = 0; i < option.length; i++) {
            option[i].style.display = "none";
            tool.lineWidth = 1;
        }
    }
})
getLine.addEventListener("click", function () {
    if (cTool == "line") {
        option[3].style.display = "flex";
    }
    else {
        cTool = "line";
        for (let i = 0; i < option.length; i++) {
            option[i].style.display = "none";
            tool.lineWidth = 1;
        }
    }
})

let pencilSize;
let eraserSize;
let recSize;
let lineSize;
let boxsize = document.querySelectorAll(".size-change");


boxsize[0].addEventListener("click", function (e) {

    let elements = ["size1", "size2", "size3", "size4"]; // An array of class names representing different sizes
    let allTheClasses = e.target.classList;  // Get the list of classes of the clicked element
    //console.log(e.currentTarget);  // Extract the first class from the list of classes
    let firstClass = allTheClasses[0];   // size1 <- 0 index  size <- 1 index
    let test = elements.includes(firstClass);  // Check if the first class is one of the predefined size classes
    // console.log(firstClass);
    if (test) {
        if (firstClass == 'size1') {
            pencilSize = 3;

        } else if (firstClass == 'size2') {
            pencilSize = 5;

        }
        else if (firstClass == 'size3') {
            pencilSize = 7;

        }
        else if (firstClass == 'size4') {
            pencilSize = 10;

        }
        console.log("pencil" + pencilSize);
        tool.lineWidth = pencilSize;

    }
})

boxsize[1].addEventListener("click", function (e) {
    tool.lineWidth = eraserSize;
    let elements = ["size1", "size2", "size3", "size4"];
    let allTheClasses = e.target.classList;  // classlist is size1 size, size2 size etc
    //   <!-- console.log(allTheClasses); -->
    //console.log(e.currentTarget);
    let firstClass = allTheClasses[0];   // size1 <- 0 index  size <- 1 index
    let test = elements.includes(firstClass);
    // console.log(firstClass);
    if (test) {
        if (firstClass == 'size1') {
            eraserSize = 5;

        } else if (firstClass == 'size2') {
            eraserSize = 10;

        }
        else if (firstClass == 'size3') {
            eraserSize = 20;

        }
        else if (firstClass == 'size4') {
            eraserSize = 30;

        }
        // console.log("erasr" + eraserSize);
        tool.lineWidth = eraserSize;
    }
})


boxsize[2].addEventListener("click", function (e) {
    tool.lineWidth = recSize;
    let elements = ["size1", "size2", "size3", "size4"];
    let allTheClasses = e.target.classList;  // classlist is size1 size, size2 size etc
    //   <!-- console.log(allTheClasses); -->
    //console.log(e.currentTarget);
    let firstClass = allTheClasses[0];   // size1 <- 0 index  size <- 1 index
    let test = elements.includes(firstClass);
    // console.log(firstClass);
    if (test) {
        if (firstClass == 'size1') {
            recSize = 3;

        } else if (firstClass == 'size2') {
            recSize = 5;

        }
        else if (firstClass == 'size3') {
            recSize = 7;

        }
        else if (firstClass == 'size4') {
            recSize = 10;

        }
        console.log("REc" + recSize);
        tool.lineWidth = recSize;
    }
})


boxsize[3].addEventListener("click", function (e) {
    tool.lineWidth = lineSize;

    let elements = ["size1", "size2", "size3", "size4"];
    let allTheClasses = e.target.classList;  // classlist is size1 size, size2 size etc
    //   <!-- console.log(allTheClasses); -->
    //console.log(e.currentTarget);
    let firstClass = allTheClasses[0];   // size1 <- 0 index  size <- 1 index
    let test = elements.includes(firstClass);
    // console.log(firstClass);
    if (test) {
        if (firstClass == 'size1') {
            lineSize = 3;

        } else if (firstClass == 'size2') {
            lineSize = 5;

        }
        else if (firstClass == 'size3') {
            lineSize = 7;

        }
        else if (firstClass == 'size4') {
            lineSize = 10;

        }
        console.log("line" + lineSize);
        tool.lineWidth = lineSize;
        console.log("line" + lineSize);
    }
})
