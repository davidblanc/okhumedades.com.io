function allowPol(){
    const btn1 = document.querySelectorAll("#boton1");
    const check1 = document.querySelectorAll("#politicas");

    if(check1[0].checked){
        btn1[0].disabled = false;
    }
    else{
        btn1[0].disabled = true;
    }
}


