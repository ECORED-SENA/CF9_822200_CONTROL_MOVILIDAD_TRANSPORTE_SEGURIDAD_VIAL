<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Características y condiciones generales del paciente
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-7.my-3.bg5.p-4
        p(data-aos="fade-down").mb-4 Es muy importante revisar el estado y nivel de conciencia como parte de las condiciones del paciente en los accidentes de tránsito, realizando una exploración neurológica lo cual es llamado técnicas de evaluación neurológica manual, donde se revisa: 
        ul.lista-ul.mb-0(data-aos="fade-down")
          li 
            i.fas.fa-check.colorv
            p.mb-0 La apertura de ojos frente a estímulos, 
          li 
            i.fas.fa-check.colorv
            p.mb-0 Las respuestas verbales, 
          li 
            i.fas.fa-check.colorv
            p.mb-0 La posición de los ojos cuando este en reposo, 
          li 
            i.fas.fa-check.colorv
            p.mb-0 La dilatación de la pupila frente a estímulos como la luz y 
          li 
            i.fas.fa-check.colorv
            p.mb-0 La respuesta de sus extremidades frente a los estímulos, etc.                        
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.png', alt='')     

    p(data-aos="fade-down").mb-5 Esto debe realizarse en varias ocasiones para detectar cambios en su estado de conciencia, en adición debe hacerse como se describe a continuación: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/IGdW2S0WMJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade-down").mb-5 Luego de la evaluación anterior es muy importante definir las condiciones del paciente, ya que esta permite de manera preventiva reducir los riesgos y minimizar posibles errores que se puedan generar en el proceso de asistencia médica. Estas se pueden clasificar de la siguiente manera:    

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Condiciones del paciente 
    p(data-aos="fade-down").mb-5 Estas se pueden clasificar de la siguiente manera:
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/16.png' alt='')
          h4.text-center Condición indeterminada 
          p.mb-0 Esta se presenta cuando el paciente se encuentra en espera de una adecuada evaluación médica.
     
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/17.png' alt='')
          h4.text-center Condición buena 
          p.mb-0 Una vez se realiza la evaluación se determina que los signos vitales están estables y están dentro de los parámetros y de los límites normales. En esta condición, generalmente el paciente se encuentra consciente y en general en un estado de comodidad. 
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/18.png' alt='')
          h4.text-center Condición regular 
          p.mb-0 En esta condición los signos vitales del paciente son estables y se registran dentro de los parámetros normales, al igual que en la condición anterior el paciente se encuentra en estado consciente, pero se siente incómodo, a pesar que los indicadores de su condición sean favorables. 
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/19.png' alt='')
          h4.text-center Condición grave 
          p.mb-0 En este caso, los signos vitales son inestables y están fuera de los parámetros normales, se puede observar que el paciente se encuentra gravemente enfermo y sus indicadores de condición son cuestionables. 
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/20.png' alt='')
          h4.text-center Condición crítica 
          p.mb-0 En este estado los signos vitales son inestables y están fuera de los parámetros o límites normales. Se puede dar la condición en que el paciente esté inconsciente y los indicadores de su condición sean muy desfavorables. 
    p(data-aos="fade-down").mb-5 Además, existen algunas características para determinar las condiciones generales del paciente, basados en las facies o expresiones de la cara, que se pueden evidenciar en un examen físico general, pues orienta a ciertos rasgos característicos de alguna enfermedad determinada, entre las cuales se encuentran:
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Facies o expresiones de la cara

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/21.png' alt='')
          h4.text-center Facie acromegálica 
          p.mb-0 Se caracteriza por prominencia de la mandíbula, crecimiento de huesos y tejidos blandos, lengua grande. Esta condición se da en pacientes con tumores hipofisarios debido a hormonas de crecimiento. 
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/22.png' alt='')
          h4.text-center Facie cushingoide 
          p.mb-0 La cara se ve más redonda, piel más fina y mayor cantidad de vellos y acné. Se presenta por exceso de corticoides. 
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/23.png' alt='')
          h4.text-center Facie hipertiroidia 
          p.mb-0 Mirada expresiva por retracción del párpado superior; la piel se aprecia fina y húmeda. Se asocia a un exceso de hormonas tiroideas. 
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/24.png' alt='')
          h4.text-center Facie hipotiroidia o mixedematosa 
          p.mb-0 Destaca la poca expresividad del rostro, asociado a déficit de hormona tiroidea. 
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/25.png' alt='')
          h4.text-center Facie hipocrática 
          p.mb-0 En enfermedades como peritonitis o shock (colapso circulatorio). Se caracteriza por un perfil enjuto (delgado), con ojos hundidos, ojeras, palidez y sudor frío. 
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/26.png' alt='')
          h4.text-center Facie mongólica 
          p.mb-0 Facie del síndrome de Down. 
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/27.png' alt='')
          h4.text-center Facie parkinsoniana 
          p.mb-0 se ve en pacientes con enfermedad de Parkinson.  
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/28.png' alt='')
          h4.text-center Facie febril 
          p.mb-0 Se caracteriza por rubor en las mejillas, ojos brillantes. 
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/29.png' alt='')
          h4.text-center Facie mitralica 
          p.mb-0 Las mejillas se presentan con un rubor cianótico.                                                       
    p(data-aos="fade-down").mb-5 Se debe incluir en esta serie de procedimientos una valoración global del estado del paciente:
    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/30.svg', alt='')
    p(data-aos="fade-down").my-5 Uno de los elementos más importantes en este momento del proceso es conocer el estado actual del paciente por lo que es importante conocer exactamente cómo se encuentra, por lo que se le hace una revisión de pies a cabeza, la cual se describe a continuación:         
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Valoración secundaria del paciente
     
    ImagenInfografica.color-acento-contenido.mb-5(data-aos="fade-left")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/31.png', alt='')

      .tarjeta.color-primario.p-3(x="73.5%" y="56%" numero="1")
        h4.mb-2 Cabeza
        p.mb-0 Se revisan heridas o contusiones debajo del cabello y la cara, hemorragias, sangrado por los oídos, lesiones en los ojos y aspecto general del rostro.     
      .tarjeta.color-primario.p-3(x="67%" y="59%" numero="2")
        h4.mb-2 Cuello
        p.mb-0 Tocarlo con suavidad, en caso de tener que movilizar a los pacientes se tiene que mantener en el mismo sentido de la cabeza y tronco, revisar pulso carotideo y aflojar las prendas de vestir.   
      .tarjeta.color-primario.p-3(x="63%" y="56%" numero="3")
        h4.mb-2 Torax
        p.mb-0 Revisar heridas o deformaciones de la caja torácica y revisar movimientos respiratorios.     
      .tarjeta.color-primario.p-3(x="57%" y="58%" numero="4")
        h4.mb-2 Abdomen
        p.mb-0 Revisar heridas, localizar dolores presentes, palpar si el abdomen está duro o depresible, prever posibles lesiones internas.    
      .tarjeta.color-primario.p-3(x="45%" y="54%" numero="5")
        h4.mb-2 Extremidades
        p.mb-0 Evitar moverlas, compararlas visualmente, buscar heridas, deformaciones, inflamaciones, explorar sensibilidad y movimientos.  
      .tarjeta.color-primario.p-3(x="60%" y="80%" numero="6")
        h4.mb-2 Espalada
        p.mb-0 Revisa posibles fracturas vertebrales y lesiones en la médula. 

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Clasificación de las hemorragias 

    p(data-aos="fade-down").mb-5 Por otro lado, en una situación donde la vida de una persona peligra, es importante tener en cuenta que cuando hay heridos producto de los accidentes viales, en especial con hemorragias abundantes (hace referencia a la salida de sangre de los vasos sanguíneos por traumatismos de manera cortante o por contusión) que pueden causar el desangre de la persona y por último la pérdida de la vida, se debe tener sumo cuidado, por lo que es imperativo conocer su clasificación para poder en un momento dado saber manejarlas adecuadamente. 

    .bg6
      img.img-a.img-t.py-4(data-aos="zoom-in")(src='@/assets/curso/temas/33.png', alt='')

    p(data-aos="fade-down").my-5 Si bien las hemorragias, deben tenerse en cuenta al momento de hacer la evaluación de un paciente producto de un accidente de tránsito, estas se pueden controlar de acuerdo a su localización:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Condiciones generales del paciente, hemorragia externa 
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8(data-aos="fade-left")  
        .tabla-a.color-primario
          table
            thead
              tr
                th(colspan='2') HEMORRAGIA EXTERNA
            tbody
              tr
                td.bgt1.text-bold.text-center LOCALIZACIÓN 
                td.bgt2.text-bold.text-center CONTROL 
              tr
                td.bgt1.text-bold.text-center COMPRESIÓN DIRECTA 
                td Fuerte presión a la herida con una gasa o sustituirla por un vendaje cuando la herida pare de sangrar.  
              tr
                td.bgt1.text-bold.text-center EN EXTREMIDADES 
                td.bgt2 Elevar el miembro afectado, esto puede ser doloroso.
              tr
                td.bgt1.text-bold.text-center COMPRESIÓN ARTERIAL 
                td Se localizan las arterias principales para detener la circulación.  
              tr
                td.bgt1.text-bold.text-center TORNIQUETE 
                td.bgt2 Es un método para detener el sangrado de una parte del cuerpo, por lo general una extremidad, al realizarlo se deben dejar espacios intermitentes de presión sobre el tejido para que le llegue oxígeno.

    h4(data-aos="fade-down").mb-5 Observe los siguientes casos:

    .row.justify-content-center
      .col-lg-5.mb-3(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/34.png' alt='')
          .tarjeta.color-acento-botones
            .p-4
              p.mb-0 Si sale por la boca y proviene de vías digestivas se coloca a la persona boca arriba y se aplica hielo en el abdomen. 

      .col-lg-5.mb-3(data-aos="fade-right")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/35.png' alt='')
          .tarjeta.color-acento-botones
            .p-4
              p.mb-0 Si es nasal, colocar al herido con la cabeza inclinada hacia delante y comprimir las fosas nasales.  

    .row.justify-content-center
      .col-lg-5.mb-3(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/36.png' alt='')
          .tarjeta.color-acento-botones
            .p-4
              p.mb-0 Si es exteriorizada y sangra por el oído, no hay que intentar detenerla para evitar acumulaciones en el cráneo, se debe acostar al paciente de lado de la salida de la hemorragia con una gasa y llevarlo al hospital.

      .col-lg-5.mb-3(data-aos="fade-right")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/37.png' alt='')
          .tarjeta.color-acento-botones
            .p-4
              p.mb-0 Si la hemorragia es venosa o arterial se debe revisar el abdomen, si está sensible, rígido, presenta mareos, palidez o vómito con sangre, es vital llevarlo al médico etc.

    .row.justify-content-center
      .col-lg-5.mb-3(data-aos="fade-down")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/38.png' alt='')
          .tarjeta.color-acento-botones
            .p-4
              p.mb-0 SSi la hemorragia es interna se controla al aplicar frío local sobre la piel, pues contrae los vasos sanguíneos y reduce la formación de hematomas. 

    h4(data-aos="fade-down").mb-5 Para profundizar en el tema le invito a revisar el Manual de primeros auxilios.
    .row.justify-content-start
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/manual_primeros_auxilios_.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Primeros auxilios.</b> Manual de primeros auxilios                             
</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass">
.tarjeta.color-acento-botones
  background-color: #FFF6E9
  *
    color: #12263F !important
</style>
