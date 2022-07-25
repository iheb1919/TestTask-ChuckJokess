import React, { useState,useContext, useEffect,useRef } from 'react'
import Navbar from '../navbar/Navbar.jsx'
import '../../styles/header.scss'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Header({ Categories,setdatashared }) {
  const [searchval, setSearchVal] = useState("")
  const navigate = useNavigate()
  //const {context,setContext}=useContext(Context)
  const [apiSearch,setApiSearch]=useState([])
  const [open,setopen]=useState(false)
  let menusearch = useRef()
  const light =["green-light.png", "blue-light.png" ,"red-light.png"]
  const search_fn= async()=>{
    if (searchval.length != 0 )
    await axios.get(`https://api.chucknorris.io/jokes/search?query=${searchval}`)
    .then((res)=>{setApiSearch(res.data.result) ;setopen(true)})
    .catch((err)=>setApiSearch([{id:'none'}]))
  }
  useEffect(()=>{
    search_fn()
  },[searchval])
  useEffect(()=>{
    document.addEventListener("mousedown",(event)=>{
      if(!menusearch.current.contains(event.target)){
        setopen(false)
      }
    })
  })
  return (
    <div className='header'>
      <Navbar />
      <div className='headerMain' >
        <div className='headerCenter'>
          <p> The Joke Bible</p>
          <h6>Daily Laughs for you and yours</h6>
          <div className='searchDivs' >
            <div className='searchDiv' >
              <input type="search" className='text-input'
                placeholder='How can we make you laugh today?'
                onChange={
                  () => {

                    setSearchVal(event.target.value) 
                  }
                  } />

            </div>
            <div ref={menusearch} className='search_result' >
              {
                 open ?
                apiSearch.map((Categorie,key) => {
                      return  <div key={key} className='div2'onClick={() => {  setdatashared(Categorie);navigate(`/joke/${Categorie.id}`) ;setopen(false)}}>
                        <img src={require(`../../assets/assets_Homework_Front-End_02/${light[Math.floor(Math.random() * light.length)]}`)}/>
                         <p> {Categorie.id}</p> 
                      </div>
                      
                    }) :
                    <>
                     
                  </>
              }
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Header