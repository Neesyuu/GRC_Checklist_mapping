const MAPPING_DATA = {
  "stats": {
    "totalNrb": 87,
    "fullNrb": 57,
    "partialNrb": 21,
    "noneNrb": 9,
    "totalIsoControls": 123,
    "mappedIsoControls": 73,
    "totalLinks": 164
  },
  "nrbSections": [
    {
      "id": 1,
      "name": "IT Governance",
      "desc": "Board oversight, strategic alignment, IT organizational structure, and information security roles."
    },
    {
      "id": 2,
      "name": "Information Security",
      "desc": "Security policies, risk assessment, access controls, hardening, encryption, and electronic channels."
    },
    {
      "id": 3,
      "name": "Information Security Education",
      "desc": "Awareness programs for employees, vendors, and customer security education."
    },
    {
      "id": 4,
      "name": "Information Disclosure and Grievance Handling",
      "desc": "Customer dispute handling SLAs, privacy notice publication, and fee transparency."
    },
    {
      "id": 5,
      "name": "Outsourcing Management",
      "desc": "Vendor risk assessment, contracts, inspection rights, and source code escrow."
    },
    {
      "id": 6,
      "name": "IT Operations",
      "desc": "Segregation of duties, formal change management, dual custody, and operational procedures."
    },
    {
      "id": 7,
      "name": "Information Systems Acquisition, Development and Implementation",
      "desc": "SDLC security requirements, forensic audit trails, and source code review."
    },
    {
      "id": 8,
      "name": "Business Continuity and Disaster Recovery Planning",
      "desc": "BCP policy, RPO/RTO parameters, DR drills, DC-DR replication, and high-availability architecture."
    },
    {
      "id": 9,
      "name": "IS Audit",
      "desc": "Audit team resources, independent scope, and IS audit governance."
    },
    {
      "id": 10,
      "name": "Fraud Management",
      "desc": "Cyber attack reporting to NRB and customer fraud education."
    }
  ],
  "nrbItems": [
    {
      "id": "NRB-1.1",
      "ref": "1.1",
      "sectionId": 1,
      "sectionName": "IT Governance",
      "requirement": "Board-approved IT strategy/policy, annual review, long/short-term mapping, operational procedures",
      "isoRaw": "Clause 5.1 - Leadership and Commitment (Partial)\nClause 5.2 - Policy\nA.5.1 - Policies for information security\nA.5.37 - Documented operating procedures",
      "overlap": "Full / Partial",
      "statusType": "mixed",
      "statusLabel": "Full / Partial",
      "statusColor": "#10b981",
      "notes": "ISO covers strategic alignment generally, not the specific long/short-term mapping cadence",
      "connectedIso": [
        {
          "isoCode": "Clause 5.1",
          "overlap": "Partial"
        },
        {
          "isoCode": "Clause 5.2",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.1",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.37",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-1.2",
      "ref": "1.2",
      "sectionId": 1,
      "sectionName": "IT Governance",
      "requirement": "IT org structure commensurate with size (Dev/Tech/Ops/Assurance)",
      "isoRaw": "Clause 5.3 - Organizational Roles, Responsibilities and Authorities\nA.5.2 - Information security roles and responsibilities",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "Clause 5.3",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.2",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-1.3",
      "ref": "1.3",
      "sectionId": 1,
      "sectionName": "IT Governance",
      "requirement": "IT expertise assessment & periodic training needs",
      "isoRaw": "Clause 7.2 - Competence\nA.6.3 - Information security awareness, education and training",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "Clause 7.2",
          "overlap": "Full"
        },
        {
          "isoCode": "A.6.3",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-1.4",
      "ref": "1.4",
      "sectionId": 1,
      "sectionName": "IT Governance",
      "requirement": "IT performance monitoring & reporting to management",
      "isoRaw": "Clause 9.1 - Monitoring, Measurement, Analysis and Evaluation\nClause 9.3.1 - Management Review - General\nClause 9.3.2 - Management Review - Inputs",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "Clause 9.1",
          "overlap": "Full"
        },
        {
          "isoCode": "Clause 9.3.1",
          "overlap": "Full"
        },
        {
          "isoCode": "Clause 9.3.2",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-1.5",
      "ref": "1.5",
      "sectionId": 1,
      "sectionName": "IT Governance",
      "requirement": "IT risk in risk management policy, incl. e-banking/suppliers",
      "isoRaw": "Clause 6.1.1 - Actions to Address Risks and Opportunities - General\nClause 6.1.2 - Information Security Risk Assessment\nClause 6.1.3 - Information Security Risk Treatment\nClause 8.2 - Information Security Risk Assessment (Operation)\nA.5.19 - Information security in supplier relationships",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "ISO's risk process is more formalized (methodology, SoA) than NRB requires",
      "connectedIso": [
        {
          "isoCode": "Clause 6.1.1",
          "overlap": "Full"
        },
        {
          "isoCode": "Clause 6.1.2",
          "overlap": "Full"
        },
        {
          "isoCode": "Clause 6.1.3",
          "overlap": "Full"
        },
        {
          "isoCode": "Clause 8.2",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.19",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-1.6",
      "ref": "1.6",
      "sectionId": 1,
      "sectionName": "IT Governance",
      "requirement": "COBIT or equivalent IT control framework encouraged",
      "isoRaw": "—",
      "overlap": "None - NRB unique",
      "statusType": "none",
      "statusLabel": "NRB Unique (Not in ISO)",
      "statusColor": "#ef4444",
      "notes": "ISO doesn't reference other frameworks; implementing ISO 27001 itself partially satisfies this intent",
      "connectedIso": []
    },
    {
      "id": "NRB-1.7",
      "ref": "1.7",
      "sectionId": 1,
      "sectionName": "IT Governance",
      "requirement": "Board awareness of IT resource sufficiency",
      "isoRaw": "Clause 5.1 - Leadership and Commitment",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "Clause 5.1",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-1.8",
      "ref": "1.8",
      "sectionId": 1,
      "sectionName": "IT Governance",
      "requirement": "Designated Information Security Officer (ISO)",
      "isoRaw": "Clause 5.3 - Organizational Roles, Responsibilities and Authorities\nA.5.2 - Information security roles and responsibilities",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "Clause 5.3",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.2",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-1.9",
      "ref": "1.9",
      "sectionId": 1,
      "sectionName": "IT Governance",
      "requirement": "Risk analysis before new technology, incl. product approval process",
      "isoRaw": "A.5.8 - Information security in project management\nClause 6.1.2 - Information Security Risk Assessment\nClause 6.1.3 - Information Security Risk Treatment\nA.8.29 - Security testing in development and acceptance",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.8",
          "overlap": "Full"
        },
        {
          "isoCode": "Clause 6.1.2",
          "overlap": "Full"
        },
        {
          "isoCode": "Clause 6.1.3",
          "overlap": "Full"
        },
        {
          "isoCode": "A.8.29",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-1.10",
      "ref": "1.10",
      "sectionId": 1,
      "sectionName": "IT Governance",
      "requirement": "Process for legal risk from Nepal cyber law",
      "isoRaw": "A.5.31 - Legal, statutory, regulatory and contractual requirements",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.31",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.1",
      "ref": "2.1",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Board-approved Info Security Policy, communicated to all parties",
      "isoRaw": "A.5.1 - Policies for information security\nClause 5.2 - Policy",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.1",
          "overlap": "Full"
        },
        {
          "isoCode": "Clause 5.2",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.2",
      "ref": "2.2",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Periodic (annual) risk assessment per asset (CIA)",
      "isoRaw": "Clause 6.1.2 - Information Security Risk Assessment\nClause 8.2 - Information Security Risk Assessment (Operation)",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "Clause 6.1.2",
          "overlap": "Full"
        },
        {
          "isoCode": "Clause 8.2",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.3",
      "ref": "2.3",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Staff awareness/compliance (job desc, agreements, training, acknowledgement)",
      "isoRaw": "Clause 7.3 - Awareness\nA.6.2 - Terms and conditions of employment\nA.6.3 - Information security awareness, education and training\nA.6.6 - Confidentiality or non-disclosure agreements",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "Clause 7.3",
          "overlap": "Full"
        },
        {
          "isoCode": "A.6.2",
          "overlap": "Full"
        },
        {
          "isoCode": "A.6.3",
          "overlap": "Full"
        },
        {
          "isoCode": "A.6.6",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.4",
      "ref": "2.4",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Need-to-know/least-privilege/time-bound access; privileged user monitoring",
      "isoRaw": "A.5.15 - Access control\nA.5.18 - Access rights\nA.8.2 - Privileged access rights\nA.8.15 - Logging",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.15",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.18",
          "overlap": "Full"
        },
        {
          "isoCode": "A.8.2",
          "overlap": "Full"
        },
        {
          "isoCode": "A.8.15",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.5",
      "ref": "2.5",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Physical/environmental controls per threat/location",
      "isoRaw": "A.7.1 - Physical security perimeters\nto\nA.7.5 - Protecting against physical and environmental threats",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.7.1",
          "overlap": "Full"
        },
        {
          "isoCode": "A.7.2",
          "overlap": "Full"
        },
        {
          "isoCode": "A.7.3",
          "overlap": "Full"
        },
        {
          "isoCode": "A.7.4",
          "overlap": "Full"
        },
        {
          "isoCode": "A.7.5",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.6",
      "ref": "2.6",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Vulnerability assessment process + periodic penetration testing",
      "isoRaw": "A.8.8 - Management of technical vulnerabilities\nA.8.29 - Security testing in development and acceptance",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.8",
          "overlap": "Full"
        },
        {
          "isoCode": "A.8.29",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.7",
      "ref": "2.7",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "System hardening, default password change, patching",
      "isoRaw": "A.8.8 - Management of technical vulnerabilities\nA.8.9 - Configuration management",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.8",
          "overlap": "Full"
        },
        {
          "isoCode": "A.8.9",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.8",
      "ref": "2.8",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Malware protection mechanism",
      "isoRaw": "A.8.7 - Protection against malware",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.7",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.9",
      "ref": "2.9",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Strong cryptography/end-to-end encryption for PINs/passwords",
      "isoRaw": "A.8.24 - Use of cryptography",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.24",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.10",
      "ref": "2.10",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Firewalls between networks and sites, per security policy",
      "isoRaw": "A.8.20 - Networks security\nA.8.21 - Security of network services",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.20",
          "overlap": "Full"
        },
        {
          "isoCode": "A.8.21",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.11",
      "ref": "2.11",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Customer authentication before access/transaction",
      "isoRaw": "A.8.5 - Secure authentication",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.5",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.12",
      "ref": "2.12",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Detailed audit trail, secured, retained through migration",
      "isoRaw": "A.8.15 - Logging\nA.5.33 - Protection of records",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.15",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.33",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.13",
      "ref": "2.13",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Application integrity, malware-free (incl. purchased systems)",
      "isoRaw": "A.8.26 - Application security requirements\nA.8.29 - Security testing in development and acceptance",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.26",
          "overlap": "Full"
        },
        {
          "isoCode": "A.8.29",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.14",
      "ref": "2.14",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Data integrity/consistency in databases/warehouses/archives",
      "isoRaw": "A.8.9 - Configuration management",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "No dedicated Annex A control; implicit across A.8.x technological controls",
      "connectedIso": [
        {
          "isoCode": "A.8.9",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-2.15",
      "ref": "2.15",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "No direct back-end DB updates except authorized",
      "isoRaw": "A.8.32 - Change management\nA.8.4 - Access to source code",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "ISO's change management/source-code-access controls cover this indirectly",
      "connectedIso": [
        {
          "isoCode": "A.8.32",
          "overlap": "Partial"
        },
        {
          "isoCode": "A.8.4",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-2.16",
      "ref": "2.16",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Cross-border data: segregation, access control, change control, NRB inspection rights",
      "isoRaw": "A.5.23 - Information security for use of cloud services\nA.5.15 - Access control\nA.8.32 - Change management",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "The regulator-inspection-rights requirement is NRB-specific; ISO covers the technical controls only",
      "connectedIso": [
        {
          "isoCode": "A.5.23",
          "overlap": "Partial"
        },
        {
          "isoCode": "A.5.15",
          "overlap": "Partial"
        },
        {
          "isoCode": "A.8.32",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-2.17",
      "ref": "2.17",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Documented migration policy with sign-offs",
      "isoRaw": "A.8.32 - Change management",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "No dedicated migration control in ISO; covered loosely under change management",
      "connectedIso": [
        {
          "isoCode": "A.8.32",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-2.18",
      "ref": "2.18",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Asset inventory & classification with matching access controls",
      "isoRaw": "A.5.9 - Inventory of information and other associated assets\nA.5.12 - Classification of information\nA.5.15 - Access control",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.9",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.12",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.15",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.19",
      "ref": "2.19",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Additional screening for privileged-access employees",
      "isoRaw": "A.6.1 - Screening",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.6.1",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.20",
      "ref": "2.20",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Data security policy: disposal, portable devices, media, encryption",
      "isoRaw": "A.7.8 - Equipment siting and protection\nA.7.10 - Storage media\nA.7.14 - Secure disposal or re-use of equipment\nA.8.24 - Use of cryptography",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.7.8",
          "overlap": "Full"
        },
        {
          "isoCode": "A.7.10",
          "overlap": "Full"
        },
        {
          "isoCode": "A.7.14",
          "overlap": "Full"
        },
        {
          "isoCode": "A.8.24",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.21",
      "ref": "2.21",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Wireless network risk evaluation and controls",
      "isoRaw": "A.8.20 - Networks security",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "ISO's network security control is general; not wireless-specific",
      "connectedIso": [
        {
          "isoCode": "A.8.20",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-2.22",
      "ref": "2.22",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Policy/education updated per latest threats",
      "isoRaw": "A.5.7 - Threat intelligence\nClause 10.1 - Continual Improvement",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.7",
          "overlap": "Full"
        },
        {
          "isoCode": "Clause 10.1",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.23",
      "ref": "2.23",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "ATM CCTV, encryption, key management, segregation of duty",
      "isoRaw": "A.5.3 - Segregation of duties\nA.7.4 - Physical security monitoring\nA.8.7 - Protection against malware\nA.8.20 - Networks security\nA.8.24 - Use of cryptography",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "ATM-specific prescriptive detail (CCTV/PIN capture rules) is unique to NRB; ISO gives only generic equivalents",
      "connectedIso": [
        {
          "isoCode": "A.5.3",
          "overlap": "Partial"
        },
        {
          "isoCode": "A.7.4",
          "overlap": "Partial"
        },
        {
          "isoCode": "A.8.7",
          "overlap": "Partial"
        },
        {
          "isoCode": "A.8.20",
          "overlap": "Partial"
        },
        {
          "isoCode": "A.8.24",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-2.24",
      "ref": "2.24",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Card and PIN never under single person's control (dual custody)",
      "isoRaw": "A.5.3 - Segregation of duties",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "Banking-specific application of ISO's general segregation-of-duties principle",
      "connectedIso": [
        {
          "isoCode": "A.5.3",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-2.25",
      "ref": "2.25",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "POS PIN-based authorization replacing signature-based",
      "isoRaw": "—",
      "overlap": "None - NRB unique",
      "statusType": "none",
      "statusLabel": "NRB Unique (Not in ISO)",
      "statusColor": "#ef4444",
      "notes": "Card-payment-scheme specific; outside ISO 27001 scope",
      "connectedIso": []
    },
    {
      "id": "NRB-2.26",
      "ref": "2.26",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Chip-based card migration",
      "isoRaw": "—",
      "overlap": "None - NRB unique",
      "statusType": "none",
      "statusLabel": "NRB Unique (Not in ISO)",
      "statusColor": "#ef4444",
      "notes": "Card-payment-scheme specific; outside ISO 27001 scope",
      "connectedIso": []
    },
    {
      "id": "NRB-2.27",
      "ref": "2.27",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "2FA + instant alerts for online card payments",
      "isoRaw": "A.8.5 - Secure authentication",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "2FA is covered by ISO; \n\ninstant customer alerting is an NRB-specific addition",
      "connectedIso": [
        {
          "isoCode": "A.8.5",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-2.28",
      "ref": "2.28",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Mobile banking: device security, encryption, transaction limits, NPR-only",
      "isoRaw": "A.8.1 - User endpoint devices\nA.8.24 - Use of cryptography",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "NPR-currency restriction is a Nepal regulatory rule, not an ISO concept\n\nSpecific transaction-limit rule is an NRB banking regulation, not an ISO concept",
      "connectedIso": [
        {
          "isoCode": "A.8.1",
          "overlap": "Partial"
        },
        {
          "isoCode": "A.8.24",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-2.29",
      "ref": "2.29",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Multi-factor authentication for internet banking fund transfers",
      "isoRaw": "A.8.5 - Secure authentication",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.5",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-2.30",
      "ref": "2.30",
      "sectionId": 2,
      "sectionName": "Information Security",
      "requirement": "Web application security, latest SSL/TLS on critical apps",
      "isoRaw": "A.8.26 - Application security requirements\nA.8.24 - Use of cryptography",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.26",
          "overlap": "Full"
        },
        {
          "isoCode": "A.8.24",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-3.1",
      "ref": "3.1",
      "sectionId": 3,
      "sectionName": "Information Security Education",
      "requirement": "Awareness program for employees/vendors/customers/stakeholders",
      "isoRaw": "A.6.3 - Information security awareness, education and training\nClause 7.3 - Awareness",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.6.3",
          "overlap": "Full"
        },
        {
          "isoCode": "Clause 7.3",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-3.2",
      "ref": "3.2",
      "sectionId": 3,
      "sectionName": "Information Security Education",
      "requirement": "Customer education on device/system security + query response",
      "isoRaw": "A.6.3 - Information security awareness, education and training",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "ISO's awareness control is primarily staff-focused; customer education is an NRB addition\n\nCustomer query-response SLA is a service-operations topic outside ISO 27001 scope",
      "connectedIso": [
        {
          "isoCode": "A.6.3",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-3.3",
      "ref": "3.3",
      "sectionId": 3,
      "sectionName": "Information Security Education",
      "requirement": "Customer authentication system + credential security education",
      "isoRaw": "A.8.5 - Secure authentication\nA.6.3 - Information security awareness, education and training",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "Authentication mechanism itself maps fully; customer-facing education does not",
      "connectedIso": [
        {
          "isoCode": "A.8.5",
          "overlap": "Partial"
        },
        {
          "isoCode": "A.6.3",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-4.1",
      "ref": "4.1",
      "sectionId": 4,
      "sectionName": "Information Disclosure and Grievance Handling",
      "requirement": "Published dispute/breach resolution process, loss attribution",
      "isoRaw": "—",
      "overlap": "None - NRB unique",
      "statusType": "none",
      "statusLabel": "NRB Unique (Not in ISO)",
      "statusColor": "#ef4444",
      "notes": "Consumer protection / financial dispute topic, outside ISO 27001 scope",
      "connectedIso": []
    },
    {
      "id": "NRB-4.2",
      "ref": "4.2",
      "sectionId": 4,
      "sectionName": "Information Disclosure and Grievance Handling",
      "requirement": "Published privacy/security policy and transaction costs",
      "isoRaw": "A.5.34 - Privacy and protection of PII",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "Privacy policy publication loosely touches ISO's PII control; cost disclosure has no ISO equivalent",
      "connectedIso": [
        {
          "isoCode": "A.5.34",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-4.3",
      "ref": "4.3",
      "sectionId": 4,
      "sectionName": "Information Disclosure and Grievance Handling",
      "requirement": "ATM/electronic channel transaction cost disclosure",
      "isoRaw": "—",
      "overlap": "None - NRB unique",
      "statusType": "none",
      "statusLabel": "NRB Unique (Not in ISO)",
      "statusColor": "#ef4444",
      "notes": "",
      "connectedIso": []
    },
    {
      "id": "NRB-4.4",
      "ref": "4.4",
      "sectionId": 4,
      "sectionName": "Information Disclosure and Grievance Handling",
      "requirement": "Dispute handling mechanism with response-time SLA",
      "isoRaw": "—",
      "overlap": "None - NRB unique",
      "statusType": "none",
      "statusLabel": "NRB Unique (Not in ISO)",
      "statusColor": "#ef4444",
      "notes": "",
      "connectedIso": []
    },
    {
      "id": "NRB-4.5",
      "ref": "4.5",
      "sectionId": 4,
      "sectionName": "Information Disclosure and Grievance Handling",
      "requirement": "Grievance handling procedure for disputed transactions",
      "isoRaw": "—",
      "overlap": "None - NRB unique",
      "statusType": "none",
      "statusLabel": "NRB Unique (Not in ISO)",
      "statusColor": "#ef4444",
      "notes": "",
      "connectedIso": []
    },
    {
      "id": "NRB-4.6",
      "ref": "4.6",
      "sectionId": 4,
      "sectionName": "Information Disclosure and Grievance Handling",
      "requirement": "Customer risk/benefit disclosure per e-banking channel",
      "isoRaw": "—",
      "overlap": "None - NRB unique",
      "statusType": "none",
      "statusLabel": "NRB Unique (Not in ISO)",
      "statusColor": "#ef4444",
      "notes": "",
      "connectedIso": []
    },
    {
      "id": "NRB-5.1",
      "ref": "5.1",
      "sectionId": 5,
      "sectionName": "Outsourcing Management",
      "requirement": "Board/senior management accountable for outsourcing risk",
      "isoRaw": "A.5.19 - Information security in supplier relationships",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.19",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-5.2",
      "ref": "5.2",
      "sectionId": 5,
      "sectionName": "Outsourcing Management",
      "requirement": "Risk evaluated before and periodically during outsourcing",
      "isoRaw": "A.5.19 - Information security in supplier relationships\nA.5.20 - Addressing information security within supplier agreements\nA.5.22 - Monitoring, review and change management of supplier services",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.19",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.20",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.22",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-5.3",
      "ref": "5.3",
      "sectionId": 5,
      "sectionName": "Outsourcing Management",
      "requirement": "Outsourced ops subject to bank's security/privacy policy",
      "isoRaw": "A.5.20 - Addressing information security within supplier agreements\nA.5.19 - Information security in supplier relationships",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.20",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.19",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-5.4",
      "ref": "5.4",
      "sectionId": 5,
      "sectionName": "Outsourcing Management",
      "requirement": "Non-interference with regulatory activity; NRB/BAFIA inspection rights",
      "isoRaw": "—",
      "overlap": "None - NRB unique",
      "statusType": "none",
      "statusLabel": "NRB Unique (Not in ISO)",
      "statusColor": "#ef4444",
      "notes": "Regulator inspection-rights clause is a Nepal banking regulatory requirement\n\nNRB/BAFIA inspection-rights clause is Nepal banking regulatory requirement",
      "connectedIso": []
    },
    {
      "id": "NRB-5.5",
      "ref": "5.5",
      "sectionId": 5,
      "sectionName": "Outsourcing Management",
      "requirement": "Outsourcing monitoring process, SLA accountability, provider review",
      "isoRaw": "A.5.20 - Addressing information security within supplier agreements\nA.5.22 - Monitoring, review and change management of supplier services",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.20",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.22",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-5.6",
      "ref": "5.6",
      "sectionId": 5,
      "sectionName": "Outsourcing Management",
      "requirement": "Availability/integrity/confidentiality maintained through sub-outsourcing",
      "isoRaw": "A.5.21 - Managing information security in the ICT supply chain\nA.5.19 - Information security in supplier relationships",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.21",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.19",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-5.7",
      "ref": "5.7",
      "sectionId": 5,
      "sectionName": "Outsourcing Management",
      "requirement": "Service continuity; contingency for alternate/in-house fallback",
      "isoRaw": "A.5.22 - Monitoring, review and change management of supplier services\nA.5.30 - ICT readiness for business continuity (partial)",
      "overlap": "Full / Partial",
      "statusType": "mixed",
      "statusLabel": "Full / Partial",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.22",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.30",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-5.8",
      "ref": "5.8",
      "sectionId": 5,
      "sectionName": "Outsourcing Management",
      "requirement": "Country risk factors for offshore outsourcing; exit strategy",
      "isoRaw": "A.5.19 - Information security in supplier relationships (partial)\nA.5.30 - ICT readiness for business continuity (partial)",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "Country/political risk assessment is more explicit in NRB than in ISO's generic supplier control",
      "connectedIso": [
        {
          "isoCode": "A.5.19",
          "overlap": "Partial"
        },
        {
          "isoCode": "A.5.30",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-5.9",
      "ref": "5.9",
      "sectionId": 5,
      "sectionName": "Outsourcing Management",
      "requirement": "Source code/escrow arrangement for critical application continuity",
      "isoRaw": "A.8.4 - Access to source code\nA.5.30 - ICT readiness for business continuity (partial)",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.4",
          "overlap": "Partial"
        },
        {
          "isoCode": "A.5.30",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-5.10",
      "ref": "5.10",
      "sectionId": 5,
      "sectionName": "Outsourcing Management",
      "requirement": "Data jurisdiction/regulation clarity for cloud/emerging tech",
      "isoRaw": "A.5.22 - Monitoring, review and change management of supplier services\nA.5.23 - Information security for use of cloud services",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.22",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.23",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-6.1",
      "ref": "6.1",
      "sectionId": 6,
      "sectionName": "IT Operations",
      "requirement": "Board/management oversight of safe IT operating environment",
      "isoRaw": "Clause 5.1 - Leadership and Commitment\nClause 8.1 - Operational Planning and Control",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "Clause 5.1",
          "overlap": "Full"
        },
        {
          "isoCode": "Clause 8.1",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-6.2",
      "ref": "6.2",
      "sectionId": 6,
      "sectionName": "IT Operations",
      "requirement": "Segregation of duty; documented admin procedures; least privilege",
      "isoRaw": "A.5.3 - Segregation of duties\nA.5.37 - Documented operating procedures\nA.8.3 - Information access restriction\nA.8.9 - Configuration management",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.3",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.37",
          "overlap": "Full"
        },
        {
          "isoCode": "A.8.3",
          "overlap": "Full"
        },
        {
          "isoCode": "A.8.9",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-6.3",
      "ref": "6.3",
      "sectionId": 6,
      "sectionName": "IT Operations",
      "requirement": "Joint custody for critical system functions",
      "isoRaw": "A.5.3 - Segregation of duties\nA.8.2 - Privileged access rights",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "ISO's segregation/privileged-access controls cover the principle; NRB's function list is more prescriptive",
      "connectedIso": [
        {
          "isoCode": "A.5.3",
          "overlap": "Partial"
        },
        {
          "isoCode": "A.8.2",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-6.4",
      "ref": "6.4",
      "sectionId": 6,
      "sectionName": "IT Operations",
      "requirement": "Formal change management process",
      "isoRaw": "A.8.32 - Change management",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.32",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-6.5",
      "ref": "6.5",
      "sectionId": 6,
      "sectionName": "IT Operations",
      "requirement": "Migration policy; audit trail through migration phases",
      "isoRaw": "A.8.32 - Change management\nA.8.15 - Logging",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.32",
          "overlap": "Partial"
        },
        {
          "isoCode": "A.8.15",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-6.6",
      "ref": "6.6",
      "sectionId": 6,
      "sectionName": "IT Operations",
      "requirement": "Vendor/consultant access to critical systems, supervised like staff",
      "isoRaw": "A.5.19 - Information security in supplier relationships\nA.8.2 - Privileged access rights",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.19",
          "overlap": "Full"
        },
        {
          "isoCode": "A.8.2",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-6.7",
      "ref": "6.7",
      "sectionId": 6,
      "sectionName": "IT Operations",
      "requirement": "Adequate resources for reliability; standby components maintained",
      "isoRaw": "A.8.6 - Capacity management\nA.8.14 - Redundancy of information processing facilities",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.6",
          "overlap": "Full"
        },
        {
          "isoCode": "A.8.14",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-6.8",
      "ref": "6.8",
      "sectionId": 6,
      "sectionName": "IT Operations",
      "requirement": "Periodic IT environment risk assessment with mitigation strategy",
      "isoRaw": "Clause 6.1.2 - Information Security Risk Assessment\nClause 6.1.3 - Information Security Risk Treatment\nClause 8.2 - Information Security Risk Assessment (Operation)",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "Clause 6.1.2",
          "overlap": "Full"
        },
        {
          "isoCode": "Clause 6.1.3",
          "overlap": "Full"
        },
        {
          "isoCode": "Clause 8.2",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-7.1",
      "ref": "7.1",
      "sectionId": 7,
      "sectionName": "Information Systems Acquisition, Development and Implementation",
      "requirement": "Documented/approved functional, security, performance requirements",
      "isoRaw": "A.8.26 - Application security requirements",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.26",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-7.2",
      "ref": "7.2",
      "sectionId": 7,
      "sectionName": "Information Systems Acquisition, Development and Implementation",
      "requirement": "Security requirements incorporated at each SDLC stage",
      "isoRaw": "A.8.25 - Secure development life cycle\nA.8.27 - Secure system architecture and engineering principles",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.25",
          "overlap": "Full"
        },
        {
          "isoCode": "A.8.27",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-7.3",
      "ref": "7.3",
      "sectionId": 7,
      "sectionName": "Information Systems Acquisition, Development and Implementation",
      "requirement": "Forensic-grade audit trail meeting regulatory/legal needs",
      "isoRaw": "A.8.15 - Logging",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.15",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-7.4",
      "ref": "7.4",
      "sectionId": 7,
      "sectionName": "Information Systems Acquisition, Development and Implementation",
      "requirement": "Source code review; vulnerabilities fixed before implementation",
      "isoRaw": "A.8.28 - Secure coding (Partial)\nA.8.29 - Security testing in development and acceptance",
      "overlap": "Full / Partial",
      "statusType": "mixed",
      "statusLabel": "Full / Partial",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.28",
          "overlap": "Partial"
        },
        {
          "isoCode": "A.8.29",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-8.1",
      "ref": "8.1",
      "sectionId": 8,
      "sectionName": "Business Continuity and Disaster Recovery Planning",
      "requirement": "Board-approved BCP Policy, detailed procedures, resourcing, review",
      "isoRaw": "A.5.24 - Information security incident management planning and preparation\nA.5.29 - Information security during disruption\nA.5.30 - ICT readiness for business continuity",
      "overlap": "Full / Partial",
      "statusType": "mixed",
      "statusLabel": "Full / Partial",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.24",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.29",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.30",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-8.2",
      "ref": "8.2",
      "sectionId": 8,
      "sectionName": "Business Continuity and Disaster Recovery Planning",
      "requirement": "Head of BCP appointed with defined responsibilities",
      "isoRaw": "A.5.29 - Information security during disruption",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "ISO doesn't mandate a named BCP role explicitly; NRB does",
      "connectedIso": [
        {
          "isoCode": "A.5.29",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-8.3",
      "ref": "8.3",
      "sectionId": 8,
      "sectionName": "Business Continuity and Disaster Recovery Planning",
      "requirement": "BCP scope: disasters, threats, regulatory, outsourcing, multi-country, people",
      "isoRaw": "A.5.29 - Information security during disruption\nA.5.30 - ICT readiness for business continuity",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.29",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.30",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-8.4",
      "ref": "8.4",
      "sectionId": 8,
      "sectionName": "Business Continuity and Disaster Recovery Planning",
      "requirement": "BCP team formed at head office and branches",
      "isoRaw": "A.5.29 - Information security during disruption\n[The organization shall plan how to maintain information security at an appropriate level during disruption.]",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "ISO does not mandate but NRB does.",
      "connectedIso": [
        {
          "isoCode": "A.5.29",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-8.5",
      "ref": "8.5",
      "sectionId": 8,
      "sectionName": "Business Continuity and Disaster Recovery Planning",
      "requirement": "Annual testing (planned/unplanned), internal audit involvement, amendments",
      "isoRaw": "A.5.30 - ICT readiness for business continuity\nClause 9.2.1 - Internal Audit - General",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.30",
          "overlap": "Full"
        },
        {
          "isoCode": "Clause 9.2.1",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-8.6",
      "ref": "8.6",
      "sectionId": 8,
      "sectionName": "Business Continuity and Disaster Recovery Planning",
      "requirement": "RPO/RTO defined; DR strategy chosen to meet them",
      "isoRaw": "A.5.30 - ICT readiness for business continuity",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.30",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-8.7",
      "ref": "8.7",
      "sectionId": 8,
      "sectionName": "Business Continuity and Disaster Recovery Planning",
      "requirement": "Standby site/system matched to RPO/RTO",
      "isoRaw": "A.5.30 - ICT readiness for business continuity",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.30",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-8.8",
      "ref": "8.8",
      "sectionId": 8,
      "sectionName": "Business Continuity and Disaster Recovery Planning",
      "requirement": "Disaster mitigation: mirroring, UPS/generator, surge protection, DC environment",
      "isoRaw": "A.5.30 - ICT readiness for business continuity\nA.7.5 - Protecting against physical and environmental threats\nA.7.11 - Supporting utilities\nA.8.14 - Redundancy of information processing facilities",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.30",
          "overlap": "Full"
        },
        {
          "isoCode": "A.7.5",
          "overlap": "Full"
        },
        {
          "isoCode": "A.7.11",
          "overlap": "Full"
        },
        {
          "isoCode": "A.8.14",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-8.9",
      "ref": "8.9",
      "sectionId": 8,
      "sectionName": "Business Continuity and Disaster Recovery Planning",
      "requirement": "High-availability architecture, no single point of failure",
      "isoRaw": "A.8.14 - Redundancy of information processing facilities",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.8.14",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-8.10",
      "ref": "8.10",
      "sectionId": 8,
      "sectionName": "Business Continuity and Disaster Recovery Planning",
      "requirement": "DC location risk minimization; restricted physical access",
      "isoRaw": "A.7.1 - Physical security perimeters\nto\nA.7.5 - Protecting against physical and environmental threats",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.7.1",
          "overlap": "Full"
        },
        {
          "isoCode": "A.7.2",
          "overlap": "Full"
        },
        {
          "isoCode": "A.7.3",
          "overlap": "Full"
        },
        {
          "isoCode": "A.7.4",
          "overlap": "Full"
        },
        {
          "isoCode": "A.7.5",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-8.11",
      "ref": "8.11",
      "sectionId": 8,
      "sectionName": "Business Continuity and Disaster Recovery Planning",
      "requirement": "Periodic DC-DR transaction/data integrity checks (EOD/BOD)",
      "isoRaw": "A.5.30 - ICT readiness for business continuity",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.5.30",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-8.12",
      "ref": "8.12",
      "sectionId": 8,
      "sectionName": "Business Continuity and Disaster Recovery Planning",
      "requirement": "Incident response plan: detection, recovery, comms, regulatory alert",
      "isoRaw": "A.5.24 - Information security incident management planning and preparation\nA.5.25 - Assessment and decision on information security events\nA.5.26 - Response to information security incidents",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "Regulatory-alert step is an NRB-specific addition to ISO's generic incident response",
      "connectedIso": [
        {
          "isoCode": "A.5.24",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.25",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.26",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-9.1",
      "ref": "9.1",
      "sectionId": 9,
      "sectionName": "IS Audit",
      "requirement": "Board/audit committee resources audit team for adequate IT coverage",
      "isoRaw": "Clause 9.2.2 - Internal Audit - Programme\nA.5.35 - Independent review of information security",
      "overlap": "Full",
      "statusType": "full",
      "statusLabel": "Full Overlap",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "Clause 9.2.2",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.35",
          "overlap": "Full"
        }
      ]
    },
    {
      "id": "NRB-9.2",
      "ref": "9.2",
      "sectionId": 9,
      "sectionName": "IS Audit",
      "requirement": "IS audit may be outsourced; planning/risk/follow-up stays with bank",
      "isoRaw": "Clause 9.2.2 - Internal Audit - Programme\nA.5.35 - Independent review of information security (Partial)",
      "overlap": "Full / Partial",
      "statusType": "mixed",
      "statusLabel": "Full / Partial",
      "statusColor": "#10b981",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "Clause 9.2.2",
          "overlap": "Full"
        },
        {
          "isoCode": "A.5.35",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-10.1",
      "ref": "10.1",
      "sectionId": 10,
      "sectionName": "Fraud Management",
      "requirement": "Electronic attacks identified, documented, reported to NRB monthly",
      "isoRaw": "A.5.25 - Assessment and decision on information security events\nA.5.26 - Response to information security incidents",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "The mandatory monthly regulator reporting obligation is unique to NRB; ISO covers incident detection/response generally",
      "connectedIso": [
        {
          "isoCode": "A.5.25",
          "overlap": "Partial"
        },
        {
          "isoCode": "A.5.26",
          "overlap": "Partial"
        }
      ]
    },
    {
      "id": "NRB-10.2",
      "ref": "10.2",
      "sectionId": 10,
      "sectionName": "Fraud Management",
      "requirement": "Customer fraud awareness (identification, avoidance, protection)",
      "isoRaw": "A.6.3 - Information security awareness, education and training",
      "overlap": "Partial",
      "statusType": "partial",
      "statusLabel": "Partial Overlap",
      "statusColor": "#f59e0b",
      "notes": "",
      "connectedIso": [
        {
          "isoCode": "A.6.3",
          "overlap": "Partial"
        }
      ]
    }
  ],
  "isoItems": [
    {
      "id": "ISO-Clause_4.1",
      "code": "Clause 4.1",
      "title": "Understanding the organization and its context",
      "category": "Clauses",
      "theme": "Clause 4: Context of the Organization",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-Clause_4.2",
      "code": "Clause 4.2",
      "title": "Understanding the needs and expectations of interested parties",
      "category": "Clauses",
      "theme": "Clause 4: Context of the Organization",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-Clause_4.3",
      "code": "Clause 4.3",
      "title": "Determining the scope of the information security management system",
      "category": "Clauses",
      "theme": "Clause 4: Context of the Organization",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-Clause_4.4",
      "code": "Clause 4.4",
      "title": "Information security management system",
      "category": "Clauses",
      "theme": "Clause 4: Context of the Organization",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-Clause_5.1",
      "code": "Clause 5.1",
      "title": "Leadership and commitment",
      "category": "Clauses",
      "theme": "Clause 5: Leadership",
      "isMapped": true,
      "status": "full",
      "badge": "3 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.1",
          "nrbRef": "1.1",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-1.7",
          "nrbRef": "1.7",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-6.1",
          "nrbRef": "6.1",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_5.2",
      "code": "Clause 5.2",
      "title": "Policy",
      "category": "Clauses",
      "theme": "Clause 5: Leadership",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.1",
          "nrbRef": "1.1",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.1",
          "nrbRef": "2.1",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_5.3",
      "code": "Clause 5.3",
      "title": "Organizational roles, responsibilities and authorities",
      "category": "Clauses",
      "theme": "Clause 5: Leadership",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.2",
          "nrbRef": "1.2",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-1.8",
          "nrbRef": "1.8",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_6.1.1",
      "code": "Clause 6.1.1",
      "title": "Actions to address risks and opportunities - General",
      "category": "Clauses",
      "theme": "Clause 6: Planning",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.5",
          "nrbRef": "1.5",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_6.1.2",
      "code": "Clause 6.1.2",
      "title": "Information security risk assessment",
      "category": "Clauses",
      "theme": "Clause 6: Planning",
      "isMapped": true,
      "status": "full",
      "badge": "4 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.5",
          "nrbRef": "1.5",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-1.9",
          "nrbRef": "1.9",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.2",
          "nrbRef": "2.2",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-6.8",
          "nrbRef": "6.8",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_6.1.3",
      "code": "Clause 6.1.3",
      "title": "Information security risk treatment",
      "category": "Clauses",
      "theme": "Clause 6: Planning",
      "isMapped": true,
      "status": "full",
      "badge": "3 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.5",
          "nrbRef": "1.5",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-1.9",
          "nrbRef": "1.9",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-6.8",
          "nrbRef": "6.8",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_6.2",
      "code": "Clause 6.2",
      "title": "Information security objectives and planning to achieve them",
      "category": "Clauses",
      "theme": "Clause 6: Planning",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-Clause_6.3",
      "code": "Clause 6.3",
      "title": "Planning of changes",
      "category": "Clauses",
      "theme": "Clause 6: Planning",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-Clause_7.1",
      "code": "Clause 7.1",
      "title": "Resources",
      "category": "Clauses",
      "theme": "Clause 7: Support",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-Clause_7.2",
      "code": "Clause 7.2",
      "title": "Competence",
      "category": "Clauses",
      "theme": "Clause 7: Support",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.3",
          "nrbRef": "1.3",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_7.3",
      "code": "Clause 7.3",
      "title": "Awareness",
      "category": "Clauses",
      "theme": "Clause 7: Support",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.3",
          "nrbRef": "2.3",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-3.1",
          "nrbRef": "3.1",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_7.4",
      "code": "Clause 7.4",
      "title": "Communication",
      "category": "Clauses",
      "theme": "Clause 7: Support",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-Clause_7.5.1",
      "code": "Clause 7.5.1",
      "title": "Documented information - General",
      "category": "Clauses",
      "theme": "Clause 7: Support",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-Clause_7.5.2",
      "code": "Clause 7.5.2",
      "title": "Creating and updating",
      "category": "Clauses",
      "theme": "Clause 7: Support",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-Clause_7.5.3",
      "code": "Clause 7.5.3",
      "title": "Control of documented information",
      "category": "Clauses",
      "theme": "Clause 7: Support",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-Clause_8.1",
      "code": "Clause 8.1",
      "title": "Operational planning and control",
      "category": "Clauses",
      "theme": "Clause 8: Operation",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-6.1",
          "nrbRef": "6.1",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_8.2",
      "code": "Clause 8.2",
      "title": "Information security risk assessment (Operation)",
      "category": "Clauses",
      "theme": "Clause 8: Operation",
      "isMapped": true,
      "status": "full",
      "badge": "3 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.5",
          "nrbRef": "1.5",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.2",
          "nrbRef": "2.2",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-6.8",
          "nrbRef": "6.8",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_8.3",
      "code": "Clause 8.3",
      "title": "Information security risk treatment (Operation)",
      "category": "Clauses",
      "theme": "Clause 8: Operation",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-Clause_9.1",
      "code": "Clause 9.1",
      "title": "Monitoring, measurement, analysis and evaluation",
      "category": "Clauses",
      "theme": "Clause 9: Performance Evaluation",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.4",
          "nrbRef": "1.4",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_9.2.1",
      "code": "Clause 9.2.1",
      "title": "Internal audit - General",
      "category": "Clauses",
      "theme": "Clause 9: Performance Evaluation",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-8.5",
          "nrbRef": "8.5",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_9.2.2",
      "code": "Clause 9.2.2",
      "title": "Internal audit programme",
      "category": "Clauses",
      "theme": "Clause 9: Performance Evaluation",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-9.1",
          "nrbRef": "9.1",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-9.2",
          "nrbRef": "9.2",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_9.3.1",
      "code": "Clause 9.3.1",
      "title": "Management review - General",
      "category": "Clauses",
      "theme": "Clause 9: Performance Evaluation",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.4",
          "nrbRef": "1.4",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_9.3.2",
      "code": "Clause 9.3.2",
      "title": "Management review inputs",
      "category": "Clauses",
      "theme": "Clause 9: Performance Evaluation",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.4",
          "nrbRef": "1.4",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_9.3.3",
      "code": "Clause 9.3.3",
      "title": "Management review results",
      "category": "Clauses",
      "theme": "Clause 9: Performance Evaluation",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-Clause_10.1",
      "code": "Clause 10.1",
      "title": "Continual improvement",
      "category": "Clauses",
      "theme": "Clause 10: Improvement",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.22",
          "nrbRef": "2.22",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-Clause_10.2",
      "code": "Clause 10.2",
      "title": "Nonconformity and corrective action",
      "category": "Clauses",
      "theme": "Clause 10: Improvement",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.5.1",
      "code": "A.5.1",
      "title": "Policies for information security",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.1",
          "nrbRef": "1.1",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.1",
          "nrbRef": "2.1",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.2",
      "code": "A.5.2",
      "title": "Information security roles and responsibilities",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.2",
          "nrbRef": "1.2",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-1.8",
          "nrbRef": "1.8",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.3",
      "code": "A.5.3",
      "title": "Segregation of duties",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "4 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.23",
          "nrbRef": "2.23",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-2.24",
          "nrbRef": "2.24",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-6.2",
          "nrbRef": "6.2",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-6.3",
          "nrbRef": "6.3",
          "overlap": "Partial",
          "color": "#f59e0b"
        }
      ]
    },
    {
      "id": "ISO-A.5.4",
      "code": "A.5.4",
      "title": "Management responsibilities",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.5.5",
      "code": "A.5.5",
      "title": "Contact with authorities",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.5.6",
      "code": "A.5.6",
      "title": "Contact with special interest groups",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.5.7",
      "code": "A.5.7",
      "title": "Threat intelligence",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.22",
          "nrbRef": "2.22",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.8",
      "code": "A.5.8",
      "title": "Information security in project management",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.9",
          "nrbRef": "1.9",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.9",
      "code": "A.5.9",
      "title": "Inventory of information and other associated assets",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.18",
          "nrbRef": "2.18",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.10",
      "code": "A.5.10",
      "title": "Acceptable use of information and other associated assets",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.5.11",
      "code": "A.5.11",
      "title": "Return of assets",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.5.12",
      "code": "A.5.12",
      "title": "Classification of information",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.18",
          "nrbRef": "2.18",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.13",
      "code": "A.5.13",
      "title": "Labelling of information",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.5.14",
      "code": "A.5.14",
      "title": "Information transfer",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.5.15",
      "code": "A.5.15",
      "title": "Access control",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "3 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.4",
          "nrbRef": "2.4",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.16",
          "nrbRef": "2.16",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-2.18",
          "nrbRef": "2.18",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.16",
      "code": "A.5.16",
      "title": "Identity management",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.5.17",
      "code": "A.5.17",
      "title": "Authentication information",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.5.18",
      "code": "A.5.18",
      "title": "Access rights",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.4",
          "nrbRef": "2.4",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.19",
      "code": "A.5.19",
      "title": "Information security in supplier relationships",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "7 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.5",
          "nrbRef": "1.5",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-5.1",
          "nrbRef": "5.1",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-5.2",
          "nrbRef": "5.2",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-5.3",
          "nrbRef": "5.3",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-5.6",
          "nrbRef": "5.6",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-5.8",
          "nrbRef": "5.8",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-6.6",
          "nrbRef": "6.6",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.20",
      "code": "A.5.20",
      "title": "Addressing information security within supplier agreements",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "3 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-5.2",
          "nrbRef": "5.2",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-5.3",
          "nrbRef": "5.3",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-5.5",
          "nrbRef": "5.5",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.21",
      "code": "A.5.21",
      "title": "Managing information security in the ICT supply chain",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-5.6",
          "nrbRef": "5.6",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.22",
      "code": "A.5.22",
      "title": "Monitoring, review and change management of supplier services",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "4 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-5.2",
          "nrbRef": "5.2",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-5.5",
          "nrbRef": "5.5",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-5.7",
          "nrbRef": "5.7",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-5.10",
          "nrbRef": "5.10",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.23",
      "code": "A.5.23",
      "title": "Information security for use of cloud services",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.16",
          "nrbRef": "2.16",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-5.10",
          "nrbRef": "5.10",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.24",
      "code": "A.5.24",
      "title": "Information security incident management planning and preparation",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-8.1",
          "nrbRef": "8.1",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.12",
          "nrbRef": "8.12",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.25",
      "code": "A.5.25",
      "title": "Assessment and decision on information security events",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-8.12",
          "nrbRef": "8.12",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-10.1",
          "nrbRef": "10.1",
          "overlap": "Partial",
          "color": "#f59e0b"
        }
      ]
    },
    {
      "id": "ISO-A.5.26",
      "code": "A.5.26",
      "title": "Response to information security incidents",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-8.12",
          "nrbRef": "8.12",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-10.1",
          "nrbRef": "10.1",
          "overlap": "Partial",
          "color": "#f59e0b"
        }
      ]
    },
    {
      "id": "ISO-A.5.27",
      "code": "A.5.27",
      "title": "Learning from information security incidents",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.5.28",
      "code": "A.5.28",
      "title": "Collection of evidence",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.5.29",
      "code": "A.5.29",
      "title": "Information security during disruption",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "4 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-8.1",
          "nrbRef": "8.1",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.2",
          "nrbRef": "8.2",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-8.3",
          "nrbRef": "8.3",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.4",
          "nrbRef": "8.4",
          "overlap": "Partial",
          "color": "#f59e0b"
        }
      ]
    },
    {
      "id": "ISO-A.5.30",
      "code": "A.5.30",
      "title": "ICT readiness for business continuity",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "10 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-5.7",
          "nrbRef": "5.7",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-5.8",
          "nrbRef": "5.8",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-5.9",
          "nrbRef": "5.9",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-8.1",
          "nrbRef": "8.1",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.3",
          "nrbRef": "8.3",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.5",
          "nrbRef": "8.5",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.6",
          "nrbRef": "8.6",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.7",
          "nrbRef": "8.7",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.8",
          "nrbRef": "8.8",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.11",
          "nrbRef": "8.11",
          "overlap": "Partial",
          "color": "#f59e0b"
        }
      ]
    },
    {
      "id": "ISO-A.5.31",
      "code": "A.5.31",
      "title": "Legal, statutory, regulatory and contractual requirements",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.10",
          "nrbRef": "1.10",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.32",
      "code": "A.5.32",
      "title": "Intellectual property rights",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.5.33",
      "code": "A.5.33",
      "title": "Protection of records",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.12",
          "nrbRef": "2.12",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.5.34",
      "code": "A.5.34",
      "title": "Privacy and protection of PII",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "partial",
      "badge": "1 NRB Link (Partial)",
      "color": "#f59e0b",
      "connectedNrb": [
        {
          "nrbId": "NRB-4.2",
          "nrbRef": "4.2",
          "overlap": "Partial",
          "color": "#f59e0b"
        }
      ]
    },
    {
      "id": "ISO-A.5.35",
      "code": "A.5.35",
      "title": "Independent review of information security",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-9.1",
          "nrbRef": "9.1",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-9.2",
          "nrbRef": "9.2",
          "overlap": "Partial",
          "color": "#f59e0b"
        }
      ]
    },
    {
      "id": "ISO-A.5.36",
      "code": "A.5.36",
      "title": "Compliance with policies and standards for information security",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.5.37",
      "code": "A.5.37",
      "title": "Documented operating procedures",
      "category": "Annex A",
      "theme": "A.5 Organizational Controls",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.1",
          "nrbRef": "1.1",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-6.2",
          "nrbRef": "6.2",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.6.1",
      "code": "A.6.1",
      "title": "Screening",
      "category": "Annex A",
      "theme": "A.6 People Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.19",
          "nrbRef": "2.19",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.6.2",
      "code": "A.6.2",
      "title": "Terms and conditions of employment",
      "category": "Annex A",
      "theme": "A.6 People Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.3",
          "nrbRef": "2.3",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.6.3",
      "code": "A.6.3",
      "title": "Information security awareness, education and training",
      "category": "Annex A",
      "theme": "A.6 People Controls",
      "isMapped": true,
      "status": "full",
      "badge": "6 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.3",
          "nrbRef": "1.3",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.3",
          "nrbRef": "2.3",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-3.1",
          "nrbRef": "3.1",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-3.2",
          "nrbRef": "3.2",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-3.3",
          "nrbRef": "3.3",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-10.2",
          "nrbRef": "10.2",
          "overlap": "Partial",
          "color": "#f59e0b"
        }
      ]
    },
    {
      "id": "ISO-A.6.4",
      "code": "A.6.4",
      "title": "Disciplinary process",
      "category": "Annex A",
      "theme": "A.6 People Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.6.5",
      "code": "A.6.5",
      "title": "Responsibilities after termination or change of employment",
      "category": "Annex A",
      "theme": "A.6 People Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.6.6",
      "code": "A.6.6",
      "title": "Confidentiality or non-disclosure agreements",
      "category": "Annex A",
      "theme": "A.6 People Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.3",
          "nrbRef": "2.3",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.6.7",
      "code": "A.6.7",
      "title": "Remote working",
      "category": "Annex A",
      "theme": "A.6 People Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.6.8",
      "code": "A.6.8",
      "title": "Information security event reporting",
      "category": "Annex A",
      "theme": "A.6 People Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.7.1",
      "code": "A.7.1",
      "title": "Physical security perimeters",
      "category": "Annex A",
      "theme": "A.7 Physical Controls",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.5",
          "nrbRef": "2.5",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.10",
          "nrbRef": "8.10",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.7.2",
      "code": "A.7.2",
      "title": "Physical entry",
      "category": "Annex A",
      "theme": "A.7 Physical Controls",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.5",
          "nrbRef": "2.5",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.10",
          "nrbRef": "8.10",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.7.3",
      "code": "A.7.3",
      "title": "Securing offices, rooms and facilities",
      "category": "Annex A",
      "theme": "A.7 Physical Controls",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.5",
          "nrbRef": "2.5",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.10",
          "nrbRef": "8.10",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.7.4",
      "code": "A.7.4",
      "title": "Physical security monitoring",
      "category": "Annex A",
      "theme": "A.7 Physical Controls",
      "isMapped": true,
      "status": "full",
      "badge": "3 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.5",
          "nrbRef": "2.5",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.23",
          "nrbRef": "2.23",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-8.10",
          "nrbRef": "8.10",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.7.5",
      "code": "A.7.5",
      "title": "Protecting against physical and environmental threats",
      "category": "Annex A",
      "theme": "A.7 Physical Controls",
      "isMapped": true,
      "status": "full",
      "badge": "3 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.5",
          "nrbRef": "2.5",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.8",
          "nrbRef": "8.8",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.10",
          "nrbRef": "8.10",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.7.6",
      "code": "A.7.6",
      "title": "Working in secure areas",
      "category": "Annex A",
      "theme": "A.7 Physical Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.7.7",
      "code": "A.7.7",
      "title": "Clear desk and clear screen",
      "category": "Annex A",
      "theme": "A.7 Physical Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.7.8",
      "code": "A.7.8",
      "title": "Equipment siting and protection",
      "category": "Annex A",
      "theme": "A.7 Physical Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.20",
          "nrbRef": "2.20",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.7.9",
      "code": "A.7.9",
      "title": "Security of assets off-premises",
      "category": "Annex A",
      "theme": "A.7 Physical Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.7.10",
      "code": "A.7.10",
      "title": "Storage media",
      "category": "Annex A",
      "theme": "A.7 Physical Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.20",
          "nrbRef": "2.20",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.7.11",
      "code": "A.7.11",
      "title": "Supporting utilities",
      "category": "Annex A",
      "theme": "A.7 Physical Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-8.8",
          "nrbRef": "8.8",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.7.12",
      "code": "A.7.12",
      "title": "Cabling security",
      "category": "Annex A",
      "theme": "A.7 Physical Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.7.13",
      "code": "A.7.13",
      "title": "Equipment maintenance",
      "category": "Annex A",
      "theme": "A.7 Physical Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.7.14",
      "code": "A.7.14",
      "title": "Secure disposal or re-use of equipment",
      "category": "Annex A",
      "theme": "A.7 Physical Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.20",
          "nrbRef": "2.20",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.8.1",
      "code": "A.8.1",
      "title": "User endpoint devices",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "partial",
      "badge": "1 NRB Link (Partial)",
      "color": "#f59e0b",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.28",
          "nrbRef": "2.28",
          "overlap": "Partial",
          "color": "#f59e0b"
        }
      ]
    },
    {
      "id": "ISO-A.8.2",
      "code": "A.8.2",
      "title": "Privileged access rights",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "3 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.4",
          "nrbRef": "2.4",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-6.3",
          "nrbRef": "6.3",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-6.6",
          "nrbRef": "6.6",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.8.3",
      "code": "A.8.3",
      "title": "Information access restriction",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-6.2",
          "nrbRef": "6.2",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.8.4",
      "code": "A.8.4",
      "title": "Access to source code",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "partial",
      "badge": "2 NRB Links (Partial)",
      "color": "#f59e0b",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.15",
          "nrbRef": "2.15",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-5.9",
          "nrbRef": "5.9",
          "overlap": "Partial",
          "color": "#f59e0b"
        }
      ]
    },
    {
      "id": "ISO-A.8.5",
      "code": "A.8.5",
      "title": "Secure authentication",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "4 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.11",
          "nrbRef": "2.11",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.27",
          "nrbRef": "2.27",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-2.29",
          "nrbRef": "2.29",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-3.3",
          "nrbRef": "3.3",
          "overlap": "Partial",
          "color": "#f59e0b"
        }
      ]
    },
    {
      "id": "ISO-A.8.6",
      "code": "A.8.6",
      "title": "Capacity management",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-6.7",
          "nrbRef": "6.7",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.8.7",
      "code": "A.8.7",
      "title": "Protection against malware",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.8",
          "nrbRef": "2.8",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.23",
          "nrbRef": "2.23",
          "overlap": "Partial",
          "color": "#f59e0b"
        }
      ]
    },
    {
      "id": "ISO-A.8.8",
      "code": "A.8.8",
      "title": "Management of technical vulnerabilities",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "2 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.6",
          "nrbRef": "2.6",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.7",
          "nrbRef": "2.7",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.8.9",
      "code": "A.8.9",
      "title": "Configuration management",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "3 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.7",
          "nrbRef": "2.7",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.14",
          "nrbRef": "2.14",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-6.2",
          "nrbRef": "6.2",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.8.10",
      "code": "A.8.10",
      "title": "Information deletion",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.8.11",
      "code": "A.8.11",
      "title": "Data masking",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.8.12",
      "code": "A.8.12",
      "title": "Data leakage prevention",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.8.13",
      "code": "A.8.13",
      "title": "Information backup",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.8.14",
      "code": "A.8.14",
      "title": "Redundancy of information processing facilities",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "3 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-6.7",
          "nrbRef": "6.7",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.8",
          "nrbRef": "8.8",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-8.9",
          "nrbRef": "8.9",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.8.15",
      "code": "A.8.15",
      "title": "Logging",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "4 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.4",
          "nrbRef": "2.4",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.12",
          "nrbRef": "2.12",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-6.5",
          "nrbRef": "6.5",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-7.3",
          "nrbRef": "7.3",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.8.16",
      "code": "A.8.16",
      "title": "Monitoring activities",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.8.17",
      "code": "A.8.17",
      "title": "Clock synchronization",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.8.18",
      "code": "A.8.18",
      "title": "Use of privileged utility programs",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.8.19",
      "code": "A.8.19",
      "title": "Installation of software on operational systems",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.8.20",
      "code": "A.8.20",
      "title": "Networks security",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "3 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.10",
          "nrbRef": "2.10",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.21",
          "nrbRef": "2.21",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-2.23",
          "nrbRef": "2.23",
          "overlap": "Partial",
          "color": "#f59e0b"
        }
      ]
    },
    {
      "id": "ISO-A.8.21",
      "code": "A.8.21",
      "title": "Security of network services",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.10",
          "nrbRef": "2.10",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.8.22",
      "code": "A.8.22",
      "title": "Segregation of networks",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.8.23",
      "code": "A.8.23",
      "title": "Web filtering",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.8.24",
      "code": "A.8.24",
      "title": "Use of cryptography",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "5 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.9",
          "nrbRef": "2.9",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.20",
          "nrbRef": "2.20",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.23",
          "nrbRef": "2.23",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-2.28",
          "nrbRef": "2.28",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-2.30",
          "nrbRef": "2.30",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.8.25",
      "code": "A.8.25",
      "title": "Secure development life cycle",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-7.2",
          "nrbRef": "7.2",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.8.26",
      "code": "A.8.26",
      "title": "Application security requirements",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "3 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.13",
          "nrbRef": "2.13",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.30",
          "nrbRef": "2.30",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-7.1",
          "nrbRef": "7.1",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.8.27",
      "code": "A.8.27",
      "title": "Secure system architecture and engineering principles",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "1 NRB Link",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-7.2",
          "nrbRef": "7.2",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.8.28",
      "code": "A.8.28",
      "title": "Secure coding",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "partial",
      "badge": "1 NRB Link (Partial)",
      "color": "#f59e0b",
      "connectedNrb": [
        {
          "nrbId": "NRB-7.4",
          "nrbRef": "7.4",
          "overlap": "Partial",
          "color": "#f59e0b"
        }
      ]
    },
    {
      "id": "ISO-A.8.29",
      "code": "A.8.29",
      "title": "Security testing in development and acceptance",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "4 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-1.9",
          "nrbRef": "1.9",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.6",
          "nrbRef": "2.6",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-2.13",
          "nrbRef": "2.13",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-7.4",
          "nrbRef": "7.4",
          "overlap": "Full",
          "color": "#10b981"
        }
      ]
    },
    {
      "id": "ISO-A.8.30",
      "code": "A.8.30",
      "title": "Outsourced development",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.8.31",
      "code": "A.8.31",
      "title": "Separation of development, test and production environments",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.8.32",
      "code": "A.8.32",
      "title": "Change management",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": true,
      "status": "full",
      "badge": "5 NRB Links",
      "color": "#10b981",
      "connectedNrb": [
        {
          "nrbId": "NRB-2.15",
          "nrbRef": "2.15",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-2.16",
          "nrbRef": "2.16",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-2.17",
          "nrbRef": "2.17",
          "overlap": "Partial",
          "color": "#f59e0b"
        },
        {
          "nrbId": "NRB-6.4",
          "nrbRef": "6.4",
          "overlap": "Full",
          "color": "#10b981"
        },
        {
          "nrbId": "NRB-6.5",
          "nrbRef": "6.5",
          "overlap": "Partial",
          "color": "#f59e0b"
        }
      ]
    },
    {
      "id": "ISO-A.8.33",
      "code": "A.8.33",
      "title": "Test information",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    },
    {
      "id": "ISO-A.8.34",
      "code": "A.8.34",
      "title": "Protection of information systems during audit testing",
      "category": "Annex A",
      "theme": "A.8 Technological Controls",
      "isMapped": false,
      "status": "unmapped",
      "badge": "Not Mapped in NRB",
      "color": "#64748b",
      "connectedNrb": []
    }
  ],
  "links": [
    {
      "source": "NRB-1.1",
      "target": "ISO-Clause_5.1",
      "isoCode": "Clause 5.1",
      "nrbRef": "1.1",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-1.1",
      "target": "ISO-Clause_5.2",
      "isoCode": "Clause 5.2",
      "nrbRef": "1.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.1",
      "target": "ISO-A.5.1",
      "isoCode": "A.5.1",
      "nrbRef": "1.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.1",
      "target": "ISO-A.5.37",
      "isoCode": "A.5.37",
      "nrbRef": "1.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.2",
      "target": "ISO-Clause_5.3",
      "isoCode": "Clause 5.3",
      "nrbRef": "1.2",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.2",
      "target": "ISO-A.5.2",
      "isoCode": "A.5.2",
      "nrbRef": "1.2",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.3",
      "target": "ISO-Clause_7.2",
      "isoCode": "Clause 7.2",
      "nrbRef": "1.3",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.3",
      "target": "ISO-A.6.3",
      "isoCode": "A.6.3",
      "nrbRef": "1.3",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.4",
      "target": "ISO-Clause_9.1",
      "isoCode": "Clause 9.1",
      "nrbRef": "1.4",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.4",
      "target": "ISO-Clause_9.3.1",
      "isoCode": "Clause 9.3.1",
      "nrbRef": "1.4",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.4",
      "target": "ISO-Clause_9.3.2",
      "isoCode": "Clause 9.3.2",
      "nrbRef": "1.4",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.5",
      "target": "ISO-Clause_6.1.1",
      "isoCode": "Clause 6.1.1",
      "nrbRef": "1.5",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.5",
      "target": "ISO-Clause_6.1.2",
      "isoCode": "Clause 6.1.2",
      "nrbRef": "1.5",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.5",
      "target": "ISO-Clause_6.1.3",
      "isoCode": "Clause 6.1.3",
      "nrbRef": "1.5",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.5",
      "target": "ISO-Clause_8.2",
      "isoCode": "Clause 8.2",
      "nrbRef": "1.5",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.5",
      "target": "ISO-A.5.19",
      "isoCode": "A.5.19",
      "nrbRef": "1.5",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.7",
      "target": "ISO-Clause_5.1",
      "isoCode": "Clause 5.1",
      "nrbRef": "1.7",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.8",
      "target": "ISO-Clause_5.3",
      "isoCode": "Clause 5.3",
      "nrbRef": "1.8",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.8",
      "target": "ISO-A.5.2",
      "isoCode": "A.5.2",
      "nrbRef": "1.8",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.9",
      "target": "ISO-A.5.8",
      "isoCode": "A.5.8",
      "nrbRef": "1.9",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.9",
      "target": "ISO-Clause_6.1.2",
      "isoCode": "Clause 6.1.2",
      "nrbRef": "1.9",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.9",
      "target": "ISO-Clause_6.1.3",
      "isoCode": "Clause 6.1.3",
      "nrbRef": "1.9",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.9",
      "target": "ISO-A.8.29",
      "isoCode": "A.8.29",
      "nrbRef": "1.9",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-1.10",
      "target": "ISO-A.5.31",
      "isoCode": "A.5.31",
      "nrbRef": "1.10",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.1",
      "target": "ISO-A.5.1",
      "isoCode": "A.5.1",
      "nrbRef": "2.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.1",
      "target": "ISO-Clause_5.2",
      "isoCode": "Clause 5.2",
      "nrbRef": "2.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.2",
      "target": "ISO-Clause_6.1.2",
      "isoCode": "Clause 6.1.2",
      "nrbRef": "2.2",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.2",
      "target": "ISO-Clause_8.2",
      "isoCode": "Clause 8.2",
      "nrbRef": "2.2",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.3",
      "target": "ISO-Clause_7.3",
      "isoCode": "Clause 7.3",
      "nrbRef": "2.3",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.3",
      "target": "ISO-A.6.2",
      "isoCode": "A.6.2",
      "nrbRef": "2.3",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.3",
      "target": "ISO-A.6.3",
      "isoCode": "A.6.3",
      "nrbRef": "2.3",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.3",
      "target": "ISO-A.6.6",
      "isoCode": "A.6.6",
      "nrbRef": "2.3",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.4",
      "target": "ISO-A.5.15",
      "isoCode": "A.5.15",
      "nrbRef": "2.4",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.4",
      "target": "ISO-A.5.18",
      "isoCode": "A.5.18",
      "nrbRef": "2.4",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.4",
      "target": "ISO-A.8.2",
      "isoCode": "A.8.2",
      "nrbRef": "2.4",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.4",
      "target": "ISO-A.8.15",
      "isoCode": "A.8.15",
      "nrbRef": "2.4",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.5",
      "target": "ISO-A.7.1",
      "isoCode": "A.7.1",
      "nrbRef": "2.5",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.5",
      "target": "ISO-A.7.2",
      "isoCode": "A.7.2",
      "nrbRef": "2.5",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.5",
      "target": "ISO-A.7.3",
      "isoCode": "A.7.3",
      "nrbRef": "2.5",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.5",
      "target": "ISO-A.7.4",
      "isoCode": "A.7.4",
      "nrbRef": "2.5",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.5",
      "target": "ISO-A.7.5",
      "isoCode": "A.7.5",
      "nrbRef": "2.5",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.6",
      "target": "ISO-A.8.8",
      "isoCode": "A.8.8",
      "nrbRef": "2.6",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.6",
      "target": "ISO-A.8.29",
      "isoCode": "A.8.29",
      "nrbRef": "2.6",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.7",
      "target": "ISO-A.8.8",
      "isoCode": "A.8.8",
      "nrbRef": "2.7",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.7",
      "target": "ISO-A.8.9",
      "isoCode": "A.8.9",
      "nrbRef": "2.7",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.8",
      "target": "ISO-A.8.7",
      "isoCode": "A.8.7",
      "nrbRef": "2.8",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.9",
      "target": "ISO-A.8.24",
      "isoCode": "A.8.24",
      "nrbRef": "2.9",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.10",
      "target": "ISO-A.8.20",
      "isoCode": "A.8.20",
      "nrbRef": "2.10",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.10",
      "target": "ISO-A.8.21",
      "isoCode": "A.8.21",
      "nrbRef": "2.10",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.11",
      "target": "ISO-A.8.5",
      "isoCode": "A.8.5",
      "nrbRef": "2.11",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.12",
      "target": "ISO-A.8.15",
      "isoCode": "A.8.15",
      "nrbRef": "2.12",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.12",
      "target": "ISO-A.5.33",
      "isoCode": "A.5.33",
      "nrbRef": "2.12",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.13",
      "target": "ISO-A.8.26",
      "isoCode": "A.8.26",
      "nrbRef": "2.13",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.13",
      "target": "ISO-A.8.29",
      "isoCode": "A.8.29",
      "nrbRef": "2.13",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.14",
      "target": "ISO-A.8.9",
      "isoCode": "A.8.9",
      "nrbRef": "2.14",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.15",
      "target": "ISO-A.8.32",
      "isoCode": "A.8.32",
      "nrbRef": "2.15",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.15",
      "target": "ISO-A.8.4",
      "isoCode": "A.8.4",
      "nrbRef": "2.15",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.16",
      "target": "ISO-A.5.23",
      "isoCode": "A.5.23",
      "nrbRef": "2.16",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.16",
      "target": "ISO-A.5.15",
      "isoCode": "A.5.15",
      "nrbRef": "2.16",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.16",
      "target": "ISO-A.8.32",
      "isoCode": "A.8.32",
      "nrbRef": "2.16",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.17",
      "target": "ISO-A.8.32",
      "isoCode": "A.8.32",
      "nrbRef": "2.17",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.18",
      "target": "ISO-A.5.9",
      "isoCode": "A.5.9",
      "nrbRef": "2.18",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.18",
      "target": "ISO-A.5.12",
      "isoCode": "A.5.12",
      "nrbRef": "2.18",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.18",
      "target": "ISO-A.5.15",
      "isoCode": "A.5.15",
      "nrbRef": "2.18",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.19",
      "target": "ISO-A.6.1",
      "isoCode": "A.6.1",
      "nrbRef": "2.19",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.20",
      "target": "ISO-A.7.8",
      "isoCode": "A.7.8",
      "nrbRef": "2.20",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.20",
      "target": "ISO-A.7.10",
      "isoCode": "A.7.10",
      "nrbRef": "2.20",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.20",
      "target": "ISO-A.7.14",
      "isoCode": "A.7.14",
      "nrbRef": "2.20",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.20",
      "target": "ISO-A.8.24",
      "isoCode": "A.8.24",
      "nrbRef": "2.20",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.21",
      "target": "ISO-A.8.20",
      "isoCode": "A.8.20",
      "nrbRef": "2.21",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.22",
      "target": "ISO-A.5.7",
      "isoCode": "A.5.7",
      "nrbRef": "2.22",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.22",
      "target": "ISO-Clause_10.1",
      "isoCode": "Clause 10.1",
      "nrbRef": "2.22",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.23",
      "target": "ISO-A.5.3",
      "isoCode": "A.5.3",
      "nrbRef": "2.23",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.23",
      "target": "ISO-A.7.4",
      "isoCode": "A.7.4",
      "nrbRef": "2.23",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.23",
      "target": "ISO-A.8.7",
      "isoCode": "A.8.7",
      "nrbRef": "2.23",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.23",
      "target": "ISO-A.8.20",
      "isoCode": "A.8.20",
      "nrbRef": "2.23",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.23",
      "target": "ISO-A.8.24",
      "isoCode": "A.8.24",
      "nrbRef": "2.23",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.24",
      "target": "ISO-A.5.3",
      "isoCode": "A.5.3",
      "nrbRef": "2.24",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.27",
      "target": "ISO-A.8.5",
      "isoCode": "A.8.5",
      "nrbRef": "2.27",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.28",
      "target": "ISO-A.8.1",
      "isoCode": "A.8.1",
      "nrbRef": "2.28",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.28",
      "target": "ISO-A.8.24",
      "isoCode": "A.8.24",
      "nrbRef": "2.28",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-2.29",
      "target": "ISO-A.8.5",
      "isoCode": "A.8.5",
      "nrbRef": "2.29",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.30",
      "target": "ISO-A.8.26",
      "isoCode": "A.8.26",
      "nrbRef": "2.30",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-2.30",
      "target": "ISO-A.8.24",
      "isoCode": "A.8.24",
      "nrbRef": "2.30",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-3.1",
      "target": "ISO-A.6.3",
      "isoCode": "A.6.3",
      "nrbRef": "3.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-3.1",
      "target": "ISO-Clause_7.3",
      "isoCode": "Clause 7.3",
      "nrbRef": "3.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-3.2",
      "target": "ISO-A.6.3",
      "isoCode": "A.6.3",
      "nrbRef": "3.2",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-3.3",
      "target": "ISO-A.8.5",
      "isoCode": "A.8.5",
      "nrbRef": "3.3",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-3.3",
      "target": "ISO-A.6.3",
      "isoCode": "A.6.3",
      "nrbRef": "3.3",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-4.2",
      "target": "ISO-A.5.34",
      "isoCode": "A.5.34",
      "nrbRef": "4.2",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-5.1",
      "target": "ISO-A.5.19",
      "isoCode": "A.5.19",
      "nrbRef": "5.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-5.2",
      "target": "ISO-A.5.19",
      "isoCode": "A.5.19",
      "nrbRef": "5.2",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-5.2",
      "target": "ISO-A.5.20",
      "isoCode": "A.5.20",
      "nrbRef": "5.2",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-5.2",
      "target": "ISO-A.5.22",
      "isoCode": "A.5.22",
      "nrbRef": "5.2",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-5.3",
      "target": "ISO-A.5.20",
      "isoCode": "A.5.20",
      "nrbRef": "5.3",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-5.3",
      "target": "ISO-A.5.19",
      "isoCode": "A.5.19",
      "nrbRef": "5.3",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-5.5",
      "target": "ISO-A.5.20",
      "isoCode": "A.5.20",
      "nrbRef": "5.5",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-5.5",
      "target": "ISO-A.5.22",
      "isoCode": "A.5.22",
      "nrbRef": "5.5",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-5.6",
      "target": "ISO-A.5.21",
      "isoCode": "A.5.21",
      "nrbRef": "5.6",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-5.6",
      "target": "ISO-A.5.19",
      "isoCode": "A.5.19",
      "nrbRef": "5.6",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-5.7",
      "target": "ISO-A.5.22",
      "isoCode": "A.5.22",
      "nrbRef": "5.7",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-5.7",
      "target": "ISO-A.5.30",
      "isoCode": "A.5.30",
      "nrbRef": "5.7",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-5.8",
      "target": "ISO-A.5.19",
      "isoCode": "A.5.19",
      "nrbRef": "5.8",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-5.8",
      "target": "ISO-A.5.30",
      "isoCode": "A.5.30",
      "nrbRef": "5.8",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-5.9",
      "target": "ISO-A.8.4",
      "isoCode": "A.8.4",
      "nrbRef": "5.9",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-5.9",
      "target": "ISO-A.5.30",
      "isoCode": "A.5.30",
      "nrbRef": "5.9",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-5.10",
      "target": "ISO-A.5.22",
      "isoCode": "A.5.22",
      "nrbRef": "5.10",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-5.10",
      "target": "ISO-A.5.23",
      "isoCode": "A.5.23",
      "nrbRef": "5.10",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-6.1",
      "target": "ISO-Clause_5.1",
      "isoCode": "Clause 5.1",
      "nrbRef": "6.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-6.1",
      "target": "ISO-Clause_8.1",
      "isoCode": "Clause 8.1",
      "nrbRef": "6.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-6.2",
      "target": "ISO-A.5.3",
      "isoCode": "A.5.3",
      "nrbRef": "6.2",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-6.2",
      "target": "ISO-A.5.37",
      "isoCode": "A.5.37",
      "nrbRef": "6.2",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-6.2",
      "target": "ISO-A.8.3",
      "isoCode": "A.8.3",
      "nrbRef": "6.2",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-6.2",
      "target": "ISO-A.8.9",
      "isoCode": "A.8.9",
      "nrbRef": "6.2",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-6.3",
      "target": "ISO-A.5.3",
      "isoCode": "A.5.3",
      "nrbRef": "6.3",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-6.3",
      "target": "ISO-A.8.2",
      "isoCode": "A.8.2",
      "nrbRef": "6.3",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-6.4",
      "target": "ISO-A.8.32",
      "isoCode": "A.8.32",
      "nrbRef": "6.4",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-6.5",
      "target": "ISO-A.8.32",
      "isoCode": "A.8.32",
      "nrbRef": "6.5",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-6.5",
      "target": "ISO-A.8.15",
      "isoCode": "A.8.15",
      "nrbRef": "6.5",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-6.6",
      "target": "ISO-A.5.19",
      "isoCode": "A.5.19",
      "nrbRef": "6.6",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-6.6",
      "target": "ISO-A.8.2",
      "isoCode": "A.8.2",
      "nrbRef": "6.6",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-6.7",
      "target": "ISO-A.8.6",
      "isoCode": "A.8.6",
      "nrbRef": "6.7",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-6.7",
      "target": "ISO-A.8.14",
      "isoCode": "A.8.14",
      "nrbRef": "6.7",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-6.8",
      "target": "ISO-Clause_6.1.2",
      "isoCode": "Clause 6.1.2",
      "nrbRef": "6.8",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-6.8",
      "target": "ISO-Clause_6.1.3",
      "isoCode": "Clause 6.1.3",
      "nrbRef": "6.8",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-6.8",
      "target": "ISO-Clause_8.2",
      "isoCode": "Clause 8.2",
      "nrbRef": "6.8",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-7.1",
      "target": "ISO-A.8.26",
      "isoCode": "A.8.26",
      "nrbRef": "7.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-7.2",
      "target": "ISO-A.8.25",
      "isoCode": "A.8.25",
      "nrbRef": "7.2",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-7.2",
      "target": "ISO-A.8.27",
      "isoCode": "A.8.27",
      "nrbRef": "7.2",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-7.3",
      "target": "ISO-A.8.15",
      "isoCode": "A.8.15",
      "nrbRef": "7.3",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-7.4",
      "target": "ISO-A.8.28",
      "isoCode": "A.8.28",
      "nrbRef": "7.4",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-7.4",
      "target": "ISO-A.8.29",
      "isoCode": "A.8.29",
      "nrbRef": "7.4",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.1",
      "target": "ISO-A.5.24",
      "isoCode": "A.5.24",
      "nrbRef": "8.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.1",
      "target": "ISO-A.5.29",
      "isoCode": "A.5.29",
      "nrbRef": "8.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.1",
      "target": "ISO-A.5.30",
      "isoCode": "A.5.30",
      "nrbRef": "8.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.2",
      "target": "ISO-A.5.29",
      "isoCode": "A.5.29",
      "nrbRef": "8.2",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-8.3",
      "target": "ISO-A.5.29",
      "isoCode": "A.5.29",
      "nrbRef": "8.3",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.3",
      "target": "ISO-A.5.30",
      "isoCode": "A.5.30",
      "nrbRef": "8.3",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.4",
      "target": "ISO-A.5.29",
      "isoCode": "A.5.29",
      "nrbRef": "8.4",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-8.5",
      "target": "ISO-A.5.30",
      "isoCode": "A.5.30",
      "nrbRef": "8.5",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.5",
      "target": "ISO-Clause_9.2.1",
      "isoCode": "Clause 9.2.1",
      "nrbRef": "8.5",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.6",
      "target": "ISO-A.5.30",
      "isoCode": "A.5.30",
      "nrbRef": "8.6",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.7",
      "target": "ISO-A.5.30",
      "isoCode": "A.5.30",
      "nrbRef": "8.7",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.8",
      "target": "ISO-A.5.30",
      "isoCode": "A.5.30",
      "nrbRef": "8.8",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.8",
      "target": "ISO-A.7.5",
      "isoCode": "A.7.5",
      "nrbRef": "8.8",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.8",
      "target": "ISO-A.7.11",
      "isoCode": "A.7.11",
      "nrbRef": "8.8",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.8",
      "target": "ISO-A.8.14",
      "isoCode": "A.8.14",
      "nrbRef": "8.8",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.9",
      "target": "ISO-A.8.14",
      "isoCode": "A.8.14",
      "nrbRef": "8.9",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.10",
      "target": "ISO-A.7.1",
      "isoCode": "A.7.1",
      "nrbRef": "8.10",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.10",
      "target": "ISO-A.7.2",
      "isoCode": "A.7.2",
      "nrbRef": "8.10",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.10",
      "target": "ISO-A.7.3",
      "isoCode": "A.7.3",
      "nrbRef": "8.10",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.10",
      "target": "ISO-A.7.4",
      "isoCode": "A.7.4",
      "nrbRef": "8.10",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.10",
      "target": "ISO-A.7.5",
      "isoCode": "A.7.5",
      "nrbRef": "8.10",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.11",
      "target": "ISO-A.5.30",
      "isoCode": "A.5.30",
      "nrbRef": "8.11",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-8.12",
      "target": "ISO-A.5.24",
      "isoCode": "A.5.24",
      "nrbRef": "8.12",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.12",
      "target": "ISO-A.5.25",
      "isoCode": "A.5.25",
      "nrbRef": "8.12",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-8.12",
      "target": "ISO-A.5.26",
      "isoCode": "A.5.26",
      "nrbRef": "8.12",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-9.1",
      "target": "ISO-Clause_9.2.2",
      "isoCode": "Clause 9.2.2",
      "nrbRef": "9.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-9.1",
      "target": "ISO-A.5.35",
      "isoCode": "A.5.35",
      "nrbRef": "9.1",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-9.2",
      "target": "ISO-Clause_9.2.2",
      "isoCode": "Clause 9.2.2",
      "nrbRef": "9.2",
      "overlap": "Full",
      "color": "#10b981"
    },
    {
      "source": "NRB-9.2",
      "target": "ISO-A.5.35",
      "isoCode": "A.5.35",
      "nrbRef": "9.2",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-10.1",
      "target": "ISO-A.5.25",
      "isoCode": "A.5.25",
      "nrbRef": "10.1",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-10.1",
      "target": "ISO-A.5.26",
      "isoCode": "A.5.26",
      "nrbRef": "10.1",
      "overlap": "Partial",
      "color": "#f59e0b"
    },
    {
      "source": "NRB-10.2",
      "target": "ISO-A.6.3",
      "isoCode": "A.6.3",
      "nrbRef": "10.2",
      "overlap": "Partial",
      "color": "#f59e0b"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.MAPPING_DATA = MAPPING_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MAPPING_DATA;
}
