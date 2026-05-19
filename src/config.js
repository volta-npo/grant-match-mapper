export const config = {
    "number": 11,
    "slug": "grant-match-mapper",
    "title": "Grant Match Mapper",
    "category": "Finance & Grants",
    "tagline": "A grant-fit workspace that maps opportunities to a small organization\u2019s facts, constraints, and readiness.",
    "persona": "Finance students researching funding for nonprofits and small businesses.",
    "gap": "Grant databases are overwhelming and grant tools skew enterprise. Teams need fit reasoning, not endless search results.",
    "niche": "First grant research pass for under-resourced organizations.",
    "metric": "qualified grants shortlisted per client",
    "modules": [
        "Eligibility profile",
        "Opportunity evidence cards",
        "Fit scoring rubric",
        "Next-action tracker"
    ],
    "theme": {
        "accent": "#16a34a",
        "accent2": "#86efac",
        "emoji": "\ud83d\udcb8",
        "metricLabel": "Funding readiness",
        "workflow": [
            "Collect verified facts",
            "Map requirements to evidence",
            "Score readiness",
            "Export funder-ready packet"
        ],
        "privacy": "Financial and grant materials can be sensitive. Keep exports local and label confidential notes."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "eligibility-profile",
            "label": "Eligibility profile",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify eligibility profile with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "opportunity-evidence-cards",
            "label": "Opportunity evidence cards",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify opportunity evidence cards with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "fit-scoring-rubric",
            "label": "Fit scoring rubric",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify fit scoring rubric with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "next-action-tracker",
            "label": "Next-action tracker",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify next-action tracker with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Grant Match Mapper and capture baseline evidence.",
            "Complete the eligibility profile workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "Eastside Youth Arts Collective",
        "chapter": "NYC",
        "studentLead": "Volta Student Lead",
        "notes": "Grant and finance readiness project for a small community nonprofit. Grant Match Mapper sample.",
        "evidencePrefix": "Grant Match Mapper",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map