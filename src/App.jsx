import React, { useEffect, useState, useContext, Suspense } from "react";
import Header from "./components/header/Header";
import { Context,jokeslide } from "./genaral/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/body/Main";
import "./styles/app.scss"
import axios from 'axios'
import Footer from "./components/footer/Footer";
import Joke from "./components/body/Joke";
const App = () => {
    let [CategorizedData, setCategorizedData] = useState([

        {
            'animal': []
        },
        {
            "career": []
        },
        {
            'celebrity': []
        },
        {
            "dev": []
        },
        {
            'explicit': []
        },
        {
            "fashion": []
        },
      
        {
            "food": []
        },
        {
            'history': []
        },
        {
            "money": []
        },
        {
            'movie': []
        },
        {
            "music": []
        },
        {
            'political': []
        },
        {
            "religion": []
        },
        {
            'science': []
        },
        {
            "sport": []
        },
        {
            "travel": []
        },
        {"Uncategorized":[]}


    ])
    let tryz = [...CategorizedData]


    const [AllData, setallData] = useState([]);
    const [Random, setRandom] = useState([]);
    const [Categories, setCategories] = useState([]);
    const [context, setContext] = useState('test')
    const [datashared, setdatashared] = useState([])
   
    
    let Urls = [
        "https://api.chucknorris.io/jokes/search?query=all",
        "https://api.chucknorris.io/jokes/random",
        "https://api.chucknorris.io/jokes/categories"
    ]



    useEffect(() => {

        const getallDAta = async () => {

            await axios.all(Urls.map(url =>

                axios.get(url)))
                .then(([{ data: alldata }, { data: random }, { data: categories }]) => {

                    setallData(alldata.result)
                    let ii =0 
                    alldata.result.map((data) => {
                        for (let index = 0 ; index < tryz.length; index++) {

                            console.log(Object.keys(tryz[index])[0])
                            

                            if (data.categories[0] === undefined) {
                                tryz[16].Uncategorized.push(data)
                                break
                            }

                            if (data.categories[0] ===  Object.keys(tryz[index])[0]) {
                                tryz[index][`${Object.keys(tryz[index])[0]}`].push(data)
                                
                                break
                            }
                           
                        }


                    })
                    setCategorizedData(tryz)
                    setRandom(random)
                    setCategories(categories)
                })
        }
        getallDAta();



    }, [])
    console.log(CategorizedData)
    console.log(AllData)

    return (
        <div className="app">
                <Header Categories={Categories} setdatashared={setdatashared}/>
            {AllData.length > 0 ?
                <Context.Provider value={{ context, setContext }}>
                    
                        <Routes>
                            {/* <Route element= {}/> */}
                            <Route exact path="/" element={ <Main datashared={datashared} setdatashared={setdatashared} AllData={AllData} Random={Random} Categories={Categories} CategorizedData={CategorizedData}/>} />
                            <Route path="/joke/:id" element={<Joke datashared={datashared} />} />

                        </Routes>
                    




                    <Footer />
                </Context.Provider>

                : <></>
            }
        </div>
    )
}
export default App;