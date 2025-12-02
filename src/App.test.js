import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './i18n';

jest.mock('./pages/Home', () => () => <div>Home Page</div>);
jest.mock('./pages/Diplomes', () => () => <div>Diplômes Page</div>);
jest.mock('./pages/Contact', () => () => <div>Contact Page</div>);
jest.mock('./pages/Projets', () => () => <div>Projets Page</div>);
jest.mock('./pages/Experience', () => () => <div>Expérience Page</div>);

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </I18nextProvider>
  );
};

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });



  test('affiche la barre de navigation après le chargement', async () => {
    renderWithRouter(<App />);
    await waitFor(() => {
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });
  });

  test('affiche la page d\'accueil par défaut', async () => {
    renderWithRouter(<App />, { route: '/' });
    await waitFor(() => {
      expect(screen.getByText('Home Page')).toBeInTheDocument();
    });
  });

  test('permet la navigation vers la page Diplômes', async () => {
    renderWithRouter(<App />, { route: '/diplomes' });
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /diplômes/i })).toBeInTheDocument();
    });
  });

  test('permet la navigation vers la page Expérience', async () => {
    renderWithRouter(<App />, { route: '/experience' });
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /expérience/i })).toBeInTheDocument();
    });
  });

  test('permet la navigation vers la page Projets', async () => {
    renderWithRouter(<App />, { route: '/projets' });
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /projets/i })).toBeInTheDocument();
    });
  });

  test('permet la navigation vers la page Contact', async () => {
    renderWithRouter(<App />, { route: '/contact' });
    await waitFor(() => {
      expect(screen.getByRole('form')).toBeInTheDocument();
    });
  });

  test('affiche la page 404 pour une route inconnue', async () => {
    renderWithRouter(<App />, { route: '/une-route-inconnue' });
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument();
    });
  });

  test('affiche le footer', async () => {
    renderWithRouter(<App />);
    await waitFor(() => {
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  });

  test('affiche le bouton de changement de langue', async () => {
    renderWithRouter(<App />);
    await waitFor(() => {
      const languageButton = screen.getByRole('button', { 
        name: /(changer de langue|change language)/i 
      });
      expect(languageButton).toBeInTheDocument();
    });
  });
});
