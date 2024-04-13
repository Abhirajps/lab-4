import React, { createContext, useContext, useState } from 'react';

export const TransactionsContext = createContext();

export const CustomProvider = ({ children }) => {
  const [transactionsData, setTransactionsData] = useState([
    { id: 1, name: 'Coffee Shop', place: 'Waterloo, ON', amount: '$15', date: '2023-08-11' },
    { id: 2, name: 'Electronics Store', place: 'Milton, ON', amount: '$120', date: '2023-08-11' },
    { id: 3, name: 'Beauty Store', place: 'Kerala, BC', amount: '$55', date: '2023-04-12' },
    { id: 4, name: 'Pharmacy', place: 'Calgary, AB', amount: '$35', date: '2023-09-23' },
    { id: 5, name: 'Fast Food', place: 'Montreal, QC', amount: '$30', date: '2023-01-24' },
    { id: 6, name: 'Restaurant', place: 'Halifax, NS', amount: '$85', date: '2023-04-25' },
    { id: 7, name: 'Sportswear Store', place: 'Winnipeg, MB', amount: '$160', date: '2023-01-11' },
    { id: 8, name: 'Bakery', place: 'Edmonton, AB', amount: '$7', date: '2023-04-11' },
    { id: 9, name: 'Grocery Store', place: 'Quebec City, QC', amount: '$45', date: '2023-04-11' },
    { id: 10, name: 'Movie Theater', place: 'Hamilton, BC', amount: '$25', date: '2023-04-11' }
  
  ]);

  return (
    <TransactionsContext.Provider value={{ transactionsData, setTransactionsData }}>
      {children}
    </TransactionsContext.Provider>
  );
};