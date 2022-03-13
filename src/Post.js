import React from 'react'
import './Post.css';

function Post() {
  return (
    <div className="post">
        <h3>Username</h3>
        {/* header -> avatar + username */}

        <img className="post__image" 
        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" />
        {/* image */}

        <h4 className="post__text"><strong>trah.03:</strong> Just something I thought I should share with y'all :)</h4>
  {/* username + caption */}

    </div>
  )
}

export default Post