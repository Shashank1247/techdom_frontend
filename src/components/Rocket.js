import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Rocket.css'

const url="https://api.spacexdata.com/v3/launches?limit=100&launch_success=true"

const Rocket=()=>{

    const [rockets,setRockets] = useState([])

    useEffect(() =>{

        const fetchRockets=async()=>{
            const response =await fetch(url)
            const rockets=await response.json()
            setRockets(rockets)
          
            //console.log(rockets)
            
        }

        fetchRockets()

    },[])


 
  

    return(
        

        <>
        <div>
        <button >2006</button>
        </div>
        <section className="rockets">

            {rockets.map((rocket)=>{
                const{
                    flight_number,
                    mission_name,
                    launch_year,
                    launch_success,
                    links,
                    launch_site,

                }=rocket

              
                
                return (

                    <article key={flight_number}>
                        
                        <div>
                        <div className="photo">
                            <img src={links.mission_patch_small} alt=""/>
                        </div>
                        <div className="details">
                        <h3>{mission_name}</h3>
                        <h4>Launch Year: <span>{launch_year}</span></h4>
                        <h4>Launch Success : <span>{launch_success.toString()}</span></h4>
                        <h4>Launch Site :<span>{launch_site.site_id}</span></h4>
                        <Link to={`/rockets/${launch_year}`}>Learn More</Link>
                        </div>
                        </div>
                    </article>
                )
                
               
            })

            }

        </section>
        </>
    )

}

export  default Rocket