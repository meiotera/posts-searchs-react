import React, { Component } from "react";
import "./styles.css";

import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import Input from "../../components/TextInput";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],

    page: 0,
    postsPerPage: 3,

    searchValue: "",
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filterPosts = searchValue
      ? allPosts.filter((post) =>
          post.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : posts;

    return (
      <section className="container">
        <div className="input-container">
          {searchValue && <h2>Input: {searchValue}</h2>}

          <Input searchValue={searchValue} handleChange={this.handleChange} />
        </div>

        {filterPosts.length < 1 ? (
          <p>Nenhum post encontrado!</p>
        ) : (
          <Posts posts={filterPosts} />
        )}
        <div className="container-button">
          {!searchValue && (
            <Button
              buttonText={"Mais"}
              loadMorePosts={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;
