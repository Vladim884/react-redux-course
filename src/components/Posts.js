import React from "react";
import { connect } from "react-redux";
import Post from "./Post";


const Posts = ({syncPosts}) => {
    if(!posts.length){
        return <p className="text-center">постов пока нет</p>
    }
  return posts.map(post => <Post post={post} key={post} /> );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        syncPosts: state.posts.posts
    } 
}

export default connect(mapStateToProps, null)(Posts);
