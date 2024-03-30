import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './src/navigations/Stack'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
       <MyStack />
    </NavigationContainer>
    </Provider>
  )
}

export default App