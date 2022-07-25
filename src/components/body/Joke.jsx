import React, { useEffect, useRef,useState } from 'react'
import '../../styles/joke.scss'
import axios from 'axios'
function Joke(props) {
    const {datashared}=props
        console.log("datashared",datashared)
    const [data,setData]=useState(datashared)

    const refr = useRef()
    const previous = () => {
        refr.current.style.opacity = 0;
    setTimeout(() => {
        fetsh()
      refr.current.style.opacity = 1;
    }, 500);
  };

  const next = () => {
    refr.current.style.opacity = 0;
    setTimeout(() => {
      fetsh()
      refr.current.style.opacity = 1;
    }, 500);
  };
  const fetsh = async()=>{
    await axios.get("https://api.chucknorris.io/jokes/random")
    .then((res)=>setData(res.data))
    .catch((error)=>console.log(error))
  }
 useEffect(()=>{
    setData(datashared)
 },[datashared])
    return (
        <div className='container'>
            <div className="jokees">
                <div className="jokes" ref={refr}>
                    <div>
                    <div className='joketitle'>  <h3>Social Joke</h3></div>
                    <div className='Head'>
                        <h1>The Granny Joke</h1>
                        <div className='line'> <span></span>  <h3>NO #1</h3></div>
                    </div>
                    <p>
                        {data.value}
                    </p>
                    </div>

                    <div className='rate'>
                        <div className='cat'>
                            <div className='thumb like'>
                                <img src={require("../../assets/assets_Homework_Front-End_02/hand.png")} alt="" />
                            </div>
                               <p>253</p> 
                        </div>
                        <div className='cat'>
                            <div className='thumb dislike'>
                                <img src={require("../../assets/assets_Homework_Front-End_02/hand-copy.png")} alt="" />
                            </div>
                            <p>23</p>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    
                    
                        <button onClick={previous} className='button prev' > 
                        <img src={require("../../assets/assets_Homework_Front-End_02/arrow-left.png")} alt=""  />
                        Prev JOKE 
                        </button>
                        <button onClick={next} className='button next'> next JOKE
                        <img src={require("../../assets/assets_Homework_Front-End_02/arrow-left-copy.png")} alt=""  />                        
                         </button>
                    
                </div>
            </div>
            <div className="topjokes">
                <h2>The top 10 Jokes this Week</h2>
                <p>Smoking Joke</p>
                <p>My Boss Joke</p>
                <p> Dirty Millionaire Joke</p>
                <p>The annoying neighbour</p>
                <p>Knock Knowk</p>
                <p> Why Tyson lisps</p>
                <p> The drunk Police Officer</p>
                <p> My hip dad (Dad Joke)</p>
                <p>what not to say in an elevator</p>

            </div>
        </div>
    )
}

export default Joke