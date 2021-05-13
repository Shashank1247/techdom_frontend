import React, { Component } from 'react'
import {Button} from 'react-bootstrap';
import {rocketdata} from './roct'
import history from './history'
import Filter from './filters'
import './rocket2.css'

export default class yearRoc extends Component {  
    
    constructor(props)
    {
        super(props)

        this.getbyYear=this.getbyYear.bind(this);
    }

    getbyYear(year){
       localStorage.setItem('year',year)
        window.location.reload();
    }
    
      render() {
        
        var temp=rocketdata;

   
        var test=[];

        for(var i=0;i<100;i++)
        {
            

            if(temp[i].launch_year===localStorage.getItem('year'))
            {
               test.push(temp[i]);
            }
        }

   
        return (
        
            <>
            <div className="main">
            <Filter/>

            
            <section className="rockets">
             {test.map((roc) => (
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
             </section>
             </div>
             </>
             
         );
       

    }
}
