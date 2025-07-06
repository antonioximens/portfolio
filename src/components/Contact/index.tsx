import React from "react";
import style from "./style.module.css";
import gmail from "../../image/gmail.png"
import linkedin from "../../image/linkedin.png"
import github from "../../image/github.png"
import wpp from "../../image/whatsapp.png"
import { Container } from "react-bootstrap";

export const Contact: React.FC = () => {
  return (
    <Container fluid id="contact" className="bg-dark text-light py-5" >
      <div className="row align-items-center">
        {/* Coluna 1 - Título + Texto */}
        <div className={`col-md-7 ${style.divContact}`}>
          <h2 className={style.title}>
            <span className={style.contactStripe}></span>
            Fale Comigo
          </h2>
          <p className={`text-align-center ${style.description}`}>
            Estou disponível para novos projetos e oportunidades. Entre em contato pelas redes ou e-mail ao lado, será um prazer conversar com você!
          </p>  
        </div>

        {/* Coluna 2 - Ícones de contato */}
        <div className="col-md-5 text-center">
          <div className={style.contactGrid}>
            <a href="mailto:almeid.ximenes@gmail.com?subject=Olá!&body=Gostaria de entrar em contato com você." target="_blank" rel="noreferrer">
              <img src={gmail} alt="Email" title="ximenes.ant@gmail.com" />
            </a>
            <a href="https://www.linkedin.com/in/ant%C3%B4nio-marcos-ximenes-19270128a/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="Telefone" title="(67) xxxx-xxxx" />
            </a>
            <a href="https://github.com/antonioximens" target="_blank" rel="noreferrer">
              <img src={github} alt="GitHub" title="@ximenes-ant" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5567981645628&text=Olá%2C%20gostaria%20de%20falar%20com%20você!" target="_blank" rel="noreferrer">
              <img src={wpp} alt="LinkedIn" title="@ximenes.ant" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};
