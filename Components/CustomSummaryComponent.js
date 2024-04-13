import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { TransactionsContext } from './CustomProvider';
import { collection, getDocs } from 'firebase/firestore';
import db from './Firebase';

const CustomSummaryComponent = () => {
  const { transactionsData } = useContext(TransactionsContext);
  const [summaryData, setSummaryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        const transactionsCollection = collection(db, 'transactions');
        const querySnapshot = await getDocs(transactionsCollection);
        const data = querySnapshot.docs.map(doc => doc.data());

        const parsedAmounts = data.map(t => {
          const amount = t.amount ? parseFloat(t.amount.replace('$', '')) : 0;
          return { ...t, amount };
        });

        const totalTransactions = parsedAmounts.length;
        const totalAmount = parsedAmounts.reduce((acc, curr) => acc + curr.amount, 0);
        const highestTransaction = Math.max(...parsedAmounts.map(t => t.amount));
        const lowestTransaction = Math.min(...parsedAmounts.map(t => t.amount));

        setSummaryData([
          { title: 'Transactions', value: totalTransactions },
          { title: 'Total Amount', value: `$${totalAmount.toFixed(2)}` },
          { title: 'Highest Transaction', value: `$${highestTransaction}` },
          { title: 'Lowest Transaction', value: `$${lowestTransaction}` },
        ]);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchSummaryData();
  }, [transactionsData]);

  if (loading) {
    return <ActivityIndicator size="large" color="#023E8A" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
  }

  return (
    <View style={styles.container}>
      {summaryData.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#E5E5E5',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#023E8A',
  },
  value: {
    fontSize: 16,
    color: '#1E7E34',
  },
});


export default CustomSummaryComponent;
