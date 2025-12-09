import { useState } from 'react';
import AODStorytellerQuiz from './components/AODStorytellerQuiz';
import ArchetypeComparison from './components/ArchetypeComparison';

function App() {
  const [view, setView] = useState<'quiz' | 'comparison'>('quiz');

  return (
    <div className="App">
      {view === 'quiz' ? (
        <AODStorytellerQuiz onViewComparison={() => setView('comparison')} />
      ) : (
        <ArchetypeComparison onBack={() => setView('quiz')} />
      )}
    </div>
  );
}

export default App;
