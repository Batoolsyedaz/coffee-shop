import React from 'react';
import { View, Text, FlatList, Image, StyleSheet,TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    title: 'CUPPUCINNO ',
    description: '“"Cuppocino: a sip of sunshine in every cup, where espresso meets frothy joy!',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cappucino-32dbfba.jpg?resize=768,574',
  },
  {
    id: '2',
    title: 'MOCHA COFFEE',
    description: '"Mocha Magic: A tempting fusion of rich espresso and decadent chocolate, swirling in a dance of delight.',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://www.thespruceeats.com/thmb/POPhcPYBWx7fNJu8Bc7YjS-Flso=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-mocha-4797918-hero-01-1-f8fb7ebd74914895b61366f6fc1d4b05.jpg',
  },
  {
    id: '3',
    title: 'LATTEE COFFEE',
    description: '"Latté Love: A velvety embrace of smooth espresso and steamed milk, crafted to perfection.',
    userName: 'NatureLover123',
    imageUrl: 'https://coffeebros.com/cdn/shop/articles/latte-vs-flat-white-all-differences-explained.jpg?v=1676581028',
  },{
    id: '4',
    title: 'CORTADO ',
    description: ' "Cortado Charm: A bold marriage of strong espresso and a splash of velvety steamed milk',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://www.bonvivantcaffe.com/wp-content/uploads/2023/02/cortado-glass.jpg',
  },{
    id: '5',
    title: 'DOPPIO COFFEE',
    description: ' "Doppio Delight: Experience the essence of pure espresso indulgence with our Doppio. ',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/53a23e7de4b0992c68a63839/1420498105993-EE1XELEXQZ4535HCB9QY/_MG_1778-Edit_HR.jpg',
  },{
    id: '6',
    title: 'AFFOGATO COFFEE',
    description: '"Affogatto Bliss: Immerse yourself in the exquisite simplicity of our Affogatto – a scoop of luscious vanilla ice cream luxuriating in the warmth of a freshly poured shot of espresso. ',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://assets.telegraphindia.com/telegraph/2023/Sep/1695389405_cms002.jpg',
  },{
    id: '7',
    title: 'MACCHIATTO',
    description: '"Machiatto Marvel: A masterpiece in simplicity, our Machiatto is a canvas where the intensity of espresso meets a dollop of frothy foam.',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://www.bonvivantcaffe.com/wp-content/uploads/2023/02/cortado-glass.jpg',
  },
  {
    id: '1',
    title: 'CON PANNA',
    description: '"Con Panna Delight: Elevate your espresso experience with a touch of decadence. Our Con Panna is a symphony of bold coffee notes crowned with a luscious swirl of whipped cream',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://www.acouplecooks.com/wp-content/uploads/2021/12/Espresso-Con-Panna-005.jpg',
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

const HomeScreen = ({navigation}) => {
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
    borderRadius: 8,
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

export default HomeScreen;