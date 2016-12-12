/**
 * Created by chenyudong on 16/8/15.
 */

import React from "react";
// import CommentList from "./CommentList";
// import CommentForm from "./CommentForm";

var data = [
  {author: "Pete Hunt", text: "This is one comment",key: "a"},
  {author: "Jordan Walke", text: "This is *another* comment",key: "b"}
];

class Hello extends React.Component{
  render() {
    // console.log(data)
    return (
      <div>
        <button value="click" onClick={this.btnClick.bind(this, this.props.cursor)} />
        <h1>Comments</h1>
        {
          data.map(function (key, index) {            
            return (
              <div>
                <h2>{key.author}</h2>
                <h3>{key.text}</h3>
              </div>
            );
          })
        }
      </div>
    )
  }
  btnClick(e, cursor){
    // let cursor = this.props.cursor;
    console.log(cursor);
    console.log(cursor.select('colors'));
    console.log(cursor.select('colors').get());
    cursor.set("click", {
      text: "set baobab tree"
    })
  }
}

export default Hello;