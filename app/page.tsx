"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{
      fontFamily: "sans-serif",
      backgroundColor: "#0f172a",
      color: "white",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      
      {/* HERO SECTION */}
      <section style={{
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1F2937 0%, #0f172a 100%)",
      }}>
        <div style={{maxWidth: "700px", padding: "1rem"}}>
          <h1 style={{fontSize: "2.8rem", fontWeight: 700, color: "#FACC15", marginBottom: "1rem"}}>
            Behavioural Intelligence for Leadership and Culture
          </h1>
          <p style={{fontSize: "1.2rem", color: "#E5E7EB", marginBottom: "2rem"}}>
            Every organisation has its own Leadership Equation™ — discover yours.
          </p>
          <div style={{display: "flex", justifyContent: "center", gap: "1rem"}}>
            <button style={{
              backgroundColor: "#00BFA6",
              border: "none",
              padding: "0.9rem 1.5rem",
              fontWeight: 600,
              borderRadius: "10px",
              cursor: "pointer",
              color: "#0f172a"
            }}>
              Take the Free Test
            </button>
            <button style={{
              backgroundColor: "transparent",
              border: "2px solid #FACC15",
              padding: "0.9rem 1.5rem",
              fontWeight: 600,
              borderRadius: "10px",
              color: "#FACC15",
              cursor: "pointer"
            }}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* INSIGHT FOCUS */}
      <section style={{padding: "4rem 2rem", backgroundColor: "#111827"}}>
        <h2 style={{textAlign: "center", fontSize: "2rem", color: "#FACC15", marginBottom: "1.5rem"}}>
          Insight Focus Areas
        </h2>
        <p style={{textAlign: "center", maxWidth: "800px", margin: "0 auto", color: "#E5E7EB"}}>
          Every insight we capture — from leadership behaviour to cultural engagement — feeds into a single view of performance: your organisation’s Leadership Equation™.
        </p>
      </section>

      {/* DISCOVER EQUATION */}
      <section style={{padding: "4rem 2rem", backgroundColor: "#0f172a"}}>
        <h2 style={{textAlign: "center", fontSize: "2rem", color: "#00BFA6", marginBottom: "1rem"}}>
          Discover Your Organisation’s Leadership Equation™
        </h2>
        <p style={{textAlign: "center", maxWidth: "700px", margin: "0 auto", color: "#E5E7EB"}}>
          Every organisation operates through its own Leadership Equation — the balance of Clarity, Behaviour, and Culture that drives success.
        </p>
        <div style={{textAlign: "center", marginTop: "2rem", fontSize: "1.3rem", color: "#FACC15"}}>
          Clarity × Behaviour + Culture² = Performance Potential
        </div>
        <p style={{textAlign: "center", marginTop: "1.5rem", color: "#E5E7EB"}}>
          The LEQ Index™ shows how balanced your leadership ecosystem is.  
          High clarity, consistent behaviour, and a strong culture combine to multiply performance.  
          Different sectors have different equations — the goal is balance, not uniformity.
        </p>
      </section>

      {/* EVIDENCE SECTION */}
      <section style={{padding: "4rem 2rem", backgroundColor: "#111827"}}>
        <h2 style={{textAlign: "center", fontSize: "2rem", color: "#FACC15", marginBottom: "2rem"}}>
          The Numbers Behind Behavioural Intelligence
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto"
        }}>
          <div style={{backgroundColor: "#1F2937", borderRadius: "12px", padding: "1.5rem", border: "1px solid #FACC15"}}>
            <h3 style={{fontSize: "2rem", color: "#FACC15"}}>77%</h3>
            <p>of organisations face leadership skills gaps.</p>
          </div>
          <div style={{backgroundColor: "#1F2937", borderRadius: "12px", padding: "1.5rem", border: "1px solid #00BFA6"}}>
            <h3 style={{fontSize: "2rem", color: "#00BFA6"}}>21%</h3>
            <p>of employees are fully engaged globally.</p>
          </div>
          <div style={{backgroundColor: "#1F2937", borderRadius: "12px", padding: "1.5rem", border: "1px solid #FACC15"}}>
            <h3 style={{fontSize: "2rem", color: "#FACC15"}}>50%+</h3>
            <p>report burnout or psychological fatigue.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section style={{padding: "4rem 2rem", backgroundColor: "#0f172a"}}>
        <h2 style={{textAlign: "center", fontSize: "2rem", color: "#00BFA6", marginBottom: "2rem"}}>
          Behavioural Intelligence That Works in the Real World
        </h2>
        <ul style={{maxWidth: "700px", margin: "0 auto", lineHeight: "2rem", color: "#E5E7EB"}}>
          <li>Behaviour-first, not skills-first.</li>
          <li>Culture and leadership integrated into one system.</li>
          <li>Grounded in science, refined through practice.</li>
          <li>Designed for measurable, lasting change.</li>
          <li>One ecosystem for growth — not a one-off programme.</li>
        </ul>
      </section>

      {/* CONTACT SECTION */}
      <section style={{padding: "4rem 2rem", backgroundColor: "#111827"}}>
        <h2 style={{textAlign: "center", fontSize: "2rem", color: "#FACC15"}}>Get in Touch</h2>
        <p style={{textAlign: "center", color: "#E5E7EB", marginBottom: "1rem"}}>
          If leadership is a lever, which lever do you need to pull first?
        </p>
        <p style={{textAlign: "center", color: "#FACC15", fontWeight: 600, marginBottom: "2rem"}}>
          Let’s put your Leadership Equation™ into motion.
        </p>
        
        <form
          className="contactForm"
          action="https://formspree.io/f/mgvndawg"
          method="POST"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}
        >
          <input type="hidden" name="_subject" value="Consult LEQ — New enquiry" />
          <input type="hidden" name="_next" value="/thank-you" />
          <input type="text" name="_gotcha" style={{display:"none"}} tabIndex={-1} autoComplete="off" />

          <input type="text" name="name" placeholder="Your Name" required style={{padding:"0.8rem", borderRadius:"8px", border:"none"}} />
          <input type="email" name="email" placeholder="Your Email" required style={{padding:"0.8rem", borderRadius:"8px", border:"none"}} />
          <textarea name="message" placeholder="Your Message" required style={{padding:"0.8rem", borderRadius:"8px", border:"none"}} />
          <button type="submit" style={{
            backgroundColor: "#00BFA6",
            border: "none",
            padding: "0.9rem",
            fontWeight: 600,
            borderRadius: "8px",
            cursor: "pointer",
            color: "#0f172a"
          }}>
            Send Message
          </button>
        </form>
      </section>

      {/* FINAL CTA */}
      <section style={{padding:"2rem", backgroundColor:"#0f172a", textAlign:"center"}}>
        <p style={{fontSize:"1.2rem", color:"#FACC15", marginBottom:"1rem"}}>
          Discover your organisation’s Leadership Equation™ and turn data into impact.
        </p>
        <div style={{display:"flex", justifyContent:"center", gap:"1rem"}}>
          <button style={{backgroundColor:"#00BFA6", color:"#0f172a", border:"none", padding:"0.8rem 1.4rem", borderRadius:"8px", fontWeight:600, cursor:"pointer"}}>
            Book a Consult
          </button>
          <button style={{backgroundColor:"transparent", color:"#FACC15", border:"2px solid #FACC15", padding:"0.8rem 1.4rem", borderRadius:"8px", fontWeight:600, cursor:"pointer"}}>
            Free Leadership Test
          </button>
        </div>
      </section>
    </main>
  );
}
