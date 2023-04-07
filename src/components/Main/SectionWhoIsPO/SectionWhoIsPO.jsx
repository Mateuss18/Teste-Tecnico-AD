import React from 'react'
import Logo from './assets/logo.png'
import './sectionWhoIsPO.scss'

const SectionWhoIsPO = () => {
  return (
    <section className="section-who-is-po" id="quem-e-a-policlean-oirad">
      <div className="wrapper">
        <div className="aside-image">
          <img src={Logo} alt="" />
        </div>
        <div className="container">
          <h2 className="title">Quem é a Policlean Oirad</h2>
          <div className="description">
            <p>
              Somos uma empresa 100% brasileira, de fabricação própria.
              Iniciamos nossas atividades em 1965, ainda com o nome Oirad®,
              produzindo basicamente produtos domissanitários.
            </p>
            <p>
              Impulsionados pela busca permanente de inovação e evolução
              tecnológica, a linha de produção da Policlean foi sendo
              gradativamente ampliada para atender às necessidades de nossos
              clientes, contendo 7 categorias: Automotivo, Profissional,
              Lavanderia, Limpeza Geral, Piscinas e Tratamento de Pisos.
            </p>
            <p>
              Nossa unidade fabril, localizada em Campinas (SP), opera de acordo
              com as Boas Práticas de Fabricação, onde dispomos de dois mil e
              quinhentos m² de área instalada, para podermos oferecer um
              portfólio com mais de 120 itens.
            </p>
            <p>
              Todos os nossos produtos seguem o mais alto controle de qualidade
              desde sua produção até a entrega, atendendo não apenas às
              exigências dos órgãos controladores, mas principalmente àquele que
              é nosso principal agente fiscalizador: você.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionWhoIsPO
