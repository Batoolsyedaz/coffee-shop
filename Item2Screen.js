
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet,TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    title: 'DARK CHOCHOLATE MOCHA ',
    description: '“"Cuppocino: a sip of sunshine in every cup, where espresso meets frothy joy!',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://gatherforbread.com/wp-content/uploads/2014/10/Dark-Chocolate-Mocha-Square.jpg',
  },
  {
    id: '2',
    title: 'Kevin Costner CAFE MOCHA ',
    description: '"Mocha Magic: A tempting fusion of rich espresso and decadent chocolate, swirling in a dance of delight.',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://images.ctfassets.net/v601h1fyjgba/4mf4LfyiIKLvOw72oPDgD3/cca493e3a33d080f4a7e6eade04af27a/Caf___Mocha.jpg',
  },
  {
    id: '3',
    title: 'TOASTED COCONUT MOCHA',
    description: '"Latté Love: A velvety embrace of smooth espresso and steamed milk, crafted to perfection.',
    userName: 'NatureLover123',
    imageUrl: 'https://www.chocolatemoosey.com/wp-content/uploads/2016/03/Toasted-Coconut-Mochas-2263.jpg',
  },{
    id: '4',
    title: 'ICED WHIPPED MOCHA ',
    description: ' "Cortado Charm: A bold marriage of strong espresso and a splash of velvety steamed milk',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://lizbushong.com/wp-content/uploads/2020/05/Mocha-Whipped-Coffee-Recipe-Lizbushong.com_-scaled.jpg',
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

const Item2Screen = ({navigation}) => {
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
    borderRadius: 50,
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

export default Item2Screen;