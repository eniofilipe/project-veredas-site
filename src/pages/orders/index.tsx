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
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import * as S from './styles';
import veredaslogo from '../../assets/logo.png';
import AuthContext from '../../contexts/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const pedidos = [
  {
    id: 1,
    data: '22/07/2020',
    status: 'Entregue',
    tipo_pagamento: 'Dinheiro',
    valor_frete: 5.0,
    ofertas: [
      {
        id: 5,
        qtd: 2,
        produto: 'Alface',
        preco: 5.3,
      },
      {
        id: 1,
        qtd: 3,
        produto: 'Cebola',
        preco: 8.6,
      },
    ],
  },
  {
    id: 2,
    data: '15/08/2020',
    status: 'Pendente',
    tipo_pagamento: 'Dinheiro',
    valor_frete: 5.0,
    ofertas: [
      {
        id: 15,
        qtd: 1,
        produto: 'Alface',
        preco: 5.3,
      },
      {
        id: 11,
        qtd: 3,
        produto: 'Cebola',
        preco: 4.6,
      },
    ],
  },
];

const Order = () => {
  const classes = useStyles();
  const Router = useRouter();
  const { cliente, signOut } = useContext(AuthContext);

  function handleSubtotal(prods) {
    let sub = 0;
    prods.forEach((prod) => {
      sub += prod.preco;
    });
    return sub.toFixed(2);
  }

  function formatCurrency(value) {
    return `R$ ${value.toFixed(2)}`;
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
                pedidos.map((pedido) => {
                  const [open, setOpen] = useState(false);
                  const handleClick = () => {
                    setOpen(!open);
                  };
                  return (
                    <div>
                      <ListItem button onClick={handleClick}>
                        <ListItemText
                          primary={`Pedido #${pedido.id}\xa0\xa0\xa0\xa0\xa0\xa0\xa0${pedido.data}\xa0\xa0\xa0\xa0\xa0\xa0\xa0${pedido.status}`}
                        />
                        {open ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <TableContainer component={Paper}>
                          <Table aria-label="spanning table">
                            <TableHead>
                              <TableRow>
                                <TableCell>Quantidade</TableCell>
                                <TableCell align="right">Produto</TableCell>
                                <TableCell align="right">Valor</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {pedido.ofertas &&
                                pedido.ofertas.map((prod) => (
                                  <TableRow key={prod.id}>
                                    <TableCell>{prod.qtd}</TableCell>
                                    <TableCell align="right">
                                      {prod.produto}
                                    </TableCell>
                                    <TableCell align="right">
                                      {formatCurrency(prod.preco)}
                                    </TableCell>
                                  </TableRow>
                                ))}

                              <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={1}>Subtotal</TableCell>
                                <TableCell align="right">
                                  R${handleSubtotal(pedido.ofertas)}
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Taxa de entrega</TableCell>
                                <TableCell align="right">
                                  {formatCurrency(pedido.valor_frete)}
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>Total</TableCell>
                                <TableCell align="right">
                                  {formatCurrency(
                                    Number(handleSubtotal(pedido.ofertas)) +
                                      Number(pedido.valor_frete)
                                  )}
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
