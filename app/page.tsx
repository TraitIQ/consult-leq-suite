
export const metadata = {
  title: "Consult LEQ – The Leadership Equation",
  description: "Behavioural intelligence for leadership and culture.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}


Page 

export default function Page() {
  return (
    <main style={{ background: 'var(--charcoal)', color: 'var(--ink)' }}>
      {/* HERO */}
      <section id="discover" style={{ maxWidth: 1100, margin: '0 auto', padding: '96px 24px 48px' }}>
        <h1 style={{ fontSize: 'clamp(36px,6vw,64px)', lineHeight: 1.05, margin: 0, letterSpacing: '-0.02em', fontWeight: 800 }}>
          Your culture has a formula. We make it measurable.
        </h1>

        <p style={{ fontSize: 'clamp(18px,2.2vw,22px)', color: '#D1D5DB', margin: '12px 0 0', maxWidth: 900 }}>
          Every organisation has a Leadership Equation — what’s yours?
        </p>

        <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: '#9CA3AF', margin: '10px 0 24px', maxWidth: 900 }}>
          Behavioural intelligence for leadership and culture. Diagnose, measure,
          and transform your organisation with the LEQ ecosystem.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <a href="/profile" aria-label="Get your free leadership profile" className="btnGold">
            Get your free leadership profile
          </a>
          <a href="#contact" aria-label="Talk to an expert" className="btnTeal">
            Talk to an expert
          </a>
        </div>
      </section>

      {/* WHY LEQ */}
      <section id="why" className="container" style={{ paddingTop: 0 }}>
        <div className="stepGrid">
          <div className="step">
            <div className="badge">1</div>
            <h3>Clarity first</h3>
            <p>See where behaviour helps or harms performance.</p>
          </div>
          <div className="step">
            <div className="badge">2</div>
            <h3>Signal to action</h3>
            <p>Turn data into 3–4 behaviours that move results.</p>
          </div>
          <div className="step">
            <div className="badge">3</div>
            <h3>Prove the gain</h3>
            <p>Track delivery, safety, and load over time.</p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO / OUTCOMES */}
      <section id="what" className="container" style={{ paddingTop: 32, paddingBottom: 72 }}>
        <div className="grid2">
          <div className="card">
            <h2 className="h2">What we do</h2>
            <ul className="ul">
              <li>Surface where behaviour helps or harms performance.</li>
              <li>Map values to everyday decisions and ways of working.</li>
              <li>Make safety, trust, and inclusion visible and measurable.</li>
              <li>Focus teams on the few behaviours that change outcomes.</li>
              <li>Track progress and verify impact with real evidence.</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="h2">Outcomes you can expect</h2>
            <ul className="ul">
              <li>Faster decisions and clearer priorities.</li>
              <li>Lower burnout risk and better load balance.</li>
              <li>Higher psychological safety and trust.</li>
              <li>Better role fit and stronger retention.</li>
              <li>Leaders who leave a visible legacy of impact.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (metrics + stories + CTA) */}
      <section id="how" className="container" style={{ paddingTop: 48, paddingBottom: 72 }}>
        <div className="metricsGrid">
          <div className="metric"><h3>3×</h3><p>Faster insight to action</p></div>
          <div className="metric"><h3>40+</h3><p>Behaviour signals tracked</p></div>
          <div className="metric"><h3>12k+</h3><p>Data points analysed</p></div>
        </div>

        <div className="impactGrid">
          <div className="impactCard">
            <p className="quote">“We cut noise, set three behaviours, and delivery moved.”</p>
            <span className="role">Executive Lead</span>
          </div>
          <div className="impactCard">
            <p className="quote">“Safety improved and staff spoke up earlier about risks.”</p>
            <span className="role">Operations Lead</span>
          </div>
          <div className="impactCard">
            <p className="quote">“Clear role fit decisions saved us weeks in recruitment.”</p>
            <span className="role">People Lead</span>
          </div>
        </div>

        <div className="ctaBanner">
          <h2>See your starting point</h2>
          <p>A short check that shows top drivers and risks.</p>
          <a href="/snapshot" className="ctaButton">Start your snapshot</a>
        </div>
      </section>

      {/* INSIGHTS (placeholder for now) */}
      <section id="insights" className="container" style={{ paddingTop: 24, paddingBottom: 64 }}>
        <div className="card">
          <h2 className="h2">Insights</h2>
          <ul className="ul">
            <li>Why safety × engagement − burnout predicts culture health.</li>
            <li>Leaderprint™: measuring style fit without the fluff.</li>
            <li>MissionMatrix™: how teams move from noise to delivery.</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container" style={{ paddingTop: 0, paddingBottom: 96 }}>
        <div className="card">
          <h2 className="h2">Contact</h2>
          <ul className="ul">
            <li>Email: hello@consultleq.com</li>
            <li>Book a call: /contact</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

