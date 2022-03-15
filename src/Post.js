import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
        <div className="post__header">
            <Avatar
                className="post__avatar"
                alt='Trah.03'
                src="/static/images/avatar/1.jpg"
            />
            <h3>{ username }</h3>
        </div>

        <img className="post__image" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU" />

        <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
    </div>
  )
}

export default Post