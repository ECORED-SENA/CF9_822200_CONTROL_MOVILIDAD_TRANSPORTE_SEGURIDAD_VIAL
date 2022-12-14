<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Técnicas de monitoreo
    .row.justify-content-center.align-items-start.mb-4
      .col-lg-7.my-3
        p(data-aos="fade-down") En aquellos eventos en los que se presentan accidentes viales y en los que preservar la vida y mantener las condiciones de los heridos es vital, el monitoreo es fundamental, pues este consiste en la observación, el seguimiento, la recolección y análisis de la información de parámetros fisiológicos, tales como:
        ul.lista-ul(data-aos="fade-down")
          li 
            i.fas.fa-check.colorv
            p.mb-0 Frecuencia cardiaca. 
          li 
            i.fas.fa-check.colorv
            p.mb-0 Presión arterial. 
          li 
            i.fas.fa-check.colorv
            p.mb-0 Saturación.
          li 
            i.fas.fa-check.colorv
            p.mb-0 Temperatura, entre otros.

        p(data-aos="fade-down") Toda la información que se pueda tener del paciente en la vía es fundamental pues estos valores se convierten en un indicador del estado de salud, esta observación va acompañada de la información suministrada por el paciente (antecedentes, síntomas, evolución de la enfermedad, respuesta del organismo a tratamientos, etc.)                      
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/57.png', alt='') 

    .bg5.p-4
      p(data-aos="fade-down") Usualmente se cree que el monitoreo solo es mantener a un paciente conectado a un equipo que arroja datos, pero en las vías, una vez se presenta el accidente, hay otras formas también de hacer esa vigilancia como lo es la exploración física, la comunicación no verbal del paciente (por ejemplo, en un estado de sedación sus movimientos y reacciones) y en general todo contacto tanto visual como verbal que brinda la relación médica - paciente o primer respondiente - herido (actor vial)

      p(data-aos="fade-down").mb-0 Precisamente la necesidad de realizar el monitoreo del estado clínico del paciente es ir más a profundidad y no solo basarse en los factores físicos externos, es por esa razón que surge el monitoreo con instrumentos que van a medir lo que no se puede observar en el examen físico, por eso se explican a continuación las dos clases que existe: 
    .row.justify-content-center.align-items-start.my-5
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg8")(data-aos="fade-right")
          .row.justify-content-center.align-items-star(titulo="Monitoreo clínico")
            .col-lg-7 
              p Es un control y seguimiento del estado del paciente que se basa en la mera observación y el examen físico, donde se pueden notar rasgos como: color de la piel (palidez, color amarillo, enrojecimiento), respuesta a estímulos, entre otros y sin la necesidad del uso de dispositivos electrónicos.        
            .col-lg-5
              img.img-a.img-t(src='@/assets/curso/temas/58.png', alt='')      
          .row.justify-content-center.align-items-star(titulo="Monitoreo instrumental")
            .col-lg-7 
              p Es un control y seguimiento del estado del paciente que se basa en la mera observación y el examen físico, donde se pueden notar rasgos como: color de la piel (palidez, color amarillo, enrojecimiento), respuesta a estímulos, entre otros y sin la necesidad del uso de dispositivos electrónicos.          
            .col-lg-5
              img.img-a.img-t(src='@/assets/curso/temas/59.png', alt='')  

    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Monitoreo invasivo y no invasivo

    p(data-aos="fade-down").mb-5 También es importante definir los términos monitoreo invasivo y no invasivo, ya que son muy utilizados en el ámbito médico:

    .tarjeta.tarjeta--azul.p-5.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-start
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Monitoreo no invasivo
            p Este tipo de monitoreo es más sencillo de llevar a cabo y aunque implica el uso de instrumentos y dispositivos no es necesario entrar físicamente en el cuerpo del paciente, pero sí estarán en contacto con el individuo, algunos ejemplos son:
            ul.lista-ul.mb-0
              li 
                i.fas.fa-check.colorv
                p.mb-0 El estetoscopio (aparato acústico por medio del cual se oyen los sonidos internos del cuerpo) 
              li 
                i.fas.fa-check.colorv
                p.mb-0 El termómetro y
              li 
                i.fas.fa-check.colorv
                p.mb-0 El tensiómetro por mencionar algunos.
                 
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/60.png', alt='')        

        .row.justify-content-center.align-items-start
          .col-md-5.mb-4.mb-md-0
            h4.mb-4 Monitoreo invasivo
            p Este tipo de monitoreo se da cuando los datos que son requeridos por el especialista hacen necesaria la incisión de tejido y entrar en el organismo del paciente para obtener dicha información, bien sea que se necesite tener en vigilancia al paciente o haga parte de una serie de exámenes especializados, un ejemplo es:
            ul.lista-ul.mb-0
              li 
                i.fas.fa-check.colorv
                p.mb-0 La medición de la presión arterial invasiva, ya que requiere la inserción de un catéter en el cuerpo que va conectado a un equipo de traducción de presión.                   
          .col-md-6
            img.img-a.img-t(src='@/assets/curso/temas/61.png', alt='') 

    p(data-aos="fade-down").mb-5 También es importante considerar que, del adecuado diagnóstico por parte del profesional de la salud, se establecerá el proceso a seguir:   

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-10 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/62.png', alt='')     
    p(data-aos="fade-down").mb-5 El anterior trabajo se traduce en una mejor y oportuna prestación del servicio y el bienestar del paciente, por lo que se hace necesario hablar de los niveles de monitoreo que existen en el sistema médico:  
    .mb-5.d-flex
      .d-flex.flex-wrap.align-items-center.pe-4(style="background-color: black; border-radius: 5px;")
        img(src='@/assets/curso/temas/v.svg' style="max-width: 32px; margin-left: -16px;" data-aos="fade-right")
        h4.col.ps-3.mb-0.text-white(data-aos="fade-right") Niveles de monitoreo

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Nivel de monitoreo básico") 
        .row.justify-content-center.align-items-start 
          .col-lg-6
            h4.mb-4 Nivel de monitoreo básico   
            p Es la observación de parámetros fisiológicos básicos del ser humano, #[b integra el monitoreo clínico y el uso de instrumentos de medición sencillos] y de fácil acceso, a través de estos dispositivos se podrán observar y registrar datos como: 
            ul.lista-ul.mb-0
              li 
                i.fas.fa-check.colorv
                p.mb-0 Frecuencia respiratoria (FR). 
              li 
                i.fas.fa-check.colorv
                p.mb-0 Frecuencia cardiaca (CFC). 
              li 
                i.fas.fa-check.colorv
                p.mb-0 Temperatura (T°). 
              li 
                i.fas.fa-check.colorv
                p.mb-0 Saturación de oxígeno (sato2). 
              li 
                i.fas.fa-check.colorv
                p.mb-0 Presión arterial no invasiva (PANI). 
              li 
                i.fas.fa-check.colorv
                p.mb-0 Latidos por minuto (lpm).                      
          .col-lg-6          
            img.img-a.img-t(src='@/assets/curso/temas/63.png', alt='')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Nivel de monitoreo intermedio") 
        .row.justify-content-center.align-items-start 
          .col-lg-6
            h4.mb-4 Nivel de monitoreo intermedio  
            p Este requiere el uso de instrumentos más especializados y un monitoreo más avanzado ya que se deberán registrar determinados datos con mayor frecuencia o que dependiendo del estado de clínico del paciente requiera un monitoreo continuo.

            p Estos dispositivos harán la toma de información de manera automática, se pueden programar para definir tiempos, intervalos y datos fisiológicos específicos más complejos a medir como:  
            ul.lista-ul.mb-0
              li 
                i.fas.fa-check.colorv
                p.mb-0 La presión arterial no invasiva (PANI). 
              li 
                i.fas.fa-check.colorv
                p.mb-0 La oximetría de pulso.
              li 
                i.fas.fa-check.colorv
                p.mb-0 El electrocardiograma. 
              li 
                i.fas.fa-check.colorv
                p.mb-0 Temperatura corporal (T°). 
              li 
                i.fas.fa-check.colorv
                p.mb-0 Dióxido de carbono exhalado (etco2). 
              li 
                i.fas.fa-check.colorv
                p.mb-0 Índice de perfusión (IP), entre otros.                    
          .col-lg-6          
            img.img-a.img-t(src='@/assets/curso/temas/64.png', alt='')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Nivel de monitoreo avanzado") 
        .row.justify-content-center.align-items-start 
          .col-lg-6
            h4.mb-4 Nivel de monitoreo avanzado 
            p En este tipo de monitoreo se hace necesario el uso de dispositivos de colocación invasiva, ya que estos poseen sensores, actuadores y sondas que requieren ser introducidos en el cuerpo del paciente.

            p Un ejemplo es un #[b transductor de ecografía], su función es producir ondas de sonido que rebotan en los tejidos del cuerpo y formar ecos, estos últimos serán enviados al computador que creará una imagen llamada ecografía, en el uso diario se puede observar este tipo de monitoreo, el introducir un catéter en la arteria radial o femoral para la medición de la presión arterial e intracardiaca.

            p Otro ejemplo es el #[b Doppler espectral que muestra la circulación de la sangre, una ecocardiografía] que es un gráfico que muestra la posición y los movimientos del corazón por medio de ondas ultrasónicas.         
          .col-lg-6          
            img.img-a.img-t(src='@/assets/curso/temas/65.png', alt='') 

    h4(data-aos="fade-down").mb-5 En adición existen diferentes tipos de monitores:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Tipos de monitores
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8(data-aos="fade-left")  
        .tabla-a.color-primario
          table
            thead
              tr
                th Monitores de cabecera 
                th.bgt2 Monitores de transporte 
            tbody
              tr
                td.bgt1 Son los más usados, generalmente van conectados al paciente, donde se puede observar en la pantalla del monitor los datos que va registrando, poseen alarmas que indican si hay algo que está mal según unos parámetros o rangos de valores establecidos previamente y de acuerdo a las circunstancias de cada paciente.
                td.bgt3 Dada la importancia de su uso y precisamente el poder hacer la vigilancia y control, a un paciente que requiere traslado, se hace necesario su portabilidad dentro de los vehículos de emergencia como las ambulancias, pues ayudarán saber en qué condiciones de salud va el paciente y llevar un registro para el momento de ingreso al centro asistencial.                                         
</template>

<script>
export default {
  name: 'Tema5',
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
