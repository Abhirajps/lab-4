
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomNavigator from './Components/CustomNavigator'; 
import CustomSummaryComponent from './Components/CustomSummaryComponent'; 
import TransactionComponent from './Components/TransactionComponent';
import { CustomProvider } from './Components/CustomProvider'; 
import React from 'react';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CustomProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transactions" component={CustomNavigator} />
          <Tab.Screen name="Summary" component={CustomSummaryComponent} />
          <Tab.Screen name="Transaction" component={TransactionComponent}/>
          
        </Tab.Navigator>
      </NavigationContainer>
    </CustomProvider>
  );
}