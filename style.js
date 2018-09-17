
var i = 0;
var images = [
    'LA_pch (4).jpg',
    'LA_venice (2).jpg',
    'mammoth (6).jpg',
    'tahoe (4).jpg',
    'tahoe (8).jpg',
    'LA_santa_monica.jpeg'
];

// Initialize image array to include path
for( image in images ){
    images[image] = '/assets/images/' + images[image];
}

// Load images into gallery from array or file
function loadGallery(){
    for( image in images ){
        var node = document.createElement('IMG');
        var gallery = document.querySelector('#gallery');

        node.src = images[image];
        gallery.appendChild( node );

        node.addEventListener("click", function(){
            changeImage( this.src );
        });
    }
}

function changeImage( elementID ){
    document.querySelector('#image').style.opacity = "0";

    setTimeout(function(){ 
        document.querySelector('#image').src = elementID;
    }, 1000);
    setTimeout(function(){ 
        document.querySelector('#image').style.opacity = "1";
    }, 1000);
}

function nextImage(){
    i++
    if( i > images.length - 2 ) i = 0;
    changeImage( images[i] );
}

function prevImage(){
    i--;
    if( i < 0 ) i = images.length - 1;
    changeImage( images[i] );
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



