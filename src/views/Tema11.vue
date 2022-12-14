<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Técnicas y protocolo para traslado de víctimas
    p(data-aos="fade-down").mb-5 Al evaluar situaciones de emergencia que requiera la implementación del protocolo de traslado de víctimas, se deben evaluar dos condiciones que se pueden encontrar en el lugar del accidente y de las cuales depende la toma de decisiones para efectuar el traslado:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        .bg9.p-4
          p(data-aos="fade-down").mb-0 La primera situación a contemplar se da cuando una vez ocurrido el accidente los ocupantes del vehículo accidentado, se encuentran atrapados en el vehículo o aprisionados por alguna parte del mismo, para tal situación se requiere que la extracción de las víctimas se efectúe por personas con el conocimiento y los equipos adecuados para evitar que presenten daños secundarios en las condiciones médicas de las víctimas.
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/94.png', alt='')  

    figcaption.mb-5 Nota. Traslado de victima en ambulancia.

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Traslado de víctima

    p(data-aos="fade-down").mb-5 Para los casos en que la persona que este brindando los primeros auxilios no tenga el conocimiento para efectuar la extracción de la víctima, se tendrán en cuenta las siguientes recomendaciones:

    .row.justify-content-center
      .col-lg-5.mb-3(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/95.png' alt='')
          .tarjeta.color-secundario
            .p-4
              h4.mb-3 Solicitar ayuda
              p.mb-0 Se solicitará ayuda de organismos de emergencia para que acudan al lugar del accidente.

      .col-lg-5.mb-3(data-aos="fade-right")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/96.png' alt='')
          .tarjeta.color-secundario
            .p-4
              h4.mb-3 Verificar estado
              p.mb-0 Se verificará el estado físico de las víctimas, realizando la evaluación inicial de sus condiciones físicas y el grado de conciencia. 

    .row.justify-content-center
      .col-lg-5.mb-3(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/97.png' alt='')
          .tarjeta.color-secundario
            .p-4
              h4.mb-3 Prestar primeros auxilios
              p.mb-0 Se brindarán los primeros auxilios prioritarios que la situación permita, permaneciendo junto a las víctimas.

      .col-lg-5.mb-3(data-aos="fade-right")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/98.png' alt='')
          .tarjeta.color-secundario
            .p-4
              h4.mb-3 Prohibición
              p.mb-0 No se debe permitir que personas sin el conocimiento necesario para realizar la extracción intervengan arriesgando la vida de las víctimas.

    p(data-aos="fade-down").mt-5 En la segunda situación en la cual las condiciones físicas de la víctima permitan ser extraída del vehículo o realizar el traslado sin comprometer de forma secundaria su estado físico, se tendrán en cuenta las siguientes consideraciones:

    p(data-aos="fade-down") De no considerarse necesario el mover un herido de un lugar a otro para realizar algún tipo de reanimación o maniobra indispensable, se debe procurar no mover a la víctima del lugar inicial hasta que sea atendido por personal especializado en la atención de primeros auxilios.

    h4(data-aos="fade-down").mb-4 Cuando la víctima presente: 

    ul.lista-ul.mb-0
      li 
        i.fas.fa-check.colorv
        p.mb-0 Falta de movimiento o pérdida de sensibilidad en alguna parte del cuerpo,
      li 
        i.fas.fa-check.colorv
        p.mb-0 Pérdida de conciencia, 
      li 
        i.fas.fa-check.colorv
        p.mb-0 Señales de traumatismo o
      li 
        i.fas.fa-check.colorv
        p.mb-0 Daño en la columna cervical, previo al traslado se debe efectuar la inmovilización del eje de la cabeza, cuello y tronco de la víctima.  

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.my-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/99.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Importante…]
          br
          br
          | En el momento de efectuar el traslado de las víctimas, este se realizará en #[b.or vehículos especializados] para emergencias como lo son las ambulancias, ya que cuentan con el equipo y personal capacitado para la atención en todo el trayecto hasta el centro de médico de atención más cercano, garantizando que, en caso de requerirse maniobras de reanimación, el personal capacitado pueda efectuarlas y garantizar que la víctima no sufra mayores complicaciones en el traslado. 

    p(data-aos="fade-down").mb-5 Dentro del marco de consideraciones para efectuar el traslado de la víctima a un centro médico, se plantean las siguientes excepciones en las cuales se hace necesario realizarlo en un vehículo particular sin equipamiento ni personal calificado para la atención de la emergencia:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/IFaF9jAMkOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   

    p(data-aos="fade-down") A manera de conclusión es vital que una persona que preste los primeros auxilios y que haga las veces de primer respondiente tenga conocimientos claros sobre cómo hacer el manejo del paciente de forma adecuada, lo cual necesariamente incluye estar en capacidad de hacer una evaluación del estado básico del paciente, tener los conocimientos suficientes para tomar las decisiones adecuadas para moverlo o trasladarlo si se requiere, o sí es preferible esperar al personal de emergencias.

    p(data-aos="fade-down").mb-5 Por otro lado, cuando es llevado al centro de salud más cercano es recibido por el personal médico donde le hacen una evaluación del estado de salud general, es decir un triage y definen el procedimiento a seguir, según las condiciones del paciente, si es remitido a uno de mayor nivel o si continúa en el mismo sitio y con cual tipo de atención requiere.
</template>

<script>
export default {
  name: 'Tema11',
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
