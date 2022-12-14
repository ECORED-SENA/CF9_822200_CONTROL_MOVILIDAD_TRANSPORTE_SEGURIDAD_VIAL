<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Protocolos para el aseguramiento en la reanimación del paciente
    .cajon-b.color-acento-contenido.mb-5.py-2
      .row.align-items-center
        .col-auto
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/39.svg', alt='')  
        .col-11
          p(data-aos="fade-down") Los protocolos y técnicas en el aseguramiento para aquellos eventos que se presenten en los accidentes de tránsito tienen como objetivo preservar la vida del paciente.

          p(data-aos="fade-down").mb-0 Para el aseguramiento en el lugar del siniestro vial, se debe evaluar a la víctima para su posterior traslado, es importante resaltar que dicho traslado solo se debe efectuar en casos extremos en los que el accidentado se encuentre en riesgo de muerte como los causados por: incendios, electrocución, asfixia, inundaciones y atrapamiento, entre otros, por lo cual en dichos casos este se debe efectuar teniendo como prioridad salvaguardar la vida, procurando que el cuerpo se mueva lo menos posible. A continuación, se muestran algunas técnicas:  


    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Protocolo de traslado, técnicas

    p(data-aos="fade-down").mb-5 A continuación, se muestran algunas técnicas:

    .tarjeta.tarjeta--azul.p-5.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-start
          .col-md-6.mb-4.mb-md-0
            p Se debe hacer la estabilización manual de la cabeza y el cuello.        
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/41.png', alt='')     
        .row.justify-content-center.align-items-start
          .col-md-6.mb-4.mb-md-0
            p Se debe establecer el lado de rotación del paciente teniendo en cuenta las lesiones que presenta.       
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/42.png', alt='') 
        .row.justify-content-center.align-items-start
          .col-md-6.mb-4.mb-md-0
            p Se deberán alinear las extremidades superiores con los mínimos movimientos sin ejercer presión en el cuerpo, así mismo se alinearán las extremidades inferiores sujetando la pelvis y las rodillas del paciente.       
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='') 
        .row.justify-content-center.align-items-start
          .col-md-6.mb-4.mb-md-0
            p Se rotará el cuerpo del paciente hasta decúbito lateral derecho o izquierdo, según se requiera, si se dispone de una camilla o elemento que pueda cumplir su función se debe colocar en la espalda del paciente.   
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/44.png', alt='') 
        .row.justify-content-center.align-items-start
          .col-md-6.mb-4.mb-md-0
            p Se rotará el cuerpo hasta decúbito supino con la ayuda de la camilla de manera que se efectúe la inmovilización cervical y se tenga control de las vías aéreas.        
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/45.png', alt='') 
        .row.justify-content-center.align-items-start
          .col-md-6.mb-4.mb-md-0
            p De contarse con un collarín cervical se procederá a inmovilizar el cuello del paciente, de no contarse con el mismo, se debe procurar mantener la postura del cuello de manera manual.     
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/46.png', alt='') 

    .titulo-sexto.color-acento-contenido
      h5 Figura 4. 
      span Aseguramiento del paciente previo a la reanimación.
      
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/47.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Importante…]
          br
          br
          | La #[b.or reanimación cardio respiratoria] permite mantener el flujo de sangre con oxígeno hacia el cerebro y otros órganos vitales hasta que la persona pueda ser atendida adecuadamente, pues si el corazón deja de bombear sangre, la falta de sangre oxigenada puede causar daño cerebral irreversible en muy pocos minutos.       

    figcaption.mb-5 Nota. Aseguramiento del paciente previo a la reanimación.

    h4(data-aos="fade-down").mb-5 A continuación, se presentan los pasos a seguir:
    ul.lista-ul.mb-0(data-aos="fade-down")
      li 
        i.fas.fa-check.colorv
        p.mb-0 Realizar compresiones a nivel del tórax para mantener la circulación sanguínea.
      li 
        i.fas.fa-check.colorv
        p.mb-0 Abrir las vías respiratorias a través de respiración boca a boca o de boca a nariz.
      li 
        i.fas.fa-check.colorv
        p.mb-0 Reanudar las compresiones del tórax para continuar el impulso de sangre a los órganos. 

    .my-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Maniobra de Heimlich    

    h4(data-aos="fade-down").mb-5 Esta se aplica en casos de atragantamientos y asfixias, se realiza de la siguiente manera:
    ul.lista-ul.mb-0(data-aos="fade-down")
      li 
        i.fas.fa-check.colorv
        p.mb-0 Usted coloca sus brazos alrededor de la cintura de la persona que se está asfixiando.
      li 
        i.fas.fa-check.colorv
        p.mb-0 Luego usted cierra el puño de una de tus manos y coloca el lado del dedo pulgar de su puño entre el ombligo y la parte baja de las costillas de la persona a la que va a ayudar.
      li 
        i.fas.fa-check.colorv
        p.mb-0 Luego usted coloca la otra mano sobre su puño y hace una presión rápida contra el abdomen de la persona, la presión debe hacerse hacia adentro y hacia arriba.
      li 
        i.fas.fa-check.colorv
        p.mb-0 Finalmente, se repiten las presiones hasta que el objeto salga o la persona pueda volver a respirar.

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10(data-aos="flip-down")
        .tarjeta.bgprimario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Maniobra Heimlich
                  p.mb-0 Universidad Nacional de Colombia Video.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=wz4hw1fy3-g )" target="_blank")
                    span Ver video
                    i.fas.fa-play-circle
</template>

<script>
export default {
  name: 'Tema3',
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
