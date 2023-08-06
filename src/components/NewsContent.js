import { Container } from '@material-ui/core'
import React, { useEffect } from 'react'
import './NewsContent.css'
import NewsCard from "./NewsCard"
import  appstore from "../assets/appstore.png";

const NewsContent = ({newsArray,newsResults,loadmore,setLoadmore}) => {

    
  return (
    <Container maxWidth="md">
        <div className='content'>
            <div className='downloadMessage'>
                <span className='downloadText'>For the best experience download the <b>Inshorts</b> app</span>
                <img alt="app store" height="80%" src="https://assets.inshorts.com/website_assets/images/playstore.png"/>
                <img alt="play store" height="80%" src={appstore}/>
            </div>
            {
                newsArray?.map((newsItem)=>(
                    <NewsCard key={newsItem.title} newsItem={newsItem}/>
                ))
            }

            {
                loadmore <=newsResults && (
                    <>
                        <hr/>
                        <button className='loadMore' onClick={setLoadmore(loadmore+20)}>
                            Load More
                        </button>
                    </>
                )
            }

            
            
            
        </div>
    </Container>
  )
}

export default NewsContent
