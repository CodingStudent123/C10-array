var marks = [50, 67, 34, 76];

function marks_avg () {
  var sum = marks [0] + marks[1] + marks [2] + marks [3];
  var avg = sum/marks.length
  console.log (avg)
}
function setup() 
{
  createCanvas(400,400);
  marks_avg();
}

function draw() 
{
background(51);

}

