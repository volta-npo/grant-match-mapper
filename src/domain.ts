export const domain = {
  "kind": "grant-mapper",
  "title": "Grant Match Mapper",
  "purpose": "A purpose-built grant mapper interface for a grant-fit workspace that maps opportunities to a small organization\u2019s facts, constraints, and readiness.",
  "inputTitle": "Product-specific inputs",
  "previewTitle": "Generated working outputs",
  "tableTitle": "Grant opportunities",
  "metricLabels": [
    "Grant Fit",
    "Evidence Confidence",
    "Deadline Readiness"
  ],
  "fields": [
    {
      "id": "organization-client",
      "label": "Organization / client",
      "type": "text",
      "sample": "Eastside Youth Arts Collective",
      "placeholder": "Enter organization / client"
    },
    {
      "id": "primary-goal",
      "label": "Primary goal",
      "type": "text",
      "sample": "qualified grants shortlisted per client",
      "placeholder": "Enter primary goal"
    },
    {
      "id": "owner-reviewer",
      "label": "Owner / reviewer",
      "type": "text",
      "sample": "Volta project lead",
      "placeholder": "Enter owner / reviewer"
    },
    {
      "id": "evidence-source",
      "label": "Evidence source",
      "type": "text",
      "sample": "Owner interview + public audit",
      "placeholder": "Enter evidence source"
    },
    {
      "id": "input-asset",
      "label": "Input asset",
      "type": "text",
      "sample": "Organization profile complete",
      "placeholder": "Enter input asset"
    },
    {
      "id": "output-format",
      "label": "Output format",
      "type": "text",
      "sample": "Grant shortlist CSV",
      "placeholder": "Enter output format"
    },
    {
      "id": "review-threshold",
      "label": "Review threshold",
      "type": "number",
      "sample": 85,
      "placeholder": "Enter review threshold"
    },
    {
      "id": "approved-channel",
      "label": "Approved channel",
      "type": "text",
      "sample": "Owner handoff packet",
      "placeholder": "Enter approved channel"
    }
  ],
  "rows": [
    "Organization profile complete",
    "Eligibility requirements mapped",
    "Mission fit scored",
    "Funding range checked",
    "Deadline readiness checked",
    "Required docs mapped",
    "Evidence links attached",
    "Recommended shortlist generated"
  ],
  "artifacts": [
    "Grant shortlist CSV",
    "Funder-ready match brief",
    "Missing-info request"
  ],
  "checks": [
    "Deadline must be future",
    "Eligible claims need evidence",
    "Blocked grants cannot be recommended"
  ],
  "sampleClient": "Eastside Youth Arts Collective"
};
