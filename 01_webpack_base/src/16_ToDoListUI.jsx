import React, {Component} from 'react';
import Input from "antd/es/input";
import Button from "antd/es/button";
import List from "antd/es/list";
import  "antd/dist/antd.css";
const ToDoList = (props) => {

    console.log(props);
    return (

        <div style={{ margin : '10px'}}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    style={{width: '250px', marginRight :'10px'}}
                    value = {props.inputValue}
                    onChange={props.changeInputValue}>

                </Input>
                <Button type="primary" onClick={props.addInputValue}>增加</Button>
            </div>
            <div style={{ margin: '10px', width : '300px'}}>
                <List bordered dataSource={props.list} renderItem={(item,index) => (<List.Item key={item.key}>{item} <Button onClick={()=> {props.removeItem(index)}}>删除</Button></List.Item>)}></List>
            </div>
        </div>
    );
}
class ToDoListUI_Complex
    extends Component {
    render() {
        return (
            <div style={{ margin : '10px'}}>
                <div>
                    <Input
                        placeholder={props.inputValue}
                        style={{width: '250px', marginRight :'10px'}}
                        value = {this.props.inputValue}
                        onChange={this.props.changeInputValue}>

                    </Input>
                    <Button type="primary" onClick={this.props.addInputValue}>增加</Button>
                </div>
                <div style={{ margin: '10px', width : '300px'}}>
                    <List bordered dataSource={this.props.list} renderItem={(item,index) => (<List.Item key={item.key}>{item} <Button onClick={()=> {this.props.removeItem(index)}}>删除</Button></List.Item>)}></List>
                </div>
            </div>
        );
    }
}

export default ToDoList;