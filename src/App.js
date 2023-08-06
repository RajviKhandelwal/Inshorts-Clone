
import { useState,useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NewsContent from './components/NewsContent';
import Footer from './components/Footer';
import axios from 'axios'

// require('dotenv').config();

function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);


  const newsApi = async () =>{
    try {       
      console.log(process.env.apiKey)
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_apiKey}&category=${category}&pageSize=${loadmore}`);
      console.log(news)
      
      setNewsArray(news.data.articles);
      setnewsResults(news.data.totalResults)
    } catch (error) {
      console.log(error)
    }
  };


  useEffect(() => {
    
    newsApi();
    
  }, [newsResults,category,loadmore]);
  

  return (
    <div className="App">
      <NavBar setCategory={setCategory}/>
      {newsResults && <NewsContent newsArray={newsArray} newsResults={newsResults} loadmore={loadmore} setLoadmore={setLoadmore} />}
      <Footer/>
    </div>
  );
}

export default App;
