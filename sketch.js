var dog;

var happyDog;

var database;

var foodStock;

var foodS;

function preload()
{
  dog1 = loadImage ("images/dogimg.png");

  dog2 = loadImage ("images/dogimg1.png");
}

function setup() {
  createCanvas(800, 700);
  
  dog = createSprite (400, 350);
  dog.scale = 0.2;
database = firebase.database ()
  dog.addImage (dog1);
  
foodStock=database.ref ('food');
foodStock.on ("value", readStock);
}


function draw() {  
background (46, 139, 87)

if (keyWentDown(UP_ARROW))
{
writeStock (foodS);

dog.addImage (dog2);


}
  drawSprites();
  //add styles here

}

function readStock(data)
{
foodS = data.val (); 
}

function writeStock(data)
{
if (x<=0)
{

x=0;

} else{
x=x-1;
}

database.ref ('/').update({
  
})
}


