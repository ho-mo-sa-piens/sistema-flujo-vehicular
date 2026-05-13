// data.js — Datos del Sistema de Flujo Vehicular

const sistemaData = {
  nombre: "Sistema de Flujo Vehicular de la Avenida X",

  fronteras: {
    dentro: [
      "Vehículos (autos, motos, bicicletas, autobuses)",
      "Conductores",
      "Semáforos",
      "Señales de tráfico",
      "Peatones",
      "Policías de tráfico",
      "Carriles de la avenida",
      "Paradas de autobús",
    ],
    fuera: [
      "Calles laterales no directamente conectadas",
      "Tiendas y edificios aledaños",
      "Condiciones meteorológicas (como entorno)",
    ],
  },

  componentes: [
    "Vehículos (autos, motos, bicicletas)",
    "Autobuses",
    "Conductores",
    "Peatones",
    "Semáforos",
    "Señales de pare / ceda el paso",
    "Límites de velocidad",
    "Infraestructura vial",
    "Cruces peatonales",
    "Policía de tráfico",
  ],

  inputs: [
    "Vehículos que ingresan a la avenida",
    "Peatones que desean cruzar",
    "Horarios pico (mayor demanda)",
    "Regulaciones de tráfico (leyes)",
  ],

  outputs: [
    "Vehículos que abandonan la avenida",
    "Movimiento de personas",
    "Ruido y contaminación",
    "Congestión (cuando el sistema falla)",
  ],

  feedback: [
    {
      tipo: "negativa",
      titulo: "Retroalimentación Negativa",
      descripcion:
        "La congestión excesiva lleva a que los conductores busquen rutas alternativas o alerta a la policía para intervenir, reduciendo la congestión.",
    },
    {
      tipo: "positiva",
      titulo: "Retroalimentación Positiva",
      descripcion:
        "En horas pico, un pequeño embotellamiento puede generar un efecto dominó, aumentando la congestión exponencialmente hasta que un factor externo la rompe.",
    },
  ],

  entorno: [
    {
      icono: "🌧️",
      titulo: "Clima",
      descripcion: "Lluvia o neblina afectan visibilidad y adherencia.",
    },
    {
      icono: "🎉",
      titulo: "Eventos especiales",
      descripcion: "Partidos, conciertos y ferias concentran mayor flujo.",
    },
    {
      icono: "🕗",
      titulo: "Horario laboral",
      descripcion: "Entrada y salida de trabajo generan picos de demanda.",
    },
    {
      icono: "🏗️",
      titulo: "Urbanismo",
      descripcion: "Nuevas construcciones pueden aumentar el tráfico.",
    },
  ],

  interacciones: [
    "Los conductores reaccionan a los semáforos y señales de tráfico.",
    "Los vehículos interactúan entre sí respetando distancias de seguridad y realizando adelantamientos.",
    "Los peatones interactúan con los vehículos y semáforos en los cruces.",
    "Los semáforos regulan el flujo de vehículos en cada intersección.",
    "La policía de tráfico puede intervenir para dirigir el flujo o atender incidentes.",
  ],
};
