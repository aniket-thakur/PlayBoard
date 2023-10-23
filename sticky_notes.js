let note = document.querySelector("#notes");
note.addEventListener("click", function (e) {
    let sticky = document.createElement("div");
    sticky.setAttribute("class", "sticky");
    sticky.innerHTML = `
            <div class = "navbar" >
                <div class="minimize" ></div >
                    <div class="close"></div>
            </div >
                <textarea name="" class="textArea"></textarea>
        </div >`;
    body.appendChild(sticky);
    let minimize = sticky.querySelector(".minimize");
    let close = sticky.querySelector(".close");
    let textArea = sticky.querySelector("textarea");
    let isClosed = false;
    minimize.addEventListener("click", function (e) {
        if (isClosed == false) {
            textArea.style.display = "none";
            isClosed = true;
        }
        else if (isClosed == true) {
            textArea.style.display = "block";
            isClosed = false;
        }

    })
    close.addEventListener("click", function (e) {
        sticky.remove();
    })
    let isDragging = false;
    let offsetX, offsetY;
    // Event listener to start dragging
    sticky.addEventListener("mousedown", function (e) {
        isDragging = true;
        offsetX = e.clientX - sticky.getBoundingClientRect().left;
        offsetY = (e.clientY - topHeight) - sticky.getBoundingClientRect().top;
    });
    // Event listener to stop dragging
    document.addEventListener("mouseup", function () {
        isDragging = false;
    });
    // Event listener to handle dragging movement
    document.addEventListener("mousemove", function (e) {
        if (isDragging) {
            sticky.style.left = e.clientX - offsetX + "px";
            sticky.style.top = e.clientY - topHeight - offsetY + "px";
        }
    });

})