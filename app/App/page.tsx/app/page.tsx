import {
  ArrowRight,
  Flame,
  Target,
  Trophy,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <main className="home">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-mark">I</span>
          <span>IMPULSO</span>
        </div>

        <button className="login-button">
          Entrar
        </button>
      </nav>

      <section className="hero">
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="badge">
            <Flame size={16} />
            <span>COMEÇA HOJE</span>
          </div>

          <h1>
            NÃO PARES.
            <br />
            <span>EVOLUI.</span>
          </h1>

          <p>
            A tua mente muda.
            <br />
            A tua vida acompanha.
          </p>

          <button className="primary-button">
            COMEÇAR AGORA
            <ArrowRight size={20} />
          </button>

          <div className="hero-note">
            <span>✓</span>
            Gratuito para começar
          </div>
        </div>

        <div className="motivation-card">
          <div className="card-top">
            <div className="icon-box">
              <Zap size={20} />
            </div>

            <span>MOTIVAÇÃO DO DIA</span>
          </div>

          <h2>
            “O teu futuro começa
            <br />
            com o que fazes hoje.”
          </h2>

          <div className="card-line" />

          <p>
            Pequenos passos.
            <br />
            Grandes mudanças.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="section-heading">
          <span>O TEU PRÓXIMO NÍVEL</span>
          <h2>
            Mais que motivação.
            <br />
            <strong>Ação.</strong>
          </h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon">
              <Target size={24} />
            </div>

            <h3>Desafios</h3>

            <p>
              Pequenas missões diárias para
              transformar intenção em ação.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">
              <Flame size={24} />
            </div>

            <h3>Sequência</h3>

            <p>
              Mantém o teu ritmo e não deixes
              quebrar a tua evolução.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">
              <Trophy size={24} />
            </div>

            <h3>Conquistas</h3>

            <p>
              Ganha pontos, sobe de nível e
              prova do que és capaz.
            </p>
          </article>
        </div>
      </section>

      <section className="final-cta">
        <span>O MOMENTO É AGORA</span>

        <h2>
          A mudança começa
          <br />
          com uma decisão.
        </h2>

        <button className="primary-button">
          ENTRAR NO IMPULSO
          <ArrowRight size={20} />
        </button>
      </section>

      <footer>
        <div className="logo">
          <span className="logo-mark">I</span>
          <span>IMPULSO</span>
        </div>

        <p>© 2026 IMPULSO. Evolui todos os dias.</p>
      </footer>
    </main>
  );
      }
