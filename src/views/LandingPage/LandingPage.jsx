import NavBar from "../../interface/NavBar/NavBar";
import CoachesImage from "./components/CoachesImage";
import ListImage from "./components/ListImage";
import ListItem from "./components/ListItem";
import landingImage from "../../assets/fondo.jpg";
const programs = [
  {
    title: "FORTALECE TU CUERPO",
    url: "https://dtsvkkjw40x57.cloudfront.net/page-builder%2F8zJfCyEUQ66JWtbBw4Pk_FortaleceProgramasGratis-660x420.png",
  },
  {
    title: "360 by SAMSUMG",
    url: "https://dtsvkkjw40x57.cloudfront.net/page-builder%2F0psQoCIPSgWApA6uZ0X5_Samsung.png",
  },
  {
    title: "BUTTMAX",
    url: "https://dtsvkkjw40x57.cloudfront.net/page-builder%2Fj7Y5f2KaRTW6z9LnLKYC_Buttmax.png",
  },
  {
    title: "6 PACK ABS",
    url: "https://dtsvkkjw40x57.cloudfront.net/page-builder%2F2caThojhTMq8G7Gd0zay_6Pack-ProgramasGratis-660x420.png",
  },
  {
    title: "ACCELERATE",
    url: "https://dtsvkkjw40x57.cloudfront.net/page-builder%2Fr40ggkUdSc2yBysBkErX_Accelerate-ProgramasGratis-660x420.png",
  },
];

const images = [
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FmtBKTTN6HzndjN0wymgD_1.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FU2kSV8FrRCSISTVHYEcQ_2.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2F7lUDDDkRhG3CKaFlfbR1_3.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FLcSJdCZqTOukcqK4fmZ2_4.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2F5oZc707XS8a5lm1yGrxg_5.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2Fu3KPjQ6QxegN4g8UWMDn_6.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FIZhHj9aQHan7lIrjivMq_7.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FLM1TktdTBG4cgRlfCGpL_8.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FX5axWhJSTedBcVrRR4ei_9.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FoM53PhZkQsefbkzCRN8Y_10.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FmAHYxWUjShK5pblLzhcz_11%20(1).png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FUPouMuMmT2KgDGjiDUqc_12.png",
];

const coachesImages = [
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FnIMa98KRS9COetMKHVK9_IFC-Agusto.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2F75HLS5ngREW5ZSvNqBKI_IFC-Mariana.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FSikptcPYS8GQF90qooq0_IFC-Karmona.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2Fl1qos4eLQ92p8Wpn7Crl_IFC-Pilar.png",
  "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FCESkwJEeRumF5V7rdNRU_IFC-Raul.png",
];

const LandingPage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-1/6">
        <NavBar />
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full h-full">
            <img src={landingImage} className="object-cover w-full h-full" />
          </div>
          <div className=" bg-[#111] w-full flex justify-center items-center flex-col text-white pt-[60px] pb-[60px]">
            <h2>Programas gratis</h2>
            <p>
              Registrate y empieza a entrenar gratis Vive la experiencia de
              entrenar con InstaFet a la hora que quieras y desde donde sea.
            </p>

            <div>
              <ul className="flex list-none">
                {programs.map((program, index) => (
                  <ListItem key={index} {...program} />
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-black text-white pt-[60px] flex justify-center items-center flex-col">
            <h6>CATEGORIAS</h6>
            <p>
              ¡Ponte fit con el catálogo más grande de rutinas en español! Elige
              entre más de 1,000 clases on demand para ponerte en forma mientras
              te diviertes.
            </p>
            <div className="flex flex-wrap justify-around items-center content-between mt-[60px]">
              {images.map((image, index) => (
                <ListImage key={index} url={image} />
              ))}
            </div>
          </div>

          <div className="bg-[#111] text-white w-full h-[500px] flex flex-col content-center items-center pt-[60px]">
            <h6>COACHES</h6>
            <p className="text-center mt-[60px]">
              Reunimos a los mejores instructores certificados de health,
              fitness y disciplinas enfocadas<br></br> en el bienestar integral
              para ofrecerte todo en un solo lugar.
            </p>

            <div className="flex content-between justify-around ">
              {coachesImages.map((coach, index) => (
                <CoachesImage key={index} url={coach} />
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center pt-[50px] bg-black text-white">
            <div className="w-4/5 border-b-2 border-white mb-[60px] pb-[60px]">
              <h6>BENEFICIOS</h6>
              <p>
                Obtén acceso ilimitado a un amplio catálogo de rutinas y<br />
                programas de diferentes disciplinas para que entrenes cómo,
                <br />
                dónde y cuando quieras... gratis y para siempre.
              </p>
            </div>
            <div className="flex w-4/5 pb-[40px]">
              <div className="mr-[20px]">
                <h6>ACCESO ILIMITADO</h6>
                <p>
                  Disfruta más de 1,000 workouts y <br />
                  programas de fitness, yoga y meditación <br />
                  ilimitados.
                </p>
              </div>
              <div className="mr-[20px]">
                <h6>CONTENIDO ORIGINAL</h6>
                <p>
                  Acceso exclusivo InstaFit Originals con los <br />
                  mejores coaches en español además de <br />
                  programas de los coaches más <br />
                  reconocidos de América Latina.
                </p>
              </div>
              <line />
              <div className="mr-[20px]">
                <h6>LLEVA TU ENTRENAMIENTO CONTIGO</h6>
                <p>
                  Ve tus clases donde sea con acceso móvil <br />
                  vía iOS y Android, o web y próximamente <br />
                  desde tu TV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
