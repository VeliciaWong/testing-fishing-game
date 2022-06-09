import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ConnectWallet from '../../components/Connections/connectionWallet.js';
import '../../assets/css/style.css'
import '../../assets/css/colors/scheme-01.css'
import '../../assets/css/coloring.css'

const Header = () =>{
    return(
        <div>
            <header class="transparent">
            <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="de-flex sm-pt10">
                        <div class="de-flex-col">
                            <div class="de-flex-col">
                                <div id="logo">
                                    <a href="index.html">
                                        <img alt="" class="logo" src="images/logo-light.png" />
                                        <img alt="" class="logo-2" src="images/logo.png" />
                                    </a>
                                </div>
                            </div>
                            <div class="de-flex-col">
                                <input id="quick_search" class="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
                            </div>
                        </div>
                        <div class="de-flex-col header-col-mid">
                            <ul id="mainmenu">
                                    <li>
                                        <a href="index.html">Home<span></span></a>
                                        <ul class="mega">
                                            <li>
                                                <div class="container">
                                                    <div class="menu-content">
                                                        <div class="row g-0">
                                                            <div class="col-xl-3 col-lg-3">
                                                                <ul>
                                                                    <li class="menu-title">New Homepage</li>
                                                                    <li><a href="wide_index-3.html"><strong>New</strong>Wide Homepage 3</a></li>
                                                                    <li><a href="wide_index-2.html">Wide Homepage 2</a></li>
                                                                    <li><a href="wide_index.html">Wide Homepage 1</a></li>
                                                                </ul>

                                                                <ul>
                                                                    <li class="menu-title">Homepage Clivus Scheme</li>
                                                                    <li><a href="06_clivus-index.html">Homepage Clivus 1</a></li>
                                                                    <li><a href="06_clivus-index-2.html">Homepage Clivus 2</a></li>
                                                                    <li><a href="06_clivus-index-3.html"><strong>New</strong>Homepage Clivus 3</a></li>
                                                                    <li><a href="06_clivus-index-4.html"><strong>New</strong>Homepage Clivus 4</a></li>
                                                                </ul>
                                                            </div>

                                                            <div class="col-xl-3 col-lg-3">
                                                                <ul>
                                                                    <li class="menu-title">Homepage Light Scheme</li>
                                                                    <li><a href="index.html">Homepage Light 1</a></li>
                                                                    <li><a href="index-2.html">Homepage Light 2</a></li>
                                                                    <li><a href="index-3.html">Homepage Light 3</a></li>
                                                                    <li><a href="index-4.html">Homepage Light 4</a></li>
                                                                    <li><a href="index-5.html">Homepage Light 5</a></li>
                                                                    <li><a href="index-6.html">Homepage Light 6</a></li>
                                                                    <li><a href="index-7.html">Homepage Light 7</a></li>
                                                                    <li><a href="index-8.html">Homepage Light 8</a></li>
                                                                    <li><a href="index-9.html">Homepage Light 9</a></li>
                                                                </ul>
                                                            </div>
                                                            
                                                            <div class="col-xl-3 col-lg-3">
                                                                <ul>
                                                                    <li class="menu-title">Homepage Dark Scheme</li>
                                                                    <li><a href="02_dark-index.html">Homepage Dark 1</a></li>
                                                                    <li><a href="02_dark-index-2.html">Homepage Dark 2</a></li>
                                                                    <li><a href="02_dark-index-3.html">Homepage Dark 3</a></li>
                                                                    <li><a href="02_dark-index-4.html">Homepage Dark 4</a></li>
                                                                </ul>

                                                                <ul>
                                                                    <li class="menu-title">Homepage Grey Scheme</li>
                                                                    <li><a href="03_grey-index.html">Homepage Grey 1</a></li>
                                                                    <li><a href="03_grey-index-2.html">Homepage Grey 2</a></li>
                                                                    <li><a href="03_grey-index-3.html">Homepage Grey 3</a></li>
                                                                    <li><a href="03_grey-index-4.html">Homepage Grey 4</a></li>
                                                                </ul>
                                                            </div>                                           

                                                            <div class="col-xl-3 col-lg-3">
                                                                <ul>
                                                                    <li class="menu-title">Homepage Black Scheme</li>
                                                                    <li><a href="05_black-index.html">Homepage Black 1</a></li>
                                                                    <li><a href="05_black-index-2.html">Homepage Black 2</a></li>
                                                                    <li><a href="05_black-index-3.html">Homepage Black 3</a></li>
                                                                </ul>

                                                                <ul>
                                                                    <li class="menu-title">Homepage Retro Scheme</li>
                                                                    <li><a href="04_retro-index.html">Homepage Retro 1</a></li>
                                                                    <li><a href="04_retro-index-2.html">Homepage Retro 2</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>                                        
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="explore.html">Explore<span></span></a>
                                        <ul>
                                            <li><a href="wide_explore.html"><strong>New</strong>Wide Explore</a></li>
                                            <li><a href="explore.html">Explore</a></li>
                                            <li><a href="explore-2.html">Explore 2</a></li>
                                            <li><a href="explore-music-nft.html">New: Music</a></li>
                                            <li><a href="explore-video.html">New: Video</a></li>
                                            <li><a href="collection.html">Collections</a></li>
                                            <li><a href="live-auction.html">Live Auction</a></li>
                                            <li><a href="item-details.html">Item Details</a></li>
                                            <li><a href="help-center.html">Help Center</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Pages<span></span></a>
                                        <ul>
                                            <li><a href="author.html">Author</a></li>
                                            <li><a href="profile.html">Profile</a></li>
                                            <li><a href="wallet.html">Wallet</a></li>
                                            <li><a href="create-options.html">Create</a></li>
                                            <li><a href="news.html">News</a></li>
                                            <li><a href="gallery.html">Gallery</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="login-2.html">Login 2</a></li>
                                            <li><a href="register.html">Register</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </li>                                    
                                    <li>
                                        <a href="#">Stats<span></span></a>
                                        <ul>
                                            <li><a href="activity.html">Activity</a></li>
                                            <li><a href="rankings.html">Rankings</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Elements<span></span></a>
                                        <ul>
                                            <li><a href="icons-elegant.html">Elegant Icons</a></li>
                                            <li><a href="icons-etline.html">Etline Icons</a></li>
                                            <li><a href="icons-font-awesome.html">Font Awesome Icons</a></li>
                                            <li><a href="accordion.html">Accordion</a></li> 
                                            <li><a href="alerts.html">Alerts</a></li>
                                            <li><a href="counters.html">Counters</a></li>
                                            <li><a href="modal.html">Modal</a></li>
                                            <li><a href="popover.html">Popover</a></li>
                                            <li><a href="pricing-table.html">Pricing Table</a></li>
                                            <li><a href="progress-bar.html">Progress Bar</a></li>
                                            <li><a href="tabs.html">Tabs</a></li>
                                            <li><a href="tooltips.html">Tooltips</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            <div class="menu_side_area">
                                <a href="wallet.html" class="btn-main btn-wallet"><i class="icon_wallet_alt"></i><span>Connect Wallet</span></a>
                                <span id="menu-btn"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
        </div>
    )
}

export default Header;