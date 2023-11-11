var DisplayedImage = document.getElementById("Cat_Image");

var imgNumber = 1;

DisplayedImage.src = 'Cat1.jpg';

function imageLeft(){
    if(imgNumber == 1) {
        imgNumber = 12;
    } else {
        imgNumber --;
    }
    var NewImage = 'Cat' + String(imgNumber) + '.jpg';
    console.log(NewImage);
    DisplayedImage.src = NewImage;
}

function imageRight(){
    if(imgNumber == 12) {
        imgNumber = 1;
    } else {
        imgNumber ++;
    }
    var NewImage = 'Cat' + String(imgNumber) + '.jpg';
    console.log(NewImage);
    DisplayedImage.src = NewImage;
}
