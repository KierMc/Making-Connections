console.log("page loaded...");

var nameElement = document.querySelector("#nameprof")

function nameChange(nameElement){
    // console.log(nameElement);
    nameElement.innerText = "Susan Silverman"
}

var element = document.querySelector("#accept1");
var del1 = document.querySelector(".delete1");
var del2 = document.querySelector("#decline1");
var conreq = 2;
var CRelement = document.querySelector(".badge1");
var yourCon = 418;
var YCelement = document.querySelector(".badge2");

function removeContact(element){
    // console.log (element)
    // console.log(del1);
    // console.log(del2);
    element.remove();
    del1.remove();
    del2.remove();
    conreq --;
    CRelement.innerText = conreq;
    yourCon ++;
    YCelement.innerText = yourCon;
}

let element2 = document.querySelector("#decline1");
var del3 = document.querySelector(".delete1");
var del4 = document.querySelector("#accept1");

function removeContact2(element2){
    // console.log (element2)
    // console.log(del3);
    // console.log(del4);
    element2.remove();
    del3.remove();
    del4.remove();
    conreq --;
    CRelement.innerText = conreq;
}

var element3 = document.querySelector("#accept2");
var del5 = document.querySelector(".delete2");
var del6 = document.querySelector("#decline2");

function removeContact3(element3){
    // console.log (element3)
    // console.log(del5);
    // console.log(del6);
    element3.remove();
    del5.remove();
    del6.remove();
    conreq --;
    CRelement.innerText = conreq;
    yourCon ++;
    YCelement.innerText = yourCon;
}

var element4 = document.querySelector("#decline2");
var del7 = document.querySelector(".delete2");
var del8 = document.querySelector("#accept2");

function removeContact4(element4){
    // console.log (element4)
    // console.log(del7);
    // console.log(del8);
    element4.remove();
    del7.remove();
    del8.remove();
    conreq --;
    CRelement.innerText = conreq;
}