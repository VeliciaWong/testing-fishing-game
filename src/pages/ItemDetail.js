import React from "react";
import Clock from "../components/Clock";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { gql } from "@apollo/client";
import { useQuery } from "react-query";
import ContentLoader from "react-content-loader";


const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #fff;
    border-bottom: solid 1px #dddddd;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #111;
    }
    .item-dropdown .dropdown a{
      color: #111 !important;
    }
  }
`;

const fetcher = gql`
  query($id: ID!){
  tokenById(id: $id) {
    id
    tokenId
    uri
  }
}
`


const Colection = ({nft}) => {
    const handleBtnClick = () => {
        console.log('buy nft')
    };

    const { data: metadata, isSuccess } = useQuery(['metadata-nft', nft.id], async () => {
        const resp = await fetch(nft.uri?.replace('ipfs://', 'https://ipfs.io/ipfs/'))
        return await resp.json()
      })
      
    if (isSuccess){
        return (
                <div>
                    <GlobalStyles />

                    <section className='container'>
                        <div className='row mt-md-5 pt-md-4'>

                            <div className="col-md-6 text-center">
                                <img src={metadata?.image?.replace('ipfs://', 'https://ipfs.io/ipfs/')} className="img-fluid img-rounded mb-sm-30" alt="" />
                            </div>
                            <div className="col-md-6">
                                <div className="item_info">
                                    Auctions ends in
                                    <div className="de_countdown">
                                        <Clock deadline="December, 30, 2021" />
                                    </div>
                                    <h2>{metadata?.name}</h2>
                                    <div className="item_info_counts">
                                        <div className="item_info_type"><i className="fa fa-image"></i>Art</div>
                                        <div className="item_info_views"><i className="fa fa-eye"></i>250</div>
                                        <div className="item_info_like"><i className="fa fa-heart"></i>18</div>
                                    </div>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                                    <h6>Creator</h6>
                                    <div className="item_author">
                                        <div className="author_list_pp">
                                            <span>
                                            <img className="lazy" src="./img/author/author-10.jpg" alt="" />
                                                <i className="fa fa-check"></i>
                                            </span>
                                        </div>
                                        <div className="author_list_info">
                                            <span>Monica Lucas</span>
                                        </div>
                                    </div>

                                    <div className="spacer-40"></div>

                                    <div className="de_tab">
                                        <span onClick={handleBtnClick} className="btn-main">Buy</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            );
    } else{
        return (
            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
              <div className="nft__item m-0">
                <ContentLoader
                  speed={2}
                  width="100%"
                  height={400}
                  viewBox="0 0 400 600"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
                >
                  <circle cx="55" cy="40" r="38" /> 
                  <rect x="0" y="65" rx="2" ry="2" width="400" height="400" /> 
                  <rect x="0" y="525" rx="0" ry="0" width="255" height="20" /> 
                  <rect x="0" y="565" rx="0" ry="0" width="84" height="20" />
                </ContentLoader>
              </div>
            </div>
          )
    }
   
}
export default Colection;