const axios=require('axios');

// axios({
//     url:'https://newsapi.org/v2/everything',
//     method:'get',
//     params:{
//         apikey:'877215793ce04ab0a02de226c2b3e466',
//         q:'bitcoin'
//     }
// })
// .then(response =>console.log(response.data.articles))
// .catch(error =>console.log(error))


//-------------------to use its library------------------------------
//sudo npm install newsapi --save
// https://newsapi.org/docs/client-libraries/node-js

const NewsApi= require('newsapi');
const newsapi= new NewsApi('877215793ce04ab0a02de226c2b3e466');

newsapi.v2.sources({
    category: 'technology',
    q:'laptop',
    language: 'en',
    country: 'us'

})
.then(response => console.log(response))
.catch(error =>console.log(error))