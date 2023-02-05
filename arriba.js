//para que se ejecute una vez que este cargado todo el documento//
window.onload = function () {
   document.querySelector('.up').addEventListener('click', () => {
      window.scrollTo({
         top: 0,
         behavor: 'smooth'
      })
   })
}
window.addEventListener('load', function () {
   let detalle = document.querySelectorAll('.importante')
   for (let i = 0; i < detalle.length; i++) {
      detalle[i].addEventListener('mouseover', function () {
         this.style.color = 'blue';
      })
      detalle[i].addEventListener('mouseout', function () {
         this.style.color = 'black';
      })
   }

});