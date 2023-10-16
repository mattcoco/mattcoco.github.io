import React from "react";
import Typewriter from "typewriter-effect";

/* <Typewriter
    onInit={(typewriter) => {
        typewriter.typeString('Crea sitios web perfectos')
            .callFunction(() => {
                console.log('String typed out!');
            })
            .pauseFor(4000)
            .deleteAll()
            .callFunction(() => {
                console.log('All strings were deleted');
            })
            .start();
    }}
    options={{ delay: 50 }}
/> */

// allows to make the height of landing-texto-container constant
window.onload = function () {
  let altura = document.querySelector(".landing-texto-container").offsetHeight;
  document.querySelector(".landing-texto-container").style.height =
    altura + "px";
};

const TitleTypewriter = () => {
  return (
    <div className="landing-texto-container">
      <div className="texto-fijo">
        <h1>
          Desarrollo web a medida para <br />
        </h1>
      </div>
      <div className="texto-movil">
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(3200)
                .typeString("<span>hacer realidad tus ideas online.</span>")
                .pauseFor(3000)
                .deleteChars(32)
                .typeString("<span>potenciar tu presencia en la web.</span>")
                .pauseFor(3000)
                .deleteChars(34)
                .typeString(
                  "<span>llevar tu negocio al siguiente nivel digital.</span>"
                )
                .pauseFor(3000)
                .deleteChars(50)
                .start();
            }}
            options={{ delay: 60, deleteSpeed: 20, loop: true }}
          />
        </h1>
      </div>
    </div>
  );
};

export default TitleTypewriter;

/* <Typewriter
onInit={(typewriter) => {
    typewriter.typeString('Crea sitios web perfectos.')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Mejora tu presencia en línea.')
        .pauseFor(2500)
        .deleteAll()
        .typeString('Haz realidad tus ideas.')
        .pauseFor(2500)
        .start();
}}
options={{ delay: 50, loop: true }}
/> */
