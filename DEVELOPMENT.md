# Development Guide

## Project Overview

This is a React + TypeScript application built with Vite, designed to help users discover their storytelling archetype in harm reduction and peer work contexts.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **jsPDF** - PDF generation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm 10+
- Modern web browser

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Architecture

### Component Structure

```
App.tsx
├── AODStorytellerQuiz.tsx (main quiz logic)
│   ├── IntroductionScreen.tsx (entry point)
│   ├── [Quiz Questions] (18 questions)
│   └── EnhancedResults.tsx (results with tabs)
│       ├── BoundariesSection.tsx
│       ├── AudienceGuidance.tsx
│       ├── StoryTips.tsx
│       ├── ReflectivePractice.tsx
│       └── ResourcesSection.tsx
└── ArchetypeComparison.tsx (browse all archetypes)
```

### State Management

#### Quiz State (AODStorytellerQuiz.tsx)

The quiz manages several pieces of state:

- `showIntro`: Boolean for showing introduction screen
- `currentQuestion`: Current question index (0-17)
- `scores`: Object mapping archetype keys to accumulated points
- `showResults`: Boolean for showing results screen
- `answerHistory`: Array of answer objects for back navigation

#### State Persistence

Quiz state is automatically saved to localStorage using the following keys:

- `aod_quiz_current_question`: Current question index
- `aod_quiz_scores`: Accumulated scores object
- `aod_quiz_answer_history`: Full answer history
- `aod_quiz_show_results`: Boolean for results view

State is loaded on mount and saved on every update using `useEffect` hooks.

#### View Routing (App.tsx)

Simple state-based routing between two views:
- `quiz`: Main quiz interface
- `comparison`: Archetype comparison page

### Data Structure

#### Archetypes

Each archetype has the following structure:

```typescript
{
  key: string;           // Unique identifier
  name: string;          // Display name
  icon: LucideIcon;      // Icon component
  color: string;         // Tailwind color classes
  description: string;   // Brief description
  superpowers: string;   // Key strengths
}
```

#### Questions

Each question contains:

```typescript
{
  question: string;
  options: Array<{
    text: string;
    scores: Record<string, number>;  // archetype_key: points
  }>;
}
```

#### Archetype Enhancements

Extended data in `archetypeEnhancements.ts`:

```typescript
interface ArchetypeEnhancement {
  key: string;
  name: string;
  sharePrinciples: {
    intentional: string;
    purposeful: string;
    meaningful: string;
  };
  primaryPurpose: 'education' | 'inspiration' | 'advocacy' | 'healing' | 'connection';
  secondaryPurpose?: string;
  boundaries: {
    strengths: string[];
    watchFor: string[];
    trafficLightGuidance: {
      red: string[];
      yellow: string[];
      green: string[];
    };
    selfCareTips: string[];
  };
  audiences: {
    bestFit: string[];
    adaptationTips: {
      peers: string;
      providers: string;
      policyMakers: string;
      public: string;
    };
  };
  universalExperiences: {
    emotionsToEmphasize: string[];
    turningPoints: string[];
    avoidExplicitDetails: string[];
    focusInstead: string[];
  };
  storyCrafting: {
    lifeEvents: string[];
    themes: string[];
    emotionsAndFeelings: string[];
    skillsAndLessons: string[];
    relevantContexts: string[];
  };
  reflectivePractice: {
    beforeSharing: string[];
    afterSharing: string[];
    ongoing: string[];
  };
}
```

### Scoring Algorithm

1. Each answer contributes points to one or more archetypes
2. Points accumulate across all 18 questions
3. Results calculation:
   - **Primary archetype**: Highest total score
   - **Secondary archetypes**: Any archetype scoring ≥75% of the top score
4. All 12 archetypes are displayed with relative scores

### PDF Generation

The PDF generator (`utils/pdfGenerator.ts`) creates a multi-page PDF report including:

1. **Header**: Title and branding
2. **Primary Archetype**: Name, description, and superpowers
3. **Secondary Archetypes**: If applicable
4. **Score Breakdown**: Visual bars showing all archetype scores
5. **SHARE Principles**: Three principles with colored sections
6. **Boundaries**: Watch-for items and self-care tips
7. **Footer**: Page numbers and branding

Key features:
- Automatic page breaks
- Text wrapping for long content
- Color-coded sections
- Consistent formatting

### Styling

#### Tailwind Configuration

Custom configuration in `tailwind.config.js`:
- Extended color palette for archetype colors
- Custom utilities for print styles
- Responsive breakpoints

#### Print Styles

Elements with `.no-print` class are hidden when printing.

Custom print styles in `index.css`:
```css
@media print {
  .no-print {
    display: none !important;
  }
  .avoid-break {
    page-break-inside: avoid;
  }
}
```

## Key Features Implementation

### 1. Quiz State Persistence

Implemented in `AODStorytellerQuiz.tsx`:

```typescript
// Load on mount
useEffect(() => {
  const savedQuestion = localStorage.getItem(STORAGE_KEYS.CURRENT_QUESTION);
  // ... load other state
  if (savedQuestion && savedScores && savedHistory) {
    // Restore state
  }
}, []);

// Save on every change
useEffect(() => {
  if (!showIntro) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_QUESTION, currentQuestion.toString());
    // ... save other state
  }
}, [currentQuestion, scores, answerHistory, showResults, showIntro]);
```

### 2. Back Navigation

Users can navigate to previous questions:
- Answer history is stored as an array
- Previous button recalculates scores from history
- Current answer is preserved when moving forward again

### 3. PDF Export

Button in `EnhancedResults.tsx` calls `generateArchetypePDF()`:

```typescript
const handleDownloadPDF = () => {
  const pdfData = {
    primaryArchetype,
    secondaryArchetypes,
    allScores,
    enhancement,
  };
  generateArchetypePDF(pdfData);
};
```

### 4. Archetype Comparison

Standalone page showing all 12 archetypes with:
- Search/filter functionality
- Grid and detail views
- Click to expand archetype details
- CTA to take the quiz

## Code Organization

### Component Guidelines

- **Single Responsibility**: Each component has one clear purpose
- **Props Interface**: All props are typed with TypeScript interfaces
- **Hooks**: useState for local state, useEffect for side effects
- **Event Handlers**: Prefix with `handle` (e.g., `handleAnswer`)

### File Naming

- Components: PascalCase (e.g., `AODStorytellerQuiz.tsx`)
- Utils: camelCase (e.g., `pdfGenerator.ts`)
- Data: camelCase (e.g., `archetypeEnhancements.ts`)

### Import Order

1. React and third-party libraries
2. Local components
3. Local utilities and data
4. Types and interfaces

## Testing

Currently no automated tests. Manual testing checklist:

- [ ] Quiz questions display correctly
- [ ] Answer selection updates scores
- [ ] Back button works correctly
- [ ] Results display primary and secondary archetypes
- [ ] All tabs in results page work
- [ ] PDF download generates correct content
- [ ] Print functionality works
- [ ] Share button works (or copies to clipboard)
- [ ] Comparison page displays all archetypes
- [ ] Search filters archetypes correctly
- [ ] Navigation between quiz and comparison works
- [ ] State persists after page reload
- [ ] Mobile responsive design works
- [ ] Accessibility features work (keyboard navigation, screen readers)

## Performance Considerations

- **Code Splitting**: Not currently implemented (could add React.lazy for comparison page)
- **Bundle Size**: ~250KB gzipped (mostly jsPDF library)
- **localStorage**: Max ~5-10MB, quiz state is <10KB
- **Rendering**: All components are functional with hooks, no unnecessary re-renders

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Required features:
- ES6+
- localStorage
- CSS Grid and Flexbox
- Web Share API (optional, fallback to clipboard)

## Deployment

### Build Process

```bash
npm run build
```

Generates optimized static files in `dist/`:
- Minified JS bundles
- Optimized CSS
- Copied assets

### Hosting Requirements

- Static file hosting (no server-side code needed)
- HTTPS recommended (required for Web Share API)
- No environment variables needed
- No database required

### Environment Variables

None currently used. If needed in future:
- Create `.env.local` for local development
- Add to Vite config with `import.meta.env.VITE_*`

## Future Enhancements

### Potential Features

- [ ] Multi-language support (i18n)
- [ ] Email results option
- [ ] Social sharing images (Open Graph)
- [ ] Analytics integration
- [ ] Accessibility improvements (ARIA labels, focus management)
- [ ] Automated tests (Jest, React Testing Library)
- [ ] Animation improvements
- [ ] Offline support (Service Worker)
- [ ] More detailed PDF reports
- [ ] Save/load multiple quiz attempts
- [ ] Compare your archetype with others
- [ ] Archetype "journeys" (how archetypes evolve)

### Known Limitations

- No backend = no analytics on archetype distribution
- localStorage = results only on same device/browser
- No user accounts or history tracking
- PDF generation is client-side (larger bundle)

## Troubleshooting

### Common Issues

**Quiz state not loading:**
- Check browser console for localStorage errors
- Verify localStorage is enabled in browser settings
- Clear localStorage and try again: `localStorage.clear()`

**PDF not downloading:**
- Check browser console for jsPDF errors
- Verify browser supports Blob downloads
- Try different browser

**Styling issues:**
- Clear browser cache
- Check Tailwind config
- Verify PostCSS is processing correctly

**Type errors:**
- Run `npm run build` to see all TypeScript errors
- Check that all interfaces match data structures

## Contributing

1. Follow existing code style
2. Add TypeScript types for all new code
3. Test on mobile and desktop
4. Update documentation for new features
5. Keep bundle size in mind (avoid heavy dependencies)

## Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [jsPDF Documentation](https://artskydj.github.io/jsPDF/docs/)

## Contact

For questions about NUAA's SHARE & BUILD training or this tool, contact NUAA's ConnectED Programs team via [nuaa.org.au](https://www.nuaa.org.au).
