/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from 'react';
import { AppProps } from 'next/app';

import { NextPageContext, NextComponentType } from 'next/types';

import Router from 'next/router';
import Home from './home';
import Login from './login';
import ValidadeContext from '../contexts/validade';
import AuthContext from '../contexts/auth';

const Route = ({ pageProps, Component, router }: AppProps) => {
  const { validade } = useContext(ValidadeContext);
  const { cliente } = useContext(AuthContext);

  useEffect(() => {
    // if (!cliente) {
    //   if (
    //     router.asPath !== '/login'
    //     && router.asPath !== '/'
    //     && router.asPath !== '/register'
    //     && !cliente
    //   ) {
    //     router.push('/login');
    //   }
    // }
    // if (!validade) {
    //   router.push('/');
    // }
  }, []);

  return <Component {...pageProps} />;
};

export default Route;
