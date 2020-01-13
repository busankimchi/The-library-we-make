import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';


const TextFieldExampleSimple = () => (
    <div>
        <Container>
            <Card
                image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                header='Stick a QR on the book'
                meta='Friend'
                description='QR Sticker will be around the campus'

            />
            <div>
            <Paper zDepth={2} style={style}>
                <TextField hintText="Book name" style={style} underlineShow={false} />
                <Divider />
                <TextField hintText="Author name" style={style} underlineShow={false} />
                <Divider />
                <TextField hintText="Related subject" style={style} underlineShow={false} />
                <Divider />
                <TextField hintText="Email address" style={style} underlineShow={false} />
                <Divider />
            </Paper>
            <RaisedButton label="Register" primary={true} style={style2} />
            </div>
        </Container>
    </div>
);

export default TextFieldExampleSimple;

const style = {
    marginLeft: 20
};
const style2 = {
    marginTop: 20,
    marginLeft: 115
};

const Container = styled.div`
    marginTop: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;