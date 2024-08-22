import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { FormProvider } from './context/FormContext';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import TabNavigator from './TabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import  Form1  from './Screens/Form1';
import  Form2  from './Screens/Form2';
import  Form3  from './Screens/Form3';

const Stack = createStackNavigator();

const App = () => {
    return (
        <ThemeProvider>
            <FormProvider>
                <CartProvider>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="Tabs">
                            <Stack.Screen name="Tabs" component={TabNavigator}  />
                            <Stack.Screen name="Form1" component={Form1} />
                            <Stack.Screen name="Form2" component={Form2} />
                            <Stack.Screen name="Form3" component={Form3} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </CartProvider>
            </FormProvider>
        </ThemeProvider>
    );
};

export default App;