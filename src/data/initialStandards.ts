import { Standard, AgileTemplate, MaturityQuestion, SummaryTableRow, BibliographyItem } from '../types/standards';

export const SUMMARY_TABLE_DATA: SummaryTableRow[] = [
  {
    area: 'Calidad del producto',
    mainStandard: 'ISO/IEC 25010:2023',
    purpose: 'Define qué atributos debe tener un sistema o producto de calidad.'
  },
  {
    area: 'Requisitos, métricas y evaluación',
    mainStandard: 'Familia ISO/IEC 25000 (SQuaRE)',
    purpose: 'Permite especificar, medir y evaluar la calidad.'
  },
  {
    area: 'Ciclo de vida',
    mainStandard: 'ISO/IEC/IEEE 12207:2026',
    purpose: 'Organiza procesos desde la adquisición hasta el retiro del software.'
  },
  {
    area: 'Pruebas',
    mainStandard: 'ISO/IEC/IEEE 29119',
    purpose: 'Estandariza conceptos, procesos, documentación y técnicas de prueba.'
  },
  {
    area: 'Gestión de calidad',
    mainStandard: 'ISO 9001:2026',
    purpose: 'Establece requisitos para un sistema de gestión de calidad organizacional.'
  },
  {
    area: 'Seguridad de la información',
    mainStandard: 'ISO/IEC 27001:2022',
    purpose: 'Gestiona riesgos de seguridad de la información.'
  },
  {
    area: 'Desarrollo seguro',
    mainStandard: 'NIST SSDF, OWASP ASVS, ISO/IEC 27034',
    purpose: 'Integra ciberseguridad en todo el ciclo de desarrollo.'
  },
  {
    area: 'Madurez de procesos',
    mainStandard: 'CMMI V3.0',
    purpose: 'Evalúa y mejora la capacidad y madurez de la organización.'
  },
  {
    area: 'Inteligencia artificial',
    mainStandard: 'ISO/IEC 42001, 5338 y 25059',
    purpose: 'Gestiona, desarrolla y evalúa sistemas de IA.'
  }
];

export const BIBLIOGRAPHY_DATA: BibliographyItem[] = [
  {
    author: 'International Organization for Standardization',
    year: '2023',
    title: 'ISO/IEC 25019:2023: Quality-in-use model',
    url: 'https://www.iso.org/standard/78177.html'
  },
  {
    author: 'International Organization for Standardization',
    year: '2023',
    title: 'ISO/IEC 25010:2023: Systems and software quality model',
    url: 'https://www.iso.org/obp/ui/#iso:std:iso-iec:25010:ed-2:v1:en'
  },
  {
    author: 'International Organization for Standardization',
    year: '2024',
    title: 'ISO/IEC 25002:2024: Quality model overview and usage',
    url: 'https://www.iso.org/standard/78175.html'
  },
  {
    author: 'International Organization for Standardization',
    year: '2019',
    title: 'ISO/IEC 25030:2019: Quality requirements framework',
    url: 'https://www.iso.org/standard/72116.html'
  },
  {
    author: 'International Organization for Standardization',
    year: '2026',
    title: 'ISO/IEC/IEEE 12207:2026: Software life cycle processes',
    url: 'https://www.iso.org/standard/90219.html'
  },
  {
    author: 'International Organization for Standardization',
    year: '2018',
    title: 'ISO/IEC 29110-4-1:2018: Lifecycle profiles for Very Small Entities',
    url: 'https://www.iso.org/standard/67223.html'
  },
  {
    author: 'International Organization for Standardization',
    year: '2026',
    title: 'ISO 9001:2026: Quality management systems — Requirements',
    url: 'https://www.iso.org/standard/9001'
  },
  {
    author: 'International Organization for Standardization',
    year: '2018',
    title: 'ISO/IEC/IEEE 90003:2018: Application of ISO 9001 to computer software',
    url: 'https://www.iso.org/standard/74348.html'
  },
  {
    author: 'International Organization for Standardization',
    year: '2022',
    title: 'ISO/IEC 27001:2022: Information security management systems',
    url: 'https://www.iso.org/standard/27001'
  },
  {
    author: 'International Organization for Standardization',
    year: '2021',
    title: 'ISO/IEC 5055:2021: Automated source code quality measures',
    url: 'https://www.iso.org/standard/80623.html'
  },
  {
    author: 'IEEE Standards Association',
    year: '2026',
    title: 'IEEE 730-2026: Software Quality Assurance Processes',
    url: 'https://standards.ieee.org/ieee/730/10854/'
  },
  {
    author: 'ISO/IEC JTC 1/SC 7',
    year: '2022',
    title: 'ISO/IEC/IEEE 29119 series: Software testing standards',
    url: 'https://committee.iso.org/sites/jtc1sc7/home/projects/flagship-standards/isoiecieee-29119-series.html'
  },
  {
    author: 'ISACA',
    year: '2023',
    title: 'CMMI V3.0 updates',
    url: 'https://www.isaca.org/resources/news-and-trends/isaca-now-blog/2023/cmmi-updates-take-performance-improvements-to-the-next-level'
  },
  {
    author: 'National Institute of Standards and Technology',
    year: '2022',
    title: 'NIST SP 800-218: Secure Software Development Framework (v1.1)',
    url: 'https://csrc.nist.gov/pubs/sp/800/218/final'
  },
  {
    author: 'OWASP Foundation',
    year: '2025',
    title: 'Application Security Verification Standard 5.0.0',
    url: 'https://owasp.org/projects/asvs'
  },
  {
    author: 'International Organization for Standardization',
    year: '2023',
    title: 'ISO/IEC 5338:2023: AI system life cycle processes',
    url: 'https://www.iso.org/obp/ui/#iso:std:iso-iec:5338:ed-1:v1:en'
  },
  {
    author: 'International Organization for Standardization',
    year: '2023',
    title: 'ISO/IEC 42001:2023: Artificial intelligence management system',
    url: 'https://www.iso.org/standard/81230.html'
  }
];

export const INITIAL_STANDARDS: Standard[] = [
  {
    id: 'iso-25010',
    code: 'ISO/IEC 25010:2023',
    title: 'SQuaRE: Modelo de Calidad del Producto (9 Características)',
    category: 'iso',
    badge: 'CALIDAD · VIGENTE',
    status: 'Vigente',
    organization: 'ISO / IEC JTC 1/SC 7',
    year: '2023',
    summary: 'Reemplazó a la edición 2011 y define nueve características principales de calidad del producto. La calidad en uso se trata por separado en ISO/IEC 25019:2023.',
    description: 'ISO/IEC 25010:2023 estructura el modelo de calidad del producto en nueve características principales. Es fundamental distinguir entre Seguridad (security), que protege datos, accesos y sistemas frente a amenazas, y Seguridad funcional (safety), que evita daños a personas, bienes, negocios, software o medio ambiente causados por fallos o comportamientos peligrosos. La calidad en uso ya no forma parte de ISO/IEC 25010, sino de ISO/IEC 25019:2023.',
    sdlcPhase: 'Calidad de Producto',
    keyPillars: [
      '1. Adecuación funcional: funciones completas, correctas y apropiadas para las necesidades del usuario',
      '2. Eficiencia del desempeño: comportamiento temporal (tiempos de respuesta), capacidad y utilización de recursos',
      '3. Compatibilidad: capacidad de coexistir e interoperar con otros productos, sistemas o componentes',
      '4. Capacidad de interacción (antes Usabilidad): facilidad de aprendizaje, operabilidad, prevención de errores del usuario, inclusión, asistencia al usuario y claridad de interacción',
      '5. Fiabilidad: ausencia de fallos, disponibilidad, tolerancia a fallos y recuperabilidad',
      '6. Seguridad (security): confidencialidad, integridad, autenticidad, trazabilidad y resistencia frente a ataques',
      '7. Mantenibilidad: facilidad para analizar, modificar, probar y reutilizar el software (reduce el costo de evolución)',
      '8. Flexibilidad (antes Portabilidad): adaptabilidad, instalabilidad, sustituibilidad y escalabilidad',
      '9. Seguridad funcional (safety): capacidad de evitar daños a personas, bienes, negocios, software o medio ambiente'
    ],
    documentationArtifacts: [
      'Especificación de Requisitos de Calidad del Producto (según ISO/IEC 25030:2019)',
      'Modelo de Calidad del Producto alineado a las 9 características de ISO/IEC 25010:2023',
      'Evaluación separada de Calidad en Uso conforme a ISO/IEC 25019:2023',
      'Diferenciación documental de controles de Security vs. Safety'
    ],
    checklist: [
      '¿Se especificaron requisitos medibles sobre las 9 características de ISO/IEC 25010:2023?',
      '¿Se distingue claramente entre Seguridad (security: protección contra ataques) y Seguridad funcional (safety: evitar daños)?',
      '¿Se evalúa la escalabilidad dentro de Flexibilidad y la ausencia de fallos dentro de Fiabilidad?',
      '¿Se aborda la Calidad en Uso de forma independiente mediante ISO/IEC 25019:2023?'
    ],
    practicalExample: 'Un sistema crítico médico e industrial evalúa sus 9 características bajo ISO/IEC 25010:2023, separando la protección criptográfica de datos (security) de la prevención de daños físicos a pacientes u operarios (safety).',
    featured: true,
    accentColor: '#38bdf8'
  },
  {
    id: 'iso-25000-square',
    code: 'Familia ISO/IEC 25000 (SQuaRE)',
    title: 'Requisitos y Evaluación de la Calidad de Sistemas y Software',
    category: 'iso',
    badge: 'FAMILIA SQuaRE · VIGENTE',
    status: 'Vigente',
    organization: 'ISO / IEC',
    year: '2014–2024',
    summary: 'Sustituyó y amplió las antiguas ISO/IEC 9126 e ISO/IEC 14598 para establecer un lenguaje común al definir requisitos, seleccionar métricas y evaluar calidad.',
    description: 'SQuaRE (Systems and software Quality Requirements and Evaluation) organiza sus divisiones en gestión de calidad, modelos de calidad, medición, requisitos y evaluación. Incluye normas específicas para planificación, visión general de modelos, calidad de producto, calidad en uso, métricas cuantitativas, requisitos, proceso de evaluación e inteligencia artificial.',
    sdlcPhase: 'Calidad de Producto',
    keyPillars: [
      'ISO/IEC 25001:2014: planificación y gestión de las actividades de calidad',
      'ISO/IEC 25002:2024: visión general, estructura y uso de modelos de calidad',
      'ISO/IEC 25010:2023: modelo de calidad de producto (9 características)',
      'ISO/IEC 25019:2023: modelo de calidad en uso (eficacia, eficiencia y satisfacción en contexto real)',
      'ISO/IEC 25023:2016: medidas cuantitativas de calidad del producto (vigente, en revisión)',
      'ISO/IEC 25030:2019: marco para especificar requisitos de calidad',
      'ISO/IEC 25040 y 25041: proceso y guía de evaluación de la calidad',
      'ISO/IEC 25059:2023: modelo de calidad para sistemas de inteligencia artificial'
    ],
    documentationArtifacts: [
      'Plan de Gestión de Actividades de Calidad (ISO/IEC 25001:2014)',
      'Especificación de Requisitos de Calidad (ISO/IEC 25030:2019)',
      'Reporte de Evaluación de Calidad (ISO/IEC 25040 y 25041)',
      'Evaluación de Calidad en Uso en contexto real (ISO/IEC 25019:2023)'
    ],
    checklist: [
      '¿Se utiliza ISO/IEC 25030:2019 como marco para especificar requisitos de calidad?',
      '¿Se evalúa la calidad en uso (eficacia, eficiencia y satisfacción) mediante ISO/IEC 25019:2023?',
      '¿Se consideran las medidas cuantitativas de ISO/IEC 25023:2016 (actualmente vigente y en revisión)?',
      '¿El proceso de evaluación sigue las directrices de ISO/IEC 25040 y 25041?'
    ],
    practicalExample: 'Una organización estructura sus requisitos de calidad con ISO/IEC 25030:2019, mide atributos del producto con ISO/IEC 25010:2023 y valida la eficacia y satisfacción del usuario en un contexto real con ISO/IEC 25019:2023.',
    featured: true,
    accentColor: '#0ea5e9'
  },
  {
    id: 'iso-25023',
    code: 'ISO/IEC 25023:2016',
    title: 'SQuaRE: Medidas Cuantitativas de Calidad del Producto',
    category: 'iso',
    badge: 'MÉTRICAS · EN REVISIÓN',
    status: 'Vigente (en revisión)',
    organization: 'ISO / IEC',
    year: '2016',
    summary: 'Define medidas cuantitativas para evaluar las características de calidad del producto de software; sigue vigente aunque se encuentra en revisión.',
    description: 'Forma parte de la división de medición de la familia ISO/IEC 25000 (SQuaRE). Proporciona métricas objetivas para cuantificar atributos de calidad del producto y se encuentra actualmente vigente pero en proceso de revisión para su alineación con las actualizaciones recientes de SQuaRE.',
    sdlcPhase: 'Calidad de Producto',
    keyPillars: [
      'Medidas cuantitativas para evaluar características de calidad del producto',
      'Integración con el modelo de calidad ISO/IEC 25010 y la visión general ISO/IEC 25002:2024',
      'Base para los procesos de evaluación de ISO/IEC 25040 y 25041',
      'Estado normativo actual: vigente, aunque en revisión'
    ],
    documentationArtifacts: [
      'Catálogo de Métricas Cuantitativas del Producto',
      'Informe de Medición y Evaluación SQuaRE'
    ],
    checklist: [
      '¿Las métricas seleccionadas están vinculadas con requisitos de calidad verificables?',
      '¿Se contempla su actualización futura conforme avance la revisión de ISO/IEC 25023:2016?'
    ],
    practicalExample: 'Un equipo de calidad define fórmulas de medición objetiva para tiempos de respuesta y tasas de fallos tomando como referencia ISO/IEC 25023:2016.',
    featured: false,
    accentColor: '#38bdf8'
  },
  {
    id: 'iso-12207',
    code: 'ISO/IEC/IEEE 12207:2026',
    title: 'Procesos del Ciclo de Vida del Software',
    category: 'iso',
    badge: 'SDLC · VIGENTE',
    status: 'Vigente',
    organization: 'ISO / IEC / IEEE',
    year: '2026',
    summary: 'Publicada en abril de 2026, establece el marco común para los procesos del ciclo de vida del software y reemplazó a la edición 2017 (actualmente retirada).',
    description: 'ISO/IEC/IEEE 12207:2026 cubre adquisición y suministro, definición y desarrollo, integración, operación, mantenimiento, soporte y retiro del software, así como gestión técnica, organizacional y mejora de procesos. No obliga a usar cascada, Scrum, DevOps, Kanban ni ninguna metodología específica: puede aplicarse de manera iterativa, incremental, recursiva o ágil. La documentación asociada puede estructurarse con ISO/IEC/IEEE 15289:2019 y la ingeniería de requisitos con ISO/IEC/IEEE 29148:2018.',
    sdlcPhase: 'Arquitectura',
    keyPillars: [
      'Adquisición y suministro de sistemas y software',
      'Definición y desarrollo (compatible con Scrum, DevOps, Kanban o cascada)',
      'Integración, operación y mantenimiento continuo',
      'Soporte y retiro controlado del software',
      'Gestión técnica, organizacional y mejora de procesos',
      'Complementada por ISO/IEC/IEEE 15289:2019 (documentación) e ISO/IEC/IEEE 29148:2018 (requisitos)'
    ],
    documentationArtifacts: [
      'Estructura de información y documentación del ciclo de vida (ISO/IEC/IEEE 15289:2019)',
      'Especificación y trazabilidad de requisitos (ISO/IEC/IEEE 29148:2018)',
      'Registros de gestión de configuración, pruebas, revisión y control de cambios',
      'Plan de operación, mantenimiento y retiro del software'
    ],
    checklist: [
      '¿Se mantiene trazabilidad, gestión de configuración, pruebas, revisión y control de cambios sin importar si se usa Scrum, Kanban o DevOps?',
      '¿Se estructura la documentación del ciclo de vida tomando como referencia ISO/IEC/IEEE 15289:2019?',
      '¿La obtención, análisis, validación y trazabilidad de requisitos se apoya en ISO/IEC/IEEE 29148:2018?',
      '¿Están contemplados los procesos desde la adquisición hasta el soporte y retiro del software?'
    ],
    practicalExample: 'Una organización desarrolla productos iterativamente con Scrum y DevOps mientras cumple ISO/IEC/IEEE 12207:2026 mediante trazabilidad entre requisito, código, prueba y versión liberada.',
    featured: true,
    accentColor: '#0ea5e9'
  },
  {
    id: 'iso-29110-15289-29148',
    code: 'ISO/IEC 29110, 29148:2018 & 15289:2019',
    title: 'Entidades Muy Pequeñas (VSE), Ingeniería de Requisitos y Documentación',
    category: 'documentation',
    badge: 'REQUISITOS & VSE · VIGENTE',
    status: 'Vigente',
    organization: 'ISO / IEC / IEEE',
    year: '2018–2019',
    summary: 'Normas que adaptan el ciclo de vida para organizaciones de hasta 25 personas (ISO/IEC 29110) y estandarizan la ingeniería de requisitos (29148:2018) y la documentación (15289:2019).',
    description: 'ISO/IEC 29110 (como ISO/IEC 29110-4-1:2018) está orientada a las VSE (Very Small Entities: empresas, departamentos u organizaciones de hasta 25 personas), adaptando elementos de ISO/IEC/IEEE 12207 para un único proyecto con enfoques ágiles, iterativos, incrementales, evolutivos o en cascada. Por su parte, ISO/IEC/IEEE 29148:2018 guía la obtención, análisis, validación, documentación, gestión y trazabilidad de requisitos, e ISO/IEC/IEEE 15289:2019 estructura el contenido de la documentación del ciclo de vida.',
    sdlcPhase: 'Requerimientos',
    keyPillars: [
      'ISO/IEC 29110 (29110-4-1:2018): perfil básico para entidades muy pequeñas (hasta 25 personas)',
      'Admite enfoques ágiles, iterativos, incrementales, evolutivos o en cascada sin burocracia corporativa excesiva',
      'ISO/IEC/IEEE 29148:2018: obtención, análisis, validación, documentación, gestión y trazabilidad de requisitos',
      'ISO/IEC/IEEE 15289:2019: estructuración de los elementos de información (documentación) del ciclo de vida'
    ],
    documentationArtifacts: [
      'Especificación y Matriz de Trazabilidad de Requisitos conforme a ISO/IEC/IEEE 29148:2018',
      'Elementos de información del ciclo de vida según ISO/IEC/IEEE 15289:2019',
      'Paquete de gestión de proyecto y desarrollo del perfil básico ISO/IEC 29110'
    ],
    checklist: [
      '¿Si el equipo tiene hasta 25 personas, se aprovecha el perfil básico de ISO/IEC 29110 para mantener orden y evidencia ágil?',
      '¿Cada requisito es analizado, validado y trazado hasta el código y las pruebas según ISO/IEC/IEEE 29148:2018?',
      '¿La documentación generada aporta evidencia verificable acorde a ISO/IEC/IEEE 15289:2019?'
    ],
    practicalExample: 'Una pyme de desarrollo de 18 integrantes adopta ISO/IEC 29110 junto con ISO/IEC/IEEE 29148:2018 para ordenar sus proyectos y demostrar calidad ante clientes sin la carga documental de una gran corporación.',
    featured: false,
    accentColor: '#06b6d4'
  },
  {
    id: 'iso-9001',
    code: 'ISO 9001:2026 & ISO/IEC/IEEE 90003:2018',
    title: 'Sistemas de Gestión de Calidad (6.ª Edición) y Guía para Software',
    category: 'iso',
    badge: 'GESTIÓN · VIGENTE',
    status: 'Vigente',
    organization: 'ISO / IEC / IEEE',
    year: '2026',
    summary: 'Sexta edición publicada el 16 de septiembre de 2026; reemplaza progresivamente a ISO 9001:2015 (transición hasta el 30/09/2029). Complementada en software por ISO/IEC/IEEE 90003:2018.',
    description: 'ISO 9001:2026 establece los requisitos para un sistema de gestión de calidad organizacional con el fin de entregar productos y servicios que cumplan requisitos, satisfagan al cliente y mejoren continuamente. La certificación ISO 9001 es voluntaria y la otorgan entidades certificadoras acreditadas, no directamente ISO. En software, ISO/IEC/IEEE 90003:2018 ofrece orientación para adquisición, suministro, desarrollo, operación y mantenimiento; aunque fue confirmada en 2025 y sigue vigente, todavía está basada en la edición previa y deberá revisarse para alinearse con ISO 9001:2026.',
    sdlcPhase: 'Gestión Ágil',
    keyPillars: [
      'Contexto de la organización, liderazgo y cultura de calidad',
      'Planificación, gestión de riesgos y oportunidades',
      'Recursos, competencias y documentación controlada',
      'Control de las operaciones y evaluación del desempeño',
      'Mejora continua del sistema de gestión',
      'ISO/IEC/IEEE 90003:2018: guía de aplicación al software (confirmada en 2025, pendiente de revisión frente a 9001:2026)',
      'Certificación voluntaria emitida por entidades certificadoras acreditadas (transición hasta 30/09/2029)'
    ],
    documentationArtifacts: [
      'Alcance y documentación del Sistema de Gestión de Calidad (ISO 9001:2026)',
      'Matriz de riesgos, oportunidades y planificación de calidad',
      'Registros de evaluación del desempeño, auditorías y mejora continua',
      'Lineamientos aplicados al software según ISO/IEC/IEEE 90003:2018'
    ],
    checklist: [
      '¿La organización planifica la transición hacia ISO 9001:2026 (publicada el 16/09/2026, con transición hasta el 30/09/2029)?',
      '¿Se promueve el liderazgo y la cultura de calidad junto con la gestión de riesgos y oportunidades?',
      '¿Se utiliza ISO/IEC/IEEE 90003:2018 teniendo en cuenta que aún se basa en la edición anterior?',
      '¿Si se busca certificación voluntaria, se realiza mediante una entidad certificadora acreditada?'
    ],
    practicalExample: 'Una empresa de desarrollo actualiza su Sistema de Gestión de Calidad a la sexta edición ISO 9001:2026 para fortalecer su cultura de calidad, control operativo y mejora continua.',
    featured: true,
    accentColor: '#3b82f6'
  },
  {
    id: 'iso-29119-ieee-730',
    code: 'ISO/IEC/IEEE 29119 & IEEE 730-2026',
    title: 'Pruebas de Software (Partes 1–5) y Aseguramiento de Calidad (SQA)',
    category: 'documentation',
    badge: 'TESTING & SQA · VIGENTE',
    status: 'Vigente',
    organization: 'ISO / IEC / IEEE',
    year: '2022 / 2026',
    summary: 'ISO/IEC/IEEE 29119 estandariza las pruebas de software (incluidas pruebas guiadas por palabras clave) e IEEE 730-2026 (agosto de 2026) regula el aseguramiento de calidad (SQA).',
    description: 'Es fundamental diferenciar entre Testing o control de calidad (detecta defectos mediante revisiones y pruebas manuales, automatizadas, funcionales, de rendimiento o seguridad) y Aseguramiento de calidad o SQA (previene defectos mediante procesos, estándares, auditorías, métricas, capacitación y mejora continua). La familia ISO/IEC/IEEE 29119 (Partes 1 a 5) cubre conceptos, procesos, documentación, técnicas y pruebas guiadas por palabras clave. Por su parte, IEEE 730-2026 (publicada en agosto de 2026, sustituyendo a IEEE 730-2014) define los requisitos para iniciar, planificar, controlar y ejecutar procesos de SQA.',
    sdlcPhase: 'Testing & QA',
    keyPillars: [
      'Diferencia clave: Testing/Control de Calidad (detecta defectos) vs. SQA (previene defectos mediante procesos y auditorías)',
      'ISO/IEC/IEEE 29119 Partes 1 a 5: conceptos, procesos, documentación, técnicas de diseño y pruebas guiadas por palabras clave',
      'IEEE 730-2026 (agosto de 2026): requisitos para iniciar, planificar, controlar y ejecutar procesos de SQA (sustituye a IEEE 730-2014)',
      'Evidencias sistemáticas: estrategia y plan, casos y procedimientos, datos de prueba, ejecución, incidencias y cierre'
    ],
    documentationArtifacts: [
      'Estrategia y plan de pruebas',
      'Casos y procedimientos de prueba',
      'Datos de prueba',
      'Registro de ejecución de pruebas',
      'Informe de incidencias',
      'Informe de cierre y aceptación',
      'Plan de Aseguramiento de Calidad del Software (SQA Plan conforme a IEEE 730-2026)'
    ],
    checklist: [
      '¿Se distingue en el proyecto entre actividades de Testing (detectar defectos) y de SQA (prevenir defectos)?',
      '¿Se conservan las 6 evidencias habituales de ISO/IEC/IEEE 29119 (estrategia/plan, casos/procedimientos, datos, ejecución, incidencias, cierre/aceptación)?',
      '¿Los procesos de aseguramiento de calidad están alineados con la nueva edición IEEE 730-2026?'
    ],
    practicalExample: 'Un equipo de ingeniería estructura sus casos, datos y registros de ejecución bajo ISO/IEC/IEEE 29119 mientras el área de SQA audita la prevención de defectos conforme a IEEE 730-2026.',
    featured: true,
    accentColor: '#10b981'
  },
  {
    id: 'iso-27001',
    code: 'ISO/IEC 27001:2022 & ISO/IEC 27002:2022',
    title: 'Seguridad de la Información (SGSI) y Controles de Seguridad',
    category: 'security',
    badge: 'SEGURIDAD · VIGENTE',
    status: 'Vigente',
    organization: 'ISO / IEC',
    year: '2022',
    summary: 'Define los requisitos para un Sistema de Gestión de Seguridad de la Información (SGSI) e incluye la guía de controles ISO/IEC 27002:2022 e ISO/IEC 27034 para aplicaciones.',
    description: 'ISO/IEC 27001:2022 gestiona riesgos para preservar la confidencialidad, integridad y disponibilidad de la información. ISO/IEC 27002:2022 proporciona la guía para traducir el SGSI a controles técnicos y organizacionales (incluyendo el Control 8.30 sobre desarrollo externalizado), mientras que ISO/IEC 27034 aporta lineamientos específicos para seguridad de aplicaciones.',
    sdlcPhase: 'Arquitectura',
    keyPillars: [
      'Control de acceso y gestión de identidades',
      'Inventario de activos y gestión de vulnerabilidades',
      'Copias de seguridad, continuidad operativa y respuesta a incidentes',
      'Seguridad de proveedores y supervisión del desarrollo externalizado (Control 8.30)',
      'Protección de repositorios y código fuente',
      'Gestión de secretos, credenciales y datos personales',
      'ISO/IEC 27002:2022 (guía de controles) e ISO/IEC 27034 (seguridad en aplicaciones)'
    ],
    documentationArtifacts: [
      'Declaración de Aplicabilidad (SoA) y Gestión de Riesgos del SGSI (ISO/IEC 27001:2022)',
      'Controles técnicos y organizacionales implementados según ISO/IEC 27002:2022',
      'Política de protección de repositorios, secretos, copias de seguridad y respuesta a incidentes',
      'Controles de seguridad para desarrollo externalizado (Control 8.30)'
    ],
    checklist: [
      '¿Se gestionan accesos, identidades, secretos, credenciales y protección de repositorios de código fuente?',
      '¿Se supervisa y controla la seguridad de proveedores y el desarrollo externalizado (Control 8.30)?',
      '¿Existen planes probados de copias de seguridad, continuidad operativa y respuesta a incidentes?',
      '¿Se emplea ISO/IEC 27002:2022 para aterrizar los controles técnicos y organizacionales del SGSI?'
    ],
    practicalExample: 'Una empresa de software implementa ISO/IEC 27001:2022 e ISO/IEC 27002:2022 para proteger sus repositorios Git, gestionar secretos y auditar el desarrollo externalizado.',
    featured: true,
    accentColor: '#f43f5e'
  },
  {
    id: 'nist-ssdf',
    code: 'NIST SSDF (SP 800-218 v1.1)',
    title: 'Secure Software Development Framework y DevSecOps',
    category: 'security',
    badge: 'DESARROLLO SEGURO · VIGENTE',
    status: 'Vigente',
    organization: 'NIST (National Institute of Standards and Technology)',
    year: '2022',
    summary: 'Marco final vigente (SP 800-218 v1.1) de prácticas de desarrollo seguro. Nota: la Rev. 1 (v1.2, diciembre de 2025) continúa como borrador público inicial.',
    description: 'El Secure Software Development Framework (SSDF), publicado en su versión final como NIST SP 800-218 v1.1, reúne prácticas de desarrollo seguro integrables en cualquier ciclo de vida para reducir vulnerabilidades, disminuir el impacto de fallas y evitar su repetición. La revisión 1 (versión 1.2) continúa como borrador público inicial y no debe citarse como versión final. Además, NIST SP 800-218A (2024) complementa el marco con prácticas para IA generativa y modelos fundacionales.',
    sdlcPhase: 'Testing & QA',
    keyPillars: [
      'Formación en programación segura y revisión de código',
      'Análisis estático (SAST) y dinámico (DAST) en el pipeline',
      'Gestión de dependencias, análisis de componentes de terceros y generación de SBOM',
      'Firma e integridad de artefactos y escaneo de secretos',
      'Corrección de vulnerabilidades priorizada según riesgo',
      'Complementado por NIST SP 800-218A (2024) para IA generativa; v1.2 sigue en estado de borrador público inicial'
    ],
    documentationArtifacts: [
      'Software Bill of Materials (SBOM) y reporte de componentes de terceros',
      'Registros de escaneo SAST, DAST y detección de secretos en CI/CD',
      'Evidencia de firma e integridad criptográfica de artefactos liberados',
      'Plan de remediación de vulnerabilidades priorizado por riesgo'
    ],
    checklist: [
      '¿El pipeline integra análisis estático/dinámico, escaneo de secretos y firma de artefactos?',
      '¿Se genera el SBOM y se analizan continuamente las dependencias de terceros?',
      '¿Se cita NIST SP 800-218 v1.1 como versión final vigente (recordando que v1.2 es borrador público inicial)?',
      '¿Si se usa IA generativa, se aplican las prácticas complementarias de NIST SP 800-218A?'
    ],
    practicalExample: 'Un equipo DevSecOps adopta NIST SP 800-218 v1.1 automatizando el escaneo de secretos, SAST/DAST, generación de SBOM y firma de imágenes de contenedores en cada despliegue.',
    featured: true,
    accentColor: '#fb7185'
  },
  {
    id: 'nist-ssdf-draft',
    code: 'NIST SP 800-218 Rev. 1 (v1.2)',
    title: 'Actualización del Marco SSDF (Borrador Público Inicial)',
    category: 'security',
    badge: 'SSDF v1.2 · BORRADOR',
    status: 'Borrador',
    organization: 'NIST',
    year: '2025',
    summary: 'Borrador público inicial (diciembre de 2025) de la revisión 1 del NIST SSDF. No debe citarse como versión final.',
    description: 'Representa la propuesta de revisión 1 (versión 1.2) de NIST SP 800-218 publicada como borrador público inicial en diciembre de 2025. Para fines normativos y de cumplimiento formal debe utilizarse la versión final vigente NIST SP 800-218 v1.1.',
    sdlcPhase: 'Testing & QA',
    keyPillars: [
      'Estado: Borrador público inicial (diciembre de 2025)',
      'No debe citarse como versión final vigente',
      'La versión final vigente para cumplimiento es NIST SP 800-218 v1.1'
    ],
    documentationArtifacts: [
      'Documento de consulta pública de NIST SP 800-218 Rev. 1 (v1.2)'
    ],
    checklist: [
      '¿Se verifica en la documentación técnica no citar la v1.2 como estándar definitivo sino como borrador?'
    ],
    practicalExample: 'Un equipo de arquitectura revisa las propuestas del borrador v1.2 con fines prospectivos, pero mantiene sus auditorías sobre la versión oficial final SP 800-218 v1.1.',
    featured: false,
    accentColor: '#f59e0b'
  },
  {
    id: 'owasp-asvs',
    code: 'OWASP ASVS 5.0.0',
    title: 'Application Security Verification Standard',
    category: 'security',
    badge: 'SEGURIDAD WEB · VIGENTE',
    status: 'Vigente',
    organization: 'OWASP Foundation',
    year: '2025',
    summary: 'Referencia abierta vigente (versión 5.0.0) para verificar controles de seguridad en aplicaciones web y APIs durante revisiones y pruebas de aceptación.',
    description: 'OWASP ASVS 5.0.0 define requisitos verificables para autenticación, autorización, sesiones, validación de entradas, criptografía, APIs, archivos, configuración, registros y protección frente a vulnerabilidades comunes. Se recomienda utilizar sus requisitos como lista de verificación en revisiones de seguridad y pruebas de aceptación.',
    sdlcPhase: 'Testing & QA',
    keyPillars: [
      'Verificación de autenticación, autorización y gestión de sesiones',
      'Validación de entradas y seguridad en APIs y manejo de archivos',
      'Controles de criptografía, configuración segura y registros (logging)',
      'Protección verificable frente a vulnerabilidades web comunes',
      'Uso directo como lista de verificación en revisiones de seguridad y pruebas de aceptación'
    ],
    documentationArtifacts: [
      'Lista de verificación de seguridad basada en OWASP ASVS 5.0.0',
      'Informe de verificación de seguridad en pruebas de aceptación',
      'Evidencia de validación de entradas, sesiones, criptografía y APIs'
    ],
    checklist: [
      '¿Se emplea OWASP ASVS 5.0.0 como lista de verificación en las revisiones de seguridad y pruebas de aceptación?',
      '¿Están verificados los controles de autenticación, autorización, sesiones, validación de entradas y criptografía?',
      '¿Se audita la seguridad de APIs, manejo de archivos, configuración y registros conforme a la versión 5.0.0?'
    ],
    practicalExample: 'Antes de liberar a producción, el equipo valida los criterios de aceptación de seguridad de su plataforma web y APIs utilizando la lista de verificación de OWASP ASVS 5.0.0.',
    featured: true,
    accentColor: '#ef4444'
  },
  {
    id: 'cmmi-v3',
    code: 'CMMI V3.0',
    title: 'Capability Maturity Model Integration (Versión 3.0)',
    category: 'cmmi',
    badge: 'MADUREZ · VIGENTE',
    status: 'Vigente',
    organization: 'ISACA',
    year: '2023',
    summary: 'Marco de mejora de capacidades y desempeño organizacional administrado por ISACA (lanzado en abril de 2023). No es una norma ISO y no se certifica: se evalúa mediante un appraisal.',
    description: 'CMMI V3.0 mantiene cinco niveles de madurez (1. Inicial, 2. Gestionado, 3. Definido, 4. Gestionado cuantitativamente, 5. Optimizado) y amplía el alcance tradicional de desarrollo de productos y servicios incorporando o reforzando prácticas sobre seguridad, seguridad funcional, gestión de datos, gestión de personas y trabajo virtual. A diferencia de ISO 9001 o ISO/IEC 27001, CMMI no se certifica: la organización se somete a una evaluación o appraisal.',
    sdlcPhase: 'Gestión Ágil',
    keyPillars: [
      'Nivel 1: Inicial',
      'Nivel 2: Gestionado',
      'Nivel 3: Definido',
      'Nivel 4: Gestionado cuantitativamente',
      'Nivel 5: Optimizado',
      'Alcance ampliado en V3.0: seguridad, seguridad funcional, gestión de datos, gestión de personas y trabajo virtual',
      'Evaluación mediante Appraisal (no es una norma ISO ni otorga certificación)'
    ],
    documentationArtifacts: [
      'Evidencias de institucionalización de prácticas para evaluación (Appraisal) CMMI V3.0',
      'Métricas de desempeño organizacional y control estadístico de procesos',
      'Políticas de gestión de datos, gestión de personas, seguridad y trabajo virtual'
    ],
    checklist: [
      '¿Se comprende que CMMI V3.0 no es una norma ISO y que se obtiene una evaluación (appraisal) en lugar de una certificación?',
      '¿La mejora de procesos contempla los 5 niveles: Inicial, Gestionado, Definido, Gestionado cuantitativamente y Optimizado?',
      '¿Se integran las áreas reforzadas en CMMI V3.0: seguridad, seguridad funcional, gestión de datos, personas y trabajo virtual?'
    ],
    practicalExample: 'Una organización de ingeniería de software se somete a un appraisal formal de CMMI V3.0 (ISACA) para evaluar su nivel de madurez integrando gestión de datos, seguridad y equipos en trabajo virtual.',
    featured: true,
    accentColor: '#818cf8'
  },
  {
    id: 'ai-standards',
    code: 'ISO/IEC 42001, 5338, 25059:2023 & NIST 800-218A',
    title: 'Calidad, Ciclo de Vida y Gestión de Sistemas de Inteligencia Artificial',
    category: 'ai',
    badge: 'INTELIGENCIA ARTIFICIAL · VIGENTE',
    status: 'Vigente',
    organization: 'ISO / IEC / NIST',
    year: '2023–2024',
    summary: 'Conjunto de estándares para gobernar sistemas de IA (42001:2023), gestionar su ciclo de vida (5338:2023), evaluar su calidad en SQuaRE (25059:2023) y asegurar IA generativa (NIST SP 800-218A).',
    description: 'La inteligencia artificial introduce riesgos específicos como sesgos, explicabilidad insuficiente, uso inadecuado de datos, pérdida de desempeño por cambios en el entorno y decisiones automatizadas con efectos dañinos. Estas normas permiten gobernar responsabilidades, estructurar el ciclo de vida de IA, evaluar su calidad y asegurar modelos generativos y fundacionales.',
    sdlcPhase: 'Calidad de Producto',
    keyPillars: [
      'ISO/IEC 42001:2023: primer estándar de sistema de gestión de IA (riesgos, responsabilidades, controles y mejora continua)',
      'ISO/IEC 5338:2023: describe los procesos de ciclo de vida para sistemas de IA',
      'ISO/IEC 25059:2023: extiende SQuaRE con un modelo de calidad para IA (transparencia, robustez, control por el usuario, intervención humana y mitigación de riesgos éticos y sociales)',
      'NIST SP 800-218A (2024): complementa el SSDF con prácticas específicas para IA generativa y modelos fundacionales'
    ],
    documentationArtifacts: [
      'Sistema de Gestión de Inteligencia Artificial (SGIA) conforme a ISO/IEC 42001:2023',
      'Documentación de procesos del ciclo de vida de IA según ISO/IEC 5338:2023',
      'Modelo de evaluación de calidad de IA (transparencia, robustez, intervención humana) bajo ISO/IEC 25059:2023',
      'Controles de seguridad para modelos fundacionales e IA generativa según NIST SP 800-218A'
    ],
    checklist: [
      '¿Se gobiernan los riesgos, sesgos y responsabilidades del sistema de IA mediante ISO/IEC 42001:2023?',
      '¿El ciclo de vida del modelo y los datos sigue los procesos de ISO/IEC 5338:2023?',
      '¿Se evalúan transparencia, robustez, control por el usuario e intervención humana con ISO/IEC 25059:2023?',
      '¿Se aplican las prácticas de NIST SP 800-218A cuando se integra IA generativa o modelos fundacionales?'
    ],
    practicalExample: 'Una empresa que integra modelos de IA en su plataforma adopta ISO/IEC 42001:2023 para gobernanza, ISO/IEC 5338:2023 para el ciclo de vida del modelo e ISO/IEC 25059:2023 para auditar robustez y supervisión humana.',
    featured: true,
    accentColor: '#c084fc'
  },
  {
    id: 'complementary-standards',
    code: 'ISO/IEC 5055:2021, 42010, 33000, 20000-1, 9241-11 & WCAG 2.2',
    title: 'Normas Complementarias: Código Fuente, Arquitectura, SPICE, Servicios y Accesibilidad',
    category: 'complementary',
    badge: 'COMPLEMENTARIAS · VIGENTE',
    status: 'Vigente',
    organization: 'ISO / IEC / IEEE / W3C',
    year: '2021–2023',
    summary: 'Estándares especializados para medición automatizada de código fuente (5055:2021), arquitectura (42010), evaluación de procesos (33000 / SPICE), servicios TI (20000-1), usabilidad (9241-11) y accesibilidad web (WCAG 2.2).',
    description: 'Conjunto de normas internacionales que profundizan aspectos específicos de la ingeniería de software: calidad estructural automatizada del código fuente, descripción arquitectónica de sistemas, evaluación de procesos de software, gestión de servicios de TI, orientación sobre usabilidad y pautas de accesibilidad web.',
    sdlcPhase: 'Arquitectura',
    keyPillars: [
      'ISO/IEC 5055:2021: medidas automatizadas de calidad del código fuente (controla riesgos de mantenibilidad, seguridad, rendimiento y fiabilidad)',
      'ISO/IEC/IEEE 42010: descripción y arquitectura de sistemas',
      'ISO/IEC 33000: evaluación y mejora de procesos (sucesora de ISO/IEC 15504, conocida como SPICE)',
      'ISO/IEC 20000-1: gestión de servicios de TI',
      'ISO 9241-11: orientación sobre usabilidad',
      'WCAG 2.2: pautas de accesibilidad web'
    ],
    documentationArtifacts: [
      'Reporte automatizado de calidad estructural de código fuente (ISO/IEC 5055:2021)',
      'Descripción de Arquitectura del Sistema conforme a ISO/IEC/IEEE 42010',
      'Evaluación de capacidad de procesos bajo la familia ISO/IEC 33000 (sucesora de SPICE)',
      'Auditoría de usabilidad (ISO 9241-11) y conformidad de accesibilidad web (WCAG 2.2)'
    ],
    checklist: [
      '¿Se controla de forma automatizada la mantenibilidad, seguridad, rendimiento y fiabilidad del código con ISO/IEC 5055:2021?',
      '¿La arquitectura de los sistemas se describe siguiendo ISO/IEC/IEEE 42010?',
      '¿Se emplea ISO/IEC 33000 (sucesora de ISO/IEC 15504 SPICE) para evaluar y mejorar procesos?',
      '¿Las interfaces cumplen las orientaciones de usabilidad de ISO 9241-11 y las pautas de accesibilidad WCAG 2.2?'
    ],
    practicalExample: 'Un portal de servicios digitales audita su código fuente con ISO/IEC 5055:2021, documenta su arquitectura con ISO/IEC/IEEE 42010 y certifica la accesibilidad de sus pantallas bajo WCAG 2.2.',
    featured: false,
    accentColor: '#a855f7'
  },
  {
    id: 'sectoral-safety-standards',
    code: 'IEC 62304, ISO 26262, DO-178C & IEC 61508',
    title: 'Normas Sectoriales de Seguridad Funcional (Safety Crítico)',
    category: 'complementary',
    badge: 'SAFETY SECTORIAL · VIGENTE',
    status: 'Vigente',
    organization: 'IEC / ISO / RTCA-EUROCAE',
    year: 'Vigente',
    summary: 'Estándares sectoriales críticos cuando una falla del software puede afectar la salud, la vida, la seguridad pública o el medio ambiente.',
    description: 'Cuando el software opera en dominios donde un defecto o comportamiento peligroso puede causar daños físicos a las personas, bienes o al entorno (Seguridad funcional / safety), se aplican normas sectoriales estrictas para medicina, automoción, aeronáutica y sistemas electrónicos programables.',
    sdlcPhase: 'Calidad de Producto',
    keyPillars: [
      'IEC 62304: software para dispositivos médicos',
      'ISO 26262: seguridad funcional para vehículos automotores',
      'DO-178C: consideraciones de software en sistemas y equipos aeronáuticos',
      'IEC 61508: seguridad funcional de sistemas eléctricos, electrónicos y electrónicos programables'
    ],
    documentationArtifacts: [
      'Análisis de peligros y evaluación de riesgos de Seguridad Funcional (Safety)',
      'Matriz de trazabilidad estricta de requisitos de seguridad crítica',
      'Evidencias de verificación estructural según el nivel de criticidad (SIL / ASIL / DAL)'
    ],
    checklist: [
      '¿El sistema puede afectar la salud, la vida, la seguridad pública o el medio ambiente en caso de fallo?',
      '¿Se aplica la norma sectorial correspondiente (IEC 62304 en salud, ISO 26262 en automoción, DO-178C en aeronáutica o IEC 61508 en industria)?'
    ],
    practicalExample: 'El software embebido de un dispositivo médico de monitoreo cardíaco se desarrolla y verifica bajo IEC 62304 para evitar cualquier fallo que ponga en riesgo al paciente.',
    featured: false,
    accentColor: '#14b8a6'
  },
  {
    id: 'agile-devops-practices',
    code: 'Scrum, Kanban, DevOps, Nexus & Clean Code',
    title: 'Prácticas y Marcos Ágiles (Complementarios a las Normas)',
    category: 'agile',
    badge: 'PRÁCTICAS ÁGILES · COMPLEMENTARIO',
    status: 'Complementario',
    organization: 'Comunidad Ágil & DevOps (No son normas oficiales ISO/IEEE)',
    year: 'Complementario',
    summary: 'Marcos de trabajo y buenas prácticas de ingeniería (Scrum, Kanban, DevOps, Nexus, DoD/DoR, SOLID) que no son normas oficiales, pero permiten generar evidencia verificable para cumplirlas.',
    description: 'Las normas internacionales no impiden trabajar con metodologías ágiles. Marcos como Scrum, Kanban, Nexus o principios como Clean Code/SOLID y acuerdos como Definition of Done (DoD) o Definition of Ready (DoR) no constituyen normas oficiales ISO o IEEE, sino prácticas complementarias. Los umbrales habituales (por ejemplo, cobertura de pruebas > 70 %, complejidad ciclomática < 15 o funciones < 25 líneas) son buenas prácticas sugeridas por la industria, no requisitos obligatorios de una norma. La meta es generar evidencia suficiente para demostrar que el producto satisface sus requisitos y que el proceso es repetible, seguro y mejorable.',
    sdlcPhase: 'Gestión Ágil',
    keyPillars: [
      'Historias de usuario con criterios de aceptación y requisitos no funcionales medibles',
      'Repositorios Git, control de versiones y revisión de código por pares',
      'Integración y despliegue continuo (CI/CD) con pruebas automatizadas y análisis de cobertura',
      'Análisis estático de código y escaneo de dependencias y vulnerabilidades',
      'Trazabilidad entre requisito, código, prueba y versión liberada',
      'Registro de incidencias, monitoreo en producción, gestión de cambios y retrospectivas',
      'Umbrales técnicos (cobertura > 70 %, complejidad < 15, funciones < 25 líneas) como buenas prácticas sugeridas, no como mandato normativo'
    ],
    documentationArtifacts: [
      'Historias de usuario con criterios de aceptación verificables',
      'Acuerdos de equipo sugeridos: Definition of Ready (DoR) y Definition of Done (DoD)',
      'Registros de trazabilidad en Git, pipelines CI/CD, cobertura y análisis estático',
      'Actas de gestión de cambios, incidentes y retrospectivas de mejora'
    ],
    checklist: [
      '¿Se distingue claramente que Scrum, Kanban, Nexus y Clean Code son marcos y prácticas complementarias y no normas oficiales?',
      '¿El flujo ágil y DevOps conserva evidencia verificable de trazabilidad entre requisito, código, prueba y versión liberada?',
      '¿Se ejecutan revisiones de código, pruebas automatizadas, análisis estático y escaneo de vulnerabilidades en el pipeline?',
      '¿Los umbrales internos de código y cobertura se aplican como buenas prácticas sugeridas para sostener la mantenibilidad?'
    ],
    practicalExample: 'Un equipo aplica Scrum y DevOps utilizando repositorios Git, revisiones de código, CI/CD y trazabilidad automatizada como evidencia práctica para demostrar conformidad con ISO/IEC/IEEE 12207:2026 e ISO/IEC 25010:2023.',
    featured: false,
    accentColor: '#6366f1'
  }
];

export const INITIAL_AGILE_TEMPLATES: AgileTemplate[] = [
  {
    id: 'tpl-dod',
    title: 'Definition of Done (DoD) y Evidencia Ágil',
    category: 'Scrum',
    description: 'Práctica complementaria (no es una norma oficial) para acordar criterios de calidad y generar evidencia verificable en proyectos ágiles y DevOps.',
    estimatedTime: '15 min de lectura y adaptación',
    difficulty: 'Básico',
    recommendedNorm: 'Práctica complementaria alineada con ISO/IEC 25010:2023 y CMMI V3.0',
    markdownContent: `# Definition of Done (DoD) - Acuerdo Complementario de Equipo
**Nota:** El DoD es una práctica ágil complementaria (no una norma oficial). Los umbrales numéricos incluidos son **buenas prácticas sugeridas** para generar evidencia verificable.

Toda historia de usuario o cambio se considerará **TERMINADO** cuando deje evidencia verificable de:

## 1. Control de Versiones y Calidad de Código
- [ ] Código versionado en repositorio Git con trazabilidad al requisito o historia de usuario.
- [ ] Revisión de código aprobada por pares.
- [ ] Análisis estático de código ejecutado (buena práctica sugerida: complejidad ciclomática < 15 y funciones < 25 líneas).
- [ ] Medidas automatizadas de mantenibilidad, seguridad, rendimiento y fiabilidad revisadas (referencia: ISO/IEC 5055:2021).

## 2. Pruebas Automatizadas (ISO/IEC/IEEE 29119)
- [ ] Pruebas unitarias y de integración ejecutadas en el pipeline de CI/CD.
- [ ] Análisis de cobertura registrado (buena práctica sugerida: cobertura > 70 % u 80 % en código nuevo).
- [ ] Registro de ejecución e informe de incidencias actualizados.

## 3. Desarrollo Seguro (NIST SSDF SP 800-218 v1.1 & OWASP ASVS 5.0.0)
- [ ] Escaneo de secretos, análisis estático/dinámico (SAST/DAST) y escaneo de dependencias sin fallos críticos.
- [ ] Lista de verificación de controles de seguridad revisada según OWASP ASVS 5.0.0.
- [ ] Firma e integridad de artefactos verificada en el pipeline.

## 4. Trazabilidad y Operación (ISO/IEC/IEEE 12207:2026)
- [ ] Trazabilidad completa entre requisito, código, prueba y versión liberada.
- [ ] Monitoreo en producción y plan de gestión de cambios/incidentes listos.
`,
    defaultData: {
      projectName: 'Plataforma Core',
      coverageTarget: '75%',
      reviewersCount: '2'
    }
  },
  {
    id: 'tpl-dor',
    title: 'Definition of Ready (DoR) para Requisitos Verificables',
    category: 'Scrum',
    description: 'Guía complementaria para preparar historias de usuario con requisitos funcionales y no funcionales medibles antes de iniciar una iteración.',
    estimatedTime: '10 min',
    difficulty: 'Básico',
    recommendedNorm: 'Práctica complementaria alineada con ISO/IEC/IEEE 29148:2018 e ISO/IEC 25030:2019',
    markdownContent: `# Definition of Ready (DoR) - Filtro Práctico de Entrada
**Nota:** Práctica ágil complementaria para facilitar la obtención, análisis, validación y trazabilidad de requisitos conforme a **ISO/IEC/IEEE 29148:2018** e **ISO/IEC 25030:2019**.

Una historia de usuario está lista para ser trabajada cuando:

1. **Requisitos Funcionales Claros:**
   - Expresa la necesidad del usuario de forma no ambigua y verificable.
   - Incluye criterios de aceptación comprobables para las pruebas de aceptación.

2. **Requisitos No Funcionales Medibles (ISO/IEC 25010:2023):**
   - Especifica cuando corresponda requisitos sobre las 9 características de calidad del producto (adecuación funcional, eficiencia del desempeño, compatibilidad, capacidad de interacción, fiabilidad, seguridad [security], mantenibilidad, flexibilidad o seguridad funcional [safety]).

3. **Trazabilidad y Seguridad:**
   - Permite vincular el requisito con el repositorio Git, los casos de prueba (ISO/IEC/IEEE 29119) y los controles de seguridad (OWASP ASVS 5.0.0).
`,
    defaultData: {
      teamName: 'Equipo de Desarrollo'
    }
  },
  {
    id: 'tpl-adr',
    title: 'Registro de Decisión de Arquitectura (ADR)',
    category: 'Arquitectura',
    description: 'Plantilla práctica para documentar decisiones arquitectónicas alineadas con ISO/IEC/IEEE 12207:2026, ISO/IEC/IEEE 15289:2019 e ISO/IEC/IEEE 42010.',
    estimatedTime: '20 min',
    difficulty: 'Intermedio',
    recommendedNorm: 'ISO/IEC/IEEE 12207:2026, ISO/IEC/IEEE 15289:2019 e ISO/IEC/IEEE 42010',
    markdownContent: `# ADR-001: [Título de la Decisión de Arquitectura]
**Estado:** Propuesta | Aceptada | Reemplazada
**Marco de referencia:** ISO/IEC/IEEE 12207:2026 / ISO/IEC/IEEE 42010

## Contexto y Requisitos de Calidad
[Describe el problema técnico y las características de ISO/IEC 25010:2023 involucradas: por ejemplo, Eficiencia del desempeño, Mantenibilidad, Flexibilidad, Seguridad (security) o Seguridad funcional (safety)].

## Opciones Consideradas
1. **Alternativa A:** [Ventajas, riesgos y compatibilidad]
2. **Alternativa B:** [Ventajas, riesgos y compatibilidad]

## Decisión y Evidencia
Se selecciona la **[Alternativa X]** manteniendo trazabilidad con los requisitos (ISO/IEC/IEEE 29148:2018) y los controles del SGSI (ISO/IEC 27001:2022 / ISO/IEC 27002:2022).

## Consecuencias y Control de Cambios
- Impacto en operación, mantenimiento y futuro retiro del componente (ISO/IEC/IEEE 12207:2026).
`,
    defaultData: {
      decisionTitle: 'Estructuración de Arquitectura y Trazabilidad',
      authorName: 'Arquitectura de Software'
    }
  },
  {
    id: 'tpl-user-story',
    title: 'Historia de Usuario y Evidencias de Prueba',
    category: 'Scrum',
    description: 'Estructura práctica para vincular historias de usuario con criterios de aceptación y las evidencias sistemáticas de ISO/IEC/IEEE 29119.',
    estimatedTime: '10 min',
    difficulty: 'Intermedio',
    recommendedNorm: 'ISO/IEC/IEEE 29148:2018 e ISO/IEC/IEEE 29119',
    markdownContent: `# Historia de Usuario con Trazabilidad de Pruebas
**ID Requisito:** REQ-104 | **Rama / Commit Git:** \`feature/req-104\`

## Descripción del Requisito
**Como** [rol de usuario],
**Necesito** [capacidad funcional],
**Para** [objetivo de negocio medible].

## Criterios de Aceptación y Requisitos No Funcionales
- **Funcional:** [Comportamiento esperado verificable].
- **Calidad del Producto (ISO/IEC 25010:2023):** [Tiempo de respuesta esperado, capacidad de interacción, fiabilidad o flexibilidad].
- **Seguridad (OWASP ASVS 5.0.0):** [Validación de entradas, autenticación y autorización requeridas].

## Evidencias Asociadas (ISO/IEC/IEEE 29119)
- Estrategia y plan de pruebas: \`/docs/testing/plan.md\`
- Casos, procedimientos y datos de prueba: \`/tests/req-104.spec.ts\`
- Registro de ejecución, informe de incidencias e informe de cierre y aceptación.
`,
    defaultData: {
      storyTitle: 'Control de Acceso y Validación',
      userRole: 'Usuario del Sistema'
    }
  },
  {
    id: 'tpl-nexus-agreement',
    title: 'Acuerdo de Integración Continua y DevSecOps',
    category: 'Nexus Scaled',
    description: 'Guía complementaria para coordinar equipos en integración continua, trazabilidad y seguridad bajo NIST SSDF (SP 800-218 v1.1) e ISO/IEC/IEEE 12207:2026.',
    estimatedTime: '20 min',
    difficulty: 'Avanzado',
    recommendedNorm: 'Práctica complementaria alineada con ISO/IEC/IEEE 12207:2026 y NIST SSDF v1.1',
    markdownContent: `# Acuerdo de Integración, Trazabilidad y DevSecOps
**Propósito:** Generar evidencia suficiente de que el producto satisface sus requisitos y que el proceso es repetible, seguro y mejorable.

## 1. Integración y Control de Versiones
- Todo cambio se integra mediante repositorios Git con revisión de código obligatoria.
- Se mantiene trazabilidad entre requisito, código, prueba y versión liberada.

## 2. Prácticas de Desarrollo Seguro (NIST SSDF SP 800-218 v1.1)
- Ejecución automatizada de análisis estático y dinámico (SAST/DAST) y escaneo de secretos.
- Gestión de dependencias, análisis de componentes de terceros y generación de SBOM.
- Firma e integridad de artefactos antes del despliegue.

## 3. Aseguramiento y Control de Calidad (IEEE 730-2026 & ISO/IEC/IEEE 29119)
- **Testing (Control de calidad):** Detecta defectos mediante pruebas manuales, automatizadas, funcionales, de rendimiento y seguridad.
- **SQA (Aseguramiento de calidad):** Previene defectos mediante procesos, estándares, auditorías, métricas, capacitación y mejora continua.
`,
    defaultData: {
      nexusName: 'Integración DevSecOps',
      squadCount: '3'
    }
  }
];

export const MATURITY_QUESTIONS: MaturityQuestion[] = [
  {
    id: 1,
    area: 'Modelo de Calidad del Producto (ISO/IEC 25010:2023)',
    question: '¿Cómo define y evalúa tu organización las características de calidad del producto según la edición vigente ISO/IEC 25010:2023?',
    explanation: 'ISO/IEC 25010:2023 reemplazó a la edición 2011 y define 9 características principales (incluyendo Capacidad de interacción, Flexibilidad y Seguridad funcional / safety). La calidad en uso se trata por separado en ISO/IEC 25019:2023.',
    options: [
      {
        text: 'Solo verificamos que el programa "funcione" de manera básica sin especificar requisitos no funcionales.',
        cmmiScore: 1,
        isoScore: 15,
        feedback: 'Nivel Inicial: La calidad del software no se limita a que un programa funcione; requiere atributos medibles.'
      },
      {
        text: 'Usamos todavía la clasificación antigua de 2011 sin distinguir entre security y safety ni separar la calidad en uso.',
        cmmiScore: 2,
        isoScore: 50,
        feedback: 'Conviene actualizar el modelo a las 9 características de ISO/IEC 25010:2023 y tratar la calidad en uso con ISO/IEC 25019:2023.'
      },
      {
        text: 'Especificamos requisitos sobre las 9 características de ISO/IEC 25010:2023 (adecuación funcional, eficiencia del desempeño, compatibilidad, capacidad de interacción, fiabilidad, seguridad, mantenibilidad, flexibilidad y seguridad funcional).',
        cmmiScore: 3,
        isoScore: 85,
        feedback: 'Nivel Definido: Alineación directa con el modelo actual de 9 características de ISO/IEC 25010:2023.'
      },
      {
        text: 'Evaluamos cuantitativamente las 9 características del producto con la familia SQuaRE (25002:2024, 25023:2016 en revisión, 25030:2019, 25040/25041) y medimos la calidad en uso en contexto real mediante ISO/IEC 25019:2023.',
        cmmiScore: 5,
        isoScore: 100,
        feedback: 'Nivel Optimizado: Aplicación integral y actualizada de la familia ISO/IEC 25000 (SQuaRE).'
      }
    ]
  },
  {
    id: 2,
    area: 'Procesos del Ciclo de Vida (ISO/IEC/IEEE 12207:2026)',
    question: '¿Cómo organiza tu equipo los procesos del ciclo de vida del software y la ingeniería de requisitos?',
    explanation: 'ISO/IEC/IEEE 12207:2026 (reemplazó a la edición 2017 retirada) organiza procesos desde la adquisición hasta el retiro sin obligar a una metodología específica, apoyándose en ISO/IEC/IEEE 15289:2019, 29148:2018 e ISO/IEC 29110 (para entidades de hasta 25 personas).',
    options: [
      {
        text: 'No tenemos procesos definidos de ciclo de vida, control de cambios ni trazabilidad de requisitos.',
        cmmiScore: 1,
        isoScore: 15,
        feedback: 'Falta de control que impide tener procesos repetibles y evidencia verificable.'
      },
      {
        text: 'Trabajamos con Scrum o Kanban, pero sin trazabilidad formal ni control de configuración o retiro.',
        cmmiScore: 2,
        isoScore: 45,
        feedback: 'ISO/IEC/IEEE 12207:2026 permite usar Scrum o Kanban manteniendo trazabilidad, configuración y control de cambios.'
      },
      {
        text: 'Aplicamos procesos iterativos/ágiles conforme a ISO/IEC/IEEE 12207:2026 (o el perfil básico ISO/IEC 29110 si somos hasta 25 personas) junto con ingeniería de requisitos ISO/IEC/IEEE 29148:2018.',
        cmmiScore: 3,
        isoScore: 85,
        feedback: 'Nivel Definido: Excelente integración entre agilidad y procesos del ciclo de vida vigentes.'
      },
      {
        text: 'Gobernanza completa desde adquisición hasta operación y retiro bajo ISO/IEC/IEEE 12207:2026, estructurando la documentación con ISO/IEC/IEEE 15289:2019 y requisitos con 29148:2018.',
        cmmiScore: 5,
        isoScore: 100,
        feedback: 'Cumplimiento ejemplar de los estándares actuales de ciclo de vida e ingeniería de requisitos.'
      }
    ]
  },
  {
    id: 3,
    area: 'Gestión de Calidad Organizacional (ISO 9001:2026)',
    question: '¿Cómo gestiona la organización su sistema de gestión de calidad y la satisfacción del cliente?',
    explanation: 'ISO 9001:2026 es la sexta y actual edición (publicada el 16 de septiembre de 2026, reemplazando progresivamente a ISO 9001:2015). En software se apoya en ISO/IEC/IEEE 90003:2018.',
    options: [
      {
        text: 'No contamos con gestión de riesgos, control de operaciones ni evaluación del desempeño organizacional.',
        cmmiScore: 1,
        isoScore: 15,
        feedback: 'Sin sistema de gestión de calidad que asegure entregas consistentes.'
      },
      {
        text: 'Tenemos controles básicos por proyecto, pero sin liderazgo de cultura de calidad ni mejora continua sistemática.',
        cmmiScore: 2,
        isoScore: 50,
        feedback: 'Se requiere estructurar el contexto organizacional, riesgos, competencias y evaluación del desempeño.'
      },
      {
        text: 'Contamos con un Sistema de Gestión de Calidad alineado a ISO 9001:2026 y aplicamos las orientaciones para software de ISO/IEC/IEEE 90003:2018.',
        cmmiScore: 3,
        isoScore: 85,
        feedback: 'Sólida gestión de calidad organizacional orientada al cliente y a la mejora continua.'
      },
      {
        text: 'SGC certificado voluntariamente por una entidad acreditada bajo ISO 9001:2026, con cultura de calidad, gestión preventiva de riesgos y mejora continua auditada.',
        cmmiScore: 5,
        isoScore: 100,
        feedback: 'Máximo rigor en gestión de calidad organizacional conforme a la sexta edición ISO 9001:2026.'
      }
    ]
  },
  {
    id: 4,
    area: 'Pruebas y Aseguramiento de Calidad (ISO/IEC/IEEE 29119 & IEEE 730-2026)',
    question: '¿Cómo estructura el equipo las pruebas de software (Testing) y el aseguramiento de calidad (SQA)?',
    explanation: 'Testing (control de calidad) detecta defectos mediante pruebas (ISO/IEC/IEEE 29119 Partes 1–5); SQA previene defectos mediante procesos, auditorías y métricas (IEEE 730-2026, que sustituye a IEEE 730-2014).',
    options: [
      {
        text: 'Hacemos pruebas improvisadas sin plan, sin registro de ejecución y sin diferenciar entre Testing y SQA.',
        cmmiScore: 1,
        isoScore: 15,
        feedback: 'Ausencia de evidencia sistemática de pruebas y de prevención de defectos.'
      },
      {
        text: 'Ejecutamos pruebas para detectar defectos antes de liberar, pero no conservamos todas las evidencias ni aplicamos procesos de SQA.',
        cmmiScore: 2,
        isoScore: 45,
        feedback: 'Se realiza control de calidad básico, pero falta sistematizar evidencias y prevención (SQA).'
      },
      {
        text: 'Planificamos y demostramos pruebas sistemáticas con ISO/IEC/IEEE 29119 (estrategia/plan, casos, datos, ejecución, incidencias y cierre) y separamos Testing de SQA.',
        cmmiScore: 3,
        isoScore: 85,
        feedback: 'Cumplimiento estructurado de ISO/IEC/IEEE 29119 con evidencias completas.'
      },
      {
        text: 'Combinamos pruebas sistemáticas y automatizadas bajo ISO/IEC/IEEE 29119 (incluidas técnicas y pruebas guiadas por palabras clave) con procesos de SQA regidos por IEEE 730-2026.',
        cmmiScore: 5,
        isoScore: 100,
        feedback: 'Integración total entre detección de defectos (Testing) y prevención de defectos (SQA IEEE 730-2026).'
      }
    ]
  },
  {
    id: 5,
    area: 'Seguridad de la Información y Desarrollo Seguro (ISO/IEC 27001:2022, NIST SSDF & OWASP ASVS 5.0.0)',
    question: '¿Cómo integran la gestión de seguridad de la información y la ciberseguridad en el ciclo de desarrollo?',
    explanation: 'Combina ISO/IEC 27001:2022 e ISO/IEC 27002:2022 (SGSI y controles, incluido desarrollo externalizado), NIST SSDF (SP 800-218 v1.1 final), ISO/IEC 27034 y OWASP ASVS 5.0.0.',
    options: [
      {
        text: 'No gestionamos riesgos de seguridad, secretos ni verificamos controles en nuestras aplicaciones web.',
        cmmiScore: 1,
        isoScore: 10,
        feedback: 'Riesgo severo para la confidencialidad, integridad y disponibilidad de la información.'
      },
      {
        text: 'Aplicamos controles básicos de acceso y copias de seguridad, pero sin prácticas DevSecOps ni listas de verificación en el desarrollo.',
        cmmiScore: 2,
        isoScore: 45,
        feedback: 'Seguridad reactiva; falta integrar el desarrollo seguro en todo el ciclo de vida.'
      },
      {
        text: 'Protegemos activos, repositorios y secretos bajo ISO/IEC 27001:2022 y 27002:2022, y usamos OWASP ASVS 5.0.0 como lista de verificación en revisiones y pruebas de aceptación.',
        cmmiScore: 3,
        isoScore: 85,
        feedback: 'Prácticas sólidas de seguridad de la información y verificación de aplicaciones.'
      },
      {
        text: 'SGSI completo (ISO/IEC 27001/27002:2022), seguridad de aplicaciones (ISO/IEC 27034), verificación con OWASP ASVS 5.0.0 y pipeline DevSecOps bajo NIST SSDF SP 800-218 v1.1 (SAST/DAST, SBOM, firma de artefactos y escaneo de secretos).',
        cmmiScore: 5,
        isoScore: 100,
        feedback: 'Ciberseguridad integrada de extremo a extremo con las versiones vigentes.'
      }
    ]
  },
  {
    id: 6,
    area: 'Madurez y Mejora de Procesos (CMMI V3.0)',
    question: '¿Cómo evalúa y mejora la organización su capacidad y madurez de procesos bajo CMMI V3.0?',
    explanation: 'CMMI V3.0 (lanzado en 2023 por ISACA) tiene 5 niveles (Inicial, Gestionado, Definido, Gestionado cuantitativamente, Optimizado), incorpora seguridad, seguridad funcional, datos, personas y trabajo virtual, y se evalúa mediante un appraisal (no se certifica).',
    options: [
      {
        text: 'Nivel 1 (Inicial): Nuestros procesos son ad hoc, reactivos y dependen de esfuerzos individuales.',
        cmmiScore: 1,
        isoScore: 20,
        feedback: 'Nivel 1 Inicial en CMMI V3.0: es necesario estabilizar la planificación y el control de proyectos.'
      },
      {
        text: 'Nivel 2 (Gestionado): Planificamos y controlamos los proyectos individualmente, aunque sin procesos estándar en toda la organización.',
        cmmiScore: 2,
        isoScore: 55,
        feedback: 'Nivel 2 Gestionado en CMMI V3.0: base sólida a nivel de proyecto.'
      },
      {
        text: 'Nivel 3 (Definido): Institucionalizamos buenas prácticas organizacionales integrando seguridad, gestión de datos, personas y trabajo virtual.',
        cmmiScore: 3,
        isoScore: 85,
        feedback: 'Nivel 3 Definido en CMMI V3.0: procesos estandarizados y proactivos en la organización.'
      },
      {
        text: 'Niveles 4 y 5 (Gestionado cuantitativamente y Optimizado): Medimos estadísticamente el desempeño, mejoramos de forma sostenida y realizamos evaluaciones (appraisals) de CMMI V3.0.',
        cmmiScore: 5,
        isoScore: 100,
        feedback: 'Máxima madurez organizacional verificada mediante appraisal de CMMI V3.0.'
      }
    ]
  },
  {
    id: 7,
    area: 'Calidad y Gobernanza de Inteligencia Artificial (ISO/IEC 42001, 5338, 25059 & NIST 800-218A)',
    question: 'Cuando desarrollan o integran sistemas de Inteligencia Artificial, ¿cómo gestionan sus riesgos específicos y su calidad?',
    explanation: 'La IA requiere abordar sesgos, explicabilidad, datos y deriva del modelo mediante ISO/IEC 42001:2023, ISO/IEC 5338:2023, ISO/IEC 25059:2023 y NIST SP 800-218A.',
    options: [
      {
        text: 'Integramos modelos de IA aplicando únicamente pruebas de software convencionales, sin evaluar sesgos, transparencia ni riesgos éticos.',
        cmmiScore: 1,
        isoScore: 15,
        feedback: 'Los riesgos de la IA no se resuelven solo con pruebas de software convencionales.'
      },
      {
        text: 'Revisamos manualmente algunas respuestas del modelo, pero sin un ciclo de vida ni sistema de gestión específico para IA.',
        cmmiScore: 2,
        isoScore: 45,
        feedback: 'Falta estructurar el ciclo de vida de IA y los atributos de calidad específicos.'
      },
      {
        text: 'Aplicamos procesos de ciclo de vida de IA con ISO/IEC 5338:2023 y evaluamos transparencia, robustez, control por el usuario e intervención humana según ISO/IEC 25059:2023.',
        cmmiScore: 3,
        isoScore: 85,
        feedback: 'Alineación técnica con el ciclo de vida y el modelo de calidad SQuaRE para IA.'
      },
      {
        text: 'Gobernamos la IA con un sistema de gestión ISO/IEC 42001:2023, ciclo de vida ISO/IEC 5338:2023, calidad ISO/IEC 25059:2023 y prácticas de seguridad para IA generativa de NIST SP 800-218A.',
        cmmiScore: 5,
        isoScore: 100,
        feedback: 'Cobertura integral de los estándares vigentes para sistemas de inteligencia artificial.'
      }
    ]
  },
  {
    id: 8,
    area: 'Normas Complementarias y Aplicación en Ágil / DevOps (ISO/IEC 5055:2021, 42010, 33000, WCAG 2.2)',
    question: '¿Cómo combinan el trabajo en Scrum, Kanban o DevOps con normas complementarias y generación de evidencia verificable?',
    explanation: 'Trabajar con metodologías ágiles es totalmente compatible con conservar evidencia verificable y aplicar normas como ISO/IEC 5055:2021 (código fuente), 42010 (arquitectura), 33000 (SPICE), WCAG 2.2 o normas sectoriales de safety (IEC 62304, ISO 26262, DO-178C, IEC 61508).',
    options: [
      {
        text: 'Creemos que usar metodologías ágiles significa no documentar nada ni conservar evidencia ni trazabilidad.',
        cmmiScore: 1,
        isoScore: 15,
        feedback: 'La agilidad no elimina la necesidad de evidencia verificable, seguridad y trazabilidad.'
      },
      {
        text: 'Usamos Git y tableros ágiles, pero sin vincular requisitos, código, pruebas y versiones liberadas ni medir la calidad estructural del código.',
        cmmiScore: 2,
        isoScore: 50,
        feedback: 'Conviene conectar el flujo ágil con evidencias automáticas en el pipeline.'
      },
      {
        text: 'Generamos evidencia en nuestro flujo ágil/DevOps (historias con criterios de aceptación, NFR medibles, Git, code review, CI/CD, cobertura, SAST, trazabilidad y monitoreo) y medimos el código con ISO/IEC 5055:2021.',
        cmmiScore: 3,
        isoScore: 85,
        feedback: 'Aplicación práctica efectiva de las normas dentro de entornos ágiles y DevOps.'
      },
      {
        text: 'Integramos evidencia ágil/DevOps de extremo a extremo junto con ISO/IEC 5055:2021, arquitectura ISO/IEC/IEEE 42010, mejora de procesos ISO/IEC 33000, accesibilidad WCAG 2.2 y normas sectoriales de safety cuando aplica.',
        cmmiScore: 5,
        isoScore: 100,
        feedback: 'Excelencia normativa y técnica sin burocracia innecesaria.'
      }
    ]
  }
];
