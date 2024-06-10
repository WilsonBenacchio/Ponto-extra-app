import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const BemVindoScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../img/rimuru2.jpg')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Clique em entrar para logar em sua conta</Text>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.nextButtonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000'
  },
  welcomeText: {
    fontSize: 32,
    marginBottom: 20,
    color: '#000000',
  },
  nextButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  nextButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default BemVindoScreen;
