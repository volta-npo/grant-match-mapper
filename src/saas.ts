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
  ],
  "personas": [
    {
      "name": "Grant researcher",
      "role": "Maps funder criteria to organization facts",
      "pain": "Eligibility notes are scattered across docs",
      "success": "Every opportunity has a defensible fit score",
      "activation": "Create first opportunity evidence card"
    },
    {
      "name": "Program director",
      "role": "Decides whether to pursue or skip grants",
      "pain": "Pursuing bad-fit grants wastes limited staff time",
      "success": "Sees priority, deadline, risk, and missing evidence at a glance",
      "activation": "Review ranked opportunity shortlist"
    },
    {
      "name": "Development partner",
      "role": "Supports multiple nonprofits or chapters",
      "pain": "Needs consistent pipeline reporting across organizations",
      "success": "Receives sponsor-safe pursuit portfolio exports",
      "activation": "Export portfolio grant map"
    }
  ],
  "journeys": [
    {
      "stage": "Eligibility profile",
      "moment": "Capture mission, geography, budget, population, and constraints",
      "success": "Organization facts are evidence-backed",
      "automation": "Profile completeness prompts"
    },
    {
      "stage": "Opportunity intake",
      "moment": "Add funder requirements, deadlines, award size, and restrictions",
      "success": "Opportunity card has required criteria",
      "automation": "Opportunity import and duplicate detection"
    },
    {
      "stage": "Fit mapping",
      "moment": "Map each requirement to facts and evidence",
      "success": "Fit score includes gaps and risk rationale",
      "automation": "Eligibility rule engine"
    },
    {
      "stage": "Shortlist planning",
      "moment": "Choose pursue/watch/skip and assign next actions",
      "success": "Deadlines and missing evidence have owners",
      "automation": "Action tracker and reminder sync"
    },
    {
      "stage": "Portfolio reporting",
      "moment": "Export ranked opportunities for leadership",
      "success": "Leadership can defend pursuit decisions",
      "automation": "CSV and executive brief generation"
    }
  ],
  "features": [
    {
      "name": "Eligibility profile vault",
      "tier": "Community",
      "description": "Reusable org facts with source notes and constraints",
      "evidence": "Facts require owner, source, and freshness label"
    },
    {
      "name": "Opportunity criteria parser",
      "tier": "Development",
      "description": "Structured funder requirements, award ranges, and restrictions",
      "evidence": "Each criterion mapped to evidence or gap"
    },
    {
      "name": "Fit score rule engine",
      "tier": "Development",
      "description": "Weighted eligibility, mission, readiness, and deadline scoring",
      "evidence": "Scores show requirement-by-requirement rationale"
    },
    {
      "name": "Deadline and task planner",
      "tier": "Chapter",
      "description": "Owner assignments for LOIs, attachments, and approvals",
      "evidence": "Next actions include due date and blocker status"
    },
    {
      "name": "Cross-chapter funder intelligence",
      "tier": "Network",
      "description": "Shared funder notes and historical pursuit outcomes",
      "evidence": "Outcome records separate public notes from internal strategy"
    },
    {
      "name": "Funder-ready evidence packet",
      "tier": "Chapter",
      "description": "Exports fit narrative, gaps, and source-backed facts",
      "evidence": "Packet includes no private strategy notes by default"
    }
  ],
  "experiments": [
    {
      "hypothesis": "Rule-based mapping reduces bad-fit pursuits",
      "measure": "High-fit opportunities",
      "target": "80% pursued opportunities above threshold",
      "cadence": "monthly"
    },
    {
      "hypothesis": "Evidence prompts speed proposal kickoff",
      "measure": "Missing criteria resolved",
      "target": "90% resolved before LOI",
      "cadence": "weekly"
    },
    {
      "hypothesis": "Portfolio exports improve leadership buy-in",
      "measure": "Shortlist approval rate",
      "target": "85% approved",
      "cadence": "per grant cycle"
    },
    {
      "hypothesis": "Deadline reminders prevent missed opportunities",
      "measure": "On-time next actions",
      "target": "95% on time",
      "cadence": "weekly"
    }
  ],
  "risks": [
    {
      "risk": "Eligibility rules may be misread from funder language",
      "mitigation": "Manual criterion review and source URL evidence required",
      "owner": "Grant researcher",
      "severity": "high"
    },
    {
      "risk": "Private strategy notes leak in funder exports",
      "mitigation": "Client-safe export separation and redaction controls",
      "owner": "Program director",
      "severity": "high"
    },
    {
      "risk": "Deadlines become stale after funder updates",
      "mitigation": "Freshness labels and watchlist reminders",
      "owner": "Grant researcher",
      "severity": "medium"
    },
    {
      "risk": "Fit score hides major compliance blockers",
      "mitigation": "Blocking criteria override pursuit recommendation",
      "owner": "Development lead",
      "severity": "high"
    }
  ],
  "automations": [
    {
      "name": "Opportunity import",
      "trigger": "New grant URL or CSV row added",
      "action": "Create criteria checklist and deadline record",
      "owner": "Grant researcher"
    },
    {
      "name": "Gap reminder",
      "trigger": "High-fit opportunity has missing evidence",
      "action": "Assign fact-gathering next action",
      "owner": "Program director"
    },
    {
      "name": "Deadline escalation",
      "trigger": "Due date approaches with open blockers",
      "action": "Notify owner and update risk status",
      "owner": "Development lead"
    },
    {
      "name": "Portfolio digest",
      "trigger": "Monthly leadership review",
      "action": "Export ranked pursue/watch/skip summary",
      "owner": "Chapter director"
    }
  ],
  "dashboards": [
    {
      "name": "Grant pipeline",
      "audience": "Development teams",
      "widgets": [
        "Pursue/watch/skip counts",
        "High-fit opportunities",
        "Deadline risk",
        "Missing evidence"
      ]
    },
    {
      "name": "Eligibility gaps",
      "audience": "Program directors",
      "widgets": [
        "Unmapped criteria",
        "Blocking requirements",
        "Evidence freshness",
        "Owner assignments"
      ]
    },
    {
      "name": "Funder portfolio",
      "audience": "Leadership",
      "widgets": [
        "Award potential",
        "Mission fit",
        "Readiness trend",
        "Pursuit outcomes"
      ]
    }
  ],
  "templates": [
    {
      "name": "Opportunity evidence card",
      "format": "Markdown",
      "sections": [
        "Funder criteria",
        "Org evidence",
        "Fit rationale",
        "Gaps",
        "Next action"
      ]
    },
    {
      "name": "Grant pipeline CSV",
      "format": "CSV",
      "sections": [
        "Opportunity",
        "Deadline",
        "Fit score",
        "Status",
        "Owner",
        "Blockers"
      ]
    },
    {
      "name": "Leadership pursuit memo",
      "format": "Markdown",
      "sections": [
        "Top opportunities",
        "Skip rationale",
        "Resource needs",
        "Deadline calendar"
      ]
    }
  ]
};
