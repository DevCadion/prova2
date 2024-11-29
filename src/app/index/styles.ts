import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginRight:60,
    color: '#fff',
    marginBottom: 30,
    fontWeight: 'bold',
    fontFamily:"roboto"
  },
  input: {
    width: 278,
    height: 60,
    //backgroundColor: '#333',
    //color: '#fff',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderBottomWidth: 2, // Aqui, adicionamos a borda somente na parte inferior
    borderBottomColor: '#ffff', // Cor da borda inferior
    borderTopWidth: 0, // Removemos a borda superior
    borderLeftWidth: 0, // Removemos a borda esquerda
    borderRightWidth: 0, // Removemos a borda direita
  },
  inputFocused: {
    borderColor: '#ffff', // Cor da borda quando o campo estiver em foco
    backgroundColor: '#2c2c2c',
  },
  button: {
    backgroundColor: '#184bff',
    //width: '100',
    width:142,
    height:52,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginLeft:148,
    marginTop:30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
