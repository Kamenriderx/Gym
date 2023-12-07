import CoachesImage from "./components/CoachesImage";

const coachesImages = [
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FnIMa98KRS9COetMKHVK9_IFC-Agusto.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2F75HLS5ngREW5ZSvNqBKI_IFC-Mariana.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FSikptcPYS8GQF90qooq0_IFC-Karmona.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2Fl1qos4eLQ92p8Wpn7Crl_IFC-Pilar.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FCESkwJEeRumF5V7rdNRU_IFC-Raul.png",
];

const coachesProfile = {
  1: {
    name: "Juan Pérez",
    xp: [
      "Licenciado en Ciencias del Deporte con especialización en entrenamiento personalizado.",
      "Más de 8 años de experiencia como entrenador personal.",
      "Certificaciones en entrenamiento funcional y técnicas de rehabilitación.",
    ],

    approach:
      "Juan se especializa en diseñar programas de entrenamiento específicos y personalizados para cada cliente, centrándose en objetivos concretos, como la mejora del rendimiento deportivo, la rehabilitación de lesiones o la pérdida de peso.",

    philosophy:
      "Cree en la importancia de la individualización del entrenamiento, adaptando las rutinas según las necesidades y capacidades únicas de cada persona. Su enfoque se basa en la combinación de ejercicios funcionales, técnicas de fortalecimiento y movimientos específicos para lograr resultados óptimos.",

    specialties: [
      "Entrenamiento de fuerza y resistencia.",
      "Rehabilitación y prevención de lesiones.",
      "Desarrollo de habilidades específicas para deportes particulares.",
    ],
    presentation:
      "¡Hola! Soy Juan Pérez, un apasionado entrenador personal dedicado a ayudarte a alcanzar tus metas de fitness de manera efectiva y segura. Mi enfoque se centra en diseñar programas de entrenamiento específicos que se adapten a tus necesidades y aspiraciones. Creo en el poder transformador del ejercicio y estoy aquí para guiarte en cada paso del camino hacia una vida más activa y saludable.",

    contact: {
      email: "juanperez.entrenador@gmail.com",
      phone: "+XX XXXX XXXX",
      socialNetworks: {
        instagram: "@juan_entrenador",
        facebook: "/juanperezentrenador",
        twitter: "@juan_entrena",
      },
    },
  },
  2: {
    name: "María González",
    xp: [
      "Licenciada en Educación Física con énfasis en entrenamiento personalizado.",
      "10 años de experiencia como entrenadora personal.",
      "Certificaciones en yoga y entrenamiento de alta intensidad.",
    ],

    approach:
      "María se especializa en integrar el entrenamiento tradicional con enfoques más holísticos como el yoga. Su objetivo es crear programas equilibrados que no solo fortalezcan el cuerpo, sino también la mente y el bienestar general.",

    philosophy:
      "Aboga por un enfoque integral del bienestar, incorporando técnicas de respiración, flexibilidad y mindfulness en sus sesiones. Su misión es ayudar a sus clientes a alcanzar un equilibrio físico y mental a través del movimiento consciente.",

    specialties: [
      "Yoga y entrenamiento de flexibilidad.",
      "Entrenamiento de alta intensidad con enfoque en el control del cuerpo.",
      "Programas personalizados para la gestión del estrés.",
    ],
    presentation:
      "¡Hola! Soy María González, una entrenadora apasionada comprometida con tu bienestar integral. Mi enfoque va más allá del simple entrenamiento físico; busco equilibrar mente y cuerpo para que puedas alcanzar tus metas de manera sostenible y saludable. Estoy aquí para guiar tu viaje hacia una vida activa y consciente.",

    contact: {
      email: "mariagonzalez.entrenadora@gmail.com",
      phone: "+XX XXXX XXXX",
      socialNetworks: {
        instagram: "@maria_entrenadora",
        facebook: "/mariagonzalezentrenadora",
        twitter: " @maria_entrena",
      },
    },
  },
  3: {
    name: "Roberto Martínez",
    xp: [
      "Graduado en Ciencias del Deporte y la Actividad Física.",
      "6 años de experiencia como entrenador personal.",
      "Especialización en entrenamiento de fuerza y acondicionamiento físico.",
    ],

    approach:
      "Roberto se destaca en diseñar programas de entrenamiento que maximizan el rendimiento y la fuerza. Su enfoque preciso y metódico se centra en la progresión constante para lograr resultados notables.",

    philosophy:
      "Cree en la importancia de establecer metas alcanzables y sostenibles. Su filosofía se basa en la consistencia, la disciplina y la adaptación progresiva para lograr una mejora continua.",

    specialties: [
      "Entrenamiento de fuerza y acondicionamiento.",
      "Desarrollo de masa muscular magra.",
      "Programas específicos para atletas.",
    ],
    presentation:
      "¡Hola! Soy Roberto Martínez, un entrenador dedicado a potenciar tu fuerza y rendimiento. Mi enfoque se centra en construir una base sólida de fuerza y resistencia para que alcances tus objetivos de manera efectiva. Estoy aquí para desafiarte y guiarte hacia tu mejor versión.",

    contact: {
      email: "robertomartinez.entrenador@gmail.com",
      phone: "+XX XXXX XXXX",
      socialNetworks: {
        instagram: "@roberto_entrenador",
        facebook: "/robertomartinezentrenador",
        twitter: "@roberto_entrena",
      },
    },
  },
  4: {
    name: "Laura Velázquez",
    xp: [
      "Master en Entrenamiento Deportivo.",
      "9 años de experiencia como entrenadora personal.",
      "Certificada en Pilates y rehabilitación de lesiones.",
    ],

    approach:
      "Laura se especializa en integrar el Pilates con enfoques de entrenamiento funcional para mejorar la postura, la flexibilidad y la fuerza central. Sus programas están diseñados para personas de todas las edades y niveles de condición física.",

    philosophy:
      "Cree en la importancia de construir una base sólida a través del movimiento consciente. Su filosofía se basa en la calidad sobre la cantidad, priorizando la corrección postural y la prevención de lesiones.",

    specialties: [
      "Pilates y entrenamiento funcional.",
      "Rehabilitación de lesiones y prevención.",
      "Programas adaptados para adultos mayores.",
    ],
    presentation:
      "¡Hola! Soy Laura Velázquez, una apasionada entrenadora comprometida con tu bienestar físico y mental. Mi enfoque se centra en fortalecer tu cuerpo desde adentro hacia afuera, mejorando tu postura, flexibilidad y bienestar general. Estoy aquí para guiarte hacia una vida activa y saludable.",

    contact: {
      email: " lauravelazquez.entrenadora@gmail.com",
      phone: "+XX XXXX XXXX",
      socialNetworks: {
        instagram: "@laura_entrenadora",
        facebook: "/lauravelazquezentrenadora",
        twitter: "@laura_entrena",
      },
    },
  },
  5: {
    name: "Carlos Ramírez",
    xp: [
      "Licenciado en Nutrición y Entrenamiento Deportivo.",
      "7 años de experiencia como entrenador personal.",
      "Especialización en programas de pérdida de peso y tonificación.",
    ],

    approach:
      "Carlos se destaca en diseñar programas integrales que combinan entrenamiento físico con asesoramiento nutricional. Su enfoque se centra en lograr una transformación total del cuerpo a través de hábitos saludables.",

    philosophy:
      "Cree en la importancia de la consistencia y la educación nutricional para lograr resultados duraderos. Su filosofía se basa en empoderar a sus clientes para que adopten un estilo de vida activo y equilibrado.",

    specialties: [
      "Pérdida de peso y tonificación.",
      "Asesoramiento nutricional personalizado.",
      "Entrenamiento de alta intensidad.",
    ],
    presentation:
      "¡Hola! Soy Carlos Ramírez, un entrenador comprometido con ayudarte a alcanzar tus objetivos de salud y bienestar. Mi enfoque integral aborda tanto el aspecto físico como el nutricional para lograr cambios duraderos. Estoy aquí para guiarte en cada paso hacia una vida más saludable y activa.",

    contact: {
      email: "carlosramirez.entrenador@gmail.com",
      phone: "+XX XXXX XXXX",
      socialNetworks: {
        instagram: "@carlos_entrenador",
        facebook: "/carlosramirezentrenador",
        twitter: "@carlos_entrena",
      },
    },
  },
};
function CoachesProfile() {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const coach = parseInt(id) + 1;
  return (
    <div className="w-full h-full p-12">
      <div>
        <div className="flex items-center">
          <div>
            <CoachesImage
            navigate = {false}
              id={coach}
              url={coachesImages[coach - 1]}
            ></CoachesImage>
          </div>
          <div>
            <h2 className="text-2xl font-bold ">
              {coachesProfile[coach].name}
            </h2>
            <ul className="flex flex-col h-full justify-evenly">
              <li>
                <h3 className="text-lg font-semibold text-center text-gray-500">
                  Presentacion
                </h3>
                <p>{coachesProfile[coach].presentation}</p>
              </li>
              <li>
                <h3 className="text-lg font-semibold text-center text-gray-500">
                  Filosofia
                </h3>
                <p>{coachesProfile[coach].philosophy}</p>
              </li>
              <li>
                <h3 className="text-lg font-semibold text-center text-gray-500">
                  Enfoque
                </h3>
                <p>{coachesProfile[coach].approach}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>

        <div className="mt-7">
          <ul className="flex h-full justify-evenly">
            <li>
              <h3 className="text-lg font-semibold text-center text-gray-500">
                Experiencia
              </h3>
              <ul>
                <li>{coachesProfile[coach].xp[0]}</li>
                <li>{coachesProfile[coach].xp[1]}</li>
                <li>{coachesProfile[coach].xp[2]}</li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-center text-gray-500">
                Especialidades
              </h3>
              <ul>
                <li>{coachesProfile[coach].specialties[0]}</li>
                <li>{coachesProfile[coach].specialties[1]}</li>
                <li>{coachesProfile[coach].specialties[2]}</li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg font-semibold text-center text-gray-500">
                Contacto
              </h3>
              <ul className="">
                <li>Correo: {coachesProfile[coach].contact.email}</li>
                <li>Telefono: {coachesProfile[coach].contact.phone}</li>
                <li>Instagram: {coachesProfile[coach].contact.socialNetworks.instagram}</li>
                <li>Facebook: {coachesProfile[coach].contact.socialNetworks.facebook}</li>
                <li>twitter: {coachesProfile[coach].contact.socialNetworks.twitter}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CoachesProfile;
