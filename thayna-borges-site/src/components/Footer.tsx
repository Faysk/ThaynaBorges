export default function Footer() {
  return (
    <footer className="footer" aria-label="Rodapé com créditos e direitos autorais">
      <p>
        © {new Date().getFullYear()} Todos os direitos reservados ·{' '}
        <a
          href="https://faysk.top/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Faysk
        </a>
      </p>
    </footer>
  )
}
