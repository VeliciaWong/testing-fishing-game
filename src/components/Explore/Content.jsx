import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css'
import '../../assets/css/colors/scheme-01.css'
import '../../assets/css/coloring.css'

const Content = () =>{
    return(
        <div>
        <div class="no-bottom no-top" id="content">
            <div id="top"></div>
            
            <section id="subheader" class="jarallax text-light">
                <img class="jarallax-img" src="images/background/subheader.jpg" alt="" />
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
                    <div class="row cols-5 wow fadeIn">
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="de_countdown bg-color-secondary text-white" data-year="2022" data-month="6" data-day="16" data-hour="8"></div>
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Monica Lucas">                                    
                                        <img class="lazy" src="images/author/author-1.jpg" alt=""></img>
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
                                        <img src="images/items/static-1.jpg" class="lazy nft__item_preview" alt=""></img>
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Stacy Long">                                    
                                        <img class="lazy" src="images/author/author-10.jpg" alt=""></img>
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
                                        <img src="images/items/static-2.jpg" class="lazy nft__item_preview" alt=""></img>
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="de_countdown bg-color-secondary text-white" data-year="2022" data-month="6" data-day="14" data-hour="8"></div>
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Ida Chapman">                                    
                                        <img class="lazy" src="images/author/author-11.jpg" alt=""></img>
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
                                        <img src="images/items/static-3.jpg" class="lazy nft__item_preview" alt=""></img>
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Fred Ryan">                                    
                                        <img class="lazy" src="images/author/author-12.jpg" alt=""></img>
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
                                        <img src="images/items/static-4.jpg" class="lazy nft__item_preview" alt=""></img>
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Franklin Greer">                                    
                                        <img class="lazy" src="images/author/author-9.jpg" alt=""></img>
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
                                        <img src="images/items/anim-4.webp" class="lazy nft__item_preview" alt=""></img>
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="de_countdown bg-color-secondary text-white" data-year="2022" data-month="6" data-day="6" data-hour="8"></div>
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Mamie Barnett">                                    
                                        <img class="lazy" src="images/author/author-2.jpg" alt=""></img>
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
                                        <img src="images/items/anim-2.webp" class="lazy nft__item_preview" alt=""></img>
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Nicholas Daniels">                                    
                                        <img class="lazy" src="images/author/author-3.jpg" alt=""></img>
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
                                        <img src="images/items/anim-1.webp" class="lazy nft__item_preview" alt=""></img>
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="de_countdown bg-color-secondary text-white" data-year="2022" data-month="6" data-day="8" data-hour="8"></div>
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">                                    
                                        <img class="lazy" src="images/author/author-4.jpg" alt=""></img>
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
                                        <img src="images/items/anim-5.webp" class="lazy nft__item_preview" alt=""></img>
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="de_countdown bg-color-secondary text-white" data-year="2022" data-month="6" data-day="16" data-hour="8"></div>
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Jimmy Wright">                                    
                                        <img class="lazy" src="images/author/author-5.jpg" alt=""></img>
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
                                        <img src="images/items/anim-3.webp" class="lazy nft__item_preview" alt=""></img>
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Gayle Hicks">                                    
                                        <img class="lazy" src="images/author/author-7.jpg" alt=""></img>
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
                                        <img src="images/items/static-5.jpg" class="lazy nft__item_preview" alt=""></img>
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="de_countdown bg-color-secondary text-white" data-year="2022" data-month="6" data-day="16" data-hour="8"></div>
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Karla Sharp">                                    
                                        <img class="lazy" src="images/author/author-6.jpg" alt=""></img>
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
                                        <img src="images/items/anim-6.webp" class="lazy nft__item_preview" alt=""></img>
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Claude Banks">                                    
                                        <img class="lazy" src="images/author/author-8.jpg" alt=""></img>
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
                                        <img src="images/items/anim-7.webp" class="lazy nft__item_preview" alt=""></img>
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Franklin Greer">                                    
                                        <img class="lazy" src="images/author/author-9.jpg" alt=""></img>
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
                                        <img src="images/items/static-6.jpg" class="lazy nft__item_preview" alt=""></img>
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Fred Ryan">                                    
                                        <img class="lazy" src="images/author/author-12.jpg" alt=""></img>
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
                                        <img src="images/items/anim-8.webp" class="lazy nft__item_preview" alt=""></img>
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">                                    
                                        <img class="lazy" src="images/author/author-4.jpg" alt=""></img>
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
                                        <img src="images/items/static-7.jpg" class="lazy nft__item_preview" alt=""></img>
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
                        <div class="d-item col-sm-6 col-md-4 col-lg-1-5">
                            <div class="nft__item">
                                <div class="author_list_pp">
                                    <a href="author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Monica Lucas">                                    
                                        <img class="lazy" src="images/author/author-1.jpg" alt=""></img>
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
                                        <img src="images/items/static-8.jpg" class="lazy nft__item_preview" alt=""></img>
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