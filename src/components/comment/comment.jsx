import React, { Component } from 'react';
import Item from '../item/item'
import './comment.css'

class comment extends Component {
  render() {
    let { comments, deleteComment } = this.props
    return (
      <div className="commentContainer">
        <p className="title">评论回复:</p>
        <div className="empty" style={{ display: comments.length ? 'none' : 'block' }}>
          <h2>暂无评论,请在左侧添加评论</h2>
        </div>
        <div className="list">
          {
            comments.map((item,index)=> {
              return (
                <Item id={item.id}name={item.name} content={item.content} key={item.id} deleteComment={deleteComment}/>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default comment;