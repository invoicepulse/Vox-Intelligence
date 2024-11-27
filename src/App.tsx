import { Routes, Route } from 'react-router-dom';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Features from './pages/Features';
import UseCases from './pages/UseCases';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import PostSignup from './pages/PostSignup';
import ForStartups from './pages/ForStartups';
import { ScrollToTop } from './components/ScrollToTop';
import { NavigationProvider } from './contexts/NavigationContext';

export default function App() {
  return (
    <NavigationProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="features" element={<Features />} />
          <Route path="usecases" element={<UseCases />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="for-startups" element={<ForStartups />} />
          <Route
            path="/sign-in/*"
            element={<RedirectToSignIn redirectUrl="/post-signup" />}
          />
        </Route>
        <Route path="/post-signup" element={<PostSignup />} />
      </Routes>
    </NavigationProvider>
  );
}