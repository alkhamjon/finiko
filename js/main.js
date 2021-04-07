let ancor = true;
function toggler(el) {
    if(ancor){
        el.firstElementChild.lastElementChild.setAttribute("src","img/question-icon/angle-up.svg");
        ancor = false;
    }else{
        el.firstElementChild.lastElementChild.setAttribute("src","img/question-icon/angle-down.svg");
        ancor = true;
    }
}