cnavas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

car_width=100;
car_height=90;

background_img="view-of-the-infinity-empty-asphalt-internatinol-race-track-with-starting-or-ending-line-2AYCGFT.jpg";
car_img="car1.png";

car_x=10;
car_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;

    car_imgTag=new Image();
    car_imgTag.onload=uploadcar;
    car_imgTag.src=background_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,cnavas.width,cnavas.height);
}


function uploadcar(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}

