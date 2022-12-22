import React from "react";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>
      <div className="layout">
        <h3>List of stuff</h3>
        {posts.map((post) => (
          <DragItem post={post} key={post} />
        ))}
      </div>
    </div>
  );
}

function DragItem({ post }) {
  return (
    <div className="card" key={post}>
      <h4>List Item {post}</h4>
      <p>this is inside the card</p>
    </div>
  );
}

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];
