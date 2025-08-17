
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet,TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    title: 'ICED CUPPUCINNO ',
    description: '“"Cuppocino: a sip of sunshine in every cup, where espresso meets frothy joy!',
    userName: '🌟☕✨"',
    imageUrl: 'https://www.acouplecooks.com/wp-content/uploads/2021/09/Iced-Cappuccino-003s.jpg',
  },
  {
    id: '2',
    title: 'FRENCH VANILLA CAPPUCCINO',
    description: '"Mocha Magic: A tempting fusion of rich espresso and decadent chocolate, swirling in a dance of delight.',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://www.texanerin.com/content/uploads/2022/12/french-vanilla-cappuccino-image-650x975.jpg',
  },
  {
    id: '3',
    title: 'CHOCHOLATE CAPPUCCINO',
    description: '"Latté Love: A velvety embrace of smooth espresso and steamed milk, crafted to perfection.',
    userName: 'NatureLover123',
    imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2009%2F12%2F21%2Fchocolate-cappucino-ck-x.jpg&q=60',
  },{
    id: '4',
    title: 'COACO POWDER CAPPUCCINO ',
    description: ' "Cortado Charm: A bold marriage of strong espresso and a splash of velvety steamed milk',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://storage.googleapis.com/shy-pub/38279/1623349803159_SKU-0176_0.jpg',
  },
  // Add more data objects for additional posts
];

const PostItem = ({ title, description, userName, imageUrl }) => (
  <View style={styles.postContainer}>
    <Image source={{ uri: imageUrl }} style={styles.postImage} />
    <View style={styles.postContent}>
      <Text style={styles.postTitle}>{title}</Text>
      <Text style={styles.postDescription}>{description}</Text>
      <Text style={styles.userName}>🔍{userName}</Text>
    </View>
  </View>
);

const Item1Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<TouchableOpacity
        // onPress={() => navigation.navigate('Details', { item })}
        // onPress={() => navigation.navigate('BottomTabs')}
      >
        <PostItem {...item} />
      </TouchableOpacity>
    )}
    numColumns={2}
  />
</View>
);
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 16,
    backgroundColor: '#a0522d',
  },
  postContainer: {
    height:700,
    width:600,
    backgroundColor: '#ffdead',
    marginBottom: 16,
    borderRadius: 40,
    overflow: 'hidden',
    padding: 20,
    margin:20,
  },
  postImage: {
    height: 400,
    resizeMode: 'cover',
  },
  postContent: {
    padding: 16,
  },
  postTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'Roboto',
    color: '#800000',
   
  },
  postDescription: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight:"bold",
    color: '#a52a2a',
  },
  userName: {
    fontSize: 30,
    color: 'brown',
    fontStyle: 'italic',
  },
});

export default Item1Screen;