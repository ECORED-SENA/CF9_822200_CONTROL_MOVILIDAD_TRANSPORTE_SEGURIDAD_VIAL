<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Valoración de la víctima (<i>triage</i>) concepto de anamnesis

    .row.justify-content-center.align-items-center
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/75.png', alt='')     
      .col-lg-8.my-3
        .bg3.p-4
          p(data-aos="fade-down") Dentro del proceso de valoración y como un mecanismo para tener de primera mano la información del paciente, aparece la anamnesis, la cual básicamente es un proceso de la exploración clínica que recopila datos a través de un interrogatorio-diálogo con el fin de conocer directamente del paciente aspectos relevantes de su situación de salud.

          p(data-aos="fade-down").mb-0 Lo anterior, es diferente al <i>triage</i>, que proviene de la palabra francesa trier definida como separar o clasificar, utilizada desde las batallas napoleónicas para priorizar la atención urgente de los heridos y pacientes.	      
    figcaption.mb-5 Nota. <i>Triage</i> en paciente.

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Anamnesis

    .bg11
      ImagenInfografica.color-primario.py-5(data-aos="fade-left")
        template(v-slot:imagen)
          img.img-a.img-t(src='@/assets/curso/temas/77.png', alt='')

        .tarjeta.color-primario.p-3(x="68%" y="16.5%" numero="+")
          h4.mb-2 Datos personales 
          p.mb-0 Se deben preguntar: nombres completos, sexo y números de contacto.     
        .tarjeta.color-primario.p-3(x="73.5%" y="25.8%" numero="+")
          h4.mb-2 Carácter de la consulta:
          p.mb-0 Se debe preguntar de manera clara los motivos que generan la consulta y registrarlos correctamente.  
        .tarjeta.color-primario.p-3(x="76.5%" y="35.5%" numero="+")
          h4.mb-2 Historia de la dolencia: 
          p.mb-0 Se debe tener conocimiento claro sobre el momento de la vida del paciente en que aparecieron los síntomas, bajo qué situación y cuánto tiempo han durado.    
        .tarjeta.color-primario.p-3(x="79%" y="45.2%" numero="+")
          h4.mb-2 Efectos en su vida cotidiana: 
          p.mb-0 Se debe preguntar por los efectos de estas dolencias en su vida normal, es decir: limitaciones o cambios que le ha producido, etc.   
        .tarjeta.color-primario.p-3(x="79.5%" y="54.8%" numero="+")
          h4.mb-2 Aspectos psicosociales 
          p.mb-0 Es necesario conocer los problemas evidenciados en la historia de vida del individuo a nivel psicoemocional, ya que podrían estar ligados a algunas dolencias, por eso es importante identificar los eventos que puedan haber marcado cambios en la personalidad.  
        .tarjeta.color-primario.p-3(x="76.8%" y="64.5%" numero="+")
          h4.mb-2 Situación personal 
          p.mb-0 Es muy importante conocer la existencia de enfermedades previas y su efecto en los hábitos de vida.  
        .tarjeta.color-primario.p-3(x="74.2%" y="74%" numero="+")
          h4.mb-2 Historia familiar 
          p.mb-0 Este dato proporciona posibles factores de riesgo o causas ya predeterminadas que puedan evidenciar la existencia de problemas de salud.   
        .tarjeta.color-primario.p-3(x="68.5%" y="83.5%" numero="+")
          h4.mb-2 Expectativas frente a los resultados del tratamiento: 
          p.mb-0 Aquí se cuestiona que espera el paciente que suceda en su proceso de tratamiento con el fin de conocer sus expectativas frente a la terapia y los resultados. 

    p(data-aos="fade-down").my-5 Una vez se define lo anterior, el <i>triage</i> va a permitir la priorización de los pacientes según el riesgo clínico, lo que permite dar un manejo a la cantidad de pacientes cuando la demanda y las necesidades clínicas desbordan los recursos disponibles.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/78.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        h5.mb-0 Importante…
          br
          br
          | El <i>triage</i> maneja unas escalas, #[b.or 5 niveles de categorización], aplicando la máxima que dice que lo urgente no siempre es grave y lo grave no es siempre urgente y así se logra realizar una clasificación de pacientes de acuerdo a su grado de urgencia, de tal manera que los más urgentes serán atendidos primero y el resto serán evaluados en varias ocasiones hasta ser valorados por el área médica.   

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="flip-down")
        .tarjeta.bgprimario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 <i>Triage</i> 
                  p Sabe qué es el <i>triage</i> y por qué es importante en un servicio de salud…
                  p.mb-0 Secretaria de salud de Zipaquirá
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=85qzAbncauM" target="_blank")
                    span Ver video
                    i.fas.fa-play-circle             

    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="flip-down")
        .tarjeta.bgprimario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v2.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Estudio de caso.
                  p.mb-0 Correlación clínica del <i>triage</i> con el diagnóstico clínico de ingreso y egreso realizado con los pacientes que acuden al servicio médico en urgencias de un hospital privado.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0186-48662017000400466" target="_blank")
                    span Ver enlace
                    i.fas.fa-link               
</template>

<script>
export default {
  name: 'Tema8',
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
