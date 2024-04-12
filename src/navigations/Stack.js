import { createStackNavigator } from '@react-navigation/stack';
import {TransitionPresets} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import Splash from '../screens/auth/Splash';
import Main from '../screens/home/Main';
import Profile from '../screens/profile/Profile'
import Fav from '../screens/home/Fav';
import Sell from '../screens/home/Sell';
import LandingScreen from '../screens/auth/LandingScreen';
import Phone from '../screens/auth/Phone';
import Email from '../screens/auth/Email';
import ProductDetail from '../screens/home/ProductDetail';
import Notification from '../screens/home/Notification';
import Product from '../screens/home/Product';
import AllCategory from '../screens/home/AllCategory';
import SellingForm from '../screens/home/SellingForm';
import Edit from '../screens/profile/Edit';
import ProfileView from '../screens/profile/ProfileView';
import Otp from '../screens/auth/Otp';
import Services from '../screens/Services/Services';
import Shop from '../screens/Services/Shop';
import Location from '../screens/home/Location';
import Setting from '../screens/profile/Setting';
import HelpSupport from '../screens/profile/Help&Support';
import AllShop from '../screens/SpecialServices.js/AllShop';
import ShopProduct from '../screens/SpecialServices.js/ShopProduct';
import Chat from '../screens/chat/Chat';
import ChatBox from '../screens/chat/ChatBox';
import AddServices from '../screens/Services/AddServices';
import CreateShop from '../screens/SpecialServices.js/CreateShop';
import AddProduct from '../screens/SpecialServices.js/AddProduct';
import Enquiry from '../screens/home/Enquiry';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Main" component={Main} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Home" component={Home} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Profile" component={Profile} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Fav" component={Fav} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Sell" component={Sell} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Landing" component={LandingScreen} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Phone" component={Phone} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Email" component={Email} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Notification" component={Notification} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Product" component={Product} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="AllCategory" component={AllCategory} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="SellingForm" component={SellingForm} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="ProfileView" component={ProfileView} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Edit" component={Edit} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Otp" component={Otp} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Services" component={Services} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Shop" component={Shop} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Location" component={Location} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Setting" component={Setting} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="HelpSupport" component={HelpSupport} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="AllShop" component={AllShop} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="ShopProduct" component={ShopProduct} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Chat" component={Chat} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="ChatBox" component={ChatBox} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Adservices" component={AddServices} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="CreateShop" component={CreateShop} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="AddProduct" component={AddProduct} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
      <Stack.Screen name="Enquiry" component={Enquiry} options={{...TransitionPresets.ModalSlideFromBottomIOS}}/>
    </Stack.Navigator>
  )
}

export default MyStack;