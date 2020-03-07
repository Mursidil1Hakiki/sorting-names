import axios from 'axios';
export default function getData(){
    return axios.get('/name-sorter/unsorted-names-list.txt')
        .then((res) => {
            return res.data;
        });
}