canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty"
var last_position_of_x, last_position_of_y;
color = "black";
var widthOfLine = 3;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = documentl.getElementById("color").value;
    widthOfLine = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";

}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";

}
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouseEvent = "mouseDown";

}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseLeave";

}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    // mouseEvent = "mousemove";
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        console.log("last postion of x and y are ");
        console.log("x=" + last_position_of_x + " y=" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("current postion of x and y are ");
        console.log("x=" + current_position_of_mouse_x + " y=" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}