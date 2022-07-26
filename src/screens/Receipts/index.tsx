import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

import { Container, PhotoInfo } from './styles';
import { Header } from '../../components/Header';
import { Photo } from '../../components/Photo';
import { File } from '../../components/File';

import { photosData } from '../../utils/photo.data';

export function Receipts() {

  function ondelete(): void {
    console.log('Aqui estou Comprovantes');
  }
  useEffect(() => {
    console.log('Comprovantes');
  }, []);

  return (
    <Container>
      <Header title="Comprovantes" />

      <Photo uri="" />

      <PhotoInfo>
        Informações da foto
      </PhotoInfo>

      <FlatList
        data={photosData}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <File
            data={item}
            onShow={() => { }}
            onDelete={ondelete}
          />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        style={{ width: '100%', padding: 24 }}
      />
    </Container>
  );
}
