import axios from 'axios';

axios.defaults.baseURL = 'https://covid.mediaholic.com.np/api/' ;
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');
axios.defaults.headers.post['Authorization'] = 'Bearer' + localStorage.getItem('token');