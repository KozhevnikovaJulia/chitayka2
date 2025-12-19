import Axios from 'axios';

export const API = {
  getData() {
    return Axios.get('https://back-chitayka2.vercel.app/pict');
  },
  getAllWords() {
    return Axios.get('https://back-chitayka2.vercel.app/words');
  },
  addWord(payload) {
    return Axios.post('https://back-chitayka2.vercel.app/words', payload);
  },
};
