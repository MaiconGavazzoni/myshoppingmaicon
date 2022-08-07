import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';

import { Container, Account, Title, Subtitle } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Alert } from 'react-native';

export function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function handleSigInAnonymously() {
    const { user } = await auth().signInAnonymously();

    console.log(user);
  }

  function handleCreateUserAccount() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => { Alert.alert('Usuário criado com sucesso!') })
      .catch(erro => {
        console.log(erro.code)
        if (erro.code === 'auth/email-already-in-use') {
          return Alert.alert('Este e-mail já está em uso. Ecolha outro e-mail para cadastrar!')
        }

        if (erro.code === 'auth/invalid-email') {
          return Alert.alert('E-mail inválido!')
        }

        if (erro.code === 'auth/weak-password') {
          return Alert.alert('A senha deve ter no minímo 6 digitos.')
        }
      });
  }

  async function handleSignInWithEmailAndPassword() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => console.log(user))
      .catch((error) => {

        console.log(error)
        if (error.code === 'auth/user-not-found') {
          return Alert.alert('Usuário não existe!')
        }
        if (error.code === 'auth/invalid-email') {
          return Alert.alert('E-mail inválido!')
        }
        if (error.code === 'auth/wrong-password') {
          return Alert.alert('Usuário ou senha inválido!')
        }

        if (error.code === 'auth/too-many-requests') {
          return Alert.alert('Excesso de tentativas, senha bloqueada. Redefina a senha ou tente mais tarde!')
        }

      });
  }

  function handleForgotPassword() {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => Alert.alert('Enviamos um link no seu e-mail para redefini a senha.'))
  }



  return (
    <Container>
      <Title>MyShopping</Title>
      <Subtitle>monte sua lista de compra te ajudar nas compras</Subtitle>

      <Input
        placeholder="e-mail"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <Input
        placeholder="senha"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Entrar" onPress={handleSignInWithEmailAndPassword} />

      <Account>
        <ButtonText title="Recuperar senha" onPress={handleForgotPassword} />
        <ButtonText title="Criar minha conta" onPress={handleCreateUserAccount} />
      </Account>
    </Container>
  );
}