// *****tool change logic*********
console.log(canvasBoard.getBoundingClientRect()); // returns a DOMRect object providing information about size of an element and its position
let topHeight = canvasBoard.getBoundingClientRect().top;

// *****************pencil logic*********************
let ix, iy, fx, fy;
let drawingmode = false;
body.addEventListener("mousedown", function (e) {
    ix = e.clientX;                   //inital x cordinate location
    iy = e.clientY - topHeight;      // initial y cordinate location
    if (cTool == "pencil" || cTool == "eraser") { // topheight is to componsate with menu width
        drawingmode = true;    // for pencil 
    }
})
body.addEventListener("mouseup", function (e) {
    drawingmode = false;   // when release mouse pencil should not write anything
    fx = e.clientX;         // x cordinate where mouse is released
    fy = e.clientY - topHeight;  // y coordinate where mouse is released
    let height = fy - iy;        // for rectangle height
    let width = fx - ix;        // for rectangle height
    if (cTool == "rec") {
        tool.strokeRect(ix, iy, width, height);
    }
    else if (cTool == "line") {
        tool.beginPath();   //begin a new path or reset the current path.
        tool.moveTo(ix, iy); // sets the starting point 
        tool.lineTo(fx, fy); //creates a straight line from the current drawing position as set by moveTo() 
        tool.stroke(); //draw the outlines that have been shaped by the moveTo and lineTo
    }
})
body.addEventListener("mousemove", function (e) {
    if (drawingmode == false) {
        return;
    }
    fx = e.clientX;
    fy = e.clientY - topHeight;
    if (cTool == "pencil" || cTool == "eraser") {
        tool.beginPath();
        tool.moveTo(ix, iy);
        tool.lineTo(fx, fy);
        tool.stroke();
        ix = fx;     // for continuous writing 
        iy = fy;
    }
})



