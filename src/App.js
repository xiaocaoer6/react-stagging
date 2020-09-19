import React from 'react';
import './App.css'
import Add  from './components/add/add.jsx'
import Comment  from './components/comment/comment.jsx'

class App extends React.Component {
  state = {
    comments:[
      {id:'001',name:'张三',content:'回家了姐记得简简单单'},
      {id:'002',name:'小妹',content:'了打卡开导开导'},
      {id:'003',name:'小孩',content:'爱了的看看打开打开得到的 '},
    ]
  }
  // 修改 增加state的方法
  changeComment = (obj) => {
    let { comments } = this.state
    comments.unshift(obj)
    this.setState({comments})
  }
  // 删除
  deleteComment = (id) => {
    let { comments } = this.state
    // 删除数组中同id项
    let changedComments = comments.filter((item)=>{
      return item.id !== id
    })
    console.log(id, changedComments)
    this.setState({comments: changedComments})
  }
  render() {
    return (
      <div className="App">
        <div className="topContainer">
          <h1>你想说的都可以在下面告诉我们哦</h1>
        </div>
        <div className="content">
          <Add changeComment={this.changeComment}/>
          <Comment comments={this.state.comments} deleteComment={this.deleteComment} />
        </div>
      </div>
    );
  }
}

export default App;
