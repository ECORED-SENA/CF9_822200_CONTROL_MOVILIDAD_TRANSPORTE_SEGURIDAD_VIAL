<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Comunicaciones entre el medio de transporte y el centro hospitalario
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        p(data-aos="fade-down") La comunicación entre el medio de transporte que atiende la emergencia y el centro hospitalario, permite y facilita que se pueda coordinar en tiempo real el trabajo entre ambos espacios médicos y obtener la asesoría necesaria para brindar los primeros auxilios adecuados en cada caso para gestionar la atención de acuerdo a las condiciones del paciente una vez llegue al centro hospitalario, con el fin de optimizar y organizar los recursos para brindar un mejor servicio. 
        .bg9.p-4
          p(data-aos="fade-down").mb-0 La difusión de los mensajes de manera bidireccional entre los medios de transporte de emergencia y los centros hospitalarios, se puede efectuar por los siguientes medios de transmisión:
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/71.png', alt='') 

    figcaption.mb-5 Nota. Comunicación por radio de ambulancia en emergencia.

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Equipo radiotransmisor para la comunicación por radio  

    p(data-aos="fade-down").mb-5 Este tipo de comunicación se debe efectuar por una frecuencia libre de interferencia, con un lenguaje claro y conciso, es importante para asegurar que el mensaje sea recibido por la otra parte involucrada que se solicite confirmación de que el mensaje fue recibido, en adición se debe procurar brindar el mensaje lentamente de manera que se permita una clara recepción del mismo, para este tipo de comunicación se tiene previsto la implementación de tres tipos de equipos:   

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/70.svg', alt='')

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Equipos de comunicación médica

    p(data-aos="fade-down").mb-5 En adición se cuentan con otra serie de equipos de comunicación que se describen a continuación: 
    .row.justify-content-center.mb-5
      .col-lg-4
        .bg10.p-4.brad.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/72.png' alt='')
          h4.text-center(data-aos="fade-down") Telefonía móvil 
          p.mb-0(data-aos="fade-down") Teléfonos móviles de tecnología digital, con capacidad de difusión y transmisión de información en diferentes modos (audios, videos, ubicación, entre otros), en algunos vehículos de emergencia se está implementando el sistema de tercera generación UMTS (Universal Mobile Telecommunications System).   
      .col-lg-4
        .bg10.p-4.brad.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/73.png' alt='')
          h4.text-center.fst-italic(data-aos="fade-down") Red Trunking 
          p.mb-0(data-aos="fade-down") Sistema implementado por medio de antenas de repetición y microondas digitales que abarcan amplias áreas geográficas, permitiendo acceder a diferentes usuarios de forma simultánea, marcando directamente al número de destino de comunicación, permitiendo dar prioridad entre las llamadas recibidas.  
      .col-lg-4
        .bg10.p-4.brad.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/74.png' alt='')
          h4.text-center.fst-italic(data-aos="fade-down") GPS (Global Positioning System) 
          p.mb-0(data-aos="fade-down") Sistema de recepción de información de los satélites, el cual permite determinar la posición en el momento en el que se capta la señal transferida por los satélites.
</template>

<script>
export default {
  name: 'Tema7',
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
