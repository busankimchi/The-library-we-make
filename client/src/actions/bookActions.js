import axios from "axios";

export const registerBook = (bookData, history) => dispatch => {
    axios.post("/api/books/upload", bookData)
        .then(res => history.push("/main"))
        .catch(err =>
            dispatch({
                payload: err.response.data
            })
        );
}

export const findBook = (QRid, history) => dispatch => {
    const find = axios.post("/api/books/find", QRid)
    function getData(){
        return new Promise(function (resolve, reject){
            resolve(find);
        });
    }
    getData().then(function(resolvedData) {
        if(resolvedData.data == null) {
            console.log("not in library");
        }
        else {
            console.log("already in library");
            history.push("/main/borrow/"+resolvedData.data.QRid);
        }
    });
}