import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

const coffeeItems = [
  { id: '1', name: 'Espresso', price: 2.5 },
  { id: '2', name: 'Latte', price: 4.0 },
  { id: '3', name: 'Cappuccino', price: 3.5 },
  { id: '4', name: 'Americano', price: 3.0 },
];

const ShoppingScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    Alert.alert(
      'Remove Item',
      `Do you want to remove ${item.name} from your cart?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => {
            const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
            setCartItems(updatedCart);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Detail', { item })}
    >
      <Image
        source={{ uri: 'https://example.com/coffee_icon.png' }} // Replace with your actual online image URL
        style={styles.itemImage}
      />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={() => addToCart(item)}>
        <Text style={styles.addToCart}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderCartItem = ({ item }) => (
    <TouchableOpacity style={styles.cartItemContainer} onPress={() => removeFromCart(item)}>
      <Image
        source={{ uri: 'https://example.com/coffee_icon.png' }} // Replace with your actual online image URL
        style={styles.itemImage}
      />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <Text style={styles.removeFromCart}>Remove</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coffee Menu</Text>
      <FlatList
        data={coffeeItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.menuList}
      />
      {cartItems.length > 0 && (
        <View style={styles.cartContainer}>
          <Text style={styles.title}>Shopping Cart</Text>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
            style={styles.cartList}
          />
          <Text style={styles.totalPrice}>
            Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#a0522d', // Light coffee color
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#7c3c21', // Dark coffee color
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fddac1', // Creamy coffee color
    borderRadius: 12,
    elevation: 2,
  },
  cartItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f8f1e5', // Light coffee color
    borderRadius: 12,
    elevation: 2,
  },
  itemImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20, // Optional: Round the corners of the image
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7c3c21',
  },
  itemPrice: {
    fontSize: 16,
    color: '#b3855b', // Lighter coffee color
  },
  addToCart: {
    fontSize: 16,
    color: '#b3855b', // Accent color
    fontWeight: 'bold',
  },
  removeFromCart: {
    fontSize: 16,
    color: '#e74c3c', // Red color
    fontWeight: 'bold',
  },
  menuList: {
    marginBottom: 20,
  },
  cartContainer: {
    backgroundColor: '#f8f1e5',
    padding: 15,
    borderRadius: 12,
    elevation: 2,
  },
  cartList: {
    marginBottom: 10,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7c3c21',
    marginTop: 10,
  },
});

export default ShoppingScreen;




