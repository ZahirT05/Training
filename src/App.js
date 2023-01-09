import React, { Component } from 'react';
import './App.css';
import BlogCard from './BlogCard';
import { isArrayEmpty as IsMyArrayEmpty } from './utils';
// import { render } from '@testing-library/react';

class App extends Component {
  state = {
    showBlogs: true
  }
  
  blogArr = [
    {
      id: 1,
      title: 'Blog Tittle 1',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
      likeCount: 0,
    },
    {
      id: 2,
      title: 'Blog Tittle 2',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
      likeCount: 0,
    },
    {
      id: 3,
      title: 'Blog Tittle 3',
      description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor',
      likeCount: 0,
    }
  ]

  onHideBtnClick = () => {
    // let updatedState = !this.state.showBlogs;
    this.setState((prevState, prevProps) => {
    return { showBlogs: !prevState.showBlogs }
    });

    console.log('try ' + this.state.showBlogs);

  }

  onLikeBtnClick = (pos) => {
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos];

    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({ blogArr: updatedBlogList });

    // console.log(updatedBlogObj);
  }

  BlogCards = IsMyArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {
    
    return (
      <BlogCard className={'Blog'} key={pos} title={item.title} description={item.description} likeCount={item.likeCount} id={item.id}
        onLikeBtnClick={this.onLikeBtnClick(pos)} />
      // <div className="BlogCard" key={item.id}>
      //   <h3>{item.title}</h3>
      //   <p>{item.description}</p>
      // </div>
    )
  })

  render() {
    console.log('Render Called');
    console.log('test ' + this.BlogCards);
    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
        <br></br>
        {
          this.state.showBlogs ? this.BlogCards : null
        }
        {/* <div>
          <h3>Full Name: {getFullName(Firstname, Lastname)}</h3>
          <p>Age: {mObj.age}</p>
          <p>Job: {Job}</p>
          {mArr[0]}
  
          {
            mArr[0] > 0 ? "True" : "False"
          }
  
          <br></br>
          {DetailInputBox}
        </div> */}

      </div>
    );
  }
}

export default App;

  // const Firstname = 'Johnn';
  // const Lastname = 'Cena';
  // const Age = '23';
  // const Job = 'Gentleman';
  // const mArr = [1, 2, 3, 4]
  // const inputPlaceholder = 'Enter Your Details'

  // const mObj = {
  //   name: 'Toto',
  //   age: 18
  // }

  // const getFullName = (Firstname,
  //   Lastname) => `${Firstname} ${Lastname}`

  // const DetailInputBox = <input placeholder={inputPlaceholder} autoComplete />;

