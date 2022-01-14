let index=0;

showImage(index);

function showImage(i){
    index+=1;

    let images=document.getElementsByClassName("image");

     let dots= document.getElementsByClassName("dot");

    for(i=0; i<images.length; i++)
    images[i].getElementsByClassName.display="none";
