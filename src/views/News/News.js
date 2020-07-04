import React, { Component } from 'react';
import Ticker from 'react-ticker';
import {NewsTicker} from "react-announcement-ticker";
 
class News extends Component {
  render() {
      return (
          <div className="App">  <br/><br/> <br/>

                  <NewsTicker

                  
                      tickerBorderColor="#A7BFE8"
                      
                      title={"Latest News Here"}
                      titleBackground={"linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 100%)"}
                     width="100%"

                      newsList={[
                          {
                              text: "Facebook is making its biggest executive shuffle in company",
                              link: "http://fb.com"
                          },
                          {
                              text: "The Best Views of NASA's InSight Mars Lander Launch?",
                              link: "http://google.com"
                          },
                          {
                              text: "Are Jupiter and Venus Messing With Earth's Climate?",
                              link: "http://cnn.com"
                          },
                          {
                            text: "Coronavirus India LIVE Updates: Maharashtra govt extends lockdown in state till July 31",
                            
                            link: "https://indianexpress.com/article/india/coronavirus-india-news-live-updates-covid-19-tracker-corona-cases-in-india-today-update-lockdown-extension-state-wise-latest-news-tamil-nadu-delhi-6479588/"
                        },
                          {
                            text: "Covid 19 News?",
                            
                            link: "https://timesofindia.indiatimes.com/india/coronavirus-india-live-updates-maharashtra-extends-lockdown-till-july-31/liveblog/76668339.cms"
                        },
                       
                      ]}
                  />


          </div>
      );
  }
}

export default News;