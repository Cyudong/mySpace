/**
 * Created by chenyudong on 16/8/15.
 */

import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

var data = [
  {author: "Pete Hunt", text: "This is one comment",key: "a"},
  {author: "Jordan Walke", text: "This is *another* comment",key: "b"}
];

class Hello extends React.Component{
  render() {
  	// console.log(data)
    return (
      <div>
        <h1>Comments</h1>
        <CommentList data={data} />
        <CommentForm author="Jordan Walke"><h3>This is *another* CommentForm</h3></CommentForm>
      </div>
    )
  }
}

export default Hello;