const express = require("express");
const router = express.Router();
const Board = require("../../models/Board");

router.post("/write", (req, res) =>{
    const newBoard=new Board({
        title: req.body.title,
        content: req.body.content,
        user: req.body.user
    })
    newBoard.save()
        // .then(res=>res.json(res))
        .catch(err =>console.log(err))

    res.json(newBoard)
})

router.delete("/:board_id", (req, res)=>{
    Board.remove({QRid: req.params.board_id}, (err, output) => {
        if(!err){
            // if(!output.result.n) {
            //     return res.status(404).json({error: "book not found"});
            // }
            // res.json({message:"book deleted"});
            res.status(204).end();
        }
        else{
            throw err;
        }
    })
})

router.get("/read", (req, res)=>{
    Board.find({}, function(err, docs){
        if(!err){
            console.log(docs)
            res.json(docs)
        }else{
            throw err;
        }
    })
})





module.exports = router;