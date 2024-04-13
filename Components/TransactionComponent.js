import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import firebase from './Firebase';
import { collection, addDoc } from 'firebase/firestore';

const TransactionComponent = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [loc, setLoc] = useState('');

  const addTransaction = async () => {
    try {
      const transactionRef = collection(firebase, 'transactions');
      await addDoc(transactionRef, {
        name,
        amount,
        date,
        loc
      });
      console.log("Adding transaction with data:", { name, amount, date, loc });
      Alert.alert('Success', 'Transaction added successfully');
      setName('');
      setAmount('');
      setDate('');
      setLoc('');
    } catch (error) {
      console.error("Error adding transaction: ", error);
      Alert.alert('Error', 'Failed to add transaction');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Amount:</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter amount"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Date:</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Enter the date"
      />

      <Text style={styles.label}>Location:</Text>
      <TextInput
        style={styles.input}
        value={loc}
        onChangeText={setLoc}
        placeholder="Enter your location"
      />

      <TouchableOpacity style={styles.button} onPress={addTransaction}>
        <Text style={styles.buttonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#009688',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default TransactionComponent;
