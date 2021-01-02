const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mens");

router.post("/mens", async(req,res) =>{
    try{
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        const insertMan = await addingMensRecords.save();
        res.status(201).send(insertMan);
    }catch(err){
        res.status(400).send(err)
    }
})

// we will handel get
router.get("/mens", async(req,res) =>{
    try{
        const getMens = await MensRanking.find({}).sort({"ranking":1});
        res.status(201).send(getMens);
    }catch(err){
        res.status(400).send(err)
    }
})

// we will handel req of individual

router.get("/mens/:id", async(req,res) =>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findById(_id)
        res.send(getMen)
    }catch(err){
        res.status(400).send(err)
    }
})

// we will handel update req of ind

router.patch("/mens/:id", async(req,res) =>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.send(getMen)
    }catch(err){
        res.status(400).send(err)
    }
})


// we will handel delete req of ind

router.delete("/mens/:id", async(req,res) =>{
    try{
        const getMen = await MensRanking.findByIdAndDelete(req.params.id)
        res.send(getMen)
    }catch(err){
        res.status(400).send(err)
    }
})

module.exports =router;