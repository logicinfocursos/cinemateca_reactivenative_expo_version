import { api } from './api'
import { __SETUP__ } from '../config/setup'
import { Alert } from 'react-native'
import axios from 'axios'


export const apiGET = async ({ code, page = 1 }) => {

   try {

   //let uri = __SETUP__.API_BASEURL
   let uri = (code ? code : 'popular') + '?api_key=' + __SETUP__.API_KEY + '&language=' + __SETUP__.LANGUAGE
   uri += code ? '' : '&page=' + page

   console.log(">>> uri", uri)
   const result = await api.get(uri)
   console.log(">>> result", result)

   const result2 = code ? result.data : result.data.results

   return result2

   } catch (error) {

    console.log("erro ao tentar ler a api:", error)

   Alert.alert(
      '*** ERRO ***',
      `ERRO AO TENTAR LER A API: ${error}`
   ) 

   return null
   }
}