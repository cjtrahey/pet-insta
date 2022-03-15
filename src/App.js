import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
// import { db } from './firebase';

// useEffect runs a piece of code based on specific conditions

function App() {
  const [posts, setPosts] = useState([
    // Loads post structure
    {
      username:"Trah.03",
      caption:"Wow! It works!",
      imageUrl:"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
      username:"Trah.03",
      caption:"Wow! It works!",
      imageUrl:"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
    }
  ]);

  // useEffect(()=>{
    //this is where the code runs
    // db.collection('posts').onSnapshot(snapshot => {
    // every time a new post is added, this code is fired
    // })
    // setPosts(snapshot.docs.map(doc => doc.data()));
  // }, []);

  return (
    <div className="app">
    <div className="app__header">
      <img
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="Instagram logo"
        />
    </div>

    {/* <h1> There's a snake in my boot! Instagram Clone!!</h1> */}
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
