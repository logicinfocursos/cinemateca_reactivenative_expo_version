
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Movies from './src/pages/movies'
import Movie from './src/pages/movie'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Movies'>
        <Stack.Screen
          name='Movies'
          component={Movies}
          options={{
            title: 'Cinemateca TMDB',
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name='Movie'
          component={Movie}
          options={{
            title: 'Detalhes do filme',
            headerStyle: {
              backgroundColor: 'orange'
            },
            headerTintColor: 'white',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
