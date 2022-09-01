import React, { useState } from 'react'
import { useEffect } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import "./TimeLine.css";
import axios from "axios";

export default function TimeLine() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "/posts/timeline/630eddbf7a4a4691aa02e91c"
      );
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}
