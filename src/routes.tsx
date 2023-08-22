import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/home';
import { ResumePage } from './pages/resume/resume';
import { WorkPage } from './pages/work/work';
import { ContactPage } from './pages/contact/contact';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/resume" element={<ResumePage />}></Route>
      <Route path="/work" element={<WorkPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
  );
}
