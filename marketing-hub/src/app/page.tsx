import styles from "./page.module.css";

type StateInterest = {
  name: string;
  value: number;
};

type ThemeInterest = {
  theme: string;
  headline: string;
  insight: string;
  states: StateInterest[];
};

type ChannelOption = {
  name: string;
  verdict: "Vencedor" | "Teste" | "Uso Tático";
  bestFor: string;
  velocity: "Alta" | "Média" | "Baixa";
  qualifyingPower: "Alta" | "Média" | "Baixa";
  cpaImpact: "CPA baixo" | "CPA neutro" | "CPA alto";
  notes: string;
  moves: string[];
};

const themeInterests: ThemeInterest[] = [
  {
    theme: "Maquiagem Simples",
    headline: "Termo âncora puxando Nordeste com força total.",
    insight:
      "Criativos com apelo de rapidez + autoestima funcionam melhor mirando Nordeste.",
    states: [
      { name: "Paraíba", value: 100 },
      { name: "Pernambuco", value: 96 },
      { name: "Alagoas", value: 94 },
    ],
  },
  {
    theme: "Maquiagem para Iniciantes",
    headline: "Entrada perfeita pra quebrar objeção de quem nunca se maquiou.",
    insight:
      "Combine prova social paulista com linguagem acolhedora para Norte/Nordeste.",
    states: [
      { name: "São Paulo", value: 100 },
      { name: "Piauí", value: 100 },
      { name: "Rio Grande do Norte", value: 66 },
    ],
  },
  {
    theme: "Maquiagem Barata",
    headline: "Diferencial competitivo: beleza acessível sem frescura.",
    insight:
      "Criativos com preço ancorado e antes/depois simples convertem forte em Goiás/Ceará.",
    states: [
      { name: "Goiás", value: 100 },
      { name: "Ceará", value: 100 },
      { name: "Rio Grande do Sul", value: 87 },
    ],
  },
];

const cityLeaders = [
  { city: "São Gonçalo", index: 100 },
  { city: "Brasília", index: 21 },
  { city: "Diadema", index: 21 },
  { city: "Rio de Janeiro", index: 18 },
  { city: "Salvador", index: 16 },
];

const trendingClusters = [
  {
    title: "Maquiagem Simples",
    bullets: [
      "Maquiagem simples",
      "Auto maquiagem simples",
      "Maquiagem simples e fácil",
      "Maquiagem de Natal simples",
      "Maquiagem simples para Natal",
    ],
  },
  {
    title: "Datas Quentes",
    bullets: [
      "Maquiagem de Natal",
      "Maquiagem simples para Ano Novo",
      "Maquiagem simples para formatura",
      "Maquiagem para formatura à noite",
      "Maquiagem dourada simples",
    ],
  },
  {
    title: "Maquiagem Básica",
    bullets: [
      "Maquiagem básica para iniciantes",
      "Como fazer maquiagem básica",
      "Maquiagem para o dia a dia",
      "Fotos de maquiagem de Natal",
    ],
  },
];

const channelMatrix: ChannelOption[] = [
  {
    name: "Typebot estilo WhatsApp",
    verdict: "Vencedor",
    bestFor: "Tráfego frio direto com follow-up automatizado",
    velocity: "Alta",
    qualifyingPower: "Alta",
    cpaImpact: "CPA baixo",
    notes:
      "Simula atendimento humano, mantém ritmo rápido, coleta dados e direciona para checkout ou WhatsApp real só com lead quente.",
    moves: [
      "Fluxo com 4-6 perguntas: objetivo, tempo disponível, ocasião e orçamento.",
      "Oferecer mini aula gratuita em vídeo + CTA para produto completo.",
      "Integrar com pixel para otimizar evento de Lead Qualificado.",
    ],
  },
  {
    name: "Página de vendas direta",
    verdict: "Teste",
    bestFor: "Público morno com copy agressiva e prova visual",
    velocity: "Média",
    qualifyingPower: "Média",
    cpaImpact: "CPA neutro",
    notes:
      "Resolve quem já quer comprar, mas perde quem precisa de conversa. Use quando orçamento permitir remarketing forte.",
    moves: [
      "Hero com promessa de 10 minutos + depoimentos em vídeo vertical.",
      "Bloco comparando custo da make profissional x custo do guia.",
      "Ancorar oferta em datas (Natal/Ano Novo) com timers reais.",
    ],
  },
  {
    name: "Quiz clássico",
    verdict: "Uso Tático",
    bestFor: "Campanhas de lista/lead magnet com funil longo",
    velocity: "Média",
    qualifyingPower: "Alta",
    cpaImpact: "CPA alto",
    notes:
      "Engaja, mas quebra fluxo se não tiver recompensa instantânea. Só uso para capturar base de leads VIP.",
    moves: [
      "Entregar checklist PDF no final para justificar esforço.",
      "Pixelar evento de 'Quiz Completo' para LALs específicos.",
      "Retomar via email/WhatsApp em até 30 minutos após conclusão.",
    ],
  },
  {
    name: "WhatsApp direto",
    verdict: "Uso Tático",
    bestFor: "Remarketing quente e suporte VIP",
    velocity: "Alta",
    qualifyingPower: "Baixa",
    cpaImpact: "CPA alto",
    notes:
      "Vira caos em escala, perde dados e depende de atendimento humano impecável. Só serve pós-typebot.",
    moves: [
      "Script curto com CTA para checkout dentro do chat.",
      "Automação pra sinalizar leads e evitar tempo ocioso.",
      "Usar selo de escassez (vagas limitadas para mentoria bônus).",
    ],
  },
];

const productDeck = [
  {
    name: "Make Perfeita em 10 Minutos",
    promise:
      "Transforma rotina corrida em ritual de autoestima sem gastar muito.",
    differentiator:
      "Checklist em vídeo + lista de produtos até R$80 para cada etapa.",
    hooks: [
      "Desafio 7 dias de make em 10 minutos",
      "Antes X Depois com iluminação natural",
      "Roteiro para consultoras revenderem o guia",
    ],
  },
  {
    name: "Maquiagem Simples Que Funciona",
    promise:
      "Framework universal para dia a dia, Natal e Ano Novo sem precisar ser maquiadora.",
    differentiator:
      "Mapas de combinação de cores por ocasião e tom de pele + bônus formatura.",
    hooks: [
      "Live shopping com combo econômico",
      "Calendário de makes comemorativas",
      "Tutorial versão adolescente (mães comprando para filhas)",
    ],
  },
];

const actionChecklist = [
  "Campanhas ABO com segmentação Nordeste + lookalike de engajamento em vídeo curto (15s).",
  "Criativos UGC destacando economia: 'Make completa com R$47 na farmácia'.",
  "Landing Typebot com prova social paulista e oferta irresistível ligada às datas.",
  "Sequência de remarketing: vídeo depoimento -> oferta bônus -> WhatsApp humanizado.",
  "Mensuração: otimizar para evento de Lead Qualificado e monitorar CPA vs. checkout.",
];

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero}>
        <div>
          <span className={styles.badge}>Playbook de Tráfego Pago</span>
          <h1>
            Direto ao ponto: funil curto, promessa forte e dados na veia para
            vender maquiagem simples.
          </h1>
          <p>
            Análise fria dos dados do Google Trends e um plano agressivo para
            você dominar Facebook Ads agora mesmo. Quando algo não presta eu
            corto. Aqui só fica o que converte.
          </p>
        </div>
        <div className={styles.heroCard}>
          <h2>Veredito Rápido</h2>
          <p>
            O fluxo vencedor para tráfego frio direto é <strong>Typebot</strong>{" "}
            com narrativa estilo WhatsApp. Converte mais porque qualifica sem
            atrito, entrega valor rápido e só manda para atendimento humano quem
            tem intenção real.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>Onde o desejo já está fervendo</h2>
          <p>
            Use copy e segmentação alinhadas com o que cada região busca. Nada
            de falar difícil para quem quer simplicidade.
          </p>
        </header>
        <div className={styles.themeGrid}>
          {themeInterests.map((theme) => (
            <article key={theme.theme} className={styles.themeCard}>
              <h3>{theme.theme}</h3>
              <p className={styles.themeHeadline}>{theme.headline}</p>
              <p className={styles.themeInsight}>{theme.insight}</p>
              <div className={styles.barList}>
                {theme.states.map((state) => (
                  <div key={state.name} className={styles.barItem}>
                    <span>{state.name}</span>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.barFill}
                        style={{ width: `${state.value}%` }}
                        aria-label={`${state.name} ${state.value}`}
                      />
                    </div>
                    <span className={styles.barValue}>{state.value}%</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>Cidades quentes para geotarget</h2>
          <p>
            Se o budget estiver apertado, comece nessas praças. CPM cai e você
            domina rápido.
          </p>
        </header>
        <div className={styles.cityList}>
          {cityLeaders.map((city) => (
            <div key={city.city} className={styles.cityRow}>
              <span>{city.city}</span>
              <span className={styles.cityIndex}>{city.index}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>Tendências em alta repentina</h2>
          <p>
            Esses termos devem virar criativos, áudios e iscas imediatas. Datas
            comemorativas garantem motivo para comprar agora.
          </p>
        </header>
        <div className={styles.trendGrid}>
          {trendingClusters.map((cluster) => (
            <article key={cluster.title} className={styles.trendCard}>
              <h3>{cluster.title}</h3>
              <ul>
                {cluster.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>Produtos na vitrine</h2>
          <p>
            Os dois formatos funcionam juntos: um entra como front-end rápido,
            o outro como upsell premium.
          </p>
        </header>
        <div className={styles.productGrid}>
          {productDeck.map((product) => (
            <article key={product.name} className={styles.productCard}>
              <div className={styles.productHeader}>
                <h3>{product.name}</h3>
                <span>Digital • Entrega imediata</span>
              </div>
              <p className={styles.productPromise}>{product.promise}</p>
              <p className={styles.productDiff}>
                Diferencial: <strong>{product.differentiator}</strong>
              </p>
              <h4>Ganchos de campanha</h4>
              <ul>
                {product.hooks.map((hook) => (
                  <li key={hook}>{hook}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>Canal de conversão para tráfego direto</h2>
          <p>
            Aqui não tem achismo. Comparativo entre as quatro opções que você
            levantou, ordenado por poder de conversão real.
          </p>
        </header>
        <div className={styles.channelGrid}>
          {channelMatrix.map((channel) => (
            <article
              key={channel.name}
              className={`${styles.channelCard} ${
                channel.verdict === "Vencedor" ? styles.channelWinner : ""
              }`}
            >
              <div className={styles.channelHeader}>
                <h3>{channel.name}</h3>
                <span>{channel.verdict}</span>
              </div>
              <p className={styles.channelNotes}>{channel.notes}</p>
              <dl className={styles.channelMeta}>
                <div>
                  <dt>Melhor uso</dt>
                  <dd>{channel.bestFor}</dd>
                </div>
                <div>
                  <dt>Velocidade</dt>
                  <dd>{channel.velocity}</dd>
                </div>
                <div>
                  <dt>Qualificação</dt>
                  <dd>{channel.qualifyingPower}</dd>
                </div>
                <div>
                  <dt>Impacto CPA</dt>
                  <dd>{channel.cpaImpact}</dd>
                </div>
              </dl>
              <h4>Jogadas obrigatórias</h4>
              <ul>
                {channel.moves.map((move) => (
                  <li key={move}>{move}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>Checklist de execução já para hoje</h2>
        </header>
        <ul className={styles.checklist}>
          {actionChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
