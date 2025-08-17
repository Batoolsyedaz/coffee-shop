import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ isSeller = true }) => {
  const handleEditProfile = () => {
    // Add functionality to edit the profile
    console.log('Edit Profile button pressed');
  };

  const handleViewMenu = () => {
    // Add functionality to view the coffee shop's menu
    console.log('View Menu button pressed');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.bonvivantcaffe.com/wp-content/uploads/2023/02/cortado-glass.jpg' }}
        style={styles.profileImage}
      />
      <Text style={styles.title}>{isSeller ? 'Coffee Shop Profile' : 'User Profile'}</Text>
      <Text style={styles.userInfo}>Username: {isSeller ? 'CoffeeShopOwner' : 'CoffeeLover123'}</Text>
      <Text style={styles.userInfo}>
        Email: {isSeller ? 'owner@coffeeshop.com' : 'coffee@example.com'}
      </Text>

      {isSeller && (
        <View>
          <Text style={styles.userInfo}>Coffee Shop: Awesome Coffee House</Text>
          <Text style={styles.userInfo}>Location: Cityville</Text>
          <Text style={styles.userInfo}>Rating: ⭐⭐⭐⭐</Text>

          {/* Additional functionalities for Coffee Shop */}
          <TouchableOpacity style={styles.viewMenuButton} onPress={handleViewMenu}>
            <Text style={styles.viewMenuButtonText}>View Menu</Text>
          </TouchableOpacity>

          <Text style={styles.userInfo}>Opening Hours: 8 AM - 6 PM</Text>
          <Text style={styles.userInfo}>Contact: +1 (123) 456-7890</Text>
        </View>
      )}

      <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
        <Text style={styles.editProfileButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffdead',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 10,
    color: '#666',
  },
  editProfileButton: {
    backgroundColor: '#FF6347', // Tomato color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  editProfileButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewMenuButton: {
    backgroundColor: '#4dAF50', // Green color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  viewMenuButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;

