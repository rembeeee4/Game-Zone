window . onload   =   iniciar ; 
function iniciar(){
    document.getElementById("L1").onclick = deslizarL;
    document.getElementById("R1").onclick = deslizarR;
    document.getElementById("L1_A").onclick = deslizarL1;
    document.getElementById("R1_A").onclick = deslizarR1;
    setInterval(deslizarR1,3000);
}

var n=1;
var n2=1;
var n3=1;
function deslizarR(){
    if(n == 1){
        document.getElementById("uno").style.display = "none";
        document.getElementById("dos").style.display = "block";
        document.getElementById("tres").style.display = "none";
        n=2;
    }
    else if(n == 2){
        document.getElementById("uno").style.display = "none";
        document.getElementById("dos").style.display = "none";
        document.getElementById("tres").style.display = "block";
        n=3;
    }
    else{
        document.getElementById("uno").style.display = "block";
        document.getElementById("dos").style.display = "none";
        document.getElementById("tres").style.display = "none";
        n=1;
    }
}
function deslizarL(){
    if(n == 1){
        document.getElementById("uno").style.display = "none";
        document.getElementById("dos").style.display = "none";
        document.getElementById("tres").style.display = "block";
        n=3;
    }
    else if(n == 2){
        document.getElementById("uno").style.display = "block";
        document.getElementById("dos").style.display = "none";
        document.getElementById("tres").style.display = "none";
        n=1;
    }
    else{
        document.getElementById("uno").style.display = "none";
        document.getElementById("dos").style.display = "block";
        document.getElementById("tres").style.display = "none";
        n=2;
    } 
}
function deslizarL1(){
    
}
function deslizarR1(){
    switch(n2){
        case 1:
                document.getElementById("id9").style.display = "none";
                document.getElementById("id4").style.display = "block";
                n2=2;
            break;
        case 2:
                document.getElementById("id8").style.display = "none";
                document.getElementById("id3").style.display = "block";
                n2=3;
            break;
        case 3:
                document.getElementById("id7").style.display = "none";
                document.getElementById("id2").style.display = "block";
                n2=4;
            break;
        case 4:
                document.getElementById("id6").style.display = "none";
                document.getElementById("id1").style.display = "block";
                n2=5;
            break;
        case 5:
                document.getElementById("id1").style.display = "none";
                document.getElementById("id2").style.display = "none";
                document.getElementById("id3").style.display = "none";
                document.getElementById("id4").style.display = "none";
                document.getElementById("id5").style.display = "none";
                document.getElementById("id6").style.display = "block";
                document.getElementById("id7").style.display = "block";
                document.getElementById("id8").style.display = "block";
                document.getElementById("id9").style.display = "block";
                document.getElementById("id10").style.display = "block";
                n2=6;
            break;
        case 6:
                document.getElementById("id10").style.display = "none";
                document.getElementById("id5").style.display = "block";
                n2=1;
            break;
    }
}
