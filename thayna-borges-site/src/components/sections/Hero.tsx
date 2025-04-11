'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="section">
      <div className="section__container">
        <div className="section__row">
          <div className="section__column">
            <h1 className="section__title">Thayná Borges</h1>
            <p className="section__text">
              Psicóloga Clínica com Pós-graduação em Terapia Cognitivo-Comportamental (TCC)
            </p>
            <p className="section__text text-muted text-sm">
              Atendimento Online · CRP 06/218477
            </p>
            <p className="section__text">
              Utilizando a TCC, ajudo pessoas a ressignificarem desafios, acolhendo com empatia e técnicas validadas cientificamente. Vamos transformar dificuldades em autoconhecimento e bem-estar.
            </p>
            <a
              href="https://wa.me/5511959478079"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--solid"
            >
              Agende sua sessão
            </a>
          </div>

          <div className="section__column">
            <div className="image__profile">
              <Image
                src="/thayna-profile.jpg"
                alt="Thayná Borges - Psicóloga"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section__highlight">
        <div className="section__container">
          <h2 className="section__title">
            Sua jornada para uma vida mais leve começa aqui
          </h2>
          <p className="section__text">
            Minha missão é ajudar você a encontrar equilíbrio emocional e psicológico, oferecendo sessões personalizadas com foco em autoconhecimento e desenvolvimento de habilidades práticas para lidar com os desafios da vida.
          </p>

          <div className="section__actions">
            <a href="#sobre" className="btn btn--outline">Saiba mais sobre mim</a>
            <a href="#contato" className="btn btn--solid">Entre em contato</a>
          </div>
        </div>
      </div>
    </section>
  )
}
