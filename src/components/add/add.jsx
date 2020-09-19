import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './add.css'


// 输入内容组件
class add extends Component {
  submit = () => {
    let { changeComment } = this.props
    let { nameNode, wordsNode } =  this.refs
    if(nameNode.value && wordsNode.value) {
      // 将内容拼接为对象,调用父组件传来的方法,修改父组件的state
     let id  = uuidv4()
     let obj = {
       id,
       name: nameNode.value,
       content: wordsNode.value
     }
     changeComment(obj)
    //  提交后清空内容
    this.refs.nameNode.value = ''
    this.refs.wordsNode.value = ''
    } else {
      alert('内容不全,请完善内容')
    }
  }
  render() {
    return (
      <div className="add-container">
        <div className="name">
          <span>用户名</span>
          <input type="text" ref="nameNode" placeholder="请输入用户名" />
        </div>
        <div className="words">
          <span>评论内容</span>
          <textarea ref="wordsNode" rows="10" cols="40" placeholder="请输入内容" />
        </div>
        <button className="submit" onClick={this.submit} >提交</button>
      </div>
    )
  }
}
export default add;