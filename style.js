
var i = 0;
var images = [
    'LA_pch (4).jpg',
    'LA_venice (2).jpg',
    'mammoth (6).jpg',
    'tahoe (4).jpg',
    'LA_santa_monica.jpeg',
    'tahoe (8).jpg'
];
for( image in images ){
    images[image] = '/assets/images/' + images[image];
    console.log("images[image] = " + images[image] );
}

function nextImage(){
    document.querySelector('#image').style.opacity = "0";

    setTimeout(function(){ 
        i++;
        if( i > images.length-2 ) i = 0;
        document.querySelector('#image').src = images[i];
        console.log("images["+ i +"] = " + images[i] );
    }, 1500);
    setTimeout(function(){ 
         document.querySelector('#image').style.opacity = "1";
    }, 1500);
}

function prevImage(){
    document.querySelector('#image').style.opacity = "0";

    setTimeout(function(){ 
        i--;
        if( i < 0 ) i = images.length-1;
        console.log("index = " + i);
        document.querySelector('#image').src = images[i];
    }, 1500);
    setTimeout(function(){ 
         document.querySelector('#image').style.opacity = "1";
    }, 1500);
}

var zoom = false;
function zoomImage(){
    if( zoom == false ){
        zoom = true;
        document.querySelector('#image').style.height = '100%';
        document.querySelector('#image').style.boxShadow = '100px 100px 100px black';
    }
    else{
        zoom = false;
        document.querySelector('#image').style.height = '70%';
        document.querySelector('#image').style.boxShadow = '10px 10px 10px black';

    }
}



