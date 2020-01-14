import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';

import styled from 'styled-components';

class BoardNewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            ID: "",
            title: "",
            text: "",
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.saveText = this.saveText.bind(this);
        this.saveTitle = this.saveTitle.bind(this);
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    saveTitle = (e) => {
        console.log(e.target.value);
        this.setState({ title: e.target.value });
    }

    saveText = (e) => {
        console.log(e.target.value);
        this.setState({ text: e.target.value });
    }

    uploadPost = (e) => {
        console.log(`id: ${this.state.id} title: ${this.state.title} text: ${this.state.text}`);

        e.preventDefault();
        
        const data = {
            brdID: this.state.ID,
            brdTitle: this.state.title,
            brdText: this.state.text,
        }
        /* 무시하세용~
        if (selectedBoard.brdno) {
            data.brdno = selectedBoard.brdno
            data.brddate = selectedBoard.brddate
        }
        */

        this.props.onSaveData(data);
        this.handleClose();
        // and send Post to DB
    }


    render() {
        return (
            <BoardNewItemContainer>
                <ButtonContainer variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    New Post
                </ButtonContainer>

                <Dialog open={this.state.open} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">New Post</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Name</DialogContentText>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Title"
                            fullWidth
                            onChange={this.saveTitle}/>

                        <br /><br /><Divider /><br /><br />

                        <TextField
                            id="standard-multiline-static"
                            label="CONTENTS"
                            multiline
                            rows="10"
                            variant="outlined"
                            fullWidth
                            onChange={this.saveText}
                        />
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>

                        <Button onClick={this.uploadPost} color="primary">
                            Upload
                        </Button>
                    </DialogActions>
                </Dialog>
            </BoardNewItemContainer>


        );
    }
}

const BoardNewItemContainer = styled.div`
    text-align: right;
`

const ButtonContainer = styled(Button)`
    margin: 0 auto;
`

export default BoardNewItem;