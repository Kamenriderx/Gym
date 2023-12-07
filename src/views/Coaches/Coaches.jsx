import CoachesImage from "./components/CoachesImage";

const coachesImages = [
    "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FnIMa98KRS9COetMKHVK9_IFC-Agusto.png",
    "https://dtsvkkjw40x57.cloudfront.net/page-builder%2F75HLS5ngREW5ZSvNqBKI_IFC-Mariana.png",
    "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FSikptcPYS8GQF90qooq0_IFC-Karmona.png",
    "https://dtsvkkjw40x57.cloudfront.net/page-builder%2Fl1qos4eLQ92p8Wpn7Crl_IFC-Pilar.png",
    "https://dtsvkkjw40x57.cloudfront.net/page-builder%2FCESkwJEeRumF5V7rdNRU_IFC-Raul.png",
  ];

function Coaches() {
  return (
    <div className="bg-[#111] text-white w-full h-full flex flex-col content-center items-center pt-[60px]">
      <h6 className="mb-10 text-4xl font-semibold">Entrenadores</h6>


      <div className="flex flex-wrap content-between justify-around ">
        {coachesImages.map((coach, index) => (
          <CoachesImage key={index} navigate={true} id={index} url={coach} />
        ))}
      </div>
    </div>
  );
}

export default Coaches;
