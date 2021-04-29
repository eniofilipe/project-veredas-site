import React from 'react';

import { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { ValidadeProvider } from '../contexts/validade';
import { AuthProvider } from '../contexts/auth';
import { CartProvider } from '../contexts/cart';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';


const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <ThemeProvider theme={theme}>
    <CartProvider>
      <AuthProvider>
        <ValidadeProvider>
          <Component />

          <GlobalStyle />
        </ValidadeProvider>
      </AuthProvider>
    </CartProvider>
    <ToastContainer />
  </ThemeProvider>
);

export default MyApp;
