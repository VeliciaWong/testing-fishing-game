import React, {Component} from 'react';
import {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header'
import Content from '../../components/Home/Content'
import Footer from '../../components/Footer'

class Home extends Component {

    render(){
        return(
            <Fragment>
                <div className='container'>
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>  
            </Fragment>
            
        )
    }
}
export default Home;