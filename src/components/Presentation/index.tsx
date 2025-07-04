import React from "react";
import image from "../../image/profile.jpg";
import NavBar from "../NavBar";
import style from "./style.module.css";
import { TypeAnimation } from "react-type-animation";

export const Presentation: React.FC = () => {
  return (
    <>
      <NavBar />
      <div
        id="Home"
        className="container-fluid text-light d-flex align-items-center"
        style={{
          backgroundColor: "#212529",
          minHeight: "100vh",
        }}
      >
        {/* inicio do conteudo */}
        <div className="row w-100 gx-0">
          <div className="col-md-7 d-flex flex-column justify-content-center align-items-center">
            <h1 className={`${style.title}`}>Antônio Marcos Ximenes</h1>
            <TypeAnimation
              sequence={[
                "Would you like a coffee? ☕",
                2000,
                "Developer Software 💻",
                2000,
                "JS - TS - REACT - NODEJS - EXPRESS - PRISMA ⚒",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className={style.typing}
              repeat={Infinity}
            />
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <div className={style.imageWrapper}>
                <img
                src={image}
                alt="Foto do perfil"
                className={`${style.image}`}
                />
            </div>    
          </div>
        </div>
        {/* fim */}
      </div>
    </>
  );
};
