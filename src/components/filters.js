import React, { Component } from 'react'
import history from './history'
import Button from '@material-ui/core/Button';
import './filter.css'

export default class filters extends Component {

    constructor(props)
    {
        super(props)

        this.getbyYear=this.getbyYear.bind(this);
        this.getbyHome=this.getbyHome.bind(this);
    }

    getbyHome()
    {
        history.push('/');
        window.location.reload();
    }

    getbyYear(year){
        history.push('/rockets');
        localStorage.setItem('year',year);
        window.location.reload();
    }

    render() {
        return (
            <div>
                <h1>filters</h1>

                <div className="buttons">

                <div className="sub_bt">
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyYear('2006')}}>2006</Button>
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyYear('2007')}}>2007</Button>
                </div>

                <div className="sub_bt">
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyYear('2008')}}>2008</Button>
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyYear('2009')}}>2009</Button>
                </div>

                <div className="sub_bt">
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyYear('2010')}}>2010</Button>
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyYear('2011')}}>2011</Button>
                </div>

                <div className="sub_bt">
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyYear('2012')}}>2012</Button>
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyYear('2013')}}>2013</Button>
                </div>

                <div className="sub_bt">
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyYear('2014')}}>2014</Button>
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyYear('2015')}}>2015</Button>
                </div>

                <div className="sub_bt">
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyYear('2016')}}>2016</Button>
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyYear('2017')}}>2017</Button>
                </div>
               
                <div className="sub_bt">
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyYear('2018')}}>2018</Button>
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyYear('2019')}}>2019</Button>
                </div>

                <div className="sub_bt">
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyYear('2020')}}>2020</Button>
                <Button variant="contained" color="primary" disableElevation onClick={()=>{this.getbyHome()}}>Home</Button>
                </div>

                </div>
            </div>
        )
    }
}
