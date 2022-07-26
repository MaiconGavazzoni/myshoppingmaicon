import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { Container, PhotoInfo } from './styles';
import { Header } from '../../components/Header';
import { Photo } from '../../components/Photo';
import { File, FileProps } from '../../components/File';
//import storage from '@react-native-firebase/storage';
//import { photosData } from '../../utils/photo.data';

export function Receipts() {

  const [photos, setPhotos] = useState<FileProps[]>([]);
  const [photoSelected, setPhotoSelected] = useState('');
  const [photoInfo, setPhotoInfo] = useState('');

  async function handleShowImage(path: string) {
    // const urlImage = await storage().ref(path).getDowloadURL();

    // setPhotoSelected(urlImage);

    // const info = await storage().ref(path).getMetadata();
    // setPhotoInfo(`Upload realizado em ${info.timeCreated}`)
  }


  function handleDeleteImage(path: string) {
    // storage()
    //   .ref(path)
    //   .delete()
    //   .then(() => {
    //     Alert.alert('Imagem excluida com sucesso!')
    //     fetchImage();
    //   })
    //   .catch(error => console.error(error))
  }

  async function fetchImage() {
    // storage().ref('images').list().then(result => {
    //   const files: FileProps[] = [];
    //   result.itens.forEach(file => {
    //     files.push({
    //       name: file.name,
    //       path: file.path
    //     })
    //   })

    //   setPhotos(files);
    // })
  }

  useEffect(() => {
    fetchImage();

  }, []);

  return (
    <Container>
      <Header title="Comprovantes" />

      <Photo uri={photoSelected} />

      <PhotoInfo>
        {photoInfo}
      </PhotoInfo>

      <FlatList
        data={photos}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <File
            data={item}
            onShow={() => handleShowImage(item.path)}
            onDelete={() => handleDeleteImage(item.path)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        style={{ width: '100%', padding: 24 }}
      />
    </Container>
  );
}
