import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { styles } from './styles';

const UserCard = ({ usuario }) => (
  <View style={styles.cardView}>
    <Text style={styles.tituloView}>{usuario.nome}</Text>
    <Text style={styles.subTituloView}>
      Aprender: {usuario.aprender} | Ensinar: {usuario.ensinar}
    </Text>
  </View>
);

export function Home() {
  const [usuarios] = useState([
    { nome: 'Alice', aprender: 'Violão', ensinar: 'Inglês' },
    { nome: 'Bruno', aprender: 'Pintura', ensinar: 'Matemática' },
    { nome: 'Clara', aprender: 'Programação', ensinar: 'Culinária' },
  ]);

  const swiperRef = useRef(null);

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        cards={usuarios}
        renderCard={(usuario) => <UserCard usuario={usuario} />}
        backgroundColor="#f3f4f6"
        stackSize={3}
        cardVerticalMargin={60}
      />
    </View>
  );
}
