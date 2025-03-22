import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/supabaseClient';
import { useTranslation } from 'react-i18next';
import { ZaptBadge } from '@/modules/shared/ZaptBadge';
import { LanguageSwitcher } from '@/modules/i18n/LanguageSwitcher';

export default function AuthPage() {
  const { session } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (session) {
      navigate('/', { replace: true });
    }
  }, [session, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">FreelanceHub</div>
        <div className="flex items-center">
          <LanguageSwitcher />
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="card">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold mb-2">{t('auth.signInTitle')}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('auth.signInSubtitle')}
              </p>
              <div className="mt-4 mb-6 text-center">
                <a 
                  href="https://www.zapt.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {t('auth.signInWithZapt')}
                </a>
              </div>
            </div>
            
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: 'var(--primary)',
                      brandAccent: 'var(--secondary)',
                    },
                  },
                },
              }}
              providers={['google', 'facebook', 'apple']}
              magicLink={true}
              view="magic_link"
              localization={{
                variables: {
                  sign_in: {
                    email_label: t('auth.emailLabel'),
                    password_label: t('auth.passwordLabel'),
                    email_input_placeholder: t('auth.emailPlaceholder'),
                    password_input_placeholder: t('auth.passwordPlaceholder'),
                    button_label: t('auth.signInButton'),
                    loading_button_label: t('auth.loadingButton'),
                    social_provider_text: t('auth.socialProviderText'),
                    link_text: t('auth.forgotPassword'),
                  },
                  magic_link: {
                    email_input_label: t('auth.emailLabel'),
                    email_input_placeholder: t('auth.emailPlaceholder'),
                    button_label: t('auth.sendMagicLink'),
                    loading_button_label: t('auth.sendingMagicLink'),
                  },
                }
              }}
            />
          </div>
        </div>
      </main>
      
      <ZaptBadge />
    </div>
  );
}