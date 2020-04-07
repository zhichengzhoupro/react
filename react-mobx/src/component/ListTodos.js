import React, {Component, Fragment,} from 'react';
import {observer} from "mobx-react";
import {todos} from "../store";


import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {observable} from "mobx";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

@observer
class ListTodos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test: useStyles
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
    }

    render() {
        return (
            <Fragment>
                <TableContainer className={this.state.test.table} component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.todos.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.completed}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Fragment>
        );
    }
}

export default ListTodos;