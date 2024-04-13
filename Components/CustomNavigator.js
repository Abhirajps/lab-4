import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CustomListScreen from './CustomListScreen'; 
import CustomDetailsScreen from './CustomDetailsScreen ';
import CustomSummaryComponent from './CustomSummaryComponent';

const Stack = createStackNavigator();

const CustomNavigator = () => { 
  return (
    <Stack.Navigator
      initialRouteName="TransactionsList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1e90ff', 
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="TransactionsList"
        component={CustomListScreen} 
        options={{ title: 'Transactions' }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={CustomDetailsScreen}
        options={{ title: 'Transaction Details' }}
      />
      <Stack.Screen
        name="Summary"
        component={CustomSummaryComponent}
        options={{ 
          title: 'Summary',
          headerStyle: {
            backgroundColor: '#FF5733',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CustomNavigator;
