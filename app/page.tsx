git mv app/components/header.tsx app/components/HeaderTemp.tsx
git mv app/components/HeaderTemp.tsx app/components/Header.tsx
git add -A
git commit -m "Fix case: header.tsx → Header.tsx"
git push origin main

// app/page.tsx
export default function Page() {
  return (
    <main style={{ background: 'var(--charcoal)', color: 'var(--ink)' }}>
      {/* HERO */}
      <section id="discover" style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
        <h1 style={{ fontSize: 'clamp(36px,6vw,64px)', lineHeight: 1.05, marginBottom: 16 }}>
          Your culture has a formula. We make it measurable.
        </h1>
        <p style={{ fontSize: 20, maxWidth: 720, marginBottom: 24 }}>
          Every organisation has a Leadership Equation. What’s yours?
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <a href="/profile" aria-label="Get your free leadership profile" className="btnTeal">
            Get your free leadership profile
          </a>
          <a href="#contact" aria-label="Talk to an expert" className="btnGoldOutline">
            Talk to an expert
          </a>
        </div>
      </section>

      {/* THREE STEPS */}
      <section id="how" className="container" style={{ paddingTop: 48, paddingBottom: 32 }}>
        <div className="steps">
          <div className="step">
            <div className="badge">1</div>
            <h3>Clarity first</h3>
            <p>See where behaviour helps or harms performance.</p>
          </div>

          <div className="step">
            <div className="badge">2</div>
            <h3>Signal to action</h3>
            <p>Turn data into 3-4 behaviours that move results.</p>
          </div>

          <div className="step">
            <div className="badge">3</div>
            <h3>Prove the gain</h3>
            <p>Track delivery, safety, and load over time.</p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO / OUTCOMES */}
      <section id="outcomes" className="container" style={{ paddingTop: 8, paddingBottom: 40 }}>
        <div className="cards">
          <div className="card">
            <h3>What we do</h3>
            <ul>
              <li>Surface where behaviour helps or harms performance.</li>
              <li>Map values to everyday decisions and ways of working.</li>
              <li>Make safety, trust, and inclusion visible and measurable.</li>
              <li>Focus teams on the few behaviours that change outcomes.</li>
              <li>Track progress and verify impact with real evidence.</li>
            </ul>
          </div>

          <div className="card">
            <h3>Outcomes you can expect</h3>
            <ul>
              <li>Faster decisions and clearer priorities.</li>
              <li>Lower burnout risk and better load balance.</li>
              <li>Higher psychological safety and trust.</li>
              <li>Better role fit and stronger retention.</li>
              <li>Leaders who leave a visible legacy of impact.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* METRICS + CTA */}
      <section id="how-it-works" className="container" style={{ paddingTop: 48, paddingBottom: 56 }}>
        <div className="metricsGrid">
          <div className="metric"><h3>3x</h3><p>Faster insight to action</p></div>
          <div className="metric"><h3>40+</h3><p>Behaviour signals tracked</p></div>
          <div className="metric"><h3>12k+</h3><p>Data points analysed</p></div>
        </div>

        <div className="ctaBanner">
          <h2>See your starting point</h2>
          <p>A short check that shows top drivers and risks.</p>
          <a href="/snapshot" className="ctaButton">Start your snapshot</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container" style={{ paddingTop: 24, paddingBottom: 80 }}>
        <h2>Talk to an expert</h2>
        <p>Email: hello@traitiq.co • We’ll respond within one working day.</p>
      </section>
    </main>
  );
}


