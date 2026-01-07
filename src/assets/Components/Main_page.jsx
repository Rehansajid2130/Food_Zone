import React from 'react'
import "./Main_page.css"
import Logo from "../images/Foody_Zone.svg"
import dish1 from "../images/dish1.jpg"
import Item_detail from './item_detail'
import { useEffect } from 'react'
import { useState } from 'react'


export const BASE_URL = "http://localhost:9000"

const Main_page = () => {

    const [Data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [Search, setSearch] = useState("")
    const [FilteredData, setFilteredData] = useState([])
    const [Typebtn, setTypebtn] = useState("all")

     useEffect(()=>{
         const Data_fetch = async () =>
            {
                setLoading(true)
            try
            {
                const response = await fetch(BASE_URL)
                const json = await response.json()
                setData(json)
                setFilteredData(json) // Initialize FilteredData with fetched data

                console.log(json);
                setLoading(false)
            }
            catch(error)
            {
                console.log(error);
                setLoading(false)

            }
        }
        Data_fetch()
    },[])

    useEffect(()=>{
      
            if(Search.trim() === "") {
            setFilteredData(Data)
        } else {
            const filtered = Data.filter(dish => 
                dish.name.toLowerCase().startsWith(Search.toLowerCase())
            )
            setFilteredData(filtered)
        }
    }, [Search , Data])
        const filterfood = (Type) =>{
            if(Type === "all")
            {
                setFilteredData(Data)
                setTypebtn("all")
                return
            }
            else{
                const filter = Data?.filter((dish => dish.type.toLowerCase().includes(Type.toLowerCase())))
                setFilteredData(filter)
                setTypebtn(Type) 
            }
        }
    

    return (
    <div className='Main_container'>
        <div className="top_section">
            <div className="top">
                 <div className="logo">
                <img src={Logo} alt="logo" />
                 </div>
                <div className="search_input">
                <input type="text" 
                value={Search}
                onChange={(e)=>{
                    setSearch(e.target.value)
                }}
                className='Search_input_setting'
                placeholder='Search Food....'
                />
                </div>
            </div>
            <div className="Cat_btn">
                <button
                onClick={()=>{

                    filterfood("all")
                }
                }
                >All</button>
                <button
                onClick={ () =>{
                    filterfood("Breakfast")
                }
                }
                >Breakfast</button>
                <button
                onClick={ ()=>{
                    filterfood("lunch")
                }
                }
                >Lunch</button>
                <button
                onClick={()=>{
                    filterfood("dinner")
                }
                }
                >Dinner</button>
            </div>
        </div>
        <div className="bottom">
        <div className="Items">
        {!loading && FilteredData && FilteredData.length > 0 && 
        FilteredData.map( (dish)=>{
            return(
                <Item_detail {...dish}  key = {dish.name}/>
            )
        })}
        </div>
       
        </div>

    </div>
  )
}

export default Main_page