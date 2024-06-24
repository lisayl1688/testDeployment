import './style.css';
import * as lodash from 'lodash';

console.log("main.ts");

const names = ['anna','ben','frank','otto'];
const otherNames = ['timo','ben','otto','josef'];


const uniqueNames = lodash.unionWith(names, otherNames);

const appOutput= document.getElementById('app');

if(appOutput){
  appOutput.innerHTML = uniqueNames.join(', ');
}