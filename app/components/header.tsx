"use client";

export default function Header() {
  return (
    <header className="header">
      <div className="headerInner">
        {/* Logo */}
        <a href="/" className="logo">
          <img src="/leq-logo.png" alt="The Leadership Equation" className="logoImg" />
          <span className="logoText">THE LEADERSHIP EQUATION</span>
        </a>

        {/* Outcome-focused nav */}
        <nav className="nav">
          <a href="#why" className="navLink">Why LEQ</a>
          <a href="#how" className="navLink">How it works</a>
          <a href="#what" className="navLink">What we do</a>
          <a href="#insights" className="navLink">Insights</a>
          <a href="#contact" className="navLink">Contact</a>
        </nav>

        {/* CTAs */}
        <div className="ctaGroup">
          <a href="#discover" className="btnTeal">Discover your leadership formula</a>
          <a href="#contact" className="btnGoldOutline">Talk to an expert</a>
        </div>
      </div>
    </header>
  );
}
