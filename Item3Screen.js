
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet,TouchableOpacity } from 'react-native';

const data = [
  {
    id: '1',
    title: 'CARAMEL LATTE ',
    description: '“"Cuppocino: a sip of sunshine in every cup, where espresso meets frothy joy!',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://bakingmischief.com/wp-content/uploads/2019/10/easy-caramel-latte-image-square.jpg',
  },
  {
    id: '2',
    title: 'ICED PUMPKIN LATTE',
    description: '"Mocha Magic: A tempting fusion of rich espresso and decadent chocolate, swirling in a dance of delight.',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://i0.wp.com/sweetlycakes.com/wp-content/uploads/2022/07/Icedpumpkinspicelatte-8.jpg?resize=720%2C1080&ssl=1',
  },
  {
    id: '3',
    title: 'DAIRY-FREE ROSR LATTE',
    description: '"Latté Love: A velvety embrace of smooth espresso and steamed milk, crafted to perfection.',
    userName: 'NatureLover123',
    imageUrl: 'https://thedairyfreemenu.com/wp-content/uploads/2022/11/rose-latte-featured-image.jpg',
  },{
    id: '4',
    title: 'APPLE CIDER LATTE',
    description: ' "Cortado Charm: A bold marriage of strong espresso and a splash of velvety steamed milk',
    userName: 'a world of variations awaits with just a click! 🌟☕✨"',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/hearst-truvia-c121887-edit-1633468112.jpg?crop=1xw:0.8441720860430215xh;center,top&resize=1200:*',
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

const Item3Screen = ({navigation}) => {
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

export default Item3Screen;