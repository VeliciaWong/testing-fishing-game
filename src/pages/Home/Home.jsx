import React, {Component} from 'react';
import {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header'
import ContentHome from '../../components/Home/ContentHome'
import Footer from '../../components/Footer'
import '../../assets/css/style.css'
import '../../assets/css/colors/scheme-01.css'
import '../../assets/css/coloring.css'

class Home extends Component {

    render(){
        return(
            <Fragment>
                <div className='wrapper'>
                    <Header/>
                    <ContentHome/>
                    <Footer/>
                </div>  
            </Fragment>
            
        )
    }
}
export default Home;