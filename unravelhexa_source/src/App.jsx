import { Routes, Route } from 'react-router-dom';
import WorkflowPage from './components/WorkflowPage';
import HeroPopup from './components/HeroPopup';
import IDEPage from './components/IDEPage';

function WorkflowWithPopup() {
  return (
    <>
      <WorkflowPage />
      <HeroPopup />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<WorkflowWithPopup />} />
      <Route path="/IDE" element={<IDEPage />} />
    </Routes>
  );
}

export default App;

