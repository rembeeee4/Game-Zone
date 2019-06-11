window . onload = iniciar;

function iniciar(){
    document.getElementById("ps4").onclick = bps4;
    document.getElementById("pc").onclick = bpc;
    document.getElementById("ev").onmouseover = evento1_1;
    document.getElementById("ev").onmouseout = evento1_2;
    document.getElementById("ev2").onmouseover = evento2_1;
    document.getElementById("ev2").onmouseout = evento2_2;
    document.getElementById("ev3").onmouseover = evento3_1;
    document.getElementById("ev3").onmouseout = evento3_2;
    document.getElementById("ev4").onmouseover = evento4_1;
    document.getElementById("ev4").onmouseout = evento4_2;
    document.getElementById("ev5").onmouseover = evento5_1;
    document.getElementById("ev5").onmouseout = evento5_2;
    document.getElementById("ev6").onmouseover = evento6_1;
    document.getElementById("ev6").onmouseout = evento6_2;
}

function bps4(){
    document.getElementById("cont_ps4").style.display = "block";
    document.getElementById("cont_pc").style.display = "none";
    document.getElementById("ps4").style.background = "rgb(50,49,44)";
    document.getElementById("pc").style.background = "rgb(120,114,104)";
}

function bpc(){
    document.getElementById("cont_ps4").style.display = "none";
    document.getElementById("cont_pc").style.display = "block";
    document.getElementById("ps4").style.background = "rgb(120,114,104)";
    document.getElementById("pc").style.background = "rgb(50,49,44)";
}

function evento1_1(){
    document.getElementById("tex1").style.display = "block";
    document.getElementById("tet1").style.display = "none";
}

function evento1_2(){document.getElementById("tex1").style.display = "none";}
function evento2_1(){document.getElementById("tex2").style.display = "block";}
function evento2_2(){document.getElementById("tex2").style.display = "none";}
function evento3_1(){document.getElementById("tex3").style.display = "block";}
function evento3_2(){document.getElementById("tex3").style.display = "none";}
function evento4_1(){document.getElementById("tex4").style.display = "block";}
function evento4_2(){document.getElementById("tex4").style.display = "none";}
function evento5_1(){document.getElementById("tex5").style.display = "block";}
function evento5_2(){document.getElementById("tex5").style.display = "none";}
function evento6_1(){document.getElementById("tex6").style.display = "block";}
function evento6_2(){document.getElementById("tex6").style.display = "none";}