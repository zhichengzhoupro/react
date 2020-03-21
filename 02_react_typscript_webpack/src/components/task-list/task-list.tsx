import * as React from 'react';
import './task-list.scss';
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import set = Reflect.set;


export default class TaskList extends React.Component<TaskListProps, TaskListState> {

    constructor(taskListProps: TaskListProps){
        super(taskListProps);
        this.state ={
            searchTaskKeywords:""
            // Set your state here
        }
    }

    handleChange = (e:any) => {
        this.setState({
            searchTaskKeywords: e.target.value
        })
    }

    render() {
        return <div> TaskList
            <Input value={this.state.searchTaskKeywords} onChange={this.handleChange} />
            <Counter></Counter>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </div>
    }
}

const Counter = () => {
    console.log(React.useState());

    const [count, setCount] =  React.useState(0);  // 解构
    const [title, setTitle] =  React.useState("Counter");
    return <React.Fragment>

                <button onClick={() => {setCount(count-1)}}>-</button>
                <span>{count}</span>
                <button onClick={() => {setCount(count+1)}}>+</button>
            </React.Fragment>
};


interface TaskListProps {
}

interface TaskListState {
    searchTaskKeywords: string;
}