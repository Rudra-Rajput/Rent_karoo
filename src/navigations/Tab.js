import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import Fav from '../screens/home/Fav';
import Sell from '../screens/home/Sell';
import Services from '../screens/Services/Services';

const Tab = createBottomTabNavigator();

const MyTab = () => {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ color, size }) => {
              let iconName;
    
              if (route.name === 'Home') {
                iconName = 'home'; 
              } else if (route.name === 'Profile') {
                iconName = 'person-circle-sharp';
              } else if (route.name === 'My Ads') {
                iconName = 'heart-sharp';
              } else if (route.name === 'Sell') {
                iconName = 'bag-handle';
              } else if (route.name === 'Services') {
                iconName = 'construct';
              }
    
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#18241b',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Sell" component={Sell} />
          <Tab.Screen name="Services" component={Services} />
          <Tab.Screen name="My Ads" component={Fav} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      );
}

export default MyTab;
