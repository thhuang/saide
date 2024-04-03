import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Editor from './components/Editor';
import UserMainPage from './components/UserMainPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/saide">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/main" element={<UserMainPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center gap-y-8 place-items-center">
      <h1 className="font-sans font-semibold text-5xl bold mb-10">
        Super Awesome IDE
      </h1>
      <div className="flex flex-row gap-x-2">
        <a
          className="btn btn-primary"
          // href="http://localhost:8080/oauth2/authorization/github"
          onClick={() => navigate('/main')}
        >
          Login
        </a>
        <a className="btn" onClick={() => navigate('/editor')}>
          Guest
        </a>
      </div>
    </div>
  );
}

export default App;
