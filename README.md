### This is a project of 2019W MadCamp, 3rd week
#### WIP

Backend structure

<Schema>

User
- username, email, password, date, point

Book
- QRid, imageURL, image, name, author, subject, subject_category, status, current_user, register_user, register_date, fee

Borrow
- QRid, borrow_user, borrow_start, borrow_end

Board
- title, content, user, date


<API>

users
- post /register : register
- post /login : login

books
- post /upload : upload book
- get /image : get image => need to fix
- get / : find all books
- post /:QRid : find book by QRid (야매야매)
- get /image:QRid : get image by QRid => need to fix
- get /getQR:QRid : get by QRid
- get /:book_register_user : find book by user
- put /borrow:QRid : borrow book and modify Book

borrows
- post /borrow : make borrow
- get /:QRid : get borrow by QRid
- delete /:QRid : delete by QRid => not sure

boards
- post /write : write article
- delete /:board_id : delete article by object id
- get /read : get all articles
