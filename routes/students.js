const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const Student = require('../models/student')
const Marks = require('../models/marks')


// Show all students record
router.get('/show', async(req, res, next) => {
    try{
        const students = await Student.find()
        res.status(200).json(students)
    }
    catch (err){
        res.status(404).json({
            message :'Student not found! :',
            err
        })
    }
    
})


// show student using id
router.get('/show/:id', async(req, res, next) => {
    try{
        const student = await Student.findById({_id:req.params.id})
        res.status(200).json(student)
    }
    catch (err){
        res.status(404).json({
            message :'Student not found! :',
            err
        })
    }
})


// insert a value using post api
router.post('/insert', async(req, res, next) =>{
    const student = new Student({
        _id:new mongoose.Types.ObjectId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        rollNo : req.body.rollNo,
        age: req.body.age
    })
    try{
        const s1 = await student.save()
        res.status(200).json({
            message : 'Student inserted successfully!',
            s1
        })
    }
    catch(err){
        res.status(404).json({
            message :'Unable to insert student :',
            err
        })
    }
})


// update student using id
router.patch('/update/:id',async(req,res, next) => {
    try{
        const student = await Student.findById({_id:req.params.id})
        student.firstName = req.body.firstName,
        student.lastName = req.body.lastName,
        student.rollNo = req.body.rollNo,
        student.age = req.body.age

        const s1 = await student.save()
        res.status(200).json({
            message : 'Student update successfully!',
            s1
        })
    }
    catch(err){
        res.status(404).json({
            message : 'Unable to update student :',
            err
        })
    }
})


// delete student using id
router.delete('/delete/:id', async(req, res, next) => {
    try{
        const student = await Student.remove({_id:req.params.id})
        res.status(200).json({
            message :  'Student Deleted Successfully!',
            student
        })
    }
    catch(err){
        res.status(404).json({
            message : 'Unable to delete student :',
            err
        })
    }
})


module.exports = router