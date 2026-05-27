import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const reportDownloadPath = "/India_MSME_Index_2026.pdf";
const reportFileName = "India_MSME_Index_2026.pdf";

const findings = [
  ["37%", "MSMEs showing elevated working-capital stress", "Cash-flow strain is concentrated in micro manufacturers and small service firms."],
  ["2.4x", "Higher resilience among digitally mature firms", "Digital payments, e-invoicing, and cloud accounting correlate with faster recovery cycles."],
  ["61", "National Digital Readiness Score", "India's MSME ecosystem is improving, but adoption depth remains uneven across sectors."],
  ["18%", "Firms prepared for AI-enabled workflows", "AI readiness is emerging from basic automation, not advanced model deployment."]
];

const indexStats = [
  ["MSMEs Surveyed", "50"],
  ["Avg Stress Index", "58.7"],
  ["Digital Readiness", "61"],
  ["AI Readiness", "43"]
];

const researchScope = [
  ["50", "MSMEs surveyed"],
  ["10", "Sectors"],
  ["10", "States"],
  ["FY2025-26", "Reference period"]
];

const matters = [
  ["~30%", "India GDP contribution", "MSMEs remain a core engine of domestic output and distributed enterprise activity."],
  ["~45%", "Export contribution", "The sector is deeply linked to India's trade competitiveness and supplier depth."],
  ["110M+", "Employment base", "MSME resilience has direct implications for livelihoods, regional mobility, and household income stability."],
  ["Persistent", "Financing gaps", "Credit access is still constrained by documentation, collateral, delayed payments, and formal underwriting friction."],
  ["Uneven", "Digital adoption gaps", "Basic digital use is rising, but accounting, cloud workflows, cybersecurity, and data quality lag."],
  ["Emerging", "AI readiness challenges", "AI value depends on structured records, workflow discipline, affordability, and literacy."]
];

const structuralChallenges = [
  ["CX", "Credit Exclusion", "Many smaller firms remain outside formal credit channels because operational data is fragmented and documentation readiness is weak."],
  ["DO", "Digital Operations Gap", "Digital payments have scaled faster than deeper systems such as inventory, accounting, analytics, and cybersecurity."],
  ["AI", "AI Inaccessibility", "AI tools are promising for compliance, forecasting, and support, but adoption is limited by cost, trust, data quality, and skills."]
];

const sectorComparison = [
  ["Textile", 64, 48, 31],
  ["Retail", 59, 55, 36],
  ["Handicrafts", 68, 42, 27],
  ["IT Services", 43, 78, 59],
  ["Logistics", 61, 57, 39],
  ["Pharma", 52, 66, 46]
];

const keyInsights = [
  ["62%", "moderate/high stress"],
  ["44%", "lack formal credit"],
  ["34%", "use cloud tools"],
  ["38%", "willing to pay for AI tools"]
];

const methodology = [
  "Survey simulation framework",
  "MSME operational indicators",
  "Sector analysis",
  "Digital readiness scoring",
  "AI adoption metrics"
];

const stressRows = [
  ["Liquidity pressure", 78, "High"],
  ["Credit access friction", 64, "Moderate"],
  ["Demand volatility", 59, "Moderate"],
  ["Compliance load", 46, "Watch"],
  ["Input-cost shock", 71, "High"]
];

const readiness = [
  { label: "Digital payments", value: 82, tone: "bg-signal" },
  { label: "Cloud accounting", value: 57, tone: "bg-mint" },
  { label: "ERP / inventory systems", value: 41, tone: "bg-amber" },
  { label: "Cyber hygiene", value: 35, tone: "bg-signal" },
  { label: "Data interoperability", value: 29, tone: "bg-mint" }
];

const recommendations = [
  ["MSME digitalization support", "Move beyond onboarding and fund sustained usage of accounting, inventory, cybersecurity, and data-quality systems."],
  ["Credit access modernization", "Use consent-based operating data, payment histories, and digital records to reduce formal credit exclusion."],
  ["AI literacy programs", "Create practical training for compliance copilots, forecasting, collections, customer support, and procurement intelligence."],
  ["Cloud adoption incentives", "Offer targeted incentives for affordable cloud accounting, backup, invoicing, and secure workflow tools."]
];

const dashboardViews = [
  {
    label: "National overview",
    title: "National composite index",
    score: "58.7",
    status: "Transitional readiness",
    insight: "The national picture shows moderate stress with improving digital adoption, but uneven AI preparedness across operationally smaller MSMEs.",
    alerts: ["Average stress index: 58.7", "Digital readiness: 61", "AI readiness: 43"]
  },
  {
    label: "State comparison",
    title: "State comparison matrix",
    score: "12",
    status: "Priority clusters",
    insight: "The comparison view highlights geographic variation in stress and readiness, useful for discussing state-level policy targeting in interviews or portfolio reviews.",
    alerts: ["Western cluster leads on digital payments", "Northern manufacturing shows higher input stress", "Tier-2 districts need deeper enablement"]
  },
  {
    label: "Sector risk",
    title: "Sector risk distribution",
    score: "4",
    status: "High-watch sectors",
    insight: "Sector risk is strongest where working-capital cycles are long and digital record-keeping is inconsistent, especially micro manufacturing and local services.",
    alerts: ["Manufacturing liquidity pressure", "Retail margin compression", "Services demand volatility"]
  },
  {
    label: "Credit stress",
    title: "Credit stress monitor",
    score: "67",
    status: "Elevated",
    insight: "Credit stress combines delayed receivables, loan access friction, short-term debt rollover pressure, and limited collateral visibility.",
    alerts: ["Payment-delay risk", "Credit rejection friction", "Documentation readiness gap"]
  },
  {
    label: "Digital depth",
    title: "Digital depth assessment",
    score: "61",
    status: "Developing",
    insight: "Digital readiness is broad but shallow: payment adoption is stronger than cloud accounting, cybersecurity, data interoperability, and workflow integration.",
    alerts: ["Digital payments strong", "Cloud systems partial", "Cyber hygiene needs support"]
  },
  {
    label: "AI readiness",
    title: "AI readiness lens",
    score: "43",
    status: "Early stage",
    insight: "AI readiness depends on disciplined ledgers, structured invoices, repeatable workflows, and human-reviewed use cases before advanced automation.",
    alerts: ["Data foundations required", "Compliance copilots promising", "Human review remains essential"]
  }
];

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-frost">
      <Header />
      <Hero />
      <KeyStatsStrip />
      <ResearchScope />
      <WhyThisMatters />
      <StructuralChallenges />
      <ExecutiveSummary />
      <KeyFindings />
      <KeyInsights />
      <ResearchMethodology />
      <StressAnalysis />
      <DigitalReadiness />
      <AIReadiness />
      <SectorComparison />
      <DashboardPreview />
      <Toolkit />
      <PolicyRecommendations />
      <AboutResearch />
      <DownloadReport />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/78 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 lg:flex-nowrap lg:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center border border-white/15 bg-white/5 text-xs font-semibold text-signal">IN</span>
          <span className="text-sm font-semibold tracking-wide text-white">MSME Index 2026</span>
        </a>
        <div className="order-3 flex w-full items-center gap-5 overflow-x-auto text-xs font-medium uppercase tracking-[0.16em] text-pewter lg:order-2 lg:w-auto lg:gap-7">
          <a href="#findings" className="nav-link">Findings</a>
          <a href="#stress" className="nav-link">Stress</a>
          <a href="#readiness" className="nav-link">Readiness</a>
          <a href="#sectors" className="nav-link">Sectors</a>
          <a href="#policy" className="nav-link">Policy</a>
        </div>
        <a href={reportDownloadPath} download={reportFileName} target="_blank" rel="noreferrer" className="order-2 border border-signal/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-signal transition duration-300 hover:border-signal hover:bg-signal hover:text-ink lg:order-3">
          Download
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen border-b border-white/10 pt-32 lg:pt-24">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-ink to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-5 pb-16 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="fade-up">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-signal">India MSME Observatory</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            India MSME Stress & Digital Readiness Index
          </h1>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.28em] text-amber">2026 Research Edition</p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-pewter">
            A national research portal measuring financial stress, digital maturity, and AI preparedness across India's micro, small, and medium enterprise ecosystem.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#dashboard" className="primary-button">View dashboard</a>
            <a href="#report" className="secondary-button">View report</a>
          </div>
        </div>
        <div className="relative fade-up delay-soft">
          <div className="absolute -inset-8 bg-signal/10 blur-3xl" />
          <div className="relative border border-white/12 bg-midnight/82 p-4 shadow-premium backdrop-blur transition duration-500 hover:border-signal/35">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-steel">Composite score</p>
                <p className="mt-1 text-4xl font-semibold text-white">58.7</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-steel">Risk band</p>
                <p className="mt-1 text-lg font-semibold text-amber">Transitional</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-12 gap-2">
              {Array.from({ length: 72 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-8 ${i % 9 === 0 ? "bg-amber/80" : i % 5 === 0 ? "bg-mint/70" : i % 4 === 0 ? "bg-signal/75" : "bg-white/8"}`}
                />
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Metric label="Stress" value="67" />
              <Metric label="Digital" value="61" />
              <Metric label="AI" value="43" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyStatsStrip() {
  return (
    <section id="index-statistics" className="border-b border-white/10 bg-midnight/35 px-5 py-8 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {indexStats.map(([label, value]) => (
          <article key={label} className="premium-card p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-steel">{label}</p>
            <p className="mt-4 text-4xl font-semibold text-white">{value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ResearchScope() {
  return (
    <Section id="scope" eyebrow="Research scope" title="A focused 2026 research edition built around MSME stress, digital maturity, and AI preparedness.">
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {researchScope.map(([value, label]) => (
          <article key={label} className="premium-card reveal p-6">
            <p className="text-4xl font-semibold text-white">{value}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-steel">{label}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function WhyThisMatters() {
  return (
    <Section id="why-it-matters" eyebrow="Why this research matters" title="MSME resilience is a national competitiveness issue, not only a small-business issue.">
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {matters.map(([value, label, detail]) => (
          <article key={label} className="premium-card reveal p-6">
            <p className="text-3xl font-semibold text-white">{value}</p>
            <h3 className="mt-4 text-lg font-semibold text-frost">{label}</h3>
            <p className="mt-4 text-sm leading-6 text-steel">{detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function StructuralChallenges() {
  return (
    <Section id="structural-challenges" eyebrow="Three structural challenges" title="The index frames MSME readiness through finance, operating systems, and accessible intelligence.">
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {structuralChallenges.map(([icon, title, detail]) => (
          <article key={title} className="premium-card reveal p-6">
            <span className="grid size-12 place-items-center border border-signal/35 bg-signal/10 text-sm font-semibold text-signal">{icon}</span>
            <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-4 leading-7 text-pewter">{detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Metric({ label, value }) {
  return (
    <div className="border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-steel">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
    </div>
  );
}

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`reveal scroll-mt-28 border-b border-white/10 px-5 py-20 lg:scroll-mt-24 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-signal">{eyebrow}</p>
        <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function ExecutiveSummary() {
  return (
    <Section id="report" eyebrow="Executive summary" title="A sharper view of enterprise fragility and the next frontier of productive digitisation.">
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <p className="text-xl leading-9 text-pewter">
          The 2026 Index frames MSME resilience as an interaction between liquidity stress, market volatility, digital operating depth, and emerging AI capability. The evidence points to a two-speed economy: digitally mature firms are compounding advantages, while firms with thin working capital and low data maturity face widening productivity gaps.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Financial stress remains the primary constraint on transformation.", "Digital adoption is broadening, but operational integration is shallow.", "AI readiness is strongest where data discipline already exists.", "Policy needs localised risk intelligence, not only national schemes."].map((item) => (
            <div key={item} className="premium-card p-5">
              <p className="text-sm leading-6 text-frost">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function KeyFindings() {
  return (
    <Section id="findings" eyebrow="Key findings" title="Four signals defining the MSME competitiveness agenda.">
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {findings.map(([value, label, detail]) => (
          <article key={label} className="premium-card bg-midnight/65 p-6">
            <p className="text-5xl font-semibold text-white">{value}</p>
            <h3 className="mt-5 text-lg font-semibold text-frost">{label}</h3>
            <p className="mt-4 text-sm leading-6 text-steel">{detail}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function KeyInsights() {
  return (
    <Section id="insights" eyebrow="Key insights" title="The simulated survey points to material stress and a clear appetite for practical digital support.">
      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {keyInsights.map(([value, label]) => (
          <article key={label} className="premium-card reveal p-6">
            <p className="text-5xl font-semibold text-white">{value}</p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-steel">{label}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ResearchMethodology() {
  return (
    <Section id="methodology" eyebrow="Research methodology" title="A minimal scoring architecture for comparing stress, digital capability, and AI preparedness.">
      <div className="mt-10 grid gap-3 md:grid-cols-5">
        {methodology.map((item, index) => (
          <article key={item} className="premium-card p-5">
            <p className="text-sm font-semibold text-signal">0{index + 1}</p>
            <p className="mt-4 text-sm leading-6 text-frost">{item}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function StressAnalysis() {
  return (
    <Section id="stress" eyebrow="MSME stress analysis" title="Stress is most acute where delayed payments, credit constraints, and input volatility overlap.">
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="premium-card p-6">
          {stressRows.map(([label, value, band]) => (
            <div key={label} className="border-b border-white/10 py-5 last:border-0">
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="font-medium text-frost">{label}</span>
                <span className="text-sm uppercase tracking-[0.16em] text-steel">{band}</span>
              </div>
              <div className="h-2 bg-white/8">
                <div className="h-full bg-gradient-to-r from-signal via-mint to-amber" style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="content-panel">
          <p className="text-sm uppercase tracking-[0.2em] text-steel">Interpretation</p>
          <p className="mt-5 text-2xl leading-9 text-white">
            The highest-risk clusters are not merely under-digitised; they are under-capitalised at the exact point where digital investment would yield resilience gains.
          </p>
          <p className="mt-6 leading-7 text-pewter">
            The stress model weights payment delays, short-term debt rollover, credit rejection, demand dispersion, compliance cost, and input-price shock exposure.
          </p>
        </div>
      </div>
    </Section>
  );
}

function DigitalReadiness() {
  return (
    <Section id="readiness" eyebrow="Digital readiness analysis" title="The digital divide is shifting from access to depth, integration, and trust.">
      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          {readiness.map((item) => (
            <div key={item.label} className="mb-5">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-frost">{item.label}</span>
                <span className="text-steel">{item.value}/100</span>
              </div>
              <div className="h-3 bg-white/8">
                <div className={`h-full ${item.tone}`} style={{ width: `${item.value}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="content-panel lg:col-span-2">
          <h3 className="text-2xl font-semibold text-white">Readiness pillars</h3>
          <p className="mt-5 leading-7 text-pewter">
            Digital maturity is assessed through transaction rails, internal systems, analytics capability, cybersecurity practices, and the ability to exchange trusted data with lenders, buyers, and public platforms.
          </p>
        </div>
      </div>
    </Section>
  );
}

function AIReadiness() {
  return (
    <Section id="ai" eyebrow="AI readiness analysis" title="AI adoption will be won through workflow augmentation, not abstract experimentation.">
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          ["Data foundations", "Structured invoices, clean ledgers, product catalogues, and customer histories are the gating assets."],
          ["Use-case maturity", "Near-term value is strongest in collections, compliance, inventory planning, credit documentation, and customer support."],
          ["Institutional safeguards", "Responsible AI requires consent layers, audit trails, sector benchmarks, and human review for financial decisions."]
        ].map(([title, text]) => (
          <article key={title} className="premium-card bg-navy/45 p-6">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-4 leading-7 text-pewter">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function SectorComparison() {
  return (
    <Section id="sectors" eyebrow="Sector comparison" title="Stress and readiness vary sharply by sector, reinforcing the need for targeted intervention.">
      <div className="mt-10 overflow-x-auto border border-white/10 bg-white/[0.035]">
        <div className="grid min-w-[680px] grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr] border-b border-white/10 bg-white/[0.04] px-4 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-steel">
          <span>Sector</span>
          <span>Avg Stress</span>
          <span>Digital</span>
          <span>AI</span>
        </div>
        {sectorComparison.map(([sector, stress, digital, ai]) => (
          <div key={sector} className="sector-row grid grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr] gap-3 border-b border-white/10 px-4 py-5 last:border-0">
            <span className="font-semibold text-white">{sector}</span>
            <ScoreCell value={stress} tone="bg-amber" />
            <ScoreCell value={digital} tone="bg-signal" />
            <ScoreCell value={ai} tone="bg-mint" />
          </div>
        ))}
      </div>
    </Section>
  );
}

function ScoreCell({ value, tone }) {
  return (
    <div>
      <div className="mb-2 text-sm font-semibold text-frost">{value}</div>
      <div className="h-1.5 bg-white/10">
        <div className={`h-full ${tone}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function DashboardPreview() {
  const [activeView, setActiveView] = useState(dashboardViews[0]);

  return (
    <Section id="dashboard" eyebrow="Dashboard preview" title="A decision cockpit for ministries, lenders, industry bodies, and district administrators.">
      <div className="mt-10 border border-white/12 bg-midnight/75 p-4 shadow-premium transition duration-500 hover:border-signal/30">
        <div className="grid gap-4 xl:grid-cols-[260px_1fr]">
          <aside className="grid gap-2 border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-2 xl:flex xl:flex-col">
            {dashboardViews.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveView(item)}
                className={`dashboard-tab ${activeView.label === item.label ? "dashboard-tab-active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </aside>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2 border border-white/10 bg-white/[0.035] p-5">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{activeView.title}</h3>
                <span className="text-xs uppercase tracking-[0.18em] text-steel">Q1 2026</span>
              </div>
              <div className="mb-6 grid gap-3 sm:grid-cols-3">
                <Metric label="Score" value={activeView.score} />
                <div className="border border-white/10 bg-white/[0.04] p-4 sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.18em] text-steel">Status</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{activeView.status}</p>
                </div>
              </div>
              <div className="grid grid-cols-10 gap-2" aria-label={`${activeView.label} analytical heatmap`}>
                {Array.from({ length: 80 }).map((_, i) => (
                  <span key={i} className={`aspect-square ${heatmapClass(i, activeView.label)}`} />
                ))}
              </div>
              <p className="mt-6 max-w-3xl text-sm leading-6 text-pewter">{activeView.insight}</p>
            </div>
            <div className="border border-white/10 bg-white/[0.035] p-5">
              <h3 className="text-lg font-semibold text-white">Analytical notes</h3>
              {activeView.alerts.map((alert) => (
                <p key={alert} className="mt-5 border-l-2 border-amber pl-4 text-sm leading-6 text-pewter">{alert}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function heatmapClass(index, label) {
  const seed = label.length;
  if ((index + seed) % 7 === 0) return "bg-amber";
  if ((index + seed) % 5 === 0) return "bg-mint";
  if ((index + seed) % 3 === 0) return "bg-signal";
  return "bg-white/10";
}

function Toolkit() {
  return (
    <Section id="toolkit" eyebrow="MSME Saathi AI toolkit" title="An AI companion layer for diagnosis, preparedness, and policy navigation.">
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {["Stress score explainer", "Credit document assistant", "Digital maturity planner", "Scheme eligibility navigator"].map((tool) => (
          <div key={tool} className="premium-card p-6">
            <p className="text-lg font-semibold text-white">{tool}</p>
            <p className="mt-4 text-sm leading-6 text-steel">Designed for multilingual guidance, consent-based data use, and actionable next steps for enterprise owners.</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function PolicyRecommendations() {
  return (
    <Section id="policy" eyebrow="Policy recommendations" title="From scheme delivery to intelligence-led MSME resilience.">
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {recommendations.map(([title, detail], index) => (
          <article key={title} className="premium-card reveal flex gap-5 bg-navy/35 p-6">
            <span className="text-2xl font-semibold text-signal">0{index + 1}</span>
            <div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-pewter">{detail}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function AboutResearch() {
  return (
    <Section id="about" eyebrow="About the research" title="Independent MSME analytics shaped by business context and operational observation.">
      <p className="mt-8 max-w-4xl text-xl leading-9 text-pewter">
        Developed independently by a business and analytics-oriented undergraduate researcher with operational exposure to MSME business environments during the COVID disruption period.
      </p>
    </Section>
  );
}

function DownloadReport() {
  return (
    <section id="download" className="scroll-mt-28 px-5 py-20 lg:scroll-mt-24 lg:px-8">
      <div className="mx-auto max-w-7xl border border-white/12 bg-frost p-8 text-ink shadow-premium md:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy">Download report</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">Access the full India MSME Stress & Digital Readiness Index 2026 briefing.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-slate-600">Includes methodology, state rankings, sector profiles, risk bands, AI readiness benchmarks, and policy implementation notes.</p>
          </div>
          <a href={reportDownloadPath} download={reportFileName} target="_blank" rel="noreferrer" className="download-button">Download Research File</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-steel md:flex-row md:items-center md:justify-between">
        <span>Independent Research Initiative</span>
        <span>Business Analytics & Strategic Intelligence</span>
        <span>India MSME Observatory</span>
      </div>
    </footer>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
