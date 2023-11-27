import NavBar from "../../interface/NavBar";
import Image from "./components/Image";
import GoalList from "./components/GoalList";
import { useState } from "react";
import BodyFat from "./components/BodyFat";

const goalList = [
  {
    goalImage:
      "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FSLIM_SHREDDED_BODY.png&w=128&q=75",
    goalName: "Perder Peso",
    options: [
      {
        goalImage:
          "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FSLIM_BODY.png&w=128&q=75",
        goalName: "Delgado",
        options: [
          {
            goalImage:
              "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FSLIM_BODY.png&w=128&q=75",
            goalName: "Ectomorfo",
            info: "Poca grasa corporal y poco músculo. Le cuesta ganar peso.",
          },
          {
            goalImage:
              "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-fat-level%2FFROM_15_TO_19.png&w=128&q=75",
            goalName: "Mesomorfo",
            info: "Pierde grasa corporal fácilmente y gana músculo rápidamente.",
          },
          {
            goalImage:
              "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-fat-level%2FFROM_25_TO_29.png&w=128&q=75",
            goalName: "Mesomorfo",
            info: "Gana peso fácilmente en comparación con otros tipos de cuerpo.",
          },
          0
        ],
      },
      {
        goalImage:
          "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FSLIM_SHREDDED_BODY.png&w=128&q=75",
        goalName: "Delgado y tonificado",
        options: [
          {
            goalImage:
              "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FSLIM_BODY.png&w=128&q=75",
            goalName: "Ectomorfo",
            info: "Poca grasa corporal y poco músculo. Le cuesta ganar peso.",
          },
          {
            goalImage:
              "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-fat-level%2FFROM_15_TO_19.png&w=128&q=75",
            goalName: "Mesomorfo",
            info: "Pierde grasa corporal fácilmente y gana músculo rápidamente.",
          },
          {
            goalImage:
              "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-fat-level%2FFROM_25_TO_29.png&w=128&q=75",
            goalName: "Mesomorfo",
            info: "Gana peso fácilmente en comparación con otros tipos de cuerpo.",
          },
          0
        ],
      },
    ],
  },
  {
    goalImage:
      "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FHERO.png&w=128&q=75",
    goalName: "Ganar músculo",
    options: [
      {
        goalImage:
          "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FATHLETE.png&w=128&q=75",
        goalName: "Atleta",
        options: [
          {
            goalImage:
              "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FSLIM_BODY.png&w=128&q=75",
            goalName: "Ectomorfo",
            info: "Poca grasa corporal y poco músculo. Le cuesta ganar peso.",
          },
          {
            goalImage:
              "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-fat-level%2FFROM_15_TO_19.png&w=128&q=75",
            goalName: "Mesomorfo",
            info: "Pierde grasa corporal fácilmente y gana músculo rápidamente.",
          },
          {
            goalImage:
              "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-fat-level%2FFROM_25_TO_29.png&w=128&q=75",
            goalName: "Mesomorfo",
            info: "Gana peso fácilmente en comparación con otros tipos de cuerpo.",
          },
          0
        ],
      },
      {
        goalImage:
          "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FHERO.png&w=128&q=75",
        goalName: "Heroe",
        options: [
          {
            goalImage:
              "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FSLIM_BODY.png&w=128&q=75",
            goalName: "Ectomorfo",
            info: "Poca grasa corporal y poco músculo. Le cuesta ganar peso.",
          },
          {
            goalImage:
              "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-fat-level%2FFROM_15_TO_19.png&w=128&q=75",
            goalName: "Mesomorfo",
            info: "Pierde grasa corporal fácilmente y gana músculo rápidamente.",
          },
          {
            goalImage:
              "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-fat-level%2FFROM_25_TO_29.png&w=128&q=75",
            goalName: "Mesomorfo",
            info: "Gana peso fácilmente en comparación con otros tipos de cuerpo.",
          },
          0
        ],
      },
      {
        goalImage:
          "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FBODYBUILDER.png&w=128&q=75",
        goalName: "Culturista",
        options: [
          {
            goalImage:
              "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FSLIM_BODY.png&w=128&q=75",
            goalName: "Ectomorfo",
            info: "Poca grasa corporal y poco músculo. Le cuesta ganar peso.",
          },
          {
            goalImage:
              "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-fat-level%2FFROM_15_TO_19.png&w=128&q=75",
            goalName: "Mesomorfo",
            info: "Pierde grasa corporal fácilmente y gana músculo rápidamente.",
          },
          {
            goalImage:
              "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-fat-level%2FFROM_25_TO_29.png&w=128&q=75",
            goalName: "Mesomorfo",
            info: "Gana peso fácilmente en comparación con otros tipos de cuerpo.",
          },
          0
        ],
      },
    ],
  },
  {
    goalImage:
      "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FBEACH_BODY.png&w=128&q=75",
    goalName: "Definir tu cuerpo",
    options: [
      {
        goalImage:
          "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FBEACH_BODY.png&w=128&q=75",
        goalName: "De playa",
      },
      {
        goalImage:
          "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FWORKOUT_BODY.png&w=128&q=75",
        goalName: "Ejercitado",
      },
      {
        goalImage:
          "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-muscles%2FCROSS_FIT_BODY.png&w=128&q=75",
        goalName: "De cossfit",
      },
      0
    ],
  },
];

const images = [
  {
    url: "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F18-29v2.c83f4b86.png&w=256&q=75",
    info: "Edad: 18-19",
  },
  {
    url: "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F30-39v2.b4580ae5.png&w=256&q=75",
    info: "Edad: 30-39",
  },
  {
    url: "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F40-49v2.9e946afa.png&w=256&q=75",
    info: "Edad: 40-49",
  },
  {
    url: "https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F50%2Bv2.bc59ca6d.png&w=256&q=75",
    info: "Edad: 50+",
  },
];

const Routines = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "#222",
      }}
    >
      <NavBar />

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "white",
            }}
          >
            Plan de ejercicios
          </h1>
          <h5
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "white",
            }}
          >
            Basado en tus elecciones
          </h5>
          {!selected ? (
            <div
              style={{
                marginTop: "30px",
                height: "70vh",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  width: "100%",
                  margin: "20px",
                }}
              >
                {images.map((image, index) => (
                  <Image
                    key={index}
                    {...image}
                    setSelected={setSelected}
                  ></Image>
                ))}
              </ul>
              <div>
                <div style={{ display: "flex", alignItems: "center",marginBottom:"20px",justifyContent:"center" }}>
                  <input
                    type="checkbox"
                    style={{
                      marginRight: "8px",
                      width: "20px",
                      height: "20px",
                      border: "8px solid #111",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  />
                  <label
                    style={{
                      fontSize: "14px",
                      color: "white",
                    }}
                  >
                    Al continuar, estoy de acuerdo con Términos de servicio,
                    Política de privacidad, Política de reembolso, Términos de
                    Suscripción, Política de Cookies
                  </label>
                </div>
                <div style={{ display: "flex", alignItems: "center",justifyContent:"center" }}>
                  <input
                    type="checkbox"
                    style={{
                      marginRight: "8px",
                      width: "20px",
                      height: "20px",
                      border: "8px solid #111",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  />
                  <label
                    style={{
                      fontSize: "14px",
                      color: "white",
                    }}
                  >
                    Me gustaría recibir actualizaciones sobre productos, servicios y ofertas especiales de MadMuscles por correo electrónico.
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <GoalList goalList={goalList} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Routines;