import React from "react";

class CommentForm extends React.Component{
  	render() {
    	return (
      		<div className="commentForm">
        		<h2 className="commentAuthor">
          			{this.props.author}
        		</h2>
        		{this.props.children}
      		</div>
    	)
  	}
}
export default CommentForm;