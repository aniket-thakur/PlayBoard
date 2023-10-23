let canvasBoard = document.querySelector("canvas"); // give tool to draw on a canvas
        canvasBoard.height = window.innerHeight;
        canvasBoard.width = window.innerWidth;
        let tool = canvasBoard.getContext("2d");   // gives area to draw
        let body = document.querySelector("body");
        let pencil = document.querySelector("#pencil");
        let eraser = document.querySelector("#eraser");
        let getRec = document.querySelector("#rec");
        let getLine = document.querySelector("#line");
        let option = document.querySelectorAll(".size-change");

        tool.strokeStyle = "purple";
        let cTool;