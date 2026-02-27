// TypeScript interfaces for all data types

export type RAGStatus = 'green' | 'amber' | 'red';
export type ActionStatus = 'open' | 'overdue' | 'complete';
export type DocumentStatus = 'draft' | 'approved';
export type RiskSeverity = 'low' | 'medium' | 'high';

export interface Programme {
  id: string;
  name: string;
  emoji: string;
  rag: RAGStatus;
  sro: string;
  pm: string;
  workstreamCount: number;
  openActions: number;
  risks: number;
  subtitle?: string;
  lastUpdated?: string;
}

export interface Action {
  id?: string;
  description: string;
  programme: string;
  owner: string;
  due: string;
  status: ActionStatus;
}

export interface Risk {
  id: string;
  description: string;
  category: string;
  owner: string;
  score: number;
  rag: RiskSeverity;
  source: string;
}

export interface Milestone {
  name: string;
  dueDate: string;
  owner: string;
  rag: RAGStatus | 'complete';
  notes: string;
}

export interface Meeting {
  date: string;
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  attendees: number;
  status: 'upcoming' | 'completed';
  hasAiMinutes?: boolean;
  agendaPending?: boolean;
  dateBlockColor?: string;
  dayColor?: string;
}

export interface Document {
  id: string;
  icon: string;
  name: string;
  updatedDate: string;
  updatedBy: string;
  status: DocumentStatus;
}

export interface Stakeholder {
  name: string;
  organisation: string;
  role: string;
  interest: 'Low' | 'Medium' | 'High';
  influence: 'Low' | 'Medium' | 'High';
  engagement: RAGStatus;
}

export interface Workstream {
  id: string;
  name: string;
  lead: string;
  taskCount: number;
  progress: number;
  rag: RAGStatus;
}

export interface PortfolioStats {
  activeProgrammes: number;
  activeProgrammesSub: string;
  openActions: number;
  openActionsSub: string;
  openRisks: number;
  openRisksSub: string;
  milestones: number;
  milestonesSub: string;
}

export interface ProgrammeStats {
  overall: string;
  overallSub: string;
  openActions: number;
  openActionsSub: string;
  openRisks: number;
  openRisksSub: string;
  nextMilestone: string;
  nextMilestoneSub: string;
}

// Mock data
export const programmes: Programme[] = [
  {
    id: 'gastro',
    name: 'Gastroenterology',
    emoji: '🫀',
    rag: 'amber',
    sro: 'Dr Sarah Chen',
    pm: 'Izabela Holdsworth',
    workstreamCount: 4,
    openActions: 7,
    risks: 4,
    subtitle: 'SRO: Dr Sarah Chen · Programme Manager: Izabela Holdsworth · Last updated: 25 Feb 2026'
  },
  {
    id: 'urology',
    name: 'Urology',
    emoji: '⚕️',
    rag: 'green',
    sro: 'Mr James Walsh',
    pm: 'Tom Bridges',
    workstreamCount: 3,
    openActions: 3,
    risks: 2
  },
  {
    id: 'ent',
    name: 'ENT',
    emoji: '👂',
    rag: 'green',
    sro: 'Dr Priya Sharma',
    pm: 'Alex Turner',
    workstreamCount: 3,
    openActions: 4,
    risks: 1
  },
  {
    id: 'cardio',
    name: 'Cardiology',
    emoji: '❤️',
    rag: 'red',
    sro: 'Prof Michael Hart',
    pm: 'Sam Okafor',
    workstreamCount: 5,
    openActions: 9,
    risks: 5
  },
  {
    id: 'resp',
    name: 'Respiratory',
    emoji: '🫁',
    rag: 'amber',
    sro: 'Dr Fatima Al-Hassan',
    pm: 'Laura Kim',
    workstreamCount: 4,
    openActions: 6,
    risks: 3
  }
];

export const portfolioStats: PortfolioStats = {
  activeProgrammes: 5,
  activeProgrammesSub: 'Across 5 specialties',
  openActions: 23,
  openActionsSub: '6 overdue',
  openRisks: 12,
  openRisksSub: '3 high severity',
  milestones: 8,
  milestonesSub: '6 on track'
};

export const overdueActions: Action[] = [
  {
    description: 'Submit revised capacity model to finance',
    programme: 'Cardiology',
    owner: 'Sam Okafor',
    due: '05 Feb',
    status: 'overdue'
  },
  {
    description: 'Update patient pathway mapping document',
    programme: 'Gastroenterology',
    owner: 'Izabela Holdsworth',
    due: '10 Feb',
    status: 'overdue'
  },
  {
    description: 'Confirm data sharing agreement with ICB',
    programme: 'Cardiology',
    owner: 'Prof Michael Hart',
    due: '12 Feb',
    status: 'overdue'
  },
  {
    description: 'Review and sign-off PID v2',
    programme: 'Respiratory',
    owner: 'Dr Fatima Al-Hassan',
    due: '14 Feb',
    status: 'overdue'
  },
  {
    description: 'Complete workforce skills gap analysis',
    programme: 'Cardiology',
    owner: 'HR Business Partner',
    due: '17 Feb',
    status: 'overdue'
  },
  {
    description: 'Circulate draft comms plan to stakeholders',
    programme: 'Gastroenterology',
    owner: 'Comms Lead',
    due: '19 Feb',
    status: 'overdue'
  }
];

export const gastroStats: ProgrammeStats = {
  overall: '🟡 AMBER',
  overallSub: 'Schedule risk — see risks',
  openActions: 7,
  openActionsSub: '2 overdue',
  openRisks: 4,
  openRisksSub: '1 high severity',
  nextMilestone: 'Gateway 2',
  nextMilestoneSub: '15 March 2026'
};

export const gastroDocuments: Document[] = [
  {
    id: 'doc-1',
    icon: '📋',
    name: 'Project Initiation Document (PID) v2.1',
    updatedDate: '10 Feb 2026',
    updatedBy: 'I. Morgan',
    status: 'approved'
  },
  {
    id: 'doc-2',
    icon: '📝',
    name: 'Programme Brief',
    updatedDate: '03 Jan 2026',
    updatedBy: 'I. Morgan',
    status: 'approved'
  },
  {
    id: 'doc-3',
    icon: '💼',
    name: 'Business Case',
    updatedDate: '15 Dec 2025',
    updatedBy: 'Dr S. Chen',
    status: 'approved'
  },
  {
    id: 'doc-4',
    icon: '📊',
    name: 'Benefits Realisation Framework',
    updatedDate: '20 Feb 2026',
    updatedBy: 'I. Morgan',
    status: 'draft'
  },
  {
    id: 'doc-5',
    icon: '🗺️',
    name: 'Patient Pathway Map v1.3',
    updatedDate: '18 Feb 2026',
    updatedBy: 'Clinical Lead',
    status: 'draft'
  },
  {
    id: 'doc-6',
    icon: '📞',
    name: 'Stakeholder Communications Plan',
    updatedDate: '22 Jan 2026',
    updatedBy: 'Comms Team',
    status: 'draft'
  }
];

export const gastroMilestones: Milestone[] = [
  {
    name: 'Programme Initiation',
    dueDate: '15 Nov 2025',
    owner: 'I. Morgan',
    rag: 'complete',
    notes: 'PID approved by SRO'
  },
  {
    name: 'Discovery Phase Complete',
    dueDate: '31 Jan 2026',
    owner: 'I. Morgan',
    rag: 'complete',
    notes: 'All pathway mapping done'
  },
  {
    name: 'Gateway Review 2',
    dueDate: '15 Mar 2026',
    owner: 'Dr S. Chen',
    rag: 'amber',
    notes: 'Benefits framework not yet approved'
  },
  {
    name: 'Pilot Site Go-Live',
    dueDate: '01 May 2026',
    owner: 'I. Morgan',
    rag: 'green',
    notes: '3 trusts confirmed'
  },
  {
    name: 'Mid-Programme Evaluation',
    dueDate: '01 Aug 2026',
    owner: 'Evaluation Team',
    rag: 'green',
    notes: 'Evaluation framework agreed'
  },
  {
    name: 'Full Rollout',
    dueDate: '01 Oct 2026',
    owner: 'I. Morgan',
    rag: 'green',
    notes: 'Subject to Gateway 2 approval'
  },
  {
    name: 'Programme Close',
    dueDate: '31 Mar 2027',
    owner: 'Dr S. Chen',
    rag: 'green',
    notes: 'Benefits realisation report due'
  }
];

export const gastroWorkstreams: Workstream[] = [
  {
    id: 'ws-1',
    name: '1. Clinical Pathway Redesign',
    lead: 'Dr Anita Patel',
    taskCount: 12,
    progress: 75,
    rag: 'green'
  },
  {
    id: 'ws-2',
    name: '2. Digital Infrastructure',
    lead: 'IT Programme Manager',
    taskCount: 8,
    progress: 45,
    rag: 'amber'
  },
  {
    id: 'ws-3',
    name: '3. Workforce & Training',
    lead: 'HR Business Partner',
    taskCount: 6,
    progress: 60,
    rag: 'green'
  },
  {
    id: 'ws-4',
    name: '4. Stakeholder & Comms',
    lead: 'Comms Lead',
    taskCount: 5,
    progress: 30,
    rag: 'amber'
  }
];

export const gastroMeetings: Meeting[] = [
  {
    date: '2026-03-04',
    day: '04',
    month: 'Mar',
    title: 'Programme Board — March 2026',
    time: '10:00–11:30',
    location: 'MS Teams',
    attendees: 12,
    status: 'upcoming',
    agendaPending: true
  },
  {
    date: '2026-02-18',
    day: '18',
    month: 'Feb',
    title: 'Programme Board — February 2026',
    time: '10:00–11:30',
    location: 'MS Teams',
    attendees: 11,
    status: 'completed',
    hasAiMinutes: true,
    dateBlockColor: '#E8F5E9',
    dayColor: 'var(--green)'
  },
  {
    date: '2026-01-21',
    day: '21',
    month: 'Jan',
    title: 'Workstream Leads Sync',
    time: '14:00–15:00',
    location: 'MS Teams',
    attendees: 6,
    status: 'completed',
    hasAiMinutes: true,
    dateBlockColor: '#E8F5E9',
    dayColor: 'var(--green)'
  }
];

export const gastroRisks: Risk[] = [
  {
    id: 'R-001',
    description: 'Digital infrastructure delays at Salford Royal may delay pilot go-live',
    category: 'Schedule',
    owner: 'IT PM',
    score: 12,
    rag: 'high',
    source: 'Meeting 18 Feb'
  },
  {
    id: 'R-002',
    description: 'Clinical workforce capacity constraints may reduce pilot participation rate',
    category: 'Workforce',
    owner: 'HR BP',
    score: 9,
    rag: 'medium',
    source: 'Meeting 18 Feb'
  },
  {
    id: 'R-003',
    description: 'Benefits Realisation Framework not approved before Gateway 2',
    category: 'Governance',
    owner: 'I. Morgan',
    score: 8,
    rag: 'medium',
    source: 'Manual entry'
  },
  {
    id: 'R-004',
    description: 'ICB data sharing agreement delays impacting evaluation timeline',
    category: 'Information Governance',
    owner: 'Programme Solicitor',
    score: 4,
    rag: 'low',
    source: 'Manual entry'
  }
];

export const gastroStakeholders: Stakeholder[] = [
  {
    name: 'Dr Sarah Chen',
    organisation: 'NHS England',
    role: 'SRO',
    interest: 'High',
    influence: 'High',
    engagement: 'green'
  },
  {
    name: 'ICB Medical Director',
    organisation: 'NW London ICB',
    role: 'System Lead',
    interest: 'High',
    influence: 'High',
    engagement: 'green'
  },
  {
    name: 'Clinical Lead (Gastro)',
    organisation: 'Royal Free',
    role: 'Clinical Champion',
    interest: 'High',
    influence: 'Medium',
    engagement: 'amber'
  },
  {
    name: 'Finance Director',
    organisation: 'NHS England',
    role: 'Budget Holder',
    interest: 'Medium',
    influence: 'High',
    engagement: 'amber'
  },
  {
    name: 'Patient Rep',
    organisation: 'Healthwatch',
    role: 'Patient Voice',
    interest: 'Medium',
    influence: 'Low',
    engagement: 'green'
  }
];

export const outcomeStats = {
  rtt18Week: { value: 73.4, label: 'RTT 18-week %', sub: 'Target: 78% by Mar 26', rag: 'green' },
  longWaiters: { value: 1247, label: '52+ week waiters', sub: '↓ 14% vs last month', rag: 'amber' },
  diagnosticWait: { value: 81.2, label: 'Diagnostic wait <6wk', sub: '↑ 3.1pp vs last month', rag: 'green' },
  patientsTreated: { value: 4820, label: 'Patients treated', sub: 'This month across 3 sites', rag: 'green' }
};

export const rttPerformanceData = [60, 63, 58, 65, 67, 64, 69, 71, 68, 72, 74, 73];
export const longWaitersData = [95, 90, 88, 82, 80, 78, 72, 68, 63, 58, 52, 45];

// =============================================================================
// UROLOGY PROGRAMME DATA
// =============================================================================

export const urologyStats: ProgrammeStats = {
  overall: '🟢 GREEN',
  overallSub: 'All workstreams on track',
  openActions: 3,
  openActionsSub: '0 overdue',
  openRisks: 2,
  openRisksSub: '0 high severity',
  nextMilestone: 'Pilot Launch',
  nextMilestoneSub: '10 March 2026'
};

export const urologyDocuments: Document[] = [
  {
    id: 'uro-doc-1',
    icon: '📋',
    name: 'Programme Initiation Document v3.0',
    updatedDate: '05 Feb 2026',
    updatedBy: 'T. Bridges',
    status: 'approved'
  },
  {
    id: 'uro-doc-2',
    icon: '💼',
    name: 'Business Case — Prostate Cancer Pathway',
    updatedDate: '20 Jan 2026',
    updatedBy: 'Mr J. Walsh',
    status: 'approved'
  },
  {
    id: 'uro-doc-3',
    icon: '🗺️',
    name: 'Patient Pathway — Rapid Diagnostic Centre',
    updatedDate: '15 Feb 2026',
    updatedBy: 'Clinical Lead',
    status: 'approved'
  },
  {
    id: 'uro-doc-4',
    icon: '📊',
    name: 'Performance Dashboard Specification',
    updatedDate: '22 Feb 2026',
    updatedBy: 'T. Bridges',
    status: 'draft'
  }
];

export const urologyMilestones: Milestone[] = [
  {
    name: 'Programme Initiation',
    dueDate: '05 Dec 2025',
    owner: 'T. Bridges',
    rag: 'complete',
    notes: 'PID and business case approved'
  },
  {
    name: 'Pathway Design Complete',
    dueDate: '31 Jan 2026',
    owner: 'Clinical Lead',
    rag: 'complete',
    notes: 'RDC pathway mapped and validated'
  },
  {
    name: 'Pilot Site Launch',
    dueDate: '10 Mar 2026',
    owner: 'T. Bridges',
    rag: 'green',
    notes: "Guy's & St Thomas' confirmed"
  },
  {
    name: 'Evaluation Period End',
    dueDate: '30 Jun 2026',
    owner: 'Evaluation Team',
    rag: 'green',
    notes: 'Data collection framework agreed'
  },
  {
    name: 'National Rollout',
    dueDate: '01 Sep 2026',
    owner: 'T. Bridges',
    rag: 'green',
    notes: '12 sites identified for phase 2'
  }
];

export const urologyWorkstreams: Workstream[] = [
  {
    id: 'uro-ws-1',
    name: '1. Rapid Diagnostic Centre Setup',
    lead: 'Mr David Kumar',
    taskCount: 8,
    progress: 85,
    rag: 'green'
  },
  {
    id: 'uro-ws-2',
    name: '2. Imaging and Diagnostics',
    lead: 'Radiology Lead',
    taskCount: 6,
    progress: 70,
    rag: 'green'
  },
  {
    id: 'uro-ws-3',
    name: '3. MDT Coordination',
    lead: 'MDT Coordinator',
    taskCount: 5,
    progress: 65,
    rag: 'green'
  }
];

export const urologyMeetings: Meeting[] = [
  {
    date: '2026-03-12',
    day: '12',
    month: 'Mar',
    title: 'Programme Board — March 2026',
    time: '14:00–15:30',
    location: 'MS Teams',
    attendees: 9,
    status: 'upcoming',
    agendaPending: true
  },
  {
    date: '2026-02-20',
    day: '20',
    month: 'Feb',
    title: 'Clinical Advisory Group',
    time: '10:00–11:00',
    location: 'MS Teams',
    attendees: 7,
    status: 'completed',
    hasAiMinutes: true,
    dateBlockColor: '#E8F5E9',
    dayColor: 'var(--green)'
  },
  {
    date: '2026-02-05',
    day: '05',
    month: 'Feb',
    title: 'Programme Board — February 2026',
    time: '14:00–15:30',
    location: "Guy's Hospital",
    attendees: 10,
    status: 'completed',
    hasAiMinutes: true,
    dateBlockColor: '#E8F5E9',
    dayColor: 'var(--green)'
  }
];

export const urologyRisks: Risk[] = [
  {
    id: 'URO-001',
    description: 'MRI scanner capacity constraints at pilot site may delay diagnostic turnaround times',
    category: 'Capacity',
    owner: 'Radiology Lead',
    score: 6,
    rag: 'medium',
    source: 'Meeting 20 Feb'
  },
  {
    id: 'URO-002',
    description: 'Potential delay in histopathology reporting due to workforce shortages',
    category: 'Workforce',
    owner: 'Pathology Lead',
    score: 4,
    rag: 'low',
    source: 'Manual entry'
  }
];

export const urologyStakeholders: Stakeholder[] = [
  {
    name: 'Mr James Walsh',
    organisation: 'NHS England',
    role: 'SRO',
    interest: 'High',
    influence: 'High',
    engagement: 'green'
  },
  {
    name: 'Clinical Director (Urology)',
    organisation: "Guy's & St Thomas'",
    role: 'Clinical Lead',
    interest: 'High',
    influence: 'High',
    engagement: 'green'
  },
  {
    name: 'Cancer Alliance Director',
    organisation: 'South East London CA',
    role: 'Strategic Partner',
    interest: 'High',
    influence: 'Medium',
    engagement: 'green'
  },
  {
    name: 'Radiology Service Manager',
    organisation: "Guy's & St Thomas'",
    role: 'Service Lead',
    interest: 'Medium',
    influence: 'Medium',
    engagement: 'green'
  }
];

// =============================================================================
// ENT PROGRAMME DATA
// =============================================================================

export const entStats: ProgrammeStats = {
  overall: '🟢 GREEN',
  overallSub: 'Programme ahead of schedule',
  openActions: 4,
  openActionsSub: '0 overdue',
  openRisks: 1,
  openRisksSub: '0 high severity',
  nextMilestone: 'Rollout Phase 2',
  nextMilestoneSub: '01 April 2026'
};

export const entDocuments: Document[] = [
  {
    id: 'ent-doc-1',
    icon: '📋',
    name: 'Programme Initiation Document v2.0',
    updatedDate: '12 Jan 2026',
    updatedBy: 'A. Turner',
    status: 'approved'
  },
  {
    id: 'ent-doc-2',
    icon: '💼',
    name: 'Business Case — ENT Virtual Clinics',
    updatedDate: '08 Dec 2025',
    updatedBy: 'Dr P. Sharma',
    status: 'approved'
  },
  {
    id: 'ent-doc-3',
    icon: '📱',
    name: 'Virtual Clinic Implementation Guide',
    updatedDate: '25 Feb 2026',
    updatedBy: 'Digital Lead',
    status: 'approved'
  },
  {
    id: 'ent-doc-4',
    icon: '📊',
    name: 'Phase 1 Evaluation Report',
    updatedDate: '20 Feb 2026',
    updatedBy: 'Evaluation Team',
    status: 'draft'
  },
  {
    id: 'ent-doc-5',
    icon: '🎓',
    name: 'Clinician Training Materials',
    updatedDate: '18 Feb 2026',
    updatedBy: 'Training Lead',
    status: 'approved'
  }
];

export const entMilestones: Milestone[] = [
  {
    name: 'Programme Start',
    dueDate: '01 Nov 2025',
    owner: 'A. Turner',
    rag: 'complete',
    notes: 'Approval received'
  },
  {
    name: 'Phase 1 Pilot — 3 Trusts',
    dueDate: '15 Jan 2026',
    owner: 'A. Turner',
    rag: 'complete',
    notes: 'Successfully launched'
  },
  {
    name: 'Phase 1 Evaluation',
    dueDate: '28 Feb 2026',
    owner: 'Evaluation Team',
    rag: 'complete',
    notes: 'Positive outcomes achieved'
  },
  {
    name: 'Phase 2 Rollout — 8 Trusts',
    dueDate: '01 Apr 2026',
    owner: 'A. Turner',
    rag: 'green',
    notes: 'All sites ready'
  },
  {
    name: 'National Rollout',
    dueDate: '01 Jul 2026',
    owner: 'Dr P. Sharma',
    rag: 'green',
    notes: 'Implementation plan approved'
  },
  {
    name: 'Programme Close',
    dueDate: '30 Sep 2026',
    owner: 'A. Turner',
    rag: 'green',
    notes: 'Transition to BAU'
  }
];

export const entWorkstreams: Workstream[] = [
  {
    id: 'ent-ws-1',
    name: '1. Virtual Clinic Technology',
    lead: 'Digital Transformation Lead',
    taskCount: 7,
    progress: 90,
    rag: 'green'
  },
  {
    id: 'ent-ws-2',
    name: '2. Clinical Training & Support',
    lead: 'Training Lead',
    taskCount: 5,
    progress: 85,
    rag: 'green'
  },
  {
    id: 'ent-ws-3',
    name: '3. Patient Experience',
    lead: 'Patient Experience Lead',
    taskCount: 6,
    progress: 80,
    rag: 'green'
  }
];

export const entMeetings: Meeting[] = [
  {
    date: '2026-03-15',
    day: '15',
    month: 'Mar',
    title: 'Phase 2 Go-Live Planning',
    time: '11:00–12:00',
    location: 'MS Teams',
    attendees: 8,
    status: 'upcoming',
    agendaPending: false
  },
  {
    date: '2026-02-25',
    day: '25',
    month: 'Feb',
    title: 'Programme Board — February 2026',
    time: '13:00–14:30',
    location: 'MS Teams',
    attendees: 10,
    status: 'completed',
    hasAiMinutes: true,
    dateBlockColor: '#E8F5E9',
    dayColor: 'var(--green)'
  },
  {
    date: '2026-02-10',
    day: '10',
    month: 'Feb',
    title: 'Clinical Advisory Board',
    time: '15:00–16:00',
    location: 'MS Teams',
    attendees: 6,
    status: 'completed',
    hasAiMinutes: true,
    dateBlockColor: '#E8F5E9',
    dayColor: 'var(--green)'
  }
];

export const entRisks: Risk[] = [
  {
    id: 'ENT-001',
    description: 'Minor concerns about patient digital literacy in some cohorts',
    category: 'Access',
    owner: 'Patient Experience Lead',
    score: 3,
    rag: 'low',
    source: 'Meeting 25 Feb'
  }
];

export const entStakeholders: Stakeholder[] = [
  {
    name: 'Dr Priya Sharma',
    organisation: 'NHS England',
    role: 'SRO',
    interest: 'High',
    influence: 'High',
    engagement: 'green'
  },
  {
    name: 'ENT Clinical Lead',
    organisation: 'University College Hospital',
    role: 'Clinical Champion',
    interest: 'High',
    influence: 'High',
    engagement: 'green'
  },
  {
    name: 'Digital Transformation Lead',
    organisation: 'NHS England',
    role: 'Technical Lead',
    interest: 'High',
    influence: 'Medium',
    engagement: 'green'
  },
  {
    name: 'Patient Representative',
    organisation: 'Healthwatch',
    role: 'Patient Voice',
    interest: 'Medium',
    influence: 'Low',
    engagement: 'green'
  },
  {
    name: 'ICB Digital Lead',
    organisation: 'North Central London ICB',
    role: 'System Partner',
    interest: 'Medium',
    influence: 'Medium',
    engagement: 'green'
  }
];

// =============================================================================
// CARDIOLOGY PROGRAMME DATA
// =============================================================================

export const cardioStats: ProgrammeStats = {
  overall: '🔴 RED',
  overallSub: 'Multiple high risks — escalated',
  openActions: 9,
  openActionsSub: '5 overdue',
  openRisks: 5,
  openRisksSub: '3 high severity',
  nextMilestone: 'Gateway Review',
  nextMilestoneSub: '20 March 2026 — at risk'
};

export const cardioDocuments: Document[] = [
  {
    id: 'card-doc-1',
    icon: '📋',
    name: 'Programme Initiation Document v1.2',
    updatedDate: '28 Jan 2026',
    updatedBy: 'S. Okafor',
    status: 'approved'
  },
  {
    id: 'card-doc-2',
    icon: '💼',
    name: 'Business Case — Cardiac Rehab',
    updatedDate: '10 Dec 2025',
    updatedBy: 'Prof M. Hart',
    status: 'approved'
  },
  {
    id: 'card-doc-3',
    icon: '📊',
    name: 'Capacity Model v2.1',
    updatedDate: '15 Feb 2026',
    updatedBy: 'Finance Team',
    status: 'draft'
  },
  {
    id: 'card-doc-4',
    icon: '🗺️',
    name: 'Service Redesign Blueprint',
    updatedDate: '22 Jan 2026',
    updatedBy: 'Clinical Lead',
    status: 'draft'
  }
];

export const cardioMilestones: Milestone[] = [
  {
    name: 'Programme Initiation',
    dueDate: '10 Dec 2025',
    owner: 'S. Okafor',
    rag: 'complete',
    notes: 'Initial approval granted'
  },
  {
    name: 'Baseline Assessment Complete',
    dueDate: '31 Jan 2026',
    owner: 'S. Okafor',
    rag: 'amber',
    notes: 'Completed 2 weeks late'
  },
  {
    name: 'Gateway Review 1',
    dueDate: '20 Mar 2026',
    owner: 'Prof M. Hart',
    rag: 'red',
    notes: 'Multiple dependencies at risk'
  },
  {
    name: 'Pilot Site Confirmed',
    dueDate: '15 Apr 2026',
    owner: 'S. Okafor',
    rag: 'red',
    notes: 'Delayed pending gateway approval'
  },
  {
    name: 'Pilot Launch',
    dueDate: '01 Jun 2026',
    owner: 'S. Okafor',
    rag: 'red',
    notes: 'At significant risk of delay'
  },
  {
    name: 'Mid-Programme Review',
    dueDate: '01 Sep 2026',
    owner: 'Evaluation Team',
    rag: 'amber',
    notes: 'Timeline under review'
  }
];

export const cardioWorkstreams: Workstream[] = [
  {
    id: 'card-ws-1',
    name: '1. Service Model Design',
    lead: 'Clinical Service Lead',
    taskCount: 10,
    progress: 40,
    rag: 'red'
  },
  {
    id: 'card-ws-2',
    name: '2. Workforce Planning',
    lead: 'HR Business Partner',
    taskCount: 8,
    progress: 35,
    rag: 'red'
  },
  {
    id: 'card-ws-3',
    name: '3. Estates and Equipment',
    lead: 'Estates Manager',
    taskCount: 7,
    progress: 25,
    rag: 'red'
  },
  {
    id: 'card-ws-4',
    name: '4. Digital and Data',
    lead: 'IT Programme Manager',
    taskCount: 9,
    progress: 50,
    rag: 'amber'
  },
  {
    id: 'card-ws-5',
    name: '5. Finance and Contracting',
    lead: 'Finance Business Partner',
    taskCount: 6,
    progress: 55,
    rag: 'amber'
  }
];

export const cardioMeetings: Meeting[] = [
  {
    date: '2026-03-05',
    day: '05',
    month: 'Mar',
    title: 'Emergency Recovery Board',
    time: '09:00–10:30',
    location: 'MS Teams',
    attendees: 15,
    status: 'upcoming',
    agendaPending: false
  },
  {
    date: '2026-02-24',
    day: '24',
    month: 'Feb',
    title: 'Programme Board — February 2026',
    time: '10:00–12:00',
    location: 'MS Teams',
    attendees: 14,
    status: 'completed',
    hasAiMinutes: true,
    dateBlockColor: '#E8F5E9',
    dayColor: 'var(--green)'
  },
  {
    date: '2026-02-12',
    day: '12',
    month: 'Feb',
    title: 'Workstream Leads — Crisis Meeting',
    time: '16:00–17:30',
    location: 'MS Teams',
    attendees: 8,
    status: 'completed',
    hasAiMinutes: true,
    dateBlockColor: '#E8F5E9',
    dayColor: 'var(--green)'
  },
  {
    date: '2026-01-22',
    day: '22',
    month: 'Jan',
    title: 'Stakeholder Briefing',
    time: '14:00–15:00',
    location: 'Waterloo Campus',
    attendees: 12,
    status: 'completed',
    hasAiMinutes: true,
    dateBlockColor: '#E8F5E9',
    dayColor: 'var(--green)'
  }
];

export const cardioRisks: Risk[] = [
  {
    id: 'CARD-001',
    description: 'Significant workforce gaps identified across all pilot sites — recruitment timeline 6+ months',
    category: 'Workforce',
    owner: 'HR Business Partner',
    score: 16,
    rag: 'high',
    source: 'Meeting 24 Feb'
  },
  {
    id: 'CARD-002',
    description: 'Capital funding for equipment not yet confirmed — impacts pilot readiness',
    category: 'Finance',
    owner: 'Finance Business Partner',
    score: 15,
    rag: 'high',
    source: 'Meeting 12 Feb'
  },
  {
    id: 'CARD-003',
    description: 'Estates constraints at 2 of 3 pilot sites — no suitable clinical space available',
    category: 'Estates',
    owner: 'Estates Manager',
    score: 12,
    rag: 'high',
    source: 'Manual entry'
  },
  {
    id: 'CARD-004',
    description: 'ICB data sharing agreements outstanding — delays service model validation',
    category: 'Information Governance',
    owner: 'Programme Solicitor',
    score: 9,
    rag: 'medium',
    source: 'Meeting 24 Feb'
  },
  {
    id: 'CARD-005',
    description: 'Clinical engagement lower than expected — potential resistance to service change',
    category: 'Engagement',
    owner: 'Clinical Service Lead',
    score: 8,
    rag: 'medium',
    source: 'Manual entry'
  }
];

export const cardioStakeholders: Stakeholder[] = [
  {
    name: 'Prof Michael Hart',
    organisation: 'NHS England',
    role: 'SRO',
    interest: 'High',
    influence: 'High',
    engagement: 'amber'
  },
  {
    name: 'Medical Director',
    organisation: 'Imperial College Healthcare',
    role: 'System Lead',
    interest: 'High',
    influence: 'High',
    engagement: 'amber'
  },
  {
    name: 'Clinical Lead (Cardiology)',
    organisation: "St Bartholomew's Hospital",
    role: 'Clinical Champion',
    interest: 'Medium',
    influence: 'Medium',
    engagement: 'red'
  },
  {
    name: 'Finance Director',
    organisation: 'NHS England',
    role: 'Budget Holder',
    interest: 'High',
    influence: 'High',
    engagement: 'amber'
  },
  {
    name: 'HR Director',
    organisation: 'NHS England',
    role: 'Workforce Lead',
    interest: 'High',
    influence: 'Medium',
    engagement: 'amber'
  },
  {
    name: 'ICB Chief Executive',
    organisation: 'North West London ICB',
    role: 'System Approver',
    interest: 'Medium',
    influence: 'High',
    engagement: 'amber'
  }
];

// =============================================================================
// RESPIRATORY PROGRAMME DATA
// =============================================================================

export const respStats: ProgrammeStats = {
  overall: '🟡 AMBER',
  overallSub: 'Workforce challenges identified',
  openActions: 6,
  openActionsSub: '1 overdue',
  openRisks: 3,
  openRisksSub: '1 medium severity',
  nextMilestone: 'Pilot Go-Live',
  nextMilestoneSub: '25 March 2026'
};

export const respDocuments: Document[] = [
  {
    id: 'resp-doc-1',
    icon: '📋',
    name: 'Programme Initiation Document v2.4',
    updatedDate: '18 Feb 2026',
    updatedBy: 'L. Kim',
    status: 'approved'
  },
  {
    id: 'resp-doc-2',
    icon: '💼',
    name: 'Business Case — COPD Community Model',
    updatedDate: '05 Jan 2026',
    updatedBy: 'Dr F. Al-Hassan',
    status: 'approved'
  },
  {
    id: 'resp-doc-3',
    icon: '🗺️',
    name: 'Integrated Care Pathway',
    updatedDate: '24 Feb 2026',
    updatedBy: 'Clinical Lead',
    status: 'approved'
  },
  {
    id: 'resp-doc-4',
    icon: '📊',
    name: 'Benefits Realisation Plan',
    updatedDate: '20 Feb 2026',
    updatedBy: 'L. Kim',
    status: 'draft'
  },
  {
    id: 'resp-doc-5',
    icon: '🎓',
    name: 'Community Team Training Package',
    updatedDate: '19 Feb 2026',
    updatedBy: 'Training Lead',
    status: 'draft'
  }
];

export const respMilestones: Milestone[] = [
  {
    name: 'Programme Initiation',
    dueDate: '20 Nov 2025',
    owner: 'L. Kim',
    rag: 'complete',
    notes: 'PID approved by board'
  },
  {
    name: 'Pathway Design Complete',
    dueDate: '15 Jan 2026',
    owner: 'Clinical Lead',
    rag: 'complete',
    notes: 'Integrated pathway agreed'
  },
  {
    name: 'Community Team Recruitment',
    dueDate: '28 Feb 2026',
    owner: 'HR Business Partner',
    rag: 'amber',
    notes: '3 of 8 posts still vacant'
  },
  {
    name: 'Pilot Go-Live',
    dueDate: '25 Mar 2026',
    owner: 'L. Kim',
    rag: 'amber',
    notes: 'Dependent on recruitment'
  },
  {
    name: 'Three-Month Review',
    dueDate: '25 Jun 2026',
    owner: 'Evaluation Team',
    rag: 'green',
    notes: 'Evaluation plan approved'
  },
  {
    name: 'Phase 2 Rollout',
    dueDate: '01 Sep 2026',
    owner: 'L. Kim',
    rag: 'green',
    notes: 'Subject to phase 1 evaluation'
  }
];

export const respWorkstreams: Workstream[] = [
  {
    id: 'resp-ws-1',
    name: '1. Community Service Model',
    lead: 'Community Services Lead',
    taskCount: 9,
    progress: 70,
    rag: 'green'
  },
  {
    id: 'resp-ws-2',
    name: '2. Workforce and Training',
    lead: 'HR Business Partner',
    taskCount: 7,
    progress: 55,
    rag: 'amber'
  },
  {
    id: 'resp-ws-3',
    name: '3. Digital and Remote Monitoring',
    lead: 'Digital Health Lead',
    taskCount: 6,
    progress: 65,
    rag: 'green'
  },
  {
    id: 'resp-ws-4',
    name: '4. Patient Engagement',
    lead: 'Patient Experience Lead',
    taskCount: 5,
    progress: 60,
    rag: 'amber'
  }
];

export const respMeetings: Meeting[] = [
  {
    date: '2026-03-10',
    day: '10',
    month: 'Mar',
    title: 'Programme Board — March 2026',
    time: '13:00–14:30',
    location: 'MS Teams',
    attendees: 11,
    status: 'upcoming',
    agendaPending: true
  },
  {
    date: '2026-02-26',
    day: '26',
    month: 'Feb',
    title: 'Workforce Planning Review',
    time: '10:00–11:00',
    location: 'MS Teams',
    attendees: 6,
    status: 'completed',
    hasAiMinutes: true,
    dateBlockColor: '#E8F5E9',
    dayColor: 'var(--green)'
  },
  {
    date: '2026-02-13',
    day: '13',
    month: 'Feb',
    title: 'Programme Board — February 2026',
    time: '13:00–14:30',
    location: 'MS Teams',
    attendees: 10,
    status: 'completed',
    hasAiMinutes: true,
    dateBlockColor: '#E8F5E9',
    dayColor: 'var(--green)'
  }
];

export const respRisks: Risk[] = [
  {
    id: 'RESP-001',
    description: 'Respiratory specialist nurse recruitment delayed — 3 posts unfilled affecting pilot capacity',
    category: 'Workforce',
    owner: 'HR Business Partner',
    score: 9,
    rag: 'medium',
    source: 'Meeting 26 Feb'
  },
  {
    id: 'RESP-002',
    description: 'Remote monitoring equipment delivery delayed by 2 weeks',
    category: 'Procurement',
    owner: 'Digital Health Lead',
    score: 6,
    rag: 'medium',
    source: 'Meeting 13 Feb'
  },
  {
    id: 'RESP-003',
    description: 'Patient recruitment to pilot lower than anticipated — engagement plan being revised',
    category: 'Engagement',
    owner: 'Patient Experience Lead',
    score: 4,
    rag: 'low',
    source: 'Manual entry'
  }
];

export const respStakeholders: Stakeholder[] = [
  {
    name: 'Dr Fatima Al-Hassan',
    organisation: 'NHS England',
    role: 'SRO',
    interest: 'High',
    influence: 'High',
    engagement: 'green'
  },
  {
    name: 'Respiratory Clinical Lead',
    organisation: 'Royal Brompton Hospital',
    role: 'Clinical Champion',
    interest: 'High',
    influence: 'High',
    engagement: 'green'
  },
  {
    name: 'Community Services Director',
    organisation: 'Central London Community Healthcare',
    role: 'Service Partner',
    interest: 'High',
    influence: 'Medium',
    engagement: 'green'
  },
  {
    name: 'Primary Care Network Lead',
    organisation: 'North West London PCN',
    role: 'GP Representative',
    interest: 'Medium',
    influence: 'Medium',
    engagement: 'amber'
  },
  {
    name: 'COPD Patient Representative',
    organisation: 'British Lung Foundation',
    role: 'Patient Voice',
    interest: 'High',
    influence: 'Low',
    engagement: 'green'
  }
];

// Helper function to get programme-specific data
export const getProgrammeData = (programmeId: string) => {
  switch (programmeId) {
    case 'gastro':
      return {
        stats: gastroStats,
        documents: gastroDocuments,
        milestones: gastroMilestones,
        workstreams: gastroWorkstreams,
        meetings: gastroMeetings,
        risks: gastroRisks,
        stakeholders: gastroStakeholders
      };
    case 'urology':
      return {
        stats: urologyStats,
        documents: urologyDocuments,
        milestones: urologyMilestones,
        workstreams: urologyWorkstreams,
        meetings: urologyMeetings,
        risks: urologyRisks,
        stakeholders: urologyStakeholders
      };
    case 'ent':
      return {
        stats: entStats,
        documents: entDocuments,
        milestones: entMilestones,
        workstreams: entWorkstreams,
        meetings: entMeetings,
        risks: entRisks,
        stakeholders: entStakeholders
      };
    case 'cardio':
      return {
        stats: cardioStats,
        documents: cardioDocuments,
        milestones: cardioMilestones,
        workstreams: cardioWorkstreams,
        meetings: cardioMeetings,
        risks: cardioRisks,
        stakeholders: cardioStakeholders
      };
    case 'resp':
      return {
        stats: respStats,
        documents: respDocuments,
        milestones: respMilestones,
        workstreams: respWorkstreams,
        meetings: respMeetings,
        risks: respRisks,
        stakeholders: respStakeholders
      };
    default:
      return null;
  }
};
