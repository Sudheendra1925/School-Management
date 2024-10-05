const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'indra@sql',
    database: 'megaminds'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

app.get("/",(req,res)=>{
res.sendFile(__dirname + '/public/Login.html');    
})
app.get('/StudentHome/:id',(req,res)=>{
    res.sendFile(__dirname + '/public/Student/StudentHome.html');    
    })
app.get("/SAssignments",(req,res)=>{
        res.sendFile(__dirname + '/public/Student/SAssignments.html');    
    })
app.get("/STimetable",(req,res)=>{
        res.sendFile(__dirname + '/public/Student/STimetable.html');    
    })
    app.get("/Result",(req,res)=>{
        res.sendFile(__dirname + '/public/Teacher/TeacherHome.html');    
    })

app.get("/TeacherHome/:id",(req,res)=>{
        res.sendFile(__dirname + '/public/Teacher/TeacherHome.html');    
    })
    app.get("/TTimeTable",(req,res)=>{
        res.sendFile(__dirname + '/public/Teacher/TTimeTable.html');    
    })
    app.get("/TAssignments",(req,res)=>{
        res.sendFile(__dirname + '/public/Teacher/TAssignments.html');    
    })


app.get("/infoStudent/:id",(req,res)=>{
    const id = req.params.id;
    db.query('SELECT * FROM Student WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Error fetching data' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Job sheet not found' });
        }
        return res.json(results[0]);

    });

});

app.get("/infoTeacher/:id",(req,res)=>{
    const id = req.params.id;
    db.query('SELECT * FROM Teacher WHERE Teacherid = ?', [id], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Error fetching data' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Tacher not found' });
        }
        return res.json(results[0]);

    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
