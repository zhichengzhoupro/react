import React from 'react'; // 创建组件 虚拟DOM 生命周期
import ReactDOM from 'react-dom'; // 专门进行DOM操作 将DOM进行展示
import CmtComment from '@/08_classInnerComponent'


export default class CmtList extends React.Component {

    constructor() {
        super();
        this.state = {
            commentList : [
                {id: 1, user: 'zhang san', content: 'c1'},
                {id: 2, user: 'zhang san', content: 'c2'},
                {id: 3, user: 'zhang san', content: 'c3'},
                {id: 4, user: 'zhang san', content: 'c4'},
                {id: 5, user: 'zhang san', content: 'c51'},
                {id: 6, user: 'zhang san', content: 'c67'},
            ]
        }
    }

    render() {
        return <div>
                <h1>这里是评论区</h1>
                {
                    this.state.commentList.map(itm =>
                        <CmtComment user={itm.user} content={itm.content} id={itm.id}/>
                    )
                }
            </div>
    }
}