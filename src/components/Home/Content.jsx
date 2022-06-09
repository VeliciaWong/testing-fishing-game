import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css'
import '../../assets/css/colors/scheme-01.css'
import '../../assets/css/coloring.css'

const Content = () =>{
    return(
        <div className='container'>
            <div class="no-bottom no-top" id="content">
            <div id="top"></div>
            <section id="section-hero" aria-label="section" class="no-top no-bottom vh-100" data-bgimage="url(../../assets/images/background/bg-shape-1.jpg) bottom">
                <div class="v-center">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <div class="spacer-single"></div>
                                <h6 class="wow fadeInUp" data-wow-delay=".5s"><span class="text-uppercase id-color-2">Gigaland Market</span></h6>
                                <div class="spacer-10"></div>
                                <h1 class="wow fadeInUp" data-wow-delay=".75s">Create, sell or collect digital items.</h1>
                                <p class="wow fadeInUp lead" data-wow-delay="1s">
                                Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable</p>
                                <div class="spacer-10"></div>
                                <a href="#/explore" class="btn-main wow fadeInUp lead" data-wow-delay="1.25s">Explore</a>
                                <div class="mb-sm-30"></div>
                            </div>
                            <div class="col-md-6 xs-hide">
                                <img src="images/misc/nft.png" class="lazy img-fluid wow fadeIn" data-wow-delay="1.25s" alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-intro" class="no-top no-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-sm-30">
                            <div class="feature-box f-boxed style-3">
                                <i class="wow fadeInUp bg-color-2 i-boxed icon_wallet"></i>
                                <div class="text">
                                    <h4 class="wow fadeInUp">Set up your wallet</h4>
                                    <p class="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                                </div>
                                <i class="wm icon_wallet"></i>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-sm-30">
                            <div class="feature-box f-boxed style-3">
                                <i class="wow fadeInUp bg-color-2 i-boxed icon_cloud-upload_alt"></i>
                                <div class="text">
                                    <h4 class="wow fadeInUp">Add your NFT's</h4>
                                    <p class="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                                </div>
                                <i class="wm icon_cloud-upload_alt"></i>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-sm-30">
                            <div class="feature-box f-boxed style-3">
                                <i class="wow fadeInUp bg-color-2 i-boxed icon_tags_alt"></i>
                                <div class="text">
                                    <h4 class="wow fadeInUp">Sell your NFT's</h4>
                                    <p class="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                                </div>
                                <i class="wm icon_tags_alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            

            <section id="section-collections" class="no-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-center">
                                <h2>Hot Collections</h2>
                                <div class="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div id="collection-carousel" class="owl-carousel wow fadeIn">

                                <div class="nft_coll">
                                    <div class="nft_wrap">
                                        <a href="collection.html"><img src="images/collections/coll-1.jpg" class="lazy img-fluid" alt=""></img></a>
                                    </div>
                                    <div class="nft_coll_pp">
                                        <a href="collection.html"><img class="lazy pp-coll" src="images/author/author-1.jpg" alt=""></img></a>
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <div class="nft_coll_info">
                                        <a href="collection.html"><h4>Abstraction</h4></a>
                                        <span>ERC-192</span>
                                    </div>
                                </div>
                            
                                <div class="nft_coll">
                                    <div class="nft_wrap">
                                        <a href="collection.html"><img src="images/collections/coll-2.jpg" class="lazy img-fluid" alt=""></img></a>
                                    </div>
                                    <div class="nft_coll_pp">
                                        <a href="collection.html"><img class="lazy pp-coll" src="images/author/author-2.jpg" alt=""></img></a>
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <div class="nft_coll_info">
                                        <a href="collection.html"><h4>Patternlicious</h4></a>
                                        <span>ERC-61</span>
                                    </div>
                                </div>
                            
                                <div class="nft_coll">
                                    <div class="nft_wrap">
                                        <a href="collection.html"><img src="images/collections/coll-3.jpg" class="lazy img-fluid" alt=""></img></a>
                                    </div>
                                    <div class="nft_coll_pp">
                                        <a href="collection.html"><img class="lazy pp-coll" src="images/author/author-3.jpg" alt=""></img></a>
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <div class="nft_coll_info">
                                        <a href="collection.html"><h4>Skecthify</h4></a>
                                        <span>ERC-126</span>
                                    </div>
                                </div>
                            
                                <div class="nft_coll">
                                    <div class="nft_wrap">
                                        <a href="collection.html"><img src="images/collections/coll-4.jpg" class="lazy img-fluid" alt=""></img></a>
                                    </div>
                                    <div class="nft_coll_pp">
                                        <a href="collection.html"><img class="lazy pp-coll" src="images/author/author-4.jpg" alt=""></img></a>
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <div class="nft_coll_info">
                                        <a href="collection.html"><h4>Cartoonism</h4></a>
                                        <span>ERC-73</span>
                                    </div>
                                </div>
                            
                                <div class="nft_coll">
                                    <div class="nft_wrap">
                                        <a href="collection.html"><img src="images/collections/coll-5.jpg" class="lazy img-fluid" alt=""></img></a>
                                    </div>
                                    <div class="nft_coll_pp">
                                        <a href="collection.html"><img class="lazy pp-coll" src="images/author/author-5.jpg" alt=""></img></a>
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <div class="nft_coll_info">
                                        <a href="collection.html"><h4>Virtuland</h4></a>
                                        <span>ERC-85</span>
                                    </div>
                                </div>
                            
                                <div class="nft_coll">
                                    <div class="nft_wrap">
                                        <a href="collection.html"><img src="images/collections/coll-6.jpg" class="lazy img-fluid" alt=""></img></a>
                                    </div>
                                    <div class="nft_coll_pp">
                                        <a href="collection.html"><img class="lazy pp-coll" src="images/author/author-6.jpg" alt=""></img></a>
                                        <i class="fa fa-check"></i>
                                    </div>
                                    <div class="nft_coll_info">
                                        <a href="collection.html"><h4>Papercut</h4></a>
                                        <span>ERC-42</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>

                <section id="section-items" class="no-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="text-center">
                                    <h2>New Items</h2>
                                    <div class="small-border bg-color-2"></div>
                                </div>
                            </div>
                            <div id="items-carousel" class="owl-carousel wow fadeIn">

                                    <div class="d-item">
                                        <div class="nft__item">
                                            <div class="de_countdown" data-year="2022" data-month="6" data-day="16" data-hour="8"></div>
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
                                    
                                    <div class="d-item">
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
                                    
                                    <div class="d-item">
                                        <div class="nft__item">
                                            <div class="de_countdown" data-year="2022" data-month="6" data-day="14" data-hour="8"></div>
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
                                    
                                    <div class="d-item">
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
                                    
                                    <div class="d-item">
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
                                    <div class="d-item">
                                        <div class="nft__item">
                                            <div class="de_countdown" data-year="2022" data-month="6" data-day="6" data-hour="8"></div>
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
                                    <div class="d-item">
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
                                    
                                </div>
                            </div>
                        </div>
                    </section>

            <section id="section-popular" class="pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-center">
                                <h2>Top Sellers</h2>
                                <div class="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div class="col-md-12 wow fadeIn">
                            <ol class="author_list">
                                <li>                                    
                                    <div class="author_list_pp">
                                         <a href="author.html">                                    
                                            <img class="lazy pp-author" src="images/author/author-1.jpg" alt=""></img>
                                            <i class="fa fa-check"></i>
                                        </a>
                                    </div>                                    
                                    <div class="author_list_info">
                                        <a href="author.html">Monica Lucas</a>
                                        <span>3.2 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="author_list_pp">
                                        <a href="author.html">                                    
                                            <img class="lazy pp-author" src="images/author/author-2.jpg" alt=""></img>
                                            <i class="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div class="author_list_info">
                                        <a href="author.html">Mamie Barnett</a>
                                        <span>2.8 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="author_list_pp">
                                        <a href="author.html">                                    
                                            <img class="lazy pp-author" src="images/author/author-3.jpg" alt=""></img>
                                            <i class="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div class="author_list_info">
                                        <a href="author.html">Nicholas Daniels</a>
                                        <span>2.5 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="author_list_pp">
                                        <a href="author.html">                                    
                                            <img class="lazy pp-author" src="images/author/author-4.jpg" alt=""></img>
                                            <i class="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div class="author_list_info">
                                        <a href="author.html">Lori Hart</a>
                                        <span>2.2 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="author_list_pp">
                                        <a href="author.html">                                    
                                            <img class="lazy pp-author" src="images/author/author-5.jpg" alt=""></img>
                                            <i class="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div class="author_list_info">
                                        <a href="author.html">Jimmy Wright</a>
                                        <span>1.9 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="author_list_pp">
                                        <a href="author.html">                                    
                                            <img class="lazy pp-author" src="images/author/author-6.jpg" alt=""></img>
                                            <i class="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div class="author_list_info">
                                        <a href="author.html">Karla Sharp</a>
                                        <span>1.6 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="author_list_pp">
                                        <a href="author.html">                                    
                                            <img class="lazy pp-author" src="images/author/author-7.jpg" alt=""></img>
                                            <i class="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div class="author_list_info">
                                        <a href="author.html">Gayle Hicks</a>
                                        <span>1.5 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="author_list_pp">
                                        <a href="author.html">                                    
                                            <img class="lazy pp-author" src="images/author/author-8.jpg" alt=""></img>
                                            <i class="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div class="author_list_info">
                                        <a href="author.html">Claude Banks</a>
                                        <span>1.3 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="author_list_pp">
                                        <a href="author.html">                                    
                                            <img class="lazy pp-author" src="images/author/author-9.jpg" alt=""></img>
                                            <i class="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div class="author_list_info">
                                        <a href="author.html">Franklin Greer</a>
                                        <span>0.9 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="author_list_pp">
                                        <a href="author.html">                                    
                                            <img class="lazy pp-author" src="images/author/author-10.jpg" alt=""></img>
                                            <i class="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div class="author_list_info">
                                        <a href="author.html">Stacy Long</a>
                                        <span>0.8 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="author_list_pp">
                                        <a href="author.html">                                    
                                            <img class="lazy pp-author" src="images/author/author-11.jpg" alt=""></img>
                                            <i class="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div class="author_list_info">
                                        <a href="author.html">Ida Chapman</a>
                                        <span>0.6 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="author_list_pp">
                                        <a href="author.html">                                    
                                            <img class="lazy pp-author" src="images/author/author-12.jpg" alt=""></img>
                                            <i class="fa fa-check"></i>
                                        </a>
                                    </div>
                                    <div class="author_list_info">
                                        <a href="author.html">Fred Ryan</a>
                                        <span>0.5 eth</span>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>        
            <section id="section-category" class="no-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-center">
                                <h2>Browse by category</h2>
                                <div class="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".1s">
                            <a href='#/explore' class="icon-box style-2 rounded">
                                <i class="fa fa-image"></i>
                                <span>Art</span>
                            </a>
                        </div>
                        <div class="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".2s">
                            <a href='#/explore' class="icon-box style-2 rounded">
                                <i class="fa fa-music"></i>
                                <span>Music</span>
                            </a>
                        </div>
                        <div class="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".3s">
                            <a href='#/explore' class="icon-box style-2 rounded">
                                <i class="fa fa-search"></i>
                                <span>Domain Names</span>
                            </a>
                        </div>
                        <div class="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".4s">
                            <a href='#/explore' class="icon-box style-2 rounded">
                                <i class="fa fa-globe"></i>
                                <span>Virtual Worlds</span>
                            </a>
                        </div>
                        <div class="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".5s">
                            <a href='#/explore' class="icon-box style-2 rounded">
                                <i class="fa fa-vcard"></i>
                                <span>Trading Cards</span>
                            </a>
                        </div>
                        <div class="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".6s">
                            <a href='#/explore' class="icon-box style-2 rounded">
                                <i class="fa fa-th"></i>
                                <span>Collectibles</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>     
            </div>
        </div>
    )
}

export default Content;