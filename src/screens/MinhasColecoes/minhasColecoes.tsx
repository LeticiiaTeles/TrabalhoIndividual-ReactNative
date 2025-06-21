import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ListRenderItem,
} from 'react-native';
import { styles } from './minhasColecoesStyle';
import ProfileImagem from '../../assets/perfil.png';
import BotaoIcon from '../../assets/botao.png';
import SetaIcon from '../../assets/seta.png';
import ComentarioIcon from '../../assets/comentario.png';
import NunuBackground from '../../assets/nunu.jpg';
import { Image as RNImage } from 'react-native';

interface Dorama {
  id: number;
  title: string;
  country: string;
  genre: string;
  type: string;
  rating: number;
  image: string;
}

export const MinhaColecao: React.FC = () => {
  const [colecao] = useState<Dorama[]>([
    {
      id: 1,
      title: 'Minha Namorada É uma Gumiho',
      country: 'KOREA',
      genre: 'COMÉDIA ROMÂNTICA',
      type: 'TV',
      rating: 9.2,
      image:
        'https://www.garotasgeeks.com/files/wp-content/uploads/2023/10/minha-namorada-e-uma-gumiho-garotas-geeks.png',
    },
    {
      id: 2,
      title: 'Hotel del Luna',
      country: 'KOREA',
      genre: 'DRAMA IDOL ASIÁTICO',
      type: 'TV',
      rating: 9.6,
      image: 'https://www.cultura.id/wp-content/uploads/2019/07/hotel-del-luna.jpeg',
    },
    {
      id: 3,
      title: 'Céu vermelho',
      country: 'KOREA',
      genre: 'ROMANCE',
      type: 'TV',
      rating: 9.4,
      image: 'https://6.vikiplatform.com/image/d954cd25ae4b43c28832d87e418d0e3b.jpg?x=b&a=0x0',
    },
    {
      id: 4,
      title: 'W',
      country: 'KOREA',
      genre: 'COMÉDIA ROMÂNTICA',
      type: 'TV',
      rating: 9.5,
      image: 'https://1.vikiplatform.com/c/30854c/1514dbf45f.jpg?x=b&a=0x0',
    },
    {
      id: 5,
      title: 'Esquie no amor',
      country: 'CHINA',
      genre: 'ROMANCE',
      type: 'TV',
      rating: 9.4,
      image: 'https://1.vikiplatform.com/c/40980c/1722655531.jpg?x=b',
    },
  ]);

  const renderItem: ListRenderItem<Dorama> = ({ item }) => (
  <View>
    <TouchableOpacity style={styles.cardDorama} activeOpacity={0.7}>
      <Image source={{ uri: item.image }} style={styles.imagemDorama} />
      <View style={styles.infoDorama}>
        <Text style={styles.tituloDorama}>{item.title}</Text>
        <Text style={styles.detalhesDorama}>
          {`${item.country}  •  ${item.genre}  •  ${item.type}`}
        </Text>
        <Text style={styles.avaliacao}>⭐ {item.rating.toFixed(1)}</Text>
      </View>
      <Text style={styles.menuIcon}>⋮</Text>
    </TouchableOpacity>

    
    <View style={styles.divisor} />
  </View>
  
);

  return (
    <SafeAreaView style={styles.container}>
        
      <View style={styles.topSection}>
        <Image source={NunuBackground} style={styles.backgroundPattern} />

        
        <View style={styles.headerIcons}>
          <TouchableOpacity activeOpacity={0.7}>
            <Image source={SetaIcon} style={styles.iconImage} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.menuIcon}>⋮</Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.avatarRow}>
          <Image source={ProfileImagem} style={styles.avatar} />
          <View style={styles.profileText}>
            <Text style={styles.profileTitle}>Doramas para assistir</Text>
            <Text style={styles.profileSubtitle}>Criado por salaocilas64_355</Text>
          </View>
        </View>

        <Text style={styles.description}>
          Quando acabar o curso, preciso voltar a assistir meus doraminhas
        </Text>

        <View style={styles.sectionDivider} />
      </View>

      
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>{colecao.length} Programas  |  0 seguidor</Text>
        <View style={styles.commentSection}>
          <View style={styles.commentContainer}>
            <Image source={ComentarioIcon} style={styles.commentIcon} />
            <Text style={styles.commentText}>Escreva um comentário</Text>
          </View>
          <View style={styles.commentDivider} />
        </View>
      </View>

      
      <FlatList
        data={colecao}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      
      <TouchableOpacity style={styles.fab} activeOpacity={0.7}>
        <RNImage source={BotaoIcon} style={styles.fabIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};