import Axios from 'axios';

export const API = {
    getData(){
        return Axios.get('https://back-chitayka2.vercel.app/pict')
    }
}