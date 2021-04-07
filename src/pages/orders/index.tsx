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
import * as S from './styles';
import veredaslogo from '../../assets/logo.png';
import AuthContext from '../../contexts/auth';

import { PedidosProps } from '../../types';
import { getPedidos } from '../../api/Pedidos';

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
  const { cliente, signOut } = useContext(AuthContext);
  const [pedidos, setPedidos] = useState<PedidosProps[]>([]);

  const fetchPedidos = async () => {
    try {
      const response = await getPedidos();

      setPedidos(response.data);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  function handleSubtotal(prods) {
    let sub = 0;
    prods.forEach((prod) => {
      sub += prod.preco;
    });
    return sub.toFixed(2);
  }

  const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  // function formatCurrency(value) {
  //   return `R$ ${value.toFixed(2)}`;
  // }

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
              {pedidos.map((pedido) => {
                // const [open, setOpen] = useState(false);
                const handleClick = () => {
                  setOpen(!open);
                };
                return (
                  <div key={`${pedido.id}`}>
                    <ListItem button onClick={handleClick}>
                      <ListItemText
                        primary={`Pedido #${pedido.id}\xa0\xa0\xa0\xa0\xa0\xa0\xa0${pedido.createdAt}\xa0\xa0\xa0\xa0\xa0\xa0\xa0${pedido.status}`}
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
                                  <TableCell>
                                    {prod.oferta_pedidos.quantidade}
                                  </TableCell>
                                  <TableCell align="right">
                                    {prod.produtos.nome}
                                  </TableCell>
                                  <TableCell align="right">
                                    {prod.preco}
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
                                {pedido.valor_frete}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Total</TableCell>
                              <TableCell align="right">
                                {Number(handleSubtotal(pedido.ofertas)) +
                                  Number(pedido.valor_frete)}
                                {pedido.valor_frete}
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
