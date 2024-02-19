const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");


const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    fs.appendFile("log.txt", `\n ${Date.now()} : ${req.method} : ${req.path}`,
    (err, data) => {
        next();
    });
})
// ROUTS
app.get('/api/users', (req, res) => {
    return res.json(users);
})
app.get('/users', (req, res) => {
    const html = `
     <ul>
      ${users.map(users => `<li>${users.first_name}</li>`).join("")};
     </ul>
    `
    res.send(html);
});

app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);

        return res.json(user);
    })

    .patch((req, res) => {
    
        const id = Number(req.params.id);
        const jsonDataArray = JSON.parse(fs.readFileSync("./MOCK_DATA.json"));
 
        const objToUpdate = jsonDataArray.find((el) => el.id === id);
        const objIndex = jsonDataArray.indexOf(objToUpdate);
        
        Object.assign(objToUpdate,body);

        jsonDataArray[objIndex] = objToUpdate;

        fs.writeFile("./MOCK_DATA.json", JSON.stringify(jsonDataArray),(err, data) => {
            return res.json({ status: "Success", update: objToUpdate });
        })

    })

    .delete((req, res) => {

        const id = Number(req.params.id);

        const jsonDataArray = JSON.parse(fs.readFileSync("./MOCK_DATA.json"));
        const Index = jsonDataArray.findIndex((el) => el.id === id);
      
        jsonDataArray.splice(Index, 1); 
        

        fs.writeFile('./MOCK_DATA.json', JSON.stringify(jsonDataArray),(err, data) => {
            return res.json({ status: "Success", Deletedindex: Index });
        });
    })

app.post('/api/users', (req, res) => {
    // POST :- ADD user in data
    const body = req.body;
    users.push({ id: users.length + 1, ...body });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.status(201).json({ status: "Success", id: users.length });
    });

});

app.listen(PORT, () => { console.log(`server is started at port ${PORT}`) });