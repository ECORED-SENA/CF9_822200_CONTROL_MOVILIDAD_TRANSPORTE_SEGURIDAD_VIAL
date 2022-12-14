<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Técnicas de diligenciamiento de formatos y remisiones
    p(data-aos="fade-down").mb-5 Para el caso de los pacientes cuyo grado de complejidad y condiciones físicas a tratar dado su condición médica superen los recursos técnicos de la institución que está prestando el servicio y que requiera efectuar su traslado para disminuir su riesgo de muerte en los posteriores minutos, se hace necesario solicitar la red de prestadores a la cual se puede dirigir para determinar el centro receptor con el fin de que pueda ser atendido en un centro médico de mayor complejidad.


    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/89.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Importante…]
          br
          br
          | Para este caso puntual de traslado de pacientes se deberá efectuar el diligenciamiento de un formato de referencia o interconsulta que consiste en que junto con el paciente se entreguen los elementos de ayuda diagnóstica y el diligenciamiento de la remisión del reporte asistencial brindado al paciente para generar el documento de referencia y contra referencia. 

    figcaption.mb-5 Nota. Diligenciamiento información de pacientes.

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Formatos

    p(data-aos="fade-down").mb-5 Como insumos básicos los formatos de referencia y contra referencia deben contener el registro de la siguiente información:

    .tarjeta.tarjeta--azul.p-5.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-start
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Usuarios 
            p En el cual se consignarán todos los datos conocidos del paciente para efectuar el traslado, independiente del tipo de afiliación al sistema de seguridad social en salud, teniendo en cuenta que, si las condiciones médicas son de urgencia para preservar la vida del paciente, dicho traslado no se puede detener por trámites administrativos.
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/90.png', alt='')  
        .row.justify-content-center.align-items-start
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Vehículo que efectúa el traslado del paciente 
            p Dicho traslado se efectuará en la ambulancia que se encuentre de turno, con personal con entrenamiento de  primeros auxilios, dejando el registro del vehículo en el cual se traslada al paciente, en dicho caso en el que el paciente requiera el acompañamiento familiar solo podrá ir acompañado de una persona o familiar responsable, de lo contrario deberá registrarse y hacer el debido proceso legal y de acuerdo al grado de complejidad se establecerá si durante el traslado el paciente ira acompañado de personal auxiliar de enfermería o de un médico.
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/91.png', alt='') 
        .row.justify-content-center.align-items-start
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Red de comunicaciones 
            p En el traslado de pacientes es de vital importancia establecer canales de comunicación entre la entidad que realiza la remisión del paciente y la entidad receptora para garantizar que la intervención que requiere el paciente se brinde de manera oportuna, por ejemplo, mediante la red de telemedicina del sistema de salud. 
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/92.png', alt='') 
        .row.justify-content-center.align-items-start
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Registro e informes 
            p Debe contener: fecha, hora, edad, identificación del paciente, nombres completos, diagnóstico, entidad receptora, servicios requeridos, aseguramiento, profesional que realizó el diagnóstico y realiza la remisión, registro de la tripulación que lo acompaña, registro de familiar o responsable, la información anterior será lo que para el caso del traslado se conozca como referencia. 
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/93.png', alt='') 
    p(data-aos="fade-down").mb-5 La contrarreferencia se centra en la respuesta que brinda la entidad receptora del paciente a la entidad que lo remitió, donde se puede establecer una contra remisión del paciente con los lineamientos a seguir para continuar con su tratamiento o la información de los servicios prestados al paciente y el resultado de los procedimientos efectuados.

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="flip-down")
        .tarjeta.bgprimario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Referencia y contrarreferencia
                  p.mb-0 Cómo funciona la referencia, la remisión y la contrarreferencia en el Hospital Salazar de Villeta.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=5HNbuT61HRU " target="_blank")
                    span Ver video
                    i.fas.fa-play-circle         
</template>

<script>
export default {
  name: 'Tema10',
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
