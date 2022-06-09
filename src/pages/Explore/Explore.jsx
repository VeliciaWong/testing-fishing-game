import React, {Component} from 'react';
import {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from '../../components/Explore/Content'
import Footer from '../../components/Footer'
import HeaderTransparent from '../../components/Explore/HeaderTransparent';
import '../../assets/css/style.css'
import '../../assets/css/colors/scheme-01.css'
import '../../assets/css/coloring.css'

class Explore extends Component {

    render(){
        return(
            <Fragment>
                <div id='wrapper'>
                    <HeaderTransparent/>
                    <Content/>
                    <a href="#" id="back-to-top"></a>
                    <Footer/>
                </div>  
            </Fragment>
            
        )
    }
}
export default Explore;