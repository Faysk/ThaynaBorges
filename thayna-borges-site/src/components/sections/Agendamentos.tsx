export default function Agendamentos() {
  return (
    <section id="agendamentos" className="section">
      <div className="section__container text-center space-y-6">
        <h2 className="section__title">Agendamentos</h2>

        <p className="section__text text-muted">
          Sua saúde mental merece atenção e cuidado especial. Para marcar uma sessão personalizada comigo, clique no botão abaixo ou fale diretamente pelo WhatsApp.
        </p>

        <p className="section__text">
          Durante nossas sessões, você encontrará um espaço de acolhimento, empatia e escuta ativa. Utilizo estratégias da Terapia Cognitivo-Comportamental para ajudar no desenvolvimento de habilidades emocionais e cognitivas que promovam bem-estar e autonomia.
        </p>

        <div className="section__actions">
          <a
            href="https://wa.me/5511959478079"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--solid"
          >
            Agendar agora
          </a>
        </div>

        <p className="section__text font-semibold">
          Estou aqui para ajudar você a dar o primeiro passo em direção a uma vida mais leve e equilibrada.<br className="hidden sm:block" />
          Aguardo seu contato para caminharmos juntos nessa jornada transformadora.
        </p>
      </div>
    </section>
  )
}
