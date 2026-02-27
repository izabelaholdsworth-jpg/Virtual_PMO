# Virtual PMO - NHS England Elective Care

A React + TypeScript application for managing NHS programme portfolios, built with Vite.

## Features

- **Portfolio Overview**: Dashboard showing all programmes with key metrics
- **Programme Management**: Detailed views for each programme with comprehensive tabs
- **Tabbed Navigation**: organised programme information across:
  - Documents
  - Programme Plan
  - Workstreams
  - Meetings (with AI-generated minutes)
  - Reports (with auto-drafted highlight reports)
  - Risks (RAID log)
  - Outcomes (performance metrics)
  - Stakeholders

## Project Structure

```
src/
├── components/
│   ├── TopNav.tsx                    # Top navigation bar
│   ├── Sidebar.tsx                   # Left sidebar navigation
│   ├── portfolio/
│   │   └── PortfolioView.tsx        # Portfolio overview page
│   └── programme/
│       ├── ProgrammeView.tsx        # Programme detail page
│       └── tabs/                    # Programme tab components
│           ├── DocumentsTab.tsx
│           ├── PlanTab.tsx
│           ├── WorkstreamsTab.tsx
│           ├── MeetingsTab.tsx
│           ├── ReportsTab.tsx
│           ├── RisksTab.tsx
│           ├── OutcomesTab.tsx
│           └── StakeholdersTab.tsx
├── data/
│   └── mockData.ts                  # All data with TypeScript interfaces
├── styles/
│   └── variables.css                # CSS variables (NHS colours)
├── App.tsx                          # Root component with state management
├── App.css                          # Main styles
└── main.tsx                         # Application entry point

```

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS** - Styling (no CSS-in-JS)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The application will be available at http://localhost:5173/

### Build

```bash
# Build for production
npm run build
```

### Preview Production Build

```bash
# Preview the production build
npm run preview
```

## Architecture

### State Management

All navigation state is managed in `App.tsx` using React's `useState`:
- `activeView`: Portfolio or Programme view
- `activeProgramme`: Currently selected programme
- `activeTab`: Currently active tab in programme view

State is passed down to child components via props.

### Data Management

All data is stored in `src/data/mockData.ts` with TypeScript interfaces:
- `Programme` - Programme metadata
- `Action` - Action items
- `Risk` - Risks and issues
- `Milestone` - Programme milestones
- `Meeting` - Meeting information
- `Document` - Document metadata
- `Stakeholder` - Stakeholder information
- `Workstream` - Workstream details

### Styling

- NHS colour palette is defined in `src/styles/variables.css`
- Component styles are in `src/App.css`
- All styles use CSS custom properties (CSS variables)

## NHS Design System

The application uses the NHS England colour palette:
- Navy: `#003087`
- Blue: `#005EB8`
- Light Blue: `#41B6E6`
- Green: `#009639`
- Amber: `#FFB81C`
- Red: `#DA291C`

## Demo Data

The application includes comprehensive mock data for **all 5 programmes**:
- **Gastroenterology** — 4 workstreams, 7 open actions, 4 risks
- **Urology** — 3 workstreams, 3 open actions, 2 risks  
- **ENT** — 3 workstreams, 4 open actions, 1 risk
- **Cardiology** — 5 workstreams, 9 open actions, 5 risks
- **Respiratory** — 4 workstreams, 6 open actions, 3 risks

Each programme includes realistic data for:
- Programme documents (strategies, business cases, charters)
- Milestone plans with key dates and deliverables
- Risk register with RAG status and mitigations
- Meeting schedule with locations and AI-generated minutes
- Stakeholder register with engagement levels
- Workstream structure with owners and objectives

## Future Enhancements

- Backend API integration
- Authentication and authorization
- Real-time updates
- Advanced reporting features
- Document upload and management
- Calendar integration
- Email notifications

## License

This project is for demonstration purposes.
