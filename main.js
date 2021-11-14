canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

rover_x = 10;
rover_y = 10;

nasa_img =["Image_0.jpg" , "Image_1.jpg" , "Image_2.jpg" , "Image_3.jpg" , "Image_4.jpg"];

random_number = Math.floor(Math.random() * 5);
console.log(random_number);


background_image = nasa_img[random_number];
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

function up(){

    if (rover_y >=0) {
        rover_y = rover_y-10;
        upload_background();
        upload_rover();
    }
}

function down(){

    if (rover_y <=500) {
        rover_y = rover_y+10;
        upload_background();
        upload_rover();
    }
}

function left(){

    if (rover_x >=0) {
        rover_x = rover_x-10;
        upload_background();
        upload_rover();
    }
}

function right(){

    if (rover_x <=700) {
        rover_x = rover_x+10;
        upload_background();
        upload_rover();
    }
}

