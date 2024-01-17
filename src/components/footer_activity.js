import React, { useState } from 'react';

const footer_activity = () => {


    return (
        <div className="navbar-div   justify-between items-center">
        <div className="flex items-center space-x-4 footer_activity">
            <div className="chartTextH1 liveFeed">
                
                LIVE DATA MARKET</div>
            <div className="chartText">Social Links</div>
            <div className="chartText">ETH PRICE</div>

            {/* <div> */}
                <div className="chartText">COLLECT</div>
                <div class="icon_cont">
                    <button id="activity-type-sales-switch" role="switch" class="" aria-checked="true">
                        <div class="toggleButton Switch__Track-sc-1u4na4u-0-dKdgxE"></div>
                    </button>
                    <div class="chartText" id="">LISTINGS</div>
                    </div>

            {/* </div> */}

        </div>

    </div>
    );
};

export default footer_activity;
