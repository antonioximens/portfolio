import React from "react";
import image from "../../image/profile.jpg";
import style from "./style.module.css";

export const AboutMe: React.FC = () => {
  return (
    <>
      <div
        id="AboutMe"
        className="container-fluid text-light d-flex align-items-center"
        style={{
          backgroundColor: "#212529",
          minHeight: "100vh"
        }}
      >
        {/* inicio do conteudo */}
        <div className="row w-100 gx-0">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className={style.imageWrapper}>
              <img
                src={image}
                alt="Foto do perfil"
                className={`${style.image}`}
              />
            </div>
          </div>
          <div className="col-md-5 d-flex flex-column justify-content-center align-items-end">
            <h1 className={`${style.title}`}>
              SOBRE MIM
              <span className={`ms-2 ${style.portfolioStripe}`}></span>
            </h1>
            <p className={`${style.subTitle}`}>
              Olá, sou Antônio Marcos Ximenes, estudante bacharel em Ciência da
              Computação na Universidade Uniderp, cursando o 6° semestre(6/8).
            </p>
            <p className={`${style.subTitle}`}>
              Tenho interesse em desenvolvimento web, venho estudando
              tecnologias para front-end como:
              <strong> JavaScript, TypeScript, React, CSS e BootStrap.</strong>
              <br />E para back-end:
              <strong> Node.js, Express, PostgreSql, Prisma.</strong>
            </p>
            <p className={`${style.subTitle}`}>
              Gosto de novos desafios que obrigam a pensar fora da "caixa",
              criando soluções pequenas ou escalaveis. Tenho familiaridade com
              versionamento de código (Git), consumo de APIsRest(Express) e boas
              práticas de desenvolvimento.
            </p>
          </div>
        </div>
        {/* fim */}
      </div>
    </>
  );
};
