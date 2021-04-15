/* eslint-disable no-restricted-syntax */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable operator-linebreak */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Head from 'next/head';
import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import * as S from './styles';
import veredaslogo from '../../assets/logo.png';
import AuthContext from '../../contexts/auth';

import { PedidosProps } from '../../types';
import { getPedidos } from '../../api/Pedidos';

import { FormatDateByFNS } from '../../Utils/Masks';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Order = () => {
  const classes = useStyles();
  const Router = useRouter();
  const { signOut } = useContext(AuthContext);
  const [open, setOpen] = useState([false]);
  const [pedidos, setPedidos] = useState<PedidosProps[]>([]);

  const fetchPedidos = async () => {
    try {
      const response = await getPedidos();

      setPedidos(response.data.reverse());
      const control = [];
      for (const i of response.data) {
        control.push(false);
      }
      setOpen(control);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  // function handleSubtotal(prods) {
  //   let sub = 0;
  //   prods.forEach((prod) => {
  //     sub += prod.preco;
  //   });
  //   return sub.toFixed(2);
  // }

  function handleSubtotal(prods) {
    let sub = 0;

    prods.forEach((prod) => {
      sub +=
        Number(prod.valor_unitario) * Number(prod.oferta_pedidos.quantidade);
    });

    return sub.toFixed(2);
  }

  return (
    <S.Wrapper>
      <Head>
        <title>Veredas da terra</title>
      </Head>
      <body>
        <S.Header>
          <S.Logo src={veredaslogo} alt="" />
          <S.TitlePedidos>Pedidos</S.TitlePedidos>
          <S.WrapperMenu>
            <S.Title onClick={() => Router.push('profile')}>Perfil</S.Title>
            <S.Title onClick={signOut}>Sair</S.Title>
          </S.WrapperMenu>
        </S.Header>
        <S.Body>
          <S.WrapperContent>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.root}
            >
              {pedidos &&
                pedidos.map((pedido, i) => {
                  const handleClick = (option) => {
                    const array = open.map((e) => false);
                    array[i] = option;
                    setOpen(array);
                  };
                  const controle = open[i];
                  return (
                    <div key={`${pedido.id}`}>
                      <ListItem button onClick={() => handleClick(!open[i])}>
                        <ListItemText
                          primary={`Pedido #${
                            pedido.id
                          }\xa0\xa0\xa0\xa0\xa0\xa0\xa0${FormatDateByFNS(
                            pedido.createdAt
                          )}\xa0\xa0\xa0\xa0\xa0\xa0\xa0${pedido.status}`}
                        />
                        {controle ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={controle} timeout="auto" unmountOnExit>
                        <TableContainer component={Paper}>
                          <Table aria-label="spanning table">
                            <TableHead>
                              <TableRow>
                                <TableCell>Quantidade</TableCell>
                                <TableCell align="center">Produto</TableCell>
                                <TableCell align="right">Valor</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {pedido.ofertas &&
                                pedido.ofertas.map((prod) => (
                                  <TableRow key={prod.id}>
                                    <TableCell>
                                      {prod.oferta_pedidos.quantidade}
                                    </TableCell>
                                    <TableCell align="center">
                                      {prod.produtos.nome}
                                    </TableCell>
                                    <TableCell align="right">
                                      R$ {prod.valor_unitario}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={1}>Subtotal</TableCell>
                                <TableCell align="right">
                                  R$ {handleSubtotal(pedido.ofertas)}
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Taxa de entrega</TableCell>
                                <TableCell align="right">
                                  R$ {pedido.frete.valor_frete.toFixed(2)}
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Total</TableCell>
                                <TableCell align="right">
                                  R${' '}
                                  {Number(
                                    pedido.frete.valor_frete +
                                      Number(handleSubtotal(pedido.ofertas))
                                  ).toFixed(2)}
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Collapse>
                    </div>
                  );
                })}
            </List>
          </S.WrapperContent>
        </S.Body>
      </body>
    </S.Wrapper>
  );
};

export default Order;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
