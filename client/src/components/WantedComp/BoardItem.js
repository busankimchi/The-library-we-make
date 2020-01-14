import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import BoardEditItem from './BoardEditItem';
import { ThemeConsumer } from 'styled-components';


class BoardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editDialog: false,
        }
    }

    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row.brdno);
    }

    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }

    render() {
        return (
            <>
                <BoardEditItem editDialog={this.state.editDialog} />

                <Table.Row onClick={() => this.setState({ editDialog: !this.state.editDialog })}>
                    <Table.Cell>{this.props.row.brdno}</Table.Cell>
                    <Table.Cell>{this.props.row.brdTitle}</Table.Cell>
                    <Table.Cell>{this.props.row.brdID}</Table.Cell>
                    <Table.Cell>{this.props.row.brddate.toLocaleDateString('ko-KR')}</Table.Cell>
                    <Table.Cell><Button onClick={this.handleRemove}>X</Button></Table.Cell>
                </Table.Row>
            </>
        );
    }
}

export default BoardItem;