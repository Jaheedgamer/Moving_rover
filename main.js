canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

background_image = "mars.jpg";
rover_img = "rover.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = upload_background();
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = upload_rover();
    rover_imgTag.src = rover_img;
} 

function upload_background(){
    ctx.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover_imgTag , rover_x , rover_y , rover_width , rover_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e){
    key_press = e.keyCode;
    console.log(key_press);

    if (key_press == "38") {
        
        up();
        console.log("up");
    }

    if (key_press == "40") {
        
        down();
        console.log("down");
    }

    if (key_press == "37") {
        
        left();
        console.log("left");
    }

    if (key_press == "39") {
        
        right();
        console.log("right");
    }
}