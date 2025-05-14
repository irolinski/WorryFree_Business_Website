import { Route, Routes } from 'react-router-dom';
import LadingPage from './pages';
import PrivacyPage from './pages/privacy';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LadingPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </>
  );
}
