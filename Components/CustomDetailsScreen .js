
import React from 'react';
import { View, Text } from 'react-native';

const CustomDetailsScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={{ padding: 20, backgroundColor: '#f0f8ff' }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Name: {transaction.name}</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>Place: {transaction.place}</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>Amount: {transaction.amount}</Text>
      <Text style={{ fontSize: 16 }}>Date: {transaction.date}</Text>
    </View>
  );
};

export default CustomDetailsScreen;
