import InvolucroSecao from "@/components/layout/InvolucroSecao";
import SecaoHeroi from "@/components/secoes/SecaoHeroi";
import SecaoVitrine from "@/components/secoes/SecaoVitrine";
import SecaoPropostaDeValor from "@/components/secoes/SecaoPropostaDeValor"; // 1. Importe a nova seção
import SecaoPilares from "@/components/secoes/SecaoPilares";
import SecaoTrilhas from "@/components/secoes/SecaoTrilhas";
import SecaoConectaConceitos from "@/components/secoes/SecaoConectaConceitos";
import SecaoComoFunciona from "@/components/secoes/SecaoComoFunciona";
import SecaoEcossistemaFerramentas from "@/components/secoes/SecaoEcossistemaFerramentas";
import SecaoMontadorEstrategia from "@/components/secoes/SecaoMontadorEstrategia";
import SecaoClientes from "@/components/secoes/SecaoClientes";
import SecaoPodcast from "@/components/secoes/SecaoPodcast";
import SecaoDemoInterativa from "@/components/secoes/SecaoDemoInterativa";
import SecaoDepoimentos from "@/components/secoes/SecaoDepoimentos";
import SecaoCtaFinal from "@/components/secoes/SecaoCtaFinal";
// Importe os dados necessários
import {
  DADOS_PILARES,
  TRILHAS_APRENDIZAGEM,
  PARES_CONCEITOS,
  DADOS_COMO_FUNCIONA,
  DADOS_ECOSSISTEMA_FERRAMENTAS,
  PASSOS_MONTADOR_ESTRATEGIA,
  INSIGHTS_ESTRATEGIA,
  DADOS_CLIENTES,
  DADOS_PODCAST,
  DEPOIMENTOS,
} from "@/constants";

export default function Home() {
  return (
    <>
      {/* Seção Hero */}
      <InvolucroSecao id="hero" semPreenchimento={true}>
        <SecaoHeroi
          titulo="Lúmina Lab: Inovação em Marketing Digital"
          subtitulo="Laboratório acadêmico de marketing digital e inovação, capacitando alunos e impulsionando microempreendedores através de soluções práticas e impacto social."
          textoCtaPrimario="Nossas Soluções"
          linkCtaPrimario="#aprendizagem"
          textoCtaSecundario="Conheça a Lúmina"
          linkCtaSecundario="#sobre-nos"
        />
      </InvolucroSecao>

      {/* Seção Vitrine */}
      <InvolucroSecao
        id="showcase"
        className="pb-20 md:pb-28 pt-10 md:pt-16 section-bg-transparent-darker"
      >
        <SecaoVitrine />
      </InvolucroSecao>

      {/* 2. Adicione a nova seção aqui */}
      <InvolucroSecao id="sobre-nos" className="section-bg-slate-transparent">
        <SecaoPropostaDeValor
          titulo="Conheça a Lúmina Lab"
          descricao="A Lúmina é um laboratório acadêmico de marketing digital e inovação do ecossistema Ânima Educação. Nossa missão é conectar estudantes a práticas de mercado, capacitando-os como agentes de mudança através da aplicação de conhecimentos em projetos reais que apoiam microempreendedores e geram impacto social. Somos guiados por três pilares: educação, tecnologia e impacto social."
          urlImagem="https://picsum.photos/seed/lumina-sobre/600/400?grayscale&blur=1"
          altImagem="Equipe Lúmina Lab em colaboração ou estudantes trabalhando em projeto de marketing digital."
        />
      </InvolucroSecao>

      {/* As próximas seções virão aqui */}
      {/* 2. Adicione a nova seção aqui */}
      <InvolucroSecao id="pilares" className="section-bg-transparent">
        <SecaoPilares titulo="Nossos Pilares em Ação" pilares={DADOS_PILARES} />
      </InvolucroSecao>

      <InvolucroSecao
        id="aprendizagem"
        className="section-bg-slate-transparent"
      >
        <SecaoTrilhas
          titulo="Trilhas de Aprendizagem Lúmina"
          trilhas={TRILHAS_APRENDIZAGEM}
        />
      </InvolucroSecao>

      <InvolucroSecao id="desafio-lumina" className="section-bg-interactive">
        <SecaoConectaConceitos
          titulo="Desafio Lúmina: Conecte os Conceitos"
          pares={PARES_CONCEITOS}
        />
      </InvolucroSecao>

      <InvolucroSecao id="como-funciona" className="section-bg-transparent">
        <SecaoComoFunciona
          titulo="Nossa Metodologia de Trabalho"
          passos={DADOS_COMO_FUNCIONA}
        />
      </InvolucroSecao>

      <InvolucroSecao id="ferramentas" className="section-bg-slate-transparent">
        <SecaoEcossistemaFerramentas
          titulo="Ecossistema de Soluções e Ferramentas"
          ferramentas={DADOS_ECOSSISTEMA_FERRAMENTAS}
        />
      </InvolucroSecao>

      <InvolucroSecao id="estrategia-sim" className="section-bg-interactive">
        <SecaoMontadorEstrategia
          titulo="Monte Sua Estratégia Digital (Simulado)"
          passos={PASSOS_MONTADOR_ESTRATEGIA}
          insights={INSIGHTS_ESTRATEGIA}
        />
      </InvolucroSecao>

      <InvolucroSecao id="clientes" className="section-bg-transparent">
        <SecaoClientes
          titulo="Projetos com Impacto Social"
          clientes={DADOS_CLIENTES}
        />
      </InvolucroSecao>

      <InvolucroSecao id="podcast" className="section-bg-transparent-darker">
        <SecaoPodcast dadosPodcast={DADOS_PODCAST} />
      </InvolucroSecao>

      <InvolucroSecao id="demo" className="section-bg-slate-transparent">
        <SecaoDemoInterativa
          titulo="Experimente a Lúmina Ao Vivo"
          descricao="Veja nossa tecnologia em ação. Este espaço simula um elemento interativo que poderia demonstrar um produto ou um recurso chave dinamicamente."
        />
      </InvolucroSecao>

      <InvolucroSecao id="depoimentos" className="section-bg-transparent">
        <SecaoDepoimentos
          titulo="Depoimentos que Inspiram"
          depoimentos={DEPOIMENTOS}
        />
      </InvolucroSecao>

      <InvolucroSecao
        id="contato"
        className="bg-gradient-to-br from-dark-bg via-[var(--cor-primaria-usr)]/10 to-dark-bg"
      >
        <SecaoCtaFinal
          titulo="Pronto para Transformar Conhecimento em Impacto?"
          descricao="Junte-se à Lúmina Lab! Seja você um aluno buscando experiência prática, um microempreendedor precisando de apoio digital, ou um parceiro interessado em inovação social e educacional."
          textoCta="Entre em Contato"
          linkCta="#contato" // Link de exemplo
        />
      </InvolucroSecao>
    </>
  );
}
