import dynamic from 'next/dynamic'
import ScrollToTopButton from '@/components/ScrollToTopButton'

// Seções com carregamento dinâmico
const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: true })
const Sobre = dynamic(() => import('@/components/sections/Sobre'))
const Abordagem = dynamic(() => import('@/components/sections/Abordagem'))
const Agendamentos = dynamic(() => import('@/components/sections/Agendamentos'))
const Blog = dynamic(() => import('@/components/sections/Blog'))
const Contato = dynamic(() => import('@/components/sections/Contato'))

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Hero />
      <Sobre />
      <Abordagem />
      <Agendamentos />
      <Blog />
      <Contato />

      {/* Botão flutuante de voltar ao topo */}
      <ScrollToTopButton />
    </main>
  )
}
