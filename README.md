<div align="center">

# 💸 Grant Match Mapper

### A grant-fit workspace that maps opportunities to a small organization’s facts, constraints, and readiness.

![Volta OSS](https://img.shields.io/badge/Volta%20OSS-release%20ready-16a34a?style=for-the-badge)
![Mission](https://img.shields.io/badge/Mission-digital%20equity-16a34a?style=for-the-badge)
![Runtime](https://img.shields.io/badge/Runtime-local%20first-86efac?style=for-the-badge)
![Tests](https://img.shields.io/badge/Tests-29%20passing-111827?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-f59e0b?style=for-the-badge)

**Finance & Grants** · **Optional backend. No login. Client data stays local. Standalone SaaS-ready.**

[Live app](https://volta-npo.github.io/11-grant-match-mapper/) · [Report an issue](https://github.com/volta-npo/11-grant-match-mapper/issues) · [Volta](https://voltanpo.org)

</div>

---

## ✨ What it does

**Grant Match Mapper** is a polished, local-first open-source tool from Volta's open-source program. It helps Finance students researching funding for nonprofits and small businesses turn real community work into structured evidence, client-safe handoffs, and mentor-reviewable release packets.

> **Volta principle:** digital equity is economic equity. Every tool in this collection is designed so students can ship useful, accountable technology for small businesses, nonprofits, and community organizations that are usually priced out of high-quality digital transformation.

### The gap it closes

Grant databases are overwhelming and grant tools skew enterprise. Teams need fit reasoning, not endless search results.

### The niche

First grant research pass for under-resourced organizations.

### North-star metric

`qualified grants shortlisted per client`

---

## 🧭 Product map

```mermaid
flowchart TD
    Need["Community or client need"] --> Intake["Volta discovery intake"]
    Intake --> Evidence["Evidence capture"]
    Evidence --> Workbench["Grant Match Mapper"]
    Workbench --> Score["Funding readiness"]
    Score --> Cert["release certification"]
    Cert --> A1["Grant shortlist CSV"]
    Cert --> A2["Funder-ready match brief"]
    Cert --> A3["Missing-info request"]
    Cert --> Student["Student portfolio proof"]
    Cert --> Sponsor["Sponsor-ready impact proof"]

    classDef volta fill:#111827,stroke:#60a5fa,color:#ffffff,stroke-width:2px;
    classDef equity fill:#ecfdf5,stroke:#16a34a,color:#052e16,stroke-width:2px;
    classDef proof fill:#fff7ed,stroke:#f97316,color:#431407,stroke-width:2px;
    class Workbench,Cert volta;
    class Need,Intake,Evidence equity;
    class Student,Sponsor proof;
```

```mermaid
flowchart LR
    subgraph Modules["First-class modules"]
        M1["Eligibility profile"]
        M2["Opportunity evidence cards"]
        M3["Fit scoring rubric"]
        M4["Next-action tracker"]
    end
    M1 --> Workbench
    M2 --> Workbench
    M3 --> Workbench
    M4 --> Workbench
    Workbench["Local-first workbench"] --> Exports["JSON · CSV · Markdown · Print"]
    Exports --> Review["Owner + mentor review"]
    Review --> Launch["Client handoff"]

    classDef module fill:#eff6ff,stroke:#2563eb,color:#172554;
    classDef app fill:#f8fafc,stroke:#0f172a,color:#0f172a,stroke-width:2px;
    classDef launch fill:#f0fdf4,stroke:#22c55e,color:#052e16,stroke-width:2px;
    class M1,M2,M3,M4 module;
    class Workbench,Exports,Review app;
    class Launch launch;
```

```mermaid
sequenceDiagram
    participant S as Student pod
    participant T as Grant Match Mapper
    participant M as Mentor
    participant C as Client
    S->>T: Collect verified facts
    S->>T: Map requirements to evidence
    T->>M: Export review packet
    M->>S: QA notes and approval
    S->>C: Client-safe handoff
    C->>S: Outcome feedback
```

---

## 🟦 TypeScript-first

This repository is authored in **TypeScript**. The checked-in JavaScript files are compiled artifacts so the project can run directly on GitHub Pages without a build server.

- Source: `src/**/*.ts` and `test/**/*.ts`
- Build: `npm run build`
- Runtime artifacts: `src/**/*.js` for static hosting

---

## 🚀 Features

| Area | What ships in this release |
|---|---|
| **Domain workbench** | A purpose-built grant mapper interface for a grant-fit workspace that maps opportunities to a small organization’s facts, constraints, and readiness. |
| **Local-first runtime** | Runs as a static web app with local autosave and no server dependency. |
| **Certification flow** | Release gates require status, owner, severity, and evidence before production handoff. |
| **Exports** | JSON release bundle, CSV operational table, Markdown certification report, print-ready handoff. |
| **Integrity** | Deterministic certification hash detects changed evidence. |
| **Safety** | Privacy notes, secret-safe markdown checks, wrong-product import rejection, client-safe defaults. |
| **Accessibility** | Skip links, keyboard-friendly controls, ARIA meter/list semantics, high-contrast focus support. |

---

## 🧩 Modules

| # | Module | Why it matters |
|---:|---|---|
| 1 | **Eligibility profile** | Converts field work into repeatable, reviewable Volta delivery evidence. |
| 2 | **Opportunity evidence cards** | Converts field work into repeatable, reviewable Volta delivery evidence. |
| 3 | **Fit scoring rubric** | Converts field work into repeatable, reviewable Volta delivery evidence. |
| 4 | **Next-action tracker** | Converts field work into repeatable, reviewable Volta delivery evidence. |

---

## ✅ Production acceptance

| Gate | Acceptance signal |
|---:|---|
| 1 | sensitive data warning shown |
| 2 | evidence-backed claims only |
| 3 | calculations are deterministic |
| 4 | funder-ready export generated |

<details>
<summary><strong>Full release quality gates</strong></summary>

- All exports work offline
- Privacy and data handling documented
- No blocked critical gates
- Every certified claim has evidence
- Import rejects wrong product bundles
- Release hash is deterministic
- Client-safe markdown contains no secrets
- CSV contains every operational row
- Deadline must be future
- Eligible claims need evidence
- Blocked grants cannot be recommended

</details>

---

## 🧠 Backend engine

This project now includes a backend-grade engine because the workflow benefits from server-side validation, batch processing, or future API use.

| Runtime | Path | Purpose | Test command |
|---|---|---|---|
| Python | `backend/python` | Evidence scoring, release packet generation, CLI/batch processing. | `npm run test:python` |

---

## 💼 Standalone SaaS command center

This release adds a SaaS-grade operating layer so **Grant Match Mapper** can stand alone as more than a checklist. It models:

- customer segments and jobs-to-be-done,
- plan packaging and pricing tiers,
- account/workspace cockpit fields,
- operating KPIs with targets,
- playbooks, automations, and integrations,
- governance controls with evidence,
- a phased roadmap for paid pilots and scale.

Exports include an executive SaaS brief and an operations CSV for pilots, chapters, sponsors, and implementation teams.

---

## 🏗️ Production infrastructure

This repo is designed to be usable as a real OSS product, not just a static demo.

| Layer | Included |
|---|---|
| Reproducible build | `package-lock.json`, `npm ci`, TypeScript build artifacts |
| Local runtime | Static app via `npm start` |
| Container runtime | `Dockerfile`, `docker-compose.yml`, hardened Nginx config |
| Developer environment | `.devcontainer/devcontainer.json` |
| Operations | `Makefile`, Docker Compose, deployment docs, API docs |
| CI/CD | GitHub Actions CI, release artifact workflow, Dependabot |
| Backend | Python HTTP evidence API |

---

## 🛠️ Quick start

```bash
git clone https://github.com/volta-npo/11-grant-match-mapper.git
cd 11-grant-match-mapper
npm install
npm test
npm run test:backend
npm start
```

Then open the local URL shown by Python, usually:

```text
http://localhost:4173
```

No install step is required for the app itself. Tests use Node's built-in test runner.

---

## 🧪 Validation

This repository includes **29 automated tests** covering core scoring, domain behavior, v1 release behavior, and release certification.

```bash
npm test
```

Test coverage includes:

- configuration weights and launch readiness
- product-specific domain sample data
- artifact generation and markdown exports
- v1 launch packet behavior
- release import/export round trips
- wrong-product import rejection
- deterministic integrity hashes
- blocked/critical gate prevention
- markdown safety checks
- SaaS packaging, metrics, governance, and roadmap readiness

---

## 📦 Repository layout

```text
.
├── index.html              # Static app shell
├── styles.css              # Responsive Volta UI system
├── src/
│   ├── config.js           # Product mission, rubric, and sample data
│   ├── domain.js           # Domain-specific workbench definition
│   ├── domain-core.js      # Domain calculations and artifacts
│   ├── v1*.js              # v1 release layer
│   ├── v3*.js              # release certification layer
│   └── saas*.js            # standalone SaaS command center
├── test/                   # 25 automated tests
├── docs/                   # Operations, QA, release checklist
└── examples/               # Release bundle template
```

---

## 🌍 Why Volta is open-sourcing this

Volta works with students, nonprofits, and small businesses to make practical digital transformation accessible. These repositories are intentionally:

- **small enough to understand** in a student pod
- **useful enough to run** in a real community engagement
- **safe enough to hand off** to a nontechnical owner
- **structured enough to review** by mentors and sponsors
- **open enough to fork** for any chapter or community group

---

## 🤝 Contributing

Contributions are welcome if they improve real-world usefulness for under-resourced organizations. The best issues include:

1. a real user or chapter scenario,
2. before/after evidence,
3. privacy and accessibility considerations,
4. a test or release-checklist update.

Read [CONTRIBUTING.md](./CONTRIBUTING.md), [SECURITY.md](./SECURITY.md), and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) before opening a PR.

---

## 📄 License

MIT License. Built by Volta for public benefit.

<div align="center">

**Designed in Jacksonville. Coded globally. Built for digital equity.**

</div>
