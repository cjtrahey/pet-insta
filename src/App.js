import './App.css';
import React from 'react';
import Post from './Post';

function App() {
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

      <Post 
        username="Trah.03" 
        caption="Wow! It works!" 
        imageUrl="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
         />

      <Post 
        username="joeburrow9" 
        caption="Guess we'll just win it all while we're at it" 
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU"
         /> 

      <Post 
      username="kingjames" 
      caption="#JustAKidFromAkron" 
      imageUrl="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
       />
    </div>
  );
}

export default App;
