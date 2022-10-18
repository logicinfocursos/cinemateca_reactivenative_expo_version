import axios from 'axios'
import { __SETUP__ } from '../config/setup'


export const api = axios.create({ baseURL: __SETUP__.API_BASEURL})