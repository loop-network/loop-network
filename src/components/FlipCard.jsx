import React from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function FlipCard() {
    return (
        <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal"
        >
        <FrontSide
           
        >
         
              <img src="/profiles/Annie.JPG" class="card-img-top" alt="Annie Lu" />
                <div class="card-body">
                  <h5 class="card-title">Annie Lu</h5>
                </div>
              
        </FrontSide>
        <BackSide
            >
                Back
        </BackSide>

        </Flippy>
    );
}

export default FlipCard;