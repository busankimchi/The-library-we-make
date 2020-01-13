const express = require("express");
const router = express.Router();
const fs=require("fs");

const Book = require("../../models/Book");
// const Image=require("../../models/Image");

router.post("/upload", (req, res)=>{
    console.log(7);
    // 일단 중복 검사는 이미지로 함
    Book.findOne({ QRid: req.body.QRid }).then(book=>{
        if(book){
            return res.status(400).json({imageURL: "Duplicate book"});
        }else{
            // const imgPath=req.body.imageURL;
            console.log(12);
            console.log(req.body.imageURL);

            const imagePath="client/src/images/book.png"
            // const newImage=new Image({
            //     data: fs.readFileSync(imagePath),
            //     contentType: 'image/png'
            // });

            // console.log(JSON.stringify(newImage));

            const newBook= new Book({
                imageURL: req.body.imageURL,
                image: {data: fs.readFileSync(imagePath),
                        contentType: 'image/png'
                    },
                name: req.body.name,
                author: req.body.author,
                subject: req.body.subject,
                subject_category: req.body.subject_category,
                status: req.body.status,
                current_user: req.body.current_user,
                register_user: req.body.register_user,
                register_date: req.body.register_date,
                fee: req.body.fee,
                QRid: req.body.QRid
            })

            // newBook.image.data=fs.readFileSync(imgPath);
            // newBook.image.contentType='image/png';

            newBook.save()
                    .then(book=>res.json(book))
                    .catch(err=>console.log(err));

            console.log(111);
        }
    })
});

//책을 가져와야 함

router.get("/image", (req,res) =>{
    // console.log(res);
    // var chunks=[];
    // res.write=function(chunk){
    //     chunks.push(chunk);
    // }

    // console.log(res.body);
    Book.find({}, function(err, docs){
      
        jsonString=JSON.stringify(docs);
        json=JSON.parse(jsonString);
        console.log(json[0]);
        if(!err){
            res.contentType(json[0].image.contentType);
            res.send(json[0].image.data);
        }else{
            throw err;
        }
    });
});

router.get("/", (req, res) => {
        Book.find({}, function(err, docs) {
        if (!err){ 
            // var myPosts = JSON.parse(JSON.stringify(docs));
            // res.send(myPosts);
            res.json(docs);
        } else {
            throw err;
            res.send(err);
        }
    });
})

//QR로 검색
router.get('/:QRid', (req, res) =>{
    console.log(req.params.QRid)
    Book.findOne({QRid: req.params.QRid}, function(err, docs){
        if(!err){
            res.json(docs);
        }else{
            throw err;
        }
    })
});

//image - id
router.get('/image/:QRid', (req, res)=>{
    Book.findOne({QRid: req.params.QRid}, function(err, docs){
        if(!err){
            jsonString=JSON.stringify(docs);
            json=JSON.parse(jsonString);
            res.contentType(json[0].image.contentType);
            res.send(json[0].image.data);
        }else{
            throw err;
        }
    })
})

//user id로 검색, 여러권일 수 있음. 이런것들 차피 json자르면 되는데 필요한가?
router.get('/:book_id', (req, res) =>{
    // console.log(req.params.book_id)
    Book.find({_id: req.params.book_id}, function(err, docs){
        if(!err){
            res.json(docs);
        }else{
            throw err;
        }
    })
});

router.get('/:book_register_user', (req, res) =>{
    // console.log(req.params.book_id)
    Book.find({_id: req.params.book_register_user}, function(err, docs){
        if(!err){
            res.json(docs);
        }else{
            throw err;
        }
    })
});



module.exports = router;
// router.post("/")




