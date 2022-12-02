
const {Pool} = require('pg');

const pool= new Pool({
    host:'localhost',
    user:'gruiz',
    password:'gruiz1234',
    database:'esp32database',
    port:'5432'
});

const getdevices = async (req,res)=>{
    const response = await pool.query("SELECT * FROM devices");
    res.status(200).json(response.rows);
};

const createDevices = async(req,res)=>{
    const name = req.params.name;
    const location = req.params.location;
    const response = await pool.query('INSERT INTO devices (name, location) VALUES ($1, $2)',[name,location]);
    res.json({
        message: 'Measure Added Succesfully',
        body: {
            user:{name, location}
        }
    })
};


const uploadMeasures = async (req,res)=>{
    const name = req.params.name;
    const measure = req.params.measure;
    const time = req.params.time;
    const response = await pool.query('INSERT INTO measures (name, measure, time_measure) VALUES ($1, $2, $3)',[name,measure,time])
    res.json({
        message: 'Measure Added Succesfully',
        body: {
            user:{name, measure, time}
        }
    })
};

module.exports = {
    getdevices,
    uploadMeasures,
    createDevices
}