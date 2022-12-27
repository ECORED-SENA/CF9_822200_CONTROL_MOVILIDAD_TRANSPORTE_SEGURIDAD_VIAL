<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4          
      .col-auto.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.svg', alt='')     
      .col-10.my-3      
        p(data-aos="fade-down").mb-0 Los altos índices de accidentes de tránsito que se han evidenciado en todo el mundo y que han llevado a la muerte de muchas personas, han hecho generar una alarma "por el cuidado de la vida" en este sentido, se han diseñado protocolos para enseñar a las personas a ser primer respondiente, a adquirir conocimientos en primeros auxilios, y a conocer protocolos para el evaluación, monitoreo y traslado de víctimas cuando así se requiera a centros médicos cercanos.  

    p(data-aos="fade-down").mb-5 Sin embargo, es necesario aclarar, que quien tome este tipo de decisiones debe contar con los conocimientos necesarios para no afectar la vida y estabilidad del paciente, por lo que le invito a revisar el video: protocolo en el traslado de víctimas y su monitoreo. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/17Xbyez6qI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)             
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
