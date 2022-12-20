import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './src/screens/Menu';
import Operations from './src/screens/Operations';
import Result from './src/screens/Result';
import Test from './src/screens/Test';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Menu' component={Menu}/>
    <Stack.Screen name='Operations' options={{headerShown: false }} component={Operations}/>
    <Stack.Screen name='Test' options={{headerShown: false }} component={Test}/>
    <Stack.Screen name='Result' options={{headerShown: false }} component={Result}/>  
    </Stack.Navigator>
    </NavigationContainer>
  );
}

