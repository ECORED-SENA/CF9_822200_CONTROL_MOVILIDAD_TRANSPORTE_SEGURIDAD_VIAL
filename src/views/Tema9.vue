<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Medios mecánicos métodos manuales e improvisados
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/79.png', alt='')     
      .col-lg-6.my-3
        .bg1.p-4
          p(data-aos="fade-down").mb-0 Estas técnicas de control de vías respiratoria y columna son el conjunto de métodos y los medios que se aplican para llevar a cabo el traslado de un paciente del lugar del evento a un lugar seguro o al centro asistencial, este debe ser lo más cuidadoso garantizando que el movimiento sea el menor posible evitando así mayores complicaciones en la salud del paciente. 

    figcaption.mb-5 Nota. Camilla improvisada para transporte de herido.

    p(data-aos="fade-down").mb-4 Por lo anterior, es necesario tener en cuenta algunos aspectos para el traslado del paciente con el fin de que esta sufra lo menos posible en el proceso:   

    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-6.my-3
        ul.lista-ul.mb-0
          li 
            i.fas.fa-check.colorv
            p.mb-0 Se debe verificar la presencia de signos vitales y que las vías respiratorias están libres, de no ser así, se debe proceder a despejarlas. 
          li 
            i.fas.fa-check.colorv
            p.mb-0 Si la víctima presenta hemorragia, esta debe ser controlada antes del traslado. 
          li 
            i.fas.fa-check.colorv
            p.mb-0 Si la víctima presenta fracturas y se cuenta con los recursos para inmovilizar esa área del cuerpo que está afectada, lo ideal es hacerlo antes del traslado.
          li 
            i.fas.fa-check.colorv
            p.mb-0 Es importante observar muy bien el tipo de lesión porque de acuerdo a esto se usará la técnica adecuada.
          li 
            i.fas.fa-check.colorv
            p.mb-0 Se deben verificar muy bien los recursos con los que se cuentan o ajustarlos para el traslado de la víctima.
          li 
            i.fas.fa-check.colorv
            p.mb-0 Se debe tener en cuenta la contextura de la víctima, su peso y talla, junto con el personal disponible para brindar ayuda.
          li 
            i.fas.fa-check.colorv
            p.mb-0 También es necesario conocer la distancia del recorrido y características del mismo con el fin de definir si el proceso es adecuado o no. 
          li 
            i.fas.fa-check.colorv
            p.mb-0 En adición se debe tener claro quién dirige el traslado y dar instrucciones precisas y claras, por lo que es necesario que se conozca la zona.
          li 
            i.fas.fa-check.colorv
            p.mb-0 No sujetar de la ropa, cinturones, accesorios.
          li 
            i.fas.fa-check.colorv
            p.mb-0 Es vital que el socorrista haga la fuerza con los brazos y piernas y no con la columna, por lo que debe estar entrenado en este tipo de maniobras.         
      .col-lg-6.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/80.png', alt='') 

    h4(data-aos="fade-down").mb-5 Dadas estas recomendaciones, se procede a llevar a cabo el traslado del paciente, sin embargo, es necesario aclarar que existen métodos y medios para haberlo:
    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Métodos mecánicos de transporte de pacientes  
    p(data-aos="fade-down").mb-5 Este grupo comprende los diferentes tipos de camillas, algunas de éstas poseen gran maniobrabilidad, lo que las hace ideales para el adecuado traslado de la víctima, también brindan comodidad y seguridad, algunas tienen ruedas que ayudan a un traslado eficiente y rápido, en adición se debe tener especial cuidado en las que poseen herrajes los cuales deben estar bien sujetados al sistema central para no causar más daños al paciente, entre estos métodos se encuentran:   

    .tarjeta.tarjeta--azul.p-5.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-start
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Carro camilla 
            p Posee ruedas que ayudan al traslado eficiente, rápido y cómodo del lesionado.
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/81.png', alt='')     
        .row.justify-content-center.align-items-start
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Camilla marina 
            p Usada frecuentemente para trasladar al lesionado de lugares muy reducidos o de difícil acceso, es de poco peso.   
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/82.png', alt='') 
        .row.justify-content-center.align-items-start
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Camilla militar 
            p Usada para el traslado de víctimas en largas distancias.   
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/83.png', alt='') 
        .row.justify-content-center.align-items-start
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Camilla media cervical 
            p Sirve para restringir movimientos de pacientes de extracciones armadas que presentan lesión cervical, adecuada para realizar maniobras de rescate y reanimación RCP, se puede sujetar muy bien al lesionado y restringe sus movimientos corporales, especialmente cráneo y columna.
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/84.png', alt='')     
        .row.justify-content-center.align-items-start
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Camilla pediátrica
            p Usada para el traslado de niños, restringe los movimientos corporales y sujeta muy bien el cuerpo del lesionado, cuenta con inmovilizaciones de cráneo, abdomen y piernas.
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/85.png', alt='') 
        .row.justify-content-center.align-items-start
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Camilla rígida 
            p Comúnmente conocida como “tabla”: ayuda a sujetar al individuo, restringiéndole movimientos corporales, se usa en pacientes con lesiones de columna, pelvis, cráneo y/o extremidades.
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/86.png', alt='')

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Métodos manuales
    p(data-aos="fade-down").mb-5 En este grupo se cuenta con las siguientes técnicas:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/gSFK0j8W7KA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Métodos improvisados  
        
    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-7.my-3
        p(data-aos="fade-down") Estos métodos hacen referencia a situaciones en las cuales es necesario actuar y no se cuentan con los equipos y recursos especializados para tal fin, por lo que se debe hacer uso de los recursos del medio o del contexto en el cual se encuentra el paciente, un ejemplo es el siguiente: 
        .bg5.p-4 
          h4(data-aos="fade-down") Camilla improvisada:  

          p(data-aos="fade-down").mb-0 Se usa una sábana o frazada para levantar o trasladar un lesionado, cuando no se tienen a la mano los medios convencionales, se necesitan de 2 a 3 socorristas, si se tiene la sospecha de lesión en la columna no debe usarse este método.            
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/88.png', alt='')                                  
</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
