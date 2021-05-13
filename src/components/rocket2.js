import React, { Component } from 'react'
import {Button} from 'react-bootstrap';
import {rocketdata} from './roct'
import Filter from './filters'
import history from './history'
import './rocket2.css'

export default class rocket2 extends Component {  
    
    constructor(props)
    {
        super(props)

     
    }

    
      render() {
        
        var temp=rocketdata;

        

        return (
        
            <>
           
            <div className="main">
            <Filter/>
           
            <div className="rockets">
             {temp.map((roc) => (
                 <article key={roc.flight_number}>
                <div>
                     <div className="photo">
                            <img src={roc.links.mission_patch_small} alt=""/>
                    </div>
                    <div className="details">

                        <h3>{roc.mission_name}</h3>
                        <h4>Launch Year: <span>{roc.launch_year}</span></h4>
                        <h4>Launch Success : <span>{roc.launch_success.toString()}</span></h4>
                        <h4>Launch Site :<span>{roc.launch_site.site_id}</span></h4>
                    </div>
                </div>
                </article>
             ))}
             </div>
            
             </div>
             
             </>
             
         );
       

    }
}
