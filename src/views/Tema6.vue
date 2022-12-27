<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Metodologías sobre reevaluación constante del paciente
    p(data-aos="fade-down") La reevaluación constante de los pacientes se enfoca en la importancia de determinar los cambios de estado médico general de los pacientes, permitiendo la continuación y la adaptación del tratamiento implementado, por lo que dentro de la priorización de la gravedad se brindará atención en orden de grado de urgencia, por lo tanto, a los pacientes con menor gravedad de urgencia se les garantizará una reevaluación de sus condiciones hasta que puedan ser evaluados por un médico.
    p(data-aos="fade-down").mb-5 Para ello, es importante realizar una comparación de los signos vitales de la evaluación inicial efectuada al paciente y los signos registrados en las reevaluaciones constantes, así mismo, se debe registrar cualquier signo de deterioro que se evidencie, ya sea:
    .row.justify-content-center.align-items-start.mb-5
      .col-lg-10    
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/66.png', alt='')     

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/67.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Importante…]
          br
          br
          | Para pacientes con condiciones médicas estables se recomienda realizar una reevaluación de su estado cada 15 minutos, mientras que para pacientes con condiciones médicas inestables se recomienda efectuar la misma cada 5 minutos. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/68.png', alt='')     
      .col-lg-8.my-3
        h4(data-aos="fade-down") Por otro lado, en el proceso de evaluación de los pacientes la información del paciente es vital, por ejemplo:          
        ul.lista-ul.mb-0
          li 
            i.fas.fa-check.colorv
            p.mb-0 Lo referente a la escena del accidente. 
          li 
            i.fas.fa-check.colorv
            p.mb-0 Las condiciones iniciales, los antecedentes médicos. 
          li 
            i.fas.fa-check.colorv
            p.mb-0 Las alergias a medicamentos. 
          li 
            i.fas.fa-check.colorv
            p.mb-0 Los medicamentos que el paciente usa actualmente, las patologías de base, etc.… 
        .bg2.p-4
          p(data-aos="fade-down").mb-0 Es información que se recopilará por medio del interrogatorio al paciente, sus familiares o personal que prestó los primeros auxilios, el cual será considerado el primer filtro en la metodología de evaluación del paciente. 

    figcaption.mb-5 Nota. Reevaluación del estado del paciente. 

    h4(data-aos="fade-down").mb-5 En consecuencia, el proceso de reevaluación continua del paciente tendrá en cuenta la obtención de los datos por medio de dos métodos:  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/69.svg', alt='') 

    p(data-aos="fade-down") Con la implementación de los anteriores métodos se efectuará una escala de reevaluación del paciente, permitiendo determinar sí el estado del paciente mejora con el tratamiento asignado o por el contrario sí se evidencia un estado de deterioro, lo cual llevará a la toma de otras decisiones, como la modificación del tratamiento.               
</template>

<script>
export default {
  name: 'Tema6',
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
