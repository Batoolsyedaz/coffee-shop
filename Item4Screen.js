
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet,TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    title: 'CAREMEL MACCHIATTO',
    description: '“"Cuppocino: a sip of sunshine in every cup, where espresso meets frothy joy!',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2021/11/79f791b8-d54b-4a64-ae45-b4790fe1e045.jpg?x39145',
  },
  {
    id: '2',
    title: 'MACCHIATO AND ESPRESSO COMBO',
    description: '"Mocha Magic: A tempting fusion of rich espresso and decadent chocolate, swirling in a dance of delight.',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://www.tankcoffee.com/wp-content/uploads/2023/07/A_close-up_shot_of_a_classic_Italian_macchiato-1024x574.png',
  },
  {
    id: '3',
    title: 'HAZELNUT MACCHIATTO',
    description: '"Latté Love: A velvety embrace of smooth espresso and steamed milk, crafted to perfection.',
    userName: 'NatureLover123',
    imageUrl: 'https://images.aws.nestle.recipes/original/2020_03_02T09_22_39_mrs_ImageRecipes_146249lrg.jpg',
  },{
    id: '4',
    title: 'TRADITIONAL MACCHIATTO',
    description: ' "Cortado Charm: A bold marriage of strong espresso and a splash of velvety steamed milk',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://roastercoffees.com/wp-content/uploads/2021/04/What-Is-Macchiato-1024x683.webp',
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

const Item4Screen = ({navigation}) => {
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

export default Item4Screen;