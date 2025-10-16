import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogArticle from './BlogArticle.js'
import Footer from './Footer.js'
import Header from './Header.js'
import './BlogArticle.css' 

const articles = [
  {
    "title":"title 1 from api",
    "author":"author 1"
  },
  {
    "title":"title 2 from api",
    "author":"author 2"
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    {
      articles.map(function(singlearticle){
        return ( <BlogArticle title = {singlearticle.title} author={singlearticle.author}></BlogArticle>)
      })
    }
    <Footer author="Shawn" year="2024"></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
