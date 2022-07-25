import React, { useEffect, useState, useContext } from 'react'
import "../../styles/main.scss"
import { Context,jokeslide } from '../../genaral/Context'
//import { useNavigate } from 'react-router-dom'




const Main = (props) => {
    //const navigate = useNavigate()
  
    const msg = useContext(Context)
    const [pagination, setpagination] = useState(6)
    const [pagination_, setpagination_] = useState(6)
    const { datashared, AllData, Categories, CategorizedData,setdatashared} = props
    const [view, setView] = useState(AllData)
    const showedCategories = Categories.slice(0, pagination);
    const showedJokes  =  view.slice(0, pagination_)

    const [aa,setaa]=useState(CategorizedData)
    const tryy=(categorie)=>{
        //console.log(CategorizedData)
        for (let i = 0; i < CategorizedData.length; i++) {
          // console.log(CategorizedData[i])
           const keyy=Object.keys(CategorizedData[i])
           if(keyy[0] == categorie){
           /// console.log(CategorizedData)
           }
            
        }

    }
    return (
        <div className='Main'>

            <div className='Categories'>
                <ul className='Categories_Ul'>
                    {
                        showedCategories.map((categorie, key) => {
                            return <li key={key} className=" list colorsList" onClick={()=>setView(CategorizedData[key][categorie])  }>
                                {categorie}
                            </li>

                        })
                    }


                    {pagination <= Categories.length ?
                        <li className='list' onClick={() => setpagination(pagination + 6)}>
                            <span>
                                View All
                                <img src={require("../../assets/assets_Homework_Front-End_01/path-copy-7@3x.png")} />
                            </span>
                        </li>
                        : <></>
                    }

                </ul>
                <div className='Jokes'>
                <p className='jokeCategoriess'>Social Jokes</p>
                <div className='jokes_list'>
                    {   

                        showedJokes.map((joke, key) => {
                            return <div key={key} className="try" onClick={() => {setdatashared(joke);/* navigate(`/joke/${joke.id}`) */}}>
                                {/* <img src={joke.icon_url}/> */}
                                <div className='top_joke'>

                                    <h3>
                                        <img src={require('../../assets/assets_Homework_Front-End_01/green-light-copy@3x.png')} />
                                        Title </h3>
                                    <p> {joke.value}</p>
                                </div>
                                <span> SEE STATS
                                    <img src={require('../../assets/assets_Homework_Front-End_01/path@3x.png')} />

                                </span>
                            </div>
                        })
                    }
                </div>
                {pagination <= AllData.length ?
                    <div className='list' onClick={() => setpagination_(pagination_ + 6)}>
                        <span>
                            View All
                            <img src={require("../../assets/assets_Homework_Front-End_01/path-copy-7@3x.png")} />
                        </span>
                    </div>
                    : <></>
                }
            </div>
            </div>
            


        </div>
    )
}

export default Main