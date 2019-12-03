const axios=require('axios');
// let word_id= 'example';
// let language='en-gb';
let word_id= process.argv[2];
let language="en-gb";


axios({
    method:'get',
    url:`https://od-api.oxforddictionaries.com:443/api/v2/entries/${language}/${word_id}`,
    headers:{
        app_Id:'65c56f6b',
        app_Key:'3579689ae01e8c59e26c1aa5973611ae',
    }
    
})
.then(response=>{
    // console.log(response.data.);
     console.log(`${word_id} (${response.data.results[0].lexicalEntries[0].lexicalCategory.text})`);
    // console.log(response.data.results[0].lexicalEntries[0].entries[0].senses[0].shortDefinitions[0]);
    // console.log(response.data.results[0].lexicalEntries[0].entries[0].senses[1].definitions[0]);
    // console.log(response.data.results[0].lexicalEntries[0].entries[0].senses[2].shortDefinitions[0]);

    let res=response.data.results[0].lexicalEntries[0].entries[0].senses;
    let i=1;
    res.forEach(element=>{
       
        console.log(`${i++}. ${element.definitions}`);
    })

    console.log(`Provided by: ${response.data.metadata.provider}`);

})
.catch(err =>{console.log(err)});
