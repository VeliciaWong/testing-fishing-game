import React, {Component} from 'react';
import {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header'
import Content from '../../components/Itemdetails/Content'
import Footer from '../../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css'
import '../../assets/css/colors/scheme-01.css'
import '../../assets/css/coloring.css'

class Itemdetails extends Component {

    render(){
        return(
            <Fragment>
                <div className='wrapper'>
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>  
            </Fragment>
            
        )
    }
}
export default Itemdetails;