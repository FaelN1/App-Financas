import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';


import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2022',
    type: 0 //saida
  },
  {
    id: 2,
    label: 'Pix Cliente',
    value: '100,00',
    date: '18/09/2022',
    type: 1 //entrada
  },
  {
    id: 3,
    label: 'Boleto conta Internet',
    value: '100,90',
    date: '20/09/2022',
    type: 0 //saida
  },
  {
    id: 4,
    label: 'Pagamento Cliente',
    value: '543,87',
    date: '22/09/2022',
    type: 1 //entrada
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='João Kleber'/>
      <Balance currencySymbol="R$" balance="1.000,00" expenses="439,54"/>

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>


      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ({item}) =>  <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
