

const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

// dataLayer = [];
if(!localStorage.getItem('cookies-aceptadas')){
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
} else {
	// dataLayer.push({'event': 'cookies-aceptadas'});
}

botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	fondoAvisoCookies.classList.remove('activo');

	localStorage.setItem('cookies-aceptadas', true);

    
    $(document).ready(function() {
        setTimeout(function() {
        const ventana = document.querySelector("#pop-okhumedades");
        if (!window.sessionStorage.getItem("mostrarModal")) {
            window.sessionStorage.setItem("mostrarModal", "no");
            ventana.classList.remove("modal-okh");
            ventana.classList.add("modal-show");
        }
        }, 6000);
    });

	// dataLayer.push({'event': 'cookies-aceptadas'});
});
