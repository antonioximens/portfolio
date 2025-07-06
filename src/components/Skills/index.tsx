import React from "react";
import style from "./style.module.css";
import database from "../../image/database.png"
import js from "../../image/js.png"
import physics from "../../image/physics.png"
import programing from "../../image/programing.png"
import typescript from "../../image/typescript.png"
import { Container } from "react-bootstrap";

export const Skills: React.FC = () => {
  return (
    <Container fluid id="skills" className="bg-dark text-light" >
      <div className="row align-items-center">
        {/* Coluna dos ícones */}
        <div className="col-md-6 text-center">
          <div className={style.skillsGrid}>
            <img src={typescript} alt="TypeScript" />
            <img src={js} alt="JavaScript" />
            <img src={physics} alt="React" />
            <img src={programing} alt="Node.js" />
            <img src={database} alt="PostgreSQL" />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-end">
           {/* Coluna da descrição */}
          <h2 className={style.title}>
            Skills
            <span className={`ms-2 ${style.portfolioStripe}`}></span>
          </h2>
          <p className={style.description}>
            Tenho conhecimento em desenvolvimento web utilizando TypeScript, JavaScript e React no front-end, e Node.js, Express, PostgreSQL e Prisma ORM no back-end. 
            Trabalho com construção de APIs REST, versionamento de código com Git e aplicação de boas práticas de desenvolvimento.
            Estou sempre buscando evoluir com novos desafios e aprender tecnologias que tragam eficiência para as soluções.
          </p>
        </div>
      </div>
    </Container>
  );
};
