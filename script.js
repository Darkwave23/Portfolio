let menuVisible = false;
// Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

// Funcion para navegar por el menu
function seleccion() {
  document.getElementById("nav").classList = "";
  menuVisible = true;
}
// Funcion que aplica animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("photoshop");
    habilidades[3].classList.add("php");
    habilidades[4].classList.add("mysql");
    habilidades[5].classList.add("ingles");
    habilidades[6].classList.add("spanish");
    habilidades[7].classList.add("creativite");
  }
}

// detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};
