import React, { Component } from 'react';
import './item.css'

class item extends Component {
  // 删除的时候要修改祖父组件APP上的数据
  deleteComment = (id) => {
    let { deleteComment } = this.props
    // 触发时调用父组件上删除comment的方法
    // confirm方法的返回值是true和false
    let result  = window.confirm('您确认删除该评论吗?')

    console.log(id,'@@@');
    if(result) {
      deleteComment(id)
    }
  }
  render() { 
    let { name, content, id} = this.props
    return (
      <div className="itemContainer">
        <h4>{ name }说:</h4>
        <p>{ content} </p>
        <button className="delete" onClick={ () => { this.deleteComment(id)} }>删除</button>
      </div>
    );
  }
}

export default item;