// Leonardo Moura Araujo

import React from 'react';
import { StyleSheet, View, Image, Text, ViewPropTypes } from 'react-native';

{/* Estilação da Galeria */}
const estilo = StyleSheet.create ({

  caixaTexto: {
    flex: 1,
    backgroundColor: '#d81414',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    width: 420,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },

  textTilte: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  textSubTilte: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  
  boxPrincinpa:{
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#b02000',
    width: 420,
    height: 855,
    
  },

  grade1: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  grade2: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  grade3: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 420,
    height: 100,
    resizeMode: 'cover'
  },

  images: {
    flex: 1,
    height: 265,
    width: 50,
    margin: 10,
    resizeMode: 'cover'
  }
}) 


export default function App() {
  return (
    <View>
      <View style={estilo.caixaTexto}> {/* Conteiner para Titulo */}
        <Text style={estilo.textTilte}> Galeria de Imagens Leonardo Moura</Text>
        <Text style={estilo.textSubTilte}> Filmes</Text>
      </View>

      <View style={estilo.boxPrincinpa}> {/* Caica de imagens */}
        <View style={estilo.grade1}> {/* Primeira Grade de Imagens Locais */}
          <Image source={require('./src/images/imagem01.jpg')}
            style={estilo.images}>
          </Image>
          <Image source={require('./src/images/imagem02.jpg')}
            style={estilo.images}>
          </Image>
        </View>

        <View style={estilo.grade2}> {/* Segunda Grade de Imagens Locais */}
          <Image source={require('./src/images/imagem03.jpg')}
            style={estilo.images}>
          </Image>
          <Image source={require('./src/images/imagem04.jpg')}
            style={estilo.images}>
          </Image>
        </View>

        <View style={estilo.grade3}> {/* Imagem Externa */}
          <Image source={{uri: 'https://c7nema.net/wp-content/uploads/2018/04/Pacific-Rim-Uprising.jpg'}} 
            style={estilo.images}>
          </Image>
        </View>
      </View>

    </View>
  )
}
