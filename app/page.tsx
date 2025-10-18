"use client";
import React from "react";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section id="hero" className="section hero">
        <div className="container">
          <div className="panel center">
            <h1 className="h1">Behavioural intelligence that moves results</h1>
            <p className="lead">
              We diagnose behaviour, reduce friction, and help teams deliver.
            </p>
            <div className="btnrow">
              <a className="btn" href="#free-test">Get a quick snapshot</a>
              <a className="btnghost" href="#contact">Talk to us</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what" className="section">
        <div className="container">
          <div className="grid two">
            <div className="panel">
              <h2 className="h2">What we do</h2>
              <ul className="list">
                <li>Surface where behaviour helps or harms performance.</li>
                <li>Map values to everyday decisions and ways of working.</li>
                <li>Make safety, trust, and inclusion visible and measurable.</li>
                <li>Focus people on the few behaviours that change outcomes.</li>
                <li>Track progress and verify impact with real evidence.</li>
              </ul>
            </div>
            <div className="panel">
              <h3 className="h3">Outcomes you can expect</h3>
              <ul className="list">
                <li>Faster decisions and clearer priorities.</li>
                <li>Lower burnout risk and better load balance.</li>
                <li>Higher psychological safety and trust.</li>
                <li>Better role fit and stronger retention.</li>
                <li>Leaders who leave a visible legacy of impact.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="section alt">
        <div className="container">
          <div className="grid three steps">
            <div className="step">
              <span className="badge">1</span>
              <h4 className="h4">Assess</h4>
              <p>We collect signals on behaviour, safety, load, and fit.</p>
            </div>
            <div className="step">
              <span className="badge">2</span>
              <h4 className="h4">Align</h4>
              <p>We link behaviours to strategy and set clear priorities.</p>
            </div>
            <div className="step">
              <span className="badge">3</span>
              <h4 className="h4">Activate</h4>
              <p>We run focused practice and verify gains over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITY AREAS */}
      <section id="capability" className="section">
        <div className="container">
          <div className="grid two">
            <div className="card">
              <h3 className="h3">Culture and safety</h3>
              <p>Make safety, fairness, and inclusion part of daily work.</p>
            </div>
            <div className="card">
              <h3 className="h3">Leadership effectiveness</h3>
              <p>Build consistent behaviours and hold the right standards.</p>
            </div>
            <div className="card">
              <h3 className="h3">Workforce fit</h3>
              <p>Match people to roles by behaviour and context.</p>
            </div>
            <div className="card">
              <h3 className="h3">Delivery rhythm</h3>
              <p>Create steady execution with clear checkpoints and load care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE */}
      <section id="evidence" className="section alt">
        <div className="container">
          <div className="grid four stats">
            <div className="stat">
              <div className="num">90%</div>
              <div className="cap">report clearer priorities</div>
            </div>
            <div className="stat">
              <div className="num">3x</div>
              <div className="cap">faster insight to action</div>
            </div>
            <div className="stat">
              <div className="num">40+</div>
              <div className="cap">behaviour signals tracked</div>
            </div>
            <div className="stat">
              <div className="num">12k+</div>
              <div className="cap">data points analysed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE VOICES */}
      <section id="voices" className="section">
        <div className="container">
          <div className="grid three">
            <div className="quote">
              <p>We cut noise, set three behaviours, and delivery moved.</p>
              <span className="by">Executive head</span>
            </div>
            <div className="quote">
              <p>Safety improved and staff spoke up earlier about risks.</p>
              <span className="by">Operations lead</span>
            </div>
            <div className="quote">
              <p>Clear role fit decisions reduced churn in one term.</p>
              <span className="by">People lead</span>
            </div>
          </div>
        </div>
      </section>

      {/* FREE SNAPSHOT CTA */}
      <section id="free-test" className="section cta">
        <div className="container">
          <div className="panel center">
            <h2 className="h2">See your starting point</h2>
            <p className="lead">A short check that shows top drivers and risks.</p>
            <div className="btnrow">
              <a className="btn" href="/test">Begin snapshot</a>
              <a className="btnghost" href="#contact">Book a call</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section alt">
        <div className="container">
          <div className="grid two">
            <div className="panel">
              <h3 className="h3">Contact</h3>
              <p>Email: <a href="mailto:hello@consultleq.com">hello@consultleq.com</a></p>
              <p>We will respond within one working day.</p>
            </div>
            <form className="form" action="/api/contact" method="post">
              <div className="row">
                <input name="name" placeholder="Your name" required />
              </div>
              <div className="row">
                <input name="email" type="email" placeholder="Your email" required />
              </div>
              <div className="row">
                <textarea name="message" rows={4} placeholder="Your message" required />
              </div>
              <div className="btnrow">
                <button className="btn" type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section footer">
        <div className="container">
          <div className="row between">
            <p>© {new Date().getFullYear()} CONSULT LEQ</p>
            <nav className="footer-nav">
              <a href="#what">What we do</a>
              <a href="#capability">Capability</a>
              <a href="#free-test">Snapshot</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}


      