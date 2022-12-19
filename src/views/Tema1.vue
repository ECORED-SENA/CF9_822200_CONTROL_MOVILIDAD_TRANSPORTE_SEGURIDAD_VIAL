<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos reanimación y aplicación de técnicas de reanimación
    .row.justify-content-center.align-items-start.mb-4          
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')     
      .col-lg-7.my-3
        .bg1.p-4      
          p(data-aos="fade-down") Ante la posibilidad de vernos enfrentados a una situación donde la vida de un ser humano esté en riesgo y se requiera aplicar los primeros auxilios, como ciudadanos debemos estar en la capacidad de brindar esa primera atención inmediata que requiere la persona en cuestión.

          p(data-aos="fade-down").mb-0 Una vez valorado el estado general y se determine que la víctima no está respirando o no tiene pulso, se debe proceder a hacer reanimación cardiopulmonar, para esto es muy importante conocer el concepto de reanimación y aplicación de técnicas de reanimación, como a continuación se expone:

    figcaption.mb-5 Nota. Traslado en ambulancia de trabajador accidentado.
    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Reanimación 
    .row.justify-content-center.align-items-start.mb-4     
      .col-lg-7.my-3

          p(data-aos="fade-down") Generalmente conocida como RCP y significa Reanimación Cardiopulmonar, es un conjunto de maniobras y técnicas que se utiliza en situaciones de emergencia en procura de salvar la vida de una persona víctima de una descarga eléctrica, un ataque cardiaco o ahogo, por lo que se evidencia ausencia de respiración o que el corazón ha dejado de palpitar, además hay estado de inconsciencia, lo cual, es una señal de alarma muy importante que indica que se debe actuar de manera inmediata.

          p(data-aos="fade-down") Entre más rápido se actué incrementará la posibilidad de mantener con vida a la persona afectada, por lo que cada minuto cuenta, por eso se hace énfasis en que quien decida intervenir y auxiliar a la víctima debe mantener la calma, tomar las mejores decisiones y actuar oportunamente, cada minuto se vuelve vital, por lo que si se retrasa la aplicación de la reanimación podría disminuir en un 10% la posibilidad de supervivencia del individuo.
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='') 

    figcaption.mb-5 Nota. Reanimación cardiopulmonar en paciente.

    h4(data-aos="fade-down").mb-5 Por lo anterior, se hace necesario enseñar los dos tipos de técnicas de reanimación que existen: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/17Xbyez6qI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 

    p(data-aos="fade-down").mb-5 En adición, existen 3 pasos básicos que hacen parte de estas técnicas de reanimación RCP, los cuales se describen a continuación: 

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Técnicas de reanimación, pasos

    p(data-aos="fade-down").mb-5 En adición, existen 3 pasos básicos que hacen parte de estas técnicas de reanimación RCP, los cuales se describen a continuación:
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Compresión") 
        .row.justify-content-center.align-items-start 
          .col-lg-6.col-md-12.mb-md-4.mb-sm-4
            h4 Compresión 
            p Cuando el corazón para de latir, deja de recibir la sangre oxigenada, por lo cual se puede ocasionar muerte o daño cerebral en muy poco tiempo, por ello el objetivo de la reanimación es precisamente mantener la circulación de esa sangre oxigenada hacia el cerebro y demás órganos vitales del cuerpo humano, hasta que se logre restablecer el ritmo cardiaco.

            p Para esto se debe aplicar presión rítmica y fuerte sobre el pecho de la víctima de paro cardiorrespiratorio, la característica de esta maniobra básica es que no requiere equipo especial ni personal entrenado para realizarla, esta simple técnica puede ser la diferencia entre la vida y la muerte de un individuo.          
          .col-lg-6.col-md-12          
            img.img-a.img-t(src='@/assets/curso/temas/5.png', alt='')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Despeje de vías respiratorias")              
        .row.justify-content-center.align-items-start 
          .col-lg-6.col-md-12.mb-md-4.mb-sm-4
            h4 Despeje de vías respiratorias 
            p Estas se abren o despejan con la maniobra conocida como: <i><b>Frente-Mentón</b></i>, la cual consiste en colocar los dedos sobre la frente de la víctima e inclinarse levemente hacia atrás la cabeza, con la otra mano levantar suavemente el mentón, esto abrirá sus vías respiratorias.          
          .col-lg-6.col-md-12          
            img.img-a.img-t(src='@/assets/curso/temas/4.png', alt='')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Respiración de rescate")              
        .row.justify-content-center.align-items-start 
          .col-lg-6.col-md-12.mb-md-4.mb-sm-4
            h4 Respiración de rescate 
            p comúnmente conocida como respiración boca-boca, también puede ser boca-nariz (este caso es para cuando la boca de la víctima está severamente lesionada o no se puede abrir)

            p El propósito de esta maniobra es suministrar oxígeno a los pulmones de la víctima, una vez despejadas las vías aéreas, utilizando los dedos que están inclinando la cabeza proceda a cerrar la nariz de la víctima, con la otra mano deberá mantener el mentón elevado para que la boca de la víctima permanezca abierta, tome aire y coloque sus labios sobre los labios de la persona afectada, haciendo un sello, proporcione aire firmemente dentro de la víctima por un tiempo de duración de un segundo, observe si el pecho se eleva, sí el pecho no se eleva deberá proporcionar una segunda respiración.          
          .col-lg-6.col-md-12          
            img.img-a.img-t(src='@/assets/curso/temas/6.png', alt='')   

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Aplicación de técnicas de reanimación  

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='') 
      .col-lg-8.my-3 
        p(data-aos="fade-down") La combinación de estas técnicas mencionadas anteriormente serán la herramienta perfecta para ayudar a mantener con vida a la víctima y que las posibilidades de sufrir daños cerebrales disminuyan, lo primordial es lograr estabilizar a la persona mientras llega el personal especializado.
        .bg2.p-4
          p(data-aos="fade-down").mb-0 Antes de iniciar con PCR se deberá revisar si el lugar donde se encuentra es seguro, de no ser así se deberá desplazar a un lugar donde se pueda maniobrar con mayor facilidad, teniendo en cuenta que se debe mover lo menos posible a la persona, revisar el estado de conciencia o inconciencia y en la medida de lo posible llamar a los servicios de emergencias, porque la situación se puede agravar y se necesitará ayuda de personal y equipo calificado. 

    h4(data-aos="fade-down").mb-5 Algunos aspectos importantes a tener en cuenta al momento de aplicar estas técnicas son:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/8.png' alt='')
          h4.text-center Compresiones
          p.mb-0 Treinta compresiones de pecho seguidas de dos respiraciones de rescate o salvamento constituyen un ciclo, las respiraciones no se deben aplicar con mucha fuerza. 
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/9.png' alt='')
          h4.text-center Maniobra Frente-mentón
          p.mb-0 Si se observa que el pecho de la víctima no se eleva, se debe repetir la maniobra de inclinar la cabeza y levantar el mentón de la víctima (maniobra frente-mentón) e iniciar un ciclo nuevamente.
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/10.png' alt='')
          h4.text-center Combinación
          p.mb-0 Lo recomendable es combinar 30 compresiones torácicas con dos respiraciones de rescate.
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/11.png' alt='')
          h4.text-center RCP
          p.mb-0 La RCP se debe proporcionar hasta que se restablezca la respiración y el corazón comience a latir nuevamente.
        .bg3.p-4.brad.h-100
          img.img-a.img-t.mb-4(src='@/assets/curso/temas/12.png' alt='')
          h4.text-center Variantes 
          p.mb-0 Estas técnicas varían según la edad y tamaño de la víctima, pero sus pasos básicos y fundamentales son los mismos: compresión, vía respiratoria y respiración.

    p(data-aos="fade-down").mb-5 Teniendo en cuenta los elementos anteriores es describir la técnica según la edad, ya que se realiza de diferente manera: 
    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Aplicación de Técnicas de RCP en bebés de menos de cuatro semanas 

    .row.justify-content-center.align-items-stretch.mb-5           
      .col-lg-4.p-0
        img(data-aos="zoom-in")(src='@/assets/curso/temas/13.png', alt='') 
      .col-lg-8.bg4.p-4.just
        p(data-aos="fade-down").mb-0 Generalmente el paro cardiaco en un bebe se origina por falta de oxígeno, puede ser producto de un atragantamiento, si es por este motivo se debe tratar de sacar el objeto que está obstruyendo las vías respiratorias, si no es por ese motivo se debe iniciar las técnicas de RCP, se debe tocar al bebe y esperar una respuesta, puede ser un movimiento, si no responde iniciar con otro ciclo de RCP y seguir llamando al servicio de emergencias.     

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Aplicación de Técnicas de RCP en bebés menores de un año    

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-7.my-3
        p(data-aos="fade-down") Se debe colocar al bebe boca arriba sobre una superficie rígida y plana, si no la hay se debe sostener firmemente al bebe sobre la pierna o brazo, imagine una línea horizontal entre el pecho del bebe, coloque dos dedos justo debajo de esa línea en el centro del pecho, luego comprima el pecho del bebe cuidadosamente unos cuatro centímetros, se deben realizar compresiones por espacio de un minuto, realizar entre 100 y 120 compresiones firmes, contando en voz alta a un ritmo rápido.

        p(data-aos="fade-down") Luego de 30 compresiones, se debe inclinar la cabeza hacia atrás y levantar el mentón con una mano y ejercer presión con la otra mano, ahora se procede a dar respiración, se debe cubrir la boca y nariz del bebe con la boca del socorrista, se deben hacer dos respiraciones de rescate, la respiración debe ser suave y lenta, tomando un segundo para la respiración, proceda a observar el pecho del bebe, si se eleva, se dará la otra respiración de rescate, en caso contrario y el pecho del bebe no se eleva, se repite la maniobra frente-mentón y se proporciona la segunda respiración.

        p(data-aos="fade-down") Si persiste la situación y el pecho del bebe no se eleva, se debe continuar con las compresiones sobre su pecho, dar dos respiraciones después de 30 compresiones de pecho hasta que haya signos de vida o llegue la asistencia médica.                
      .col-lg-5.my-3
        img(data-aos="zoom-in")(src='@/assets/curso/temas/14.png', alt='') 

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Aplicación de Técnicas de RCP en bebés mayores de un año hasta edad adulta

    p(data-aos="fade-down") En este grupo los tres pasos a seguir son los mismos, se deben llevar a cabo compresiones por dos minutos, se coloca al individuo boca arriba en una superficie plana y firme, arrodillarse junto al cuello y hombros del afectado, colocar las manos sobre la parte de debajo de la caja torácica, se presiona el pecho, no más de 5 centímetros, ejercer presión de manera rápida y firme, hacer entre 100 y 120 compresiones por minuto.

    p(data-aos="fade-down") Luego proceda a abrir vías respiratorias, utilizando la maniobra frente-mentón, realice respiración boca a boca, haciendo una respiración en la boca del individuo por un segundo, observe su pecho, si se eleva, haga una segunda respiración, si su pecho no se eleva, repita la acción de inclinar la cabeza y levantar el mentón y proporcione la segunda respiración, después de darle las dos respiraciones, continúe con un nuevo ciclo de compresión/respiración, continúe con estas maniobras hasta que haya movimiento en el individuo o llegue el personal de asistencia media.

    p(data-aos="fade-down").mb-5 Tenga en cuenta al momento de brindar RCP, el apoyarse en otra persona (si la hay) que también sepa brindar primeros auxilios para que se turnen y tomen descansos para poder ofrecer un mejor servicio al individuo afectado, la otra persona también puede insistir en la comunicación con los servicios de emergencia, la reanimación debe brindarse hasta que los signos vitales del afectado sean restablecidos o hasta que llegue ayuda profesional y equipo especializado.    
    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="flip-down")
        .tarjeta.bgprimario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Reanimación cardiopulmonar. Fundación Valle de Lili TV
                  p.mb-0 Reanimación cardiopulmonar en niños, jóvenes y adultos.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=7xzKkzUmj_s " target="_blank")
                    span Ver video
                    i.fas.fa-play-circle                       
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
