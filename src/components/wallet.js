import React from 'react';
import { useEthers } from "@usedapp/core";


const Wallet = () => {
    const { activateBrowserWallet } = useEthers();
    return (
      <div className="row">
        {/* <h1>This is testing purpose only!</h1>
        <h1>Your account {account}</h1> */}
        <div className="col-lg-3 mb30">
          <span className="box-url" onClick={activateBrowserWallet}>
            <span className="box-url-label">Most Popular</span>
            <img src="./img/wallet/1.png" alt="" className="mb20" />
            <h4>Metamask</h4>
            <p>
              Start exploring blockchain applications in seconds. Trusted by
              over 1 million users worldwide.
            </p>
          </span>
        </div>
      </div>
    );
};  
export default Wallet;