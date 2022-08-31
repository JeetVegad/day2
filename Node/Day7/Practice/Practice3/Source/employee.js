const express =require('express');
const fs = require('fs');
const router = express.Router();
router.use(express.json());

class Employee{
    static getAll(req,res,next){
        fs.readFile('./employee.json',(err,data)=>{
            if(err){
                next(err);
                return;
            }
            res.status(200).json(JSON.parse(data));
        });
    }
    static getById(req,res,next){
        fs.readFile('./employee.json',(err,data)=>{
            if(err){
                next(err);
                return;
            }
            let employee = JSON.parse(data).find(
                (emp) =>emp.id === parseInt(req.params.id)
            );
            res.status(200).json(employee);
        });
    }
    static create(req,res,next){
        fs.readFile('./employee.json',(err,data)=>{
            if(err){
                next(err);
                return;
            }
            let employee = JSON.parse(data);
            employee.push(req.body);
            fs.writeFile('./employee.json',JSON.stringify(employee),
            (err)=>{
                if(err){
                    next(err);
                    return;
                }
                res.status(200).json({message:"Done",employee:req.body})
            })
        })
    }
}

router.get('/',(req,res,next)=>Employee.getAll(req,res,next));
router.get('/:id',(req,res,next)=>Employee.getById(req,res,next));
router.post('/',(req,res,next)=>Employee.create(req,res,next));
router.use((err,req,res,next)=>{
    if(err){
        res.status(500).json(err);
    }
});

module.exports = router;