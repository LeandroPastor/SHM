
//función para cambiar background-color del nav
var menu = document.querySelector('.navCenter');

window.addEventListener('scroll', function(ev) {
    if( this.scrollY >= 150 ){
        menu.classList.add('scrolling')
    } else {
        menu.classList.remove('scrolling')
    }
})

//función para marcar menú elegido
$(".active").click(function(){
    $(".active").removeClass('menuAct')
    $(this).addClass('menuAct')
  })

//función para desplegar form
let counter= 0;
const createForm = () => {

    $("#mostrar__form").click( () => {
        $(".nosotros__form").slideToggle(600);

        counter++;
        if(counter%2 !=0){
            $("#mostrar__form").html("OCULTAR");
        }else{
            $("#mostrar__form").html("Quiero recibir información");    
        }
    })
}
createForm();

//función para ocupar todo el height en responsive con el menu
const mostrarNavR = () => {

    $("#btnNav").click( () => {        
        $(".itemMenu").slideToggle(1000); 
        $(".itemMenu").css("display", "flex");
    })
}
mostrarNavR();

//función para esconder el menu al elegir una opción 
const ocultarNavR = () => {

    $("li.nav-item").click ( () => {
        $(".itemMenu").css("display", "none");
    })
}
ocultarNavR();






    























































