/*
import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import styled from 'styled-components';

import BoardForm from '../components/WantedComp/BoardForm'
import BoardItem from '../components/WantedComp/BoardItem'
import BoardNewItem from '../components/WantedComp/BoardNewItem'


class Wanted extends Component {
    state = {
        maxNo: 3,
        boards: [
            {
                brdno: 1,
                brdID: 'Lee SunSin',
                brdTitle: 'If you intend to live then you die',
                brdText: '',
                brddate: new Date()
            },
            {
                brdno: 2,
                brdID: 'So SiNo',
                brdTitle: 'Founder for two countries',
                brdText: '',
                brddate: new Date()
            }
        ],
        selectedBoard: [],
    }

    handleSaveData = (data) => {
        if (!data.brdno) {            // new : Insert
            this.setState({
                maxNo: this.state.maxNo + 1,
                boards: this.state.boards.concat({ brdno: this.state.maxNo, brddate: new Date(), ...data }),
                selectedBoard: [],
            });
        } else {                                                        // Update
            this.setState({
                boards: this.state.boards.map(row => data.brdno === row.brdno ? { ...data } : row),
                selectedBoard: [],
            })
        }
    }

    handleRemove = (brdno) => {
        this.setState({
            boards: this.state.boards.filter(row => row.brdno !== brdno)
        })
    }

    handleSelectRow = (row) => {
        this.setState({ selectedBoard: row });
    }

    render() {
        return (
            <div>
                <BoardNewItem onSaveData={this.handleSaveData} />

                {
                    //<BoardForm selectedBoard={selectedBoard} onSaveData={this.handleSaveData} />
                }

                <Table celled definition selectable textAlign="center">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No.</Table.HeaderCell>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            this.state.boards.map(row => (
                                <BoardItem
                                    key={row.brdno}
                                    row={row}
                                    onRemove={this.handleRemove}
                                    onSelectRow={this.handleSelectRow} />
                            ))
                        }
                    </Table.Body>
                </Table>
            </div>
        );
    }
};
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

import BoardForm from '../components/WantedComp/BoardForm'
import BoardItem from '../components/WantedComp/BoardItem'
import BoardNewItem from '../components/WantedComp/BoardNewItem'
import BoardEditItem from '../components/WantedComp/BoardEditItem'



const headCells = [
    { id: 'brdno', numeric: true, disablePadding: true, label: 'No.' },
    { id: 'brdTitle', numeric: false, disablePadding: false, label: 'Title' },
    { id: 'brdID', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'brdDate', numeric: false, disablePadding: false, label: 'Date' },
];

const EnhancedTableHead = () => (
    <TableHead>
        <TableRow>
            <TableCell padding="checkbox"></TableCell>

            {headCells.map(headCell => (
                <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? 'left' : 'right'}
                    padding={headCell.disablePadding ? 'none' : 'default'}>
                    {headCell.label}
                </TableCell>
            ))}
        </TableRow>
    </TableHead>
);

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    title: { flex: '1 1 100%', },
}));


const EnhancedTableToolbar = () => {
    const classes = useToolbarStyles();

    return (
        <Toolbar>
            <Typography className={classes.title} variant="h6" id="tableTitle">
                Wanted
            </Typography>
        </Toolbar>
    );
};


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

class Wanted extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 0,
            rowsPerPage: 5,
            maxNo: 3,
            boards: [
                {
                    brdno: 1,
                    brdID: 'Lee SunSin',
                    brdTitle: 'If you intend to live then you die',
                    brdText: '',
                    brddate: new Date()
                },
                {
                    brdno: 2,
                    brdID: 'So SiNo',
                    brdTitle: 'Founder for two countries',
                    brdText: '',
                    brddate: new Date()
                }
            ],
            isDialogOpen: false,
            temp: "",
            selected: {}
        }
        this.handleSaveData = this.handleSaveData.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    }

    classes = () => useStyles();

    handleSaveData = (data) => {
        if (!data.brdno) {            // new : Insert
            this.setState({
                maxNo: this.state.maxNo + 1,
                boards: this.state.boards.concat({ brdno: this.state.maxNo, brddate: new Date(), ...data }),
            });
        }
        else {                                                        // Update
            this.setState({
                boards: this.state.boards.map(row => data.brdno === row.brdno ? { ...data } : row),
            })
        }
    }

    handleRemove = brdno => {
        this.setState({
            boards: this.state.boards.filter(row => row.brdno !== brdno),
        })
    }

    handleClick = (e) => {
        this.setState({ isDialogOpen: true });
        this.setState({ selected: e.target });
        // console.log(e.target);
        this.state.temp = this.state.isDialogOpen
    };

    

    handleChangePage = (event, newPage) => {
        this.setState({ page: newPage });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: parseInt(event.target.value, 10) });
        this.setState({ page: 0 });
    };

    render() {
        const emptyRows = this.state.rowsPerPage - Math.min(this.state.rowsPerPage, this.state.boards.length - this.state.page * this.state.rowsPerPage);

        console.log(this.state.isDialogOpen);
        return (
            <div className={this.classes.root}>
                <BoardNewItem onSaveData={this.handleSaveData} ID={this.props.auth.user} />
                <BoardEditItem openDialog={this.state.temp} />

                <Paper className={this.classes.paper}>
                    <EnhancedTableToolbar />
                    <TableContainer>
                        <Table
                            className={this.classes.table}
                            aria-labelledby="tableTitle"
                            size='medium'
                            aria-label="enhanced table">

                            <EnhancedTableHead
                                classes={this.classes}
                                rowCount={this.state.boards.length} />

                            <TableBody>
                                {//items
                                    this.state.boards.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                                        .map((row, index) => {
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <TableRow
                                                    hover
                                                    onClick={this.handleClick}
                                                    role="checkbox"
                                                    tabIndex={-1}
                                                    key={row.brdno}>

                                                    <TableCell padding="checkbox"></TableCell>

                                                    <TableCell component="th" id={labelId} scope="row" padding="none">
                                                        {row.brdno}
                                                    </TableCell>

                                                    <TableCell align="right">{row.brdTitle}</TableCell>
                                                    <TableCell align="right">{row.brdID}</TableCell>
                                                    <TableCell align="right">{row.brddate.toLocaleDateString('ko-KR')}</TableCell>
                                                </TableRow>
                                            );
                                        })}

                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={5} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TablePagination
                        rowsPerPageOptions={[5, 10]}
                        component="div"
                        count={this.state.boards.length}
                        rowsPerPage={this.state.rowsPerPage}
                        page={this.state.page}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage} />
                </Paper>
            </div>);


    }
}


//export default Wanted;


Wanted.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
)(Wanted);