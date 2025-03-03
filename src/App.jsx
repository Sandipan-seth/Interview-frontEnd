import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import InterViewQuestions from "./pages/InterViewQuestions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Profile from "./pages/Profile";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard/:userid" element={<Dashboard />} />
          <Route path="/StartInterview/:chatid" element={<Chat />} />
          <Route path="/InterView/:course/:level" element={<InterViewQuestions />} />
          <Route path="/profile/:userid" element={<Profile />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
