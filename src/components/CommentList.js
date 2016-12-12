import React from "react";

class CommentList extends React.Component{
  render() {
  	// console.log(this.props.data)
    return (
      <div>
        {
        	this.props.data.map(function (comment) {		      
		      	return(<div className="commentList" key={comment.key}>
	        		<h2 className="commentAuthor">
	          			{comment.author}
	        		</h2>
	        		{comment.text}
	      		</div>)		     
		    })
        }
      </div>
    )
  }
}
export default CommentList;