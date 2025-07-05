import React from "react";
import { Carousel, Container } from "react-bootstrap";
import style from "./style.module.css";

type Project = {
  title: string;
  description: string;
  code: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Captura de Lead - Marketing",
    description:
      "API em Node.js com TypeScript, Express e PostgreSql + Prisma para captura e gerenciamento de leads.",
    link: "https://github.com/antonioximens/captura-de-lead",
    code: `Aplicação backend em Node.js com TypeScript e Express,
projetada para captura e gerenciamento de leads.
A API REST permite cadastrar, listar, editar e excluir contatos,
com base de dados PostgreSQL e integração via Prisma.
Ideal para páginas de marketing e formulários de conversão.
`,
  },
  {
    title: "Sistema de Biblioteca",
    description:
      "Aplicação backend desenvolvida com Node.js, TypeScript e Express, voltada para o controle de acervo e gestão de empréstimos de livros",
    link: "https://github.com/antonioximens/sistema-de-biblioteca",
    code: `Sistema de Biblioteca com apiRest, aplicando conhecimentos novos como tratamento de erros, criptografia de senha, geração de ID de forma aleatória, middlewares de autenticação e erro.
Trata-se de uma api onde gerencia empréstimos de livros. Com criação de usuarios e livros, editar os mesmo, excluir e buscar. Além de ter enfase no empréstimo em si.`,
  },
  {
    title: "Perfil de Usuário",
    description:
      "React Profile é um componente desenvolvido com React + Vite, que apresenta um card visual e interativo exibindo informações de perfil de um usuário",
    link: "https://github.com/antonioximens/react-profile",
    code: `É um componente de interface desenvolvido com React e Vite, que exibe um cartão de perfil de usuário com imagem, nome e descrição. O projeto foca em design responsivo e reutilizável, sendo ideal para portfólios, páginas pessoais ou dashboards. Sua estrutura modular permite fácil personalização e expansão com novas funcionalidades, como links sociais, animações ou integração com APIs externas.`,
  },
  {
    title: "App de Vendas",
    description:
      "O App Vendas é uma aplicação desenvolvida com Next.js, TypeScript e API routes, com foco em gerenciamento de produtos para vendas online",
    link: "https://github.com/antonioximens/app-vendas",
    code: `App Vendas é uma aplicação web desenvolvida com Next.js e TypeScript, que simula um sistema de gerenciamento de produtos para vendas. O projeto utiliza as API Routes nativas do Next.js para criar um backend leve e funcional, permitindo cadastrar, listar e visualizar produtos de forma dinâmica.`,
  },
];

export const Projects: React.FC = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#212529"
      }}
    >
      <Container id="projects" className="bg-dark text-light" style={{scrollMarginTop: "80px"}}>
        <h2 className={`pb-2 ${style.sectionTitle}`}>
          <span className={`me-2 ${style.portfolioStripe}`}></span>
          PROJETOS
        </h2>
        <Carousel variant="dark" indicators={false}>
          {projects.map((project, index) => (
            <Carousel.Item key={index}>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.link && (
                    <p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={` btn btn-outline-light ${style.button}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Ver Projeto
                      </a>
                    </p>
                  )}
                </div>
                <div className="col-md-6 bg-dark text-light">
                  <pre className={`${style.codeBlock}`}>{project.code}</pre>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};
