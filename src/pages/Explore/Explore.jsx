import React, {Component} from 'react';
import {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Explore/Header'
import Content from '../../components/Explore/Content'
import Footer from '../../components/Footer'

class Explore extends Component {

    render(){
        return(
            <Fragment>
                <div>
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>  
            </Fragment>
            
        )
    }
}
export default Explore;