import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';

class BoardForm extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        let selectedBoard = nextProps.selectedBoard;
        if (!selectedBoard.brdno) {
            this.brdtitle.value = "";
            this.brdwriter.value = "";
            return true;
        }

        this.brdtitle.value = selectedBoard.brdtitle;
        this.brdwriter.value = selectedBoard.brdwriter;
        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let selectedBoard = this.props.selectedBoard;
        let data = {
            brdwriter: this.brdwriter.value,
            brdtitle: this.brdtitle.value
        }
        if (selectedBoard.brdno) {
            data.brdno = selectedBoard.brdno
            data.brddate = selectedBoard.brddate
        }
        this.props.onSaveData(data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input placeholder="title" ref={node => this.brdtitle = node} />
                <Input placeholder="name" ref={node => this.brdwriter = node} />
                <Button type="submit">Save</Button>
            </form>
        );
    }
}

export default BoardForm;