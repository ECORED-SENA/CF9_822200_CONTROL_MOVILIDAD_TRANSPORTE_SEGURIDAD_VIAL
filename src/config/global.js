export default {
  global: {
    componenteFormativo: 'Protocolo en traslado de víctimas y su monitoreo',
    descripcionCurso:
      'Es tan importante actuar de manera inmediata cuando después de un accidente se requiera dar primeros auxilios a los heridos y garantizar las condiciones para que sus lesiones no se compliquen. Para estas intervenciones las personas deben contar con una preparación para que su ayuda realmente sea eficaz.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos reanimación y aplicación de técnicas de reanimación',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Características y condiciones generales del paciente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Protocolos para el aseguramiento en la reanimación del paciente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnicas de preparación prehospitalaria',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Técnicas de monitoreo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Metodologías sobre reevaluación constante del paciente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo:
          'Comunicaciones entre el medio de transporte y el centro hospitalario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo:
          'Valoración de la víctima (<i>triage</i>) concepto de anamnesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Medios mecánicos métodos manuales e improvisados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Técnicas de diligenciamiento de formatos y remisiones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        icono: 'far fa-file-alt',
        numero: '11',
        titulo: 'Técnicas y protocolo para traslado de víctimas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. Características y condiciones generales del paciente.',
      referencia:
        'Ministerio de salud de Argentina. (2016). <i>Manual de primeros auxilios y prevención de lesiones.</i> ',
      tipo: 'PDF',
      link:
        'https://www.argentina.gob.ar/sites/default/files/manual_1ros_auxilios_web.pdf',
    },
    {
      tema: '8. Valoración de la víctima (triage) concepto de anamnesis',
      referencia:
        'Vásquez Guzmán, M.A & Morales, Hernández A.E. et al. (2017). <i>Correlación clínica del triage con el diagnóstico clínico de ingreso y egreso realizado con los pacientes que acuden al servicio médico en urgencias de un hospital privado.</i>',
      tipo: 'Web-artículo',
      link:
        'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0186-48662017000400466',
    },
  ],
  glosario: [
    {
      termino: 'Anamnesis',
      significado:
        'Es el proceso de la exploración clínica que se ejecuta mediante el interrogatorio para identificar personalmente al individuo, conocer sus dolencias actuales, obtener una retrospectiva de él y determinar los elementos familiares, ambientales y personales relevantes.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Es el proceso continuo y sistemático mediante el cual se verifica la eficiencia y la eficacia de un proyecto mediante la identificación de sus logros y debilidades y, en consecuencia, se recomiendan medidas correctivas para optimizar los resultados esperados del proyecto.',
    },
    {
      termino: 'Reanimación',
      significado:
        'Técnica terapéutica destinada a hacer que una persona recupere el conocimiento y vuelva a tener una actividad cardíaca y respiratoria normal.',
    },
  ],
  referencias: [
    {
      referencia:
        'Castillo, N. & Rubiano, A. (2022). <i>Escritura de artículos científicos en atención prehospitalaria.</i>',
      link:
        'https://www.neurocienciasjournal.com/index.php/LAJPEM/article/view/380/274',
    },
    {
      referencia:
        'Díaz Polo, J. & Hurtado Fuentes, J. A. et. al. (2021). Análisis de tipo de triage a nivel prehospitalario como propuesta metodológica en el programa de atención prehospitalaria de la Universidad Militar Nueva Granada.',
      link: 'https://repository.unimilitar.edu.co/handle/10654/39352',
    },
    {
      referencia:
        'Graf, C. (20202). Tecnologías de información y comunicación (TIC’s). Primer paso para la implementación de telesalud y de telemedicina.',
      link: 'http://www.revista.spr.org.py/index.php/spr/article/view/114',
    },
    {
      referencia:
        'Jiménez Casares, A.P. & Guzmán Rojas, N. et.al. (2021). <i>Avances tecnológicos en salud desde el área de atención prehospitalaria</i>.',
      link: 'https://repository.ces.edu.co/handle/10946/5360',
    },
    {
      referencia: '<i>Medline plus</i>. (s.f). RPC.',
      link: 'https://medlineplus.gov/spanish/ency/article/000010.htm',
    },
    {
      referencia: 'Publicaciones Médicas. (2007). <i>Manual de Semiología.</i>',
      link:
        'http://publicacionesmedicina.uc.cl/ManualSemiologia/130Facies.html',
    },
    {
      referencia:
        'Urgilés Cantos, J.F. & Campoverde Carrasco, E.E. (2020). <i>Sistema de alarma y monitorio de pulso cardiaco y temperatura corporal</i>.',
      link: 'https://dspace.ups.edu.ec/handle/123456789/19610',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Juan Carlos García Vargas',
        cargo: 'Experto temático',
        centro:
          'Regional Bogotá Capital - Centro de Tecnologías del Transporte',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Bogotá Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora pedagógica y metodológica',
        centro:
          'Regional Distrito Capital - Centro de Diseño y Gestión industrial',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Julian Ramirez Benitez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      // {
      //   nombre: 'Nombre',
      //   cargo: 'Validación de diseño y contenido',
      //   centro:
      //     'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      // },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
