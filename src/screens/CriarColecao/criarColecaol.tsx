import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './criarColecaoStyle';
import { Feather } from '@expo/vector-icons';

const CriarColecao = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [publico, setPublico] = useState(true);

  const enviar = () => {
    console.log('Título:', titulo);
    console.log('Descrição:', descricao);
    console.log('Público:', publico);
    setTitulo('');
    setDescricao('');
    setPublico(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        {/* Cabeçalho */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Feather name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Criar nova coleção</Text>
          <TouchableOpacity onPress={enviar}>
            <Text style={styles.enviarText}>ENVIAR</Text>
          </TouchableOpacity>
        </View>

        {/* Formulário */}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.formArea}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.label}>Título</Text>
          <TextInput
            style={[styles.input, { borderBottomWidth: 1, borderBottomColor: '#fff', color: '#fff' }]}
            placeholder='ex.: "10 dramas que você não conseguiu prever o final"'
            placeholderTextColor="#aaa"
            value={titulo}
            onChangeText={setTitulo}
          />

          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={[styles.input, styles.descricao]}
            placeholder="Adicione a descrição aqui..."
            placeholderTextColor="#aaa"
            multiline
            value={descricao}
            onChangeText={setDescricao}
          />
        </ScrollView>

        {/* Rodapé fixo com switch */}
        
        <View style={[
          styles.switchArea,
          {
            position: 'absolute',
            bottom: 20,
            left: 0,
            right: 0,
            borderTopColor: '#333',
            
          }
        ]}>
           <Switch
            value={publico}
            onValueChange={setPublico}
            trackColor={{ false: '#888', true: '#4da6ff' }}
            thumbColor="#4da6ff"
          />
          
          <Text style={styles.switchLabel}>Tornar público</Text>
          <View style={styles.helpCircleCustom}>
            <Text style={styles.helpText}>?</Text>
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default CriarColecao;