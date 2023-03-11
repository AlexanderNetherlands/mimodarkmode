
document.getElementById('l').hidden = true;
document.getElementById('n').hidden = true;
function batman(){
    
    document.getElementById('l').hidden = true;
    document.getElementById('n').hidden = true;
    document.getElementById('d').hidden = false;
    document.body.style.backgroundColor = "grey";
    
    
}
function superman(){
    
    document.getElementById('n').hidden = true;
    document.getElementById('d').hidden = true;
    document.getElementById('l').hidden = false;

    
    document.body.style.backgroundColor = "white";
    
}
function deadpool(){
   
    document.getElementById('d').hidden = true;
    document.getElementById('l').hidden = true;
    document.getElementById('n').hidden = false;
    document.body.style.backgroundColor = "pink";
    
}