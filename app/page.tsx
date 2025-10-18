/* ====== GLOBAL RESET ====== */
/* ---------- DESIGN TOKENS ---------- */
:root{
  --charcoal:#0E1116;        /* page background */
  --charcoal-2:#141922;      /* section alt */
  --panel:#0F172A;           /* panel card bg */
  --panel-2:#0B1220;         /* panel alt */
  --border:#1F2A44;
  --teal:#0EA5A6;
  --teal-2:#0A7E80;
  --yellow:#FACC15;
  --ink:#E5E7EB;             /* body text */
  --ink-dim:#B6C2D1;
  --white:#FFFFFF;
  --max:1100px;
}

/* ---------- BASE ---------- */
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;
  color:var(--ink);
  background:var(--charcoal);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
a{color:inherit;text-decoration:none}

/* ---------- LAYOUT ---------- */
.section{padding:72px 20px}
.section.alt{background:var(--charcoal-2)}
.container{max-width:var(--max);margin:0 auto}

/* subtle section divider */
.section{border-top:1px solid rgba(255,255,255,.06)}
.section:first-of-type{border-top:0}

/* ---------- HERO ---------- */
.hero{
  position:relative;
  min-height:72vh;
  display:grid;
  place-items:center;
  text-align:center;
  color:var(--white);
  background:
    radial-gradient(1000px 600px at 50% -10%, rgba(14,165,166,.25), transparent 60%),
    radial-gradient(800px 500px at 120% 20%, rgba(250,204,21,.15), transparent 55%),
    radial-gradient(900px 520px at -20% 30%, rgba(14,165,166,.18), transparent 60%),
    linear-gradient(180deg, #0E2937 0%, #0B172A 100%);
  overflow:hidden;
}
/* cube watermark */
.hero::after{
  content:"";
  position:absolute; inset:auto -140px -140px -140px; top:10%;
  background:url("/cube.png") center/560px no-repeat;
  opacity:.12; filter:grayscale(20%);
  pointer-events:none;
}

/* ---------- TYPOGRAPHY ---------- */
.h1{font-size:clamp(2rem,4vw,3rem);line-height:1.1;font-weight:800;color:var(--white);margin:0 0 12px}
.h2{font-size:clamp(1.6rem,3vw,2rem);line-height:1.2;font-weight:700;color:var(--teal);margin:0 0 20px}
.lead{color:var(--ink);opacity:.9;font-size:1.05rem;max-width:720px;margin:0 auto 24px}

/* ---------- PANELS / CARDS ---------- */
.panel{
  background:linear-gradient(180deg,var(--panel),var(--panel-2));
  border:1px solid var(--border);
  border-radius:16px;
  padding:24px;
  box-shadow:0 10px 30px rgba(0,0,0,.25);
}

/* metric cards */
.cards{
  display:grid;gap:18px;
  grid-template-columns:repeat(3,minmax(0,1fr));
}
.card{
  background:linear-gradient(180deg,#0c1a2e,#0a1424);
  border:1px solid var(--border);
  border-radius:14px;padding:22px;text-align:center;
}
.card strong{font-size:2rem;color:var(--white);display:block;margin-bottom:6px}
.card span{color:var(--ink-dim);font-size:.95rem}

/* ---------- BUTTONS ---------- */
.btnrow{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
.btn{
  background:linear-gradient(180deg,var(--teal),var(--teal-2));
  color:#001316;border:1px solid rgba(255,255,255,.18);
  padding:12px 18px;border-radius:10px;font-weight:700;
  box-shadow:0 6px 18px rgba(14,165,166,.35); transition:transform .06s ease, filter .2s ease;
}
.btn:hover{transform:translateY(-1px);filter:brightness(1.08)}
.btnghost{
  background:transparent;color:var(--yellow);
  border:1px solid rgba(250,204,21,.55);padding:12px 18px;border-radius:10px;font-weight:700;
}

/* ---------- GRID HELPERS ---------- */
.grid{display:grid;gap:18px}
.grid.two{grid-template-columns:repeat(2,minmax(0,1fr))}
.grid.three{grid-template-columns:repeat(3,minmax(0,1fr))}

/* ---------- FORM ---------- */
form.grid{max-width:720px;margin:0 auto}
label{display:block;margin-bottom:6px;color:var(--ink-dim);font-size:.9rem}
input,textarea,select{
  width:100%;background:#0b1323;color:var(--ink);
  border:1px solid var(--border);border-radius:10px;
  padding:12px 14px;outline:none;
}
textarea{min-height:140px;resize:vertical}

/* ---------- FOOTER ---------- */
.footer{padding:36px 20px;border-top:1px solid rgba(255,255,255,.06);text-align:center;color:var(--ink-dim)}
.footer a{color:var(--ink)}

/* ---------- RESPONSIVE ---------- */
@media (max-width:900px){
  .cards{grid-template-columns:1fr}
  .grid.two,.grid.three{grid-template-columns:1fr}
}



      