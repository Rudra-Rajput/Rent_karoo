import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async (value) => {
  try {
    await AsyncStorage.setItem('token', value)
  } catch (error) {
    console.log(error)
  }
}
const storeUser = async (value) => {
  try {
    if (value && value) {
      const userId = value;
      await AsyncStorage.setItem('userId', userId);
    } else {
      console.error('Invalid user object:', value);
    }
  } catch (error) {
    console.error('Error storing user:', error);
  }
};

const getUser = async () => {
  try {
    const userId = await AsyncStorage.getItem('userId')
    if (userId !== null) {
      return userId
    }
  } catch (error) {
    console.log(error)
  }
}
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token')
    if (token !== null) {
      return token
    }
  } catch (error) {
    console.log(error)
  }
}
const removeToken = async (value) => {
  try {
    await AsyncStorage.removeItem(value)
  } catch (error) {
    console.log(error)
  }
}

export { storeToken, getToken, removeToken, storeUser, getUser }