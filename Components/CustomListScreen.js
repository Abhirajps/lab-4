import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { TransactionsContext } from './CustomProvider'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { collection, getDocs } from 'firebase/firestore';
import firebase from './Firebase';
import { useFocusEffect } from '@react-navigation/native';

const CustomListScreen = ({ navigation }) => {
  const { transactionsData, setTransactionsData } = useContext(TransactionsContext);
  const [loading, setLoading] = React.useState(true);

  const fetchTransactions = async () => {
    console.log("Fetching transactions...");
    try {
      const transactionsCollection = collection(firebase, 'transactions');
      const querySnapshot = await getDocs(transactionsCollection);
      const transactions = [];
      querySnapshot.forEach((doc) => {
        transactions.push({
          id: doc.id,
          ...doc.data()
        });
      });
      console.log("Fetched transactions:", transactions);
      setTransactionsData(transactions);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []); 
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('CustomDetailScreen', { transaction: item })}
      style={styles.listItemContainer}
    >
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.itemPrice}>{item.amount}</Text>
        <Icon name="arrow-right" size={20} color="#0077B6" style={{ marginLeft: 10 }} />
      </View>
    </TouchableOpacity>
  );

  const renderSeparator = () => <View style={styles.listItemSeparator} />;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0077B6" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={transactionsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItemSeparator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomListScreen;
