const slide = ["../images_produits/im2.jpg", "../images_produits/im3.jpg", "../images_produits/im4.jpg", "../images_produits/im5.jpg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
