import express from 'express'; 
import cors from 'cors'; 

const depts = [
    {did : 1000, dname: "Marketing"}, 
    {did : 1001, dname: "Engineering"}, 
    {did : 1002, dname: "Maintenance"}
]

const emps = [
    {eid : 1, ename: "Diana Prince", did: 1000}, 
    {eid : 2, ename: "Tony Stark", did: 1000}, 
    {eid : 3, ename: "Clark Kent", did: 1001}
]

const app = express(); 
app.use(express.json()); 
app.use(cors()); 
app.get('/',(req, res) => { //localhost: 5000
    res.send('howdy'); 
}); 
app.get('/emps',(req, res) => { //localhost: 5000/emps
    const dbemps = {"emps" : emps}
    res.send(dbemps); 
}); 
app.get('/emps/:id',(req, res) => { //localhost: 5000/emps/1
    const {id} = req.params; 
    const emp = emps.find( (e) => (e.eid == id))
    const dbemps = {"emps" : emp}
    res.send(dbemps); 
}); 
app.get('/depts',(req, res) => { //localhost: 5000/depts
    const dbdepts = {"depts" : depts}
    res.send(dbdepts); 
}); 
app.get('/depts/:id',(req, res) => { //localhost: 5000/depts/1
    const {id} = req.params; 
    const dept = depts.find( (d) => (d.did == id))
    const dbdepts = {"depts" : dept}
    res.send(dbdepts); 
}); 
app.listen(5000, () => {
    console.log('listening at port 5000'); 
}); 


