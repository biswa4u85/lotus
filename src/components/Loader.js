import React from "react";

function Loader() {
    return (<div class="preloader-wrapper">
        <div class='preloader'>
            <div class='diamond'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class='movement'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>);
}

export default Loader;