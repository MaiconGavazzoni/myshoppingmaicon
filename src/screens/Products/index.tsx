import React, { useEffect } from 'react';


import { ShoppingList } from '../../components/ShoppingList';
import { FormBox } from '../../components/FormBox';
import { Header } from '../../components/Header';
import { Container } from './styles';

export function Products() {


  useEffect(() => {
    console.log('Products');
  }, []);

  return (
    <Container>
      <Header title="Lista de compras" showLogoutButton />
      <FormBox />
      <ShoppingList />
    </Container>
  );
}
