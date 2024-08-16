const express = require('express');
const router = express.Router();
const Classroom = require('../models/classroom');

router.get('/', async (req, res) => {
    try {
        const classrooms = await Classroom.find();
        res.json(classrooms);
    } catch (err) {
        res.send('Error ' + err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const classroom = await Classroom.findById(req.params.id);
        res.json(classroom);
    } catch (err) {
        res.send('Error ' + err);
    }
});

router.post('/', async (req, res) => {
    const classroom = new Classroom({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
        rollno: req.body.rollno,
        branch: req.body.branch,
    });

    try {
        const a1 = await classroom.save();
        res.json(a1);
    } catch (err) {
        res.send('Error');
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const classroom = await Classroom.findById(req.params.id);
        classroom.name = req.body.name;
        const a1 = await classroom.save();
        res.json(a1);
    } catch (err) {
        res.send('Error');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Classroom.deleteOne({ _id: req.params.id });
        res.send('Deleted Successfully');
    } catch (err) {
        res.send('Error');
    }
});

module.exports = router;
