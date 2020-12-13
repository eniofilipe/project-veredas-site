import React, { useContext } from 'react';
import { AppProps } from 'next/app';

import { NextPageContext, NextComponentType } from 'next/types';

import Router from 'next/router';
import Home from './index';
import Login from './login';
import ValidadeContext from '../contexts/validade';
import AuthContext from '../contexts/auth';

const route: NextComponentType<NextPageContext> = ({
  Component,
  pageProps,
}: AppProps) => {
  const { validade } = useContext(ValidadeContext);
  const { cliente } = useContext(AuthContext);

  if (!validade) return <Home />;

  if (Router.asPath !== '/login' && Router.asPath !== '/' && !cliente) {
    return <Login />;
  }
  return <Component {...pageProps} />;
};

export default route;
