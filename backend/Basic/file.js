const fs = require('fs');

//<<<<<<<  Write File >>>>>>>

// sync...  BlockingRequest...
// fs.writeFileSync('./text.txt', 'Hey There');

// Async... Non - BlockingRequest...
// fs.writeFile('./text.txt','Hey There Async', (err) => {})



//<<<<<<<  Read File >>>>>>>

// sync
// const read = fs.readFileSync("./contect.txt", "utf-8");
// console.log(read);


// //Async
// fs.readFile("./contect.txt","utf-8", (err, result) =>{
//    if(err) console.log(err);
    
//    console.log(result);
// })


//<<<<<<< Append File >>>>>>>

//sync
// fs.appendFileSync("./text.txt",new Date().getDate().toLocaleString())

