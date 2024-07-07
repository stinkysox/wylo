import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import empty from "../../assets/empty.jpg";
import profile from "../../assets/profile.jpg";
import { motion } from "framer-motion";
import "./Posts.css";

const Posts = () => {
  console.log("posts app");
  const [postsArray, setPostsArray] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });
  const [postContent, setPostContent] = useState("");

  // Save posts to local storage whenever postsArray changes
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(postsArray));
  }, [postsArray]);
  console.log("Hello");

  const onInputChange = (event) => {
    const value = event.target.value;
    setPostContent(value);
  };

  const onSavePost = () => {
    if (postContent.trim() !== "") {
      const newPost = {
        id: uuidv4(),
        text: postContent,
        editMode: false,
      };
      // Update state with new post
      setPostsArray((prevPostsArray) => [...prevPostsArray, newPost]);
      // Clear input content
      setPostContent("");
    }
  };

  const onEditPost = (id) => {
    setPostsArray((prevPostsArray) =>
      prevPostsArray.map((post) =>
        post.id === id ? { ...post, editMode: true } : post
      )
    );
  };

  const onChangePostContent = (id, newText) => {
    setPostsArray((prevPostsArray) =>
      prevPostsArray.map((post) =>
        post.id === id ? { ...post, text: newText } : post
      )
    );
  };

  const onSaveEditedPost = (id) => {
    setPostsArray((prevPostsArray) =>
      prevPostsArray.map((post) =>
        post.id === id ? { ...post, editMode: false } : post
      )
    );
  };

  const onDelete = (id) => {
    setPostsArray((prevPosts) => {
      const updatedPosts = prevPosts.filter((post) => post.id !== id);
      return updatedPosts;
    });
  };

  return (
    <>
      <div className="posts">
        <div className="input-section">
          <motion.textarea
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            cols={35}
            placeholder="Enter the text here"
            value={postContent}
            onChange={onInputChange}
            required
          ></motion.textarea>
          <br />
          <motion.button
            onClick={onSavePost}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Post
          </motion.button>
        </div>
        <div className="posts-section">
          {postsArray.length > 0 ? (
            postsArray.map((post) => (
              <motion.div
                key={post.id}
                className="post-item"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ y: -15 }}
              >
                <div>
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(post.id)}
                  >
                    x
                  </button>
                  <img src={profile} alt="" className="profile-pic" />
                </div>

                {post.editMode ? (
                  <>
                    <textarea
                      value={post.text}
                      className="changetext-input"
                      cols={28}
                      onChange={(e) =>
                        onChangePostContent(post.id, e.target.value)
                      }
                    ></textarea>
                    <br />
                    <button
                      onClick={() => onSaveEditedPost(post.id)}
                      className="save-button"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <p>{post.text}</p>
                    <button
                      onClick={() => onEditPost(post.id)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                  </>
                )}
              </motion.div>
            ))
          ) : (
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img className="no-posts" src={empty} alt="No posts" />
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Posts;
