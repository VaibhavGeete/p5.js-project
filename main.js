function preload()
{

}

function setup()
{
    canvas=createCanvas(500,500);
    canvas.position(500,250);
    video=createCapture(VIDEO);
    video.hide();
    
}

function draw()
{
    image(video,160,160,200,200);
fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);
circle(50,450,80);
circle(450,50,80);
circle(450,450,80);

fill(0,255,0);
stroke(0,255,0);
rect(90,35,320,20);
rect(90,450,320,20);
rect(450,90,20,320);
rect(45,90,20,320)  
}

function take_snapshot()
{
    save('vaibhav.png');
}
