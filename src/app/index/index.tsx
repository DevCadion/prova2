import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import do LinearGradient
import { styles } from './styles';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocused, setUsernameFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <LinearGradient
      colors={['#4d4d4d', '#434343', '#282828']}
      style={styles.container}
    >
      <Text style={styles.title}>LOGIN / Loja Varejo</Text>

      <TextInput
        style={[styles.input, isUsernameFocused && styles.inputFocused]}
        placeholder="Username"
        placeholderTextColor="#ffff"
        value={username}
        onChangeText={setUsername}
        onFocus={() => setUsernameFocused(true)}
        onBlur={() => setUsernameFocused(false)}
      />

      <TextInput
        style={[styles.input, isPasswordFocused && styles.inputFocused]}
        placeholder="Password"
        placeholderTextColor="#ffff"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        onFocus={() => setPasswordFocused(true)}
        onBlur={() => setPasswordFocused(false)}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default LoginScreen;
