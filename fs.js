

var fs = require('fs');

fs.writeFileSync('myText.txt','i am sabbir al azim shehab');
fs.appendFileSync('myText.txt',' my home town is khulna');
fs.readFile('myText.txt',(error,data)=>{
    console.log(data.toString());
})
console.log('good');



