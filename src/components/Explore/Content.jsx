import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../assets/css/plugins.css'
import '../../assets/css/style.css'
import '../../assets/css/colors/scheme-01.css'
import '../../assets/css/coloring.css'
import subheader from '../../assets/images/background/subheader.jpg'
import author1 from '../../assets/images/author/author-1.jpg'
import static1 from '../../assets/images/items/static-1.jpg'
import author10 from '../../assets/images/author/author-10.jpg'
import static2 from '../../assets/images/items/static-2.jpg'
import author11 from '../../assets/images/author/author-11.jpg'
import static3 from '../../assets/images/items/static-3.jpg'
import author12 from '../../assets/images/author/author-12.jpg'
import static4 from '../../assets/images/items/static-4.jpg'
import author9 from '../../assets/images/author/author-9.jpg'
import anim4 from '../../assets/images/items/anim-4.webp'
import author2 from '../../assets/images/author/author-2.jpg'
import anim2 from '../../assets/images/items/anim-2.webp'
import author3 from '../../assets/images/author/author-3.jpg'
import anim1 from '../../assets/images/items/anim-1.webp'
import author4 from '../../assets/images/author/author-4.jpg'
import anim5 from '../../assets/images/items/anim-5.webp'
import author5 from '../../assets/images/author/author-5.jpg'
import anim3 from '../../assets/images/items/anim-3.webp'
import author7 from '../../assets/images/author/author-7.jpg'
import static5 from '../../assets/images/items/static-5.jpg'
import author6 from '../../assets/images/author/author-6.jpg'
import anim6 from '../../assets/images/items/anim-6.webp'
import author8 from '../../assets/images/author/author-8.jpg'
import anim7 from '../../assets/images/items/anim-7.webp'
import static6 from '../../assets/images/items/static-6.jpg'
import anim8 from '../../assets/images/items/anim-8.webp'
import static7 from '../../assets/images/items/static-7.jpg'
import static8 from '../../assets/images/items/static-8.jpg'

const Content = () =>{
    return(
        <div id='wrapper'>
           <div class="no-bottom no-top" id="content">
            <div id="top"></div>

            <section id="subheader" class="jarallax text-light">
                <img class="jarallax-img" src={subheader} alt="" />
                    <div class="center-y relative text-center">
                        <div class="container">
                            <div class="row">
                                
                                <div class="col-md-12 text-center">
									<h1>Explore</h1>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
            </section>

			<section aria-label="section">
                <div class="container">
                    <div class="row wow fadeIn">
                        <div class="col-lg-12">

                            <div class="items_filter">
                                <form action="blank.php" class="row form-dark" id="form_quick_search" method="post" name="form_quick_search">
                                    <div class="col text-center">
                                        <input class="form-control" id="name_1" name="name_1" placeholder="search item here..." type="text" /> <a href="#" id="btn-submit"><i class="fa fa-search bg-color-secondary"></i></a>
                                        <div class="clearfix"></div>
                                    </div>
                                </form>

                                <div id="item_category" class="dropdown">
                                    <a href="#" class="btn-selector">All categories</a>
                                    <ul>
                                        <li class="active"><span>All categories</span></li>
                                        <li><span>Art</span></li>
                                        <li><span>Music</span></li>
                                        <li><span>Domain Names</span></li>
                                        <li><span>Virtual World</span></li>
                                        <li><span>Trading Cards</span></li>
                                        <li><span>Collectibles</span></li>
                                        <li><span>Sports</span></li>
                                        <li><span>Utility</span></li>
                                    </ul>
                                </div>

                                <div id="buy_category" class="dropdown">
                                    <a href="#" class="btn-selector">Buy Now</a>
                                    <ul>
                                        <li class="active"><span>Buy Now</span></li>
                                        <li><span>On Auction</span></li>
                                        <li><span>Has Offers</span></li>
                                    </ul>
                                </div>

                                <div id="items_type" class="dropdown">
                                    <a href="#" class="btn-selector">All Items</a>
                                    <ul>
                                        <li class="active"><span>All Items</span></li>
                                        <li><span>Single Items</span></li>
                                        <li><span>Bundles</span></li>
                                    </ul>
                                </div>

                            </div>
                        </div>                     
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="de_countdown" data-year="2022" data-month="6" data-day="16" data-hour="8"></div>
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Monica Lucas">                                    
                                        <img class="lazy" src={author1} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={static1} class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>Pinky Ocean</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.08 ETH<span>1/20</span>
                                    </div>
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>50</span>
                                    </div>                            
                                </div> 
                            </div>
                        </div>                 
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Stacy Long">                                    
                                        <img class="lazy" src={author10} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={static2} class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>Deep Sea Phantasy</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.06 ETH<span>1/22</span>
                                    </div>
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>80</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="de_countdown" data-year="2022" data-month="6" data-day="14" data-hour="8"></div>
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Ida Chapman">                                    
                                        <img class="lazy" src={author11} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={static3} class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>Rainbow Style</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.05 ETH<span>1/11</span>
                                    </div>
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>97</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Fred Ryan">                                    
                                        <img class="lazy" src={author12} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={static4} class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>Two Tigers</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.02 ETH<span>1/15</span>
                                    </div>
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>73</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Franklin Greer">                                    
                                        <img class="lazy" src={author9} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={anim4} class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>The Truth</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.06 ETH<span>1/20</span>
                                    </div>
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>26</span>
                                    </div>                                 
                                </div>
                            </div>
                        </div>
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="de_countdown" data-year="2022" data-month="6" data-day="6" data-hour="8"></div>
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Mamie Barnett">                                    
                                        <img class="lazy" src={author4} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={anim2} class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>Running Puppets</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.03 ETH<span>1/24</span>
                                    </div>    
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>45</span>
                                    </div>                                  
                                </div> 
                            </div>
                        </div>
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Nicholas Daniels">                                    
                                        <img class="lazy" src={author3} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={anim3} class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>USA Wordmation</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.09 ETH<span>1/25</span>
                                    </div>
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>76</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="de_countdown" data-year="2022" data-month="6" data-day="8" data-hour="8"></div>
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">                                    
                                        <img class="lazy" src={author4} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={anim5} class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>Loop Donut</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.09 ETH<span>1/14</span>
                                    </div>
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>94</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="de_countdown" data-year="2022" data-month="6" data-day="16" data-hour="8"></div>
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Jimmy Wright">                                    
                                        <img class="lazy" src={author5} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={anim3}class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>Lady Copter</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.08 ETH<span>1/21</span>
                                    </div>
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>75</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Gayle Hicks">                                    
                                        <img class="lazy" src={author7} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={static5} class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>Purple Planet</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.02 ETH<span>1/18</span>
                                    </div>
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>93</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="de_countdown" data-year="2022" data-month="6" data-day="16" data-hour="8"></div>
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Karla Sharp">                                    
                                        <img class="lazy" src={author6} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={anim6} class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>Oh Yeah!</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.025 ETH<span>1/12</span>
                                    </div>
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>6</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Claude Banks">                                    
                                        <img class="lazy" src={author8} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={anim7} class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>This is Our Story</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.035 ETH<span>1/8</span>
                                    </div>
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>21</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Franklin Greer">                                    
                                        <img class="lazy" src={author9} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={static6} class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>Pixel World</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.015 ETH<span>1/25</span>
                                    </div>
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>46</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Fred Ryan">                                    
                                        <img class="lazy" src={author12} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={anim8} class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>I Believe I Can Fly</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.055 ETH<span>1/4</span>
                                    </div>
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>54</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">                                    
                                        <img class="lazy" src={author4} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={static7} class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>Cute Astronout</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.005 ETH<span>1/30</span>
                                    </div>
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>32</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        <div class="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Monica Lucas">                                    
                                        <img class="lazy" src={author1} alt=""></img>
                                        <i class="fa fa-check"></i>
                                    </a>
                                </div>
                                <div class="nft__item_wrap">
                                    <div class="nft__item_extra">
                                        <div class="nft__item_buttons">
                                            <button onclick="location.href='item-details.html'">Buy Now</button>
                                            <div class="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i class="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="item-details.html">
                                        <div class="d-placeholder"></div>
                                        <img src={static8}class="nft__item_preview" alt=""></img>
                                    </a>
                                </div>
                                <div class="nft__item_info">
                                    <a href="item-details.html">
                                        <h4>Teal Ocean</h4>
                                    </a>
                                    <div class="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div class="nft__item_price">
                                        0.025 ETH<span>1/12</span>
                                    </div>
                                    <div class="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div class="nft__item_like">
                                        <i class="fa fa-heart"></i><span>24</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>

                        <div class="col-md-12 text-center">
                            <a href="#" id="loadmore" class="btn-main wow fadeInUp lead">Load more</a>
                        </div>                                              
                    </div>
                </div>
            </section>
            
            </div> 
        </div>
        
        
    )
}

export default Content