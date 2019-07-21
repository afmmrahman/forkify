import axios from 'axios';

async function  getResults(query){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '7ab57a98672f56b7bdfce515569f4be4';
    const res = await axios(`${proxy}https://www.food2fork.com/api/search?kes=${key}&q=${query}`);
    console.log(res);
}
getResults('pizza');
// https://www.food2fork.com/api/search
// 7ab57a98672f56b7bdfce515569f4be4