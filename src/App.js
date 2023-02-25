import { Routes, Route, useMatch } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';

import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Details from './pages/Details';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/*" element={<Details />} />
          <Route element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
