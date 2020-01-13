const express = require("express");
const router = express.Router();

const Borrow = require("../../models/Borrow");

router.post("/borrow", (req, res)=>{
    Borrow.findOne({QRid: req.body.QRid}).then(borrow =>{
        if(borrow){
            return res.status(400).json({imageURL: "Duplicate book"});
        }else{
            const newBorrow=new Borrow({
                QRid: req.body.QRid,
                borrow_user: req.body.borrow_user,
                borrow_start: req.body.borrow_start,
                borrow_end: req.body.borrow_end
            });
            newBorrow.save()
                    .then(borrow => res.json(borrow))
                    .catch(err => console.log(err));
        }
    });  
});

router.get('/:QRid', (req, res) =>{
    // console.log(req.params.QRid)
    Borrow.findOne({QRid: req.params.QRid}, function(err, docs){
        if(!err){
            res.json(docs);
        }else{
            throw err;
        }
    })
});

router.delete('/:QRid', (req, res)=>{
    Borrow.remove({QRid: req.params.QRid}, (err, output)=> {
        if(!err){
            // if(!output.result.n) {
            //     return res.status(404).json({error: "book not found"});
            // }
            // res.json({message:"book deleted"});
            res.status(204).end();
        }
    })
})