$(document).ready(function() {

  // 
  const a = document.querySelectorAll(".select-height");
  const checkBoxes = document.querySelectorAll(".form-check-input");

  let idActual;
  

  // const btn1 = document.getElementById("btn-1");
  // const btn2 = document.getElementById("btn-2");
  // const btn3 = document.getElementById("btn-3");
  function cleanCheck() {
    for (let i=0; i < checkBoxes.length; i++){
      checkBoxes[i].checked = false;
    }
  }


  function ocultarTodos(){
    cleanCheck();
    for (let i=1; i<4; i++){
      if (!document.getElementById("diagnostico_altura_" + i).classList.contains("d-none")){
        document.getElementById("diagnostico_altura_" + i).classList.add("d-none");
      }
    }
  }

  function ocultarBtn(){
    btns = document.querySelectorAll(".diagnostico_continuar");
  
    for (let i=0; i < btns.length; i++){
      if(!btns[i].classList.contains("d-none")){
        btns[i].classList.add("d-none");
      }
    }
  }

  function showBtn(e){
    ocultarBtn();
    let contenedor = document.querySelectorAll("#" + idActual);
    boxes = contenedor[0].querySelectorAll("input");
    if (boxes[0].checked === true || idActual === "diagnostico_altura_3" ){
      
      document.getElementById("diagnostico_continuar_condensacion").classList.remove("d-none");
    } 
    else if (idActual ==="diagnostico_altura_1" && (boxes[1].checked || boxes[2].checked)) {
      document.getElementById("diagnostico_continuar_filtraciones").classList.remove("d-none");     
    }
    else if (idActual === "diagnostico_altura_2" && (boxes[1].checked || boxes[2].checked || boxes[3].checked)) {
      document.getElementById("diagnostico_continuar_capilaridad").classList.remove("d-none");  
    }
  }


  function showSintomas (e){
    idActual = "diagnostico_altura_" + e.currentTarget.getAttribute("data-value");
    document.getElementById("diagnostico_sintomas").classList.remove("d-none");
    ocultarTodos();
    document.getElementById(idActual).classList.remove("d-none");
    ocultarBtn();
    // alert(e.currentTarget.getAttribute("data-value"));
    // e.currentTarget.getAttribute("data-value")
  }



  // btn1.addEventListener("click", showSintomas, false);
  // btn2.addEventListener("click", showSintomas, false);
  // btn3.addEventListener("click", showSintomas, false);

  // function alertButton() {
  //   if (a.getAtribute(data-value)){
  //     alert('esta definido');
  //   } 
  // }
  

  for (const but of a) {
    but.addEventListener("click", showSintomas, false);    
  }
  for (const chk of checkBoxes){
    chk.addEventListener("click",showBtn, false)
  }
})