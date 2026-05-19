export const saas = {
  "productName": "Grant Match Mapper",
  "category": "Finance & Grants",
  "northStar": "qualified grant opportunities shortlisted per organization",
  "segments": [
    "Small nonprofits",
    "Finance student pods",
    "Grant-readiness consultants",
    "Community foundations"
  ],
  "jobs": [
    "Convert messy opportunities into comparable fit cards",
    "Map eligibility requirements to verified organization facts",
    "Prioritize grants by fit, deadline, burden, and funding range",
    "Create next-action packets for nonprofit staff"
  ],
  "plans": [
    {
      "name": "Community",
      "price": "Free",
      "promise": "Single-client opportunity shortlist"
    },
    {
      "name": "Grant Scout",
      "price": "59/mo",
      "promise": "Opportunity library, fit scoring, action tracker"
    },
    {
      "name": "Chapter",
      "price": "229/mo",
      "promise": "Team queues, shared evidence, reviewer approvals"
    },
    {
      "name": "Foundation",
      "price": "Custom",
      "promise": "Portfolio-level matching and grantee readiness analytics"
    }
  ],
  "metrics": [
    {
      "label": "Qualified grants shortlisted",
      "current": 7,
      "target": 10,
      "note": "Opportunities passing fit threshold"
    },
    {
      "label": "Eligibility confidence",
      "current": 82,
      "target": 90,
      "note": "Requirements backed by evidence"
    },
    {
      "label": "Deadline readiness",
      "current": 76,
      "target": 85,
      "note": "Applications with feasible timeline"
    },
    {
      "label": "Missing info resolved",
      "current": 64,
      "target": 90,
      "note": "Client facts collected before writing"
    }
  ],
  "playbooks": [
    "Organization eligibility intake",
    "Opportunity evidence carding",
    "Fit scoring calibration",
    "Missing-info request cycle",
    "Shortlist handoff"
  ],
  "integrations": [
    "Grants.gov/Foundation Directory CSV import",
    "Google Drive evidence links",
    "Airtable opportunity library",
    "Calendar deadline sync",
    "Email request templates"
  ],
  "controls": [
    "Blocked opportunities cannot be recommended",
    "Eligibility claims need source evidence",
    "Funding ranges and deadlines require verification date",
    "Confidential financial notes are labeled in exports"
  ],
  "roadmap": [
    "Grant feed adapters",
    "Eligibility rule engine",
    "Opportunity deduplication",
    "Readiness heatmap by funder",
    "AI-assisted but evidence-locked brief drafts"
  ]
};
