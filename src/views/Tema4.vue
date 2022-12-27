<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Técnicas de preparación prehospitalaria
    .row.justify-content-center.align-items-start.mb-4
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/48.png', alt='')     
      .col-lg-7.my-3.bg5.p-4
        p(data-aos="fade-down") Para abordar el tema de la atención o preparación prehospitalaria es importante tener en cuenta qué dicha preparación se basa en la atención previa de los pacientes involucrados en una emergencia, dónde la prioridad es salvaguardar su integridad y evitar la muerte producto de las heridas o lesiones ocasionadas por el incidente o accidente presentado.

        p(data-aos="fade-down").mb-0 Esta atención brindada a los pacientes se centra en los trabajos y acciones implementadas en la etapa inicial de valoración de los pacientes qué se encuentran en el lugar del accidente, en este punto es importante resaltar, las siguientes condiciones fundamentales para brindar un tratamiento adecuado y salvaguardar la vida del paciente involucrado:                     

    .mb-4.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Atención prehospitalaria del paciente

    p(data-aos="fade-down").mb-5 Esta atención brindada a los pacientes se centra en los trabajos y acciones implementadas en la etapa inicial de valoración de los pacientes qué se encuentran en el lugar del accidente, en este punto es importante resaltar, las siguientes condiciones fundamentales para brindar un tratamiento adecuado y salvaguardar la vida del paciente involucrado: 


    AcordionA(tipo="a" clase-tarjeta="tarjeta bg8")(data-aos="fade-right")
      .row.justify-content-center.align-items-star(titulo="Conocimientos sobre primeros auxilios")
        .col-lg-7 
          p La persona encargada de brindar los primeros auxilios debe contar con el conocimiento y los instrumentos necesarios para poder asistir al paciente.           
        .col-lg-5
          img.img-a.img-t(src='@/assets/curso/temas/49.png', alt='')   
      .row.justify-content-center.align-items-star(titulo="Vehículos de emergencias")
        .col-lg-7 
          p Se debe contar con vehículos de emergencias que tengan el equipamiento necesario y los medios de comunicación para poder realizar el traslado del paciente.           
        .col-lg-5
          img.img-a.img-t(src='@/assets/curso/temas/50.png', alt='') 
      .row.justify-content-center.align-items-star(titulo="Conocimiento de los centros médicos de atención")
        .col-lg-7 
          p Es importante tener conocimiento de los centros médicos de atención y la infraestructura con la que cuentan para poder determinar el traslado del paciente de acuerdo a la gravedad y complejidad de las heridas presentadas, en este punto es primordial la categorización del triage del paciente para determinar las necesidades del mismo.           
        .col-lg-5
          img.img-a.img-t(src='@/assets/curso/temas/51.png', alt='') 
      .row.justify-content-center.align-items-star(titulo="Clasificación de los pacientes")
        .col-lg-7 
          p Para los casos en los que se presentan múltiples heridos que requieren ser trasladados a centros médicos es indispensable realizar la clasificación de los pacientes de acuerdo a la gravedad y urgencia, y priorizar el orden de atención, en lo posible ir identificando a los pacientes con alguna marca por colores o escarapela de acuerdo al orden de prioridad.            
        .col-lg-5
          img.img-a.img-t(src='@/assets/curso/temas/52.png', alt='')                                 

    p(data-aos="fade-down").mb-5 Por otro lado, es importante saber que las técnicas de preparación prehospitalaria se fundamentan en cuatro etapas del manejo de los pacientes:
    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right") 
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Etapas del manejo del paciente      

    .tarjeta.tarjeta--azul.p-5.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-start
          .col-lg-5.col-md-12.mb-4.mb-md-4
            h4.mb-4 Evaluación inicial
            p La evaluación inicial consiste en poder identificar las condiciones que puedan poner en riesgo la vida de los pacientes, teniendo en cuenta lineamientos como:
            ul.lista-ul.mb-0
              li 
                i.fas.fa-check.colorv
                p.mb-0 Pérdida de conciencia. 
              li 
                i.fas.fa-check.colorv
                p.mb-0 Afectación de la columna cervical. 
              li 
                i.fas.fa-check.colorv
                p.mb-0 Presencia de hemorragias. 
              li 
                i.fas.fa-check.colorv
                p.mb-0 Dificultad respiratoria. 
              li 
                i.fas.fa-check.colorv
                p.mb-0 Signos de afectación neurológica, tales como: desorientación, parálisis, desequilibrio o episodios de falta de reacción, entre otros.                   
          .col-lg-6.col-md-12
            img.img-a.img-t(src='@/assets/curso/temas/53.png', alt='')
        .row.justify-content-center.align-items-start
          .col-lg-5.col-md-12.mb-4.mb-md-4
            h4.mb-4 Reanimación
            p Previo a tomar la determinación de efectuar la reanimación de un paciente en el lugar del accidente se deben contemplar otros factores como: 
            ul.lista-ul.mb-0
              li 
                i.fas.fa-check.colorv
                p.mb-0 La distancia a un centro médico. 
              li 
                i.fas.fa-check.colorv
                p.mb-0 El transporte para realizar un traslado. 
              li 
                i.fas.fa-check.colorv
                p.mb-0 Los instrumentos y/o elementos para realizar una reanimación efectiva garantizando la seguridad del paciente, en caso que sea indispensable efectuarla se deben asegurar las vías aéreas y la ventilación controlando el pulso, la tensión arterial y el suministro de oxígeno al paciente.                   
          .col-lg-6.col-md-12
            img.img-a.img-t(src='@/assets/curso/temas/54.png', alt='') 
        .row.justify-content-center.align-items-start
          .col-lg-5.col-md-12.mb-4.mb-md-4
            h4.mb-4 Atención en el lugar del accidente
            p En la preparación pre hospitalaria en el lugar del accidente se debe:
            ul.lista-ul.mb-0
              li 
                i.fas.fa-check.colorv
                p.mb-0 Priorizar mantener las vías aéreas aseguradas con buena ventilación.
              li 
                i.fas.fa-check.colorv
                p.mb-0 En caso de hemorragias:
            ul.lista-ul.mb-0.ps-4
              li 
                i.fas.fa-check
                p.mb-0 Disminuir y controlar el sangrado. 
              li 
                i.fas.fa-check
                p.mb-0 Estabilizar el cuerpo y proteger la columna cervical de cualquier lesión, inmovilizando las fracturas que presenta el paciente.
              li 
                i.fas.fa-check
                p.mb-0 Para efectuar el traslado del paciente se tendrá en cuenta la categorización del triage y las necesidades médicas del paciente.
              li 
                i.fas.fa-check
                p.mb-0 Determinar el hospital adecuado para su atención con monitoreo continuo durante el recorrido.                                   
          .col-lg-6.col-md-12
            img.img-a.img-t(src='@/assets/curso/temas/55.png', alt='') 
        .row.justify-content-center.align-items-start
          .col-lg-5.col-md-12.mb-4.mb-md-4
            h4.mb-4 Comunicaciones
            p El mantener una comunicación entre el transporte de emergencia y el centro médico de destino es importante para la coordinación y organización de los servicios que permitan salvaguardar la integridad del paciente con el objetivo de brindar una atención oportuna y eficaz ante las lesiones o padecimientos identificados en la atención prehospitalaria.      
          .col-lg-6.col-md-12
            img.img-a.img-t(src='@/assets/curso/temas/56.png', alt='') 

</template>

<script>
export default {
  name: 'Tema4',
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
