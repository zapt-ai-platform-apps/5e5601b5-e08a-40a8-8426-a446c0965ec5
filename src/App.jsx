import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '@/modules/auth/useAuth';
import { MainLayout } from '@/modules/layout/MainLayout';
import HomePage from '@/modules/home/HomePage';
import SearchPage from '@/modules/jobs/pages/SearchPage';
import JobPostingPage from '@/modules/jobs/pages/JobPostingPage';
import LearnPage from '@/modules/learn/LearnPage';
import MarketplacePage from '@/modules/marketplace/MarketplacePage';
import CommunityPage from '@/modules/community/CommunityPage';
import ChatPage from '@/modules/chat/ChatPage';
import ProfilePage from '@/modules/profile/ProfilePage';
import AuthPage from '@/modules/auth/AuthPage';
import ProtectedRoute from '@/modules/auth/ProtectedRoute';
import NotFoundPage from '@/modules/shared/NotFoundPage';
import { useTranslation } from 'react-i18next';
import { ZaptBadge } from '@/modules/shared/ZaptBadge';

export default function App() {
  const { session, loading } = useAuth();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set the html lang attribute based on the current language
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          
          <Route path="/post-job" element={
            <ProtectedRoute>
              <JobPostingPage />
            </ProtectedRoute>
          } />
          
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          
          <Route path="/community" element={
            <ProtectedRoute>
              <CommunityPage />
            </ProtectedRoute>
          } />
          
          <Route path="/chat" element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          } />
          
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      
      <ZaptBadge />
    </div>
  );
}