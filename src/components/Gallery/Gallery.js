import React from 'react'
import mylogo from "./images/cover2.jpg";
import logo from "./images/drink (2).jpg";
import food2 from "./images/food2.jpg";
import drink2 from "./images/drink (4).jpg";
import drink3 from "./images/food11.jpg";
import drink4 from "./images/food2.jpg";
import drink5 from "./images/food2.jpg";
import "./Gallery.css"



function Gallery() {
    return (
        <section id="gallery">
        <div>
            <h2 style={{fontSize:"35px"}} class="title-text text-center">MAIN CUISINES</h2>
        </div>

        <div id="gallery-centre">
            <article class="gallery-item d-none d-md-block  ">
                <a href="">
                    <img class="" src={mylogo} alt="" />
                </a>
            </article>

            <article class="gallery-item">
                <a href="">
                    <img src={logo} alt="" />
                </a>
            </article>

            <article class="gallery-item">
                <a href="">
                    <img src={drink2} alt="" />
                </a>
            </article>

            <article class="gallery-item">
                <a href="">
                    <img src={food2} alt="" />
                </a>
            </article>

            <article class="gallery-item">
                <a href="">
                    <img src={drink2} alt="" />
                </a>
            </article>

            <article class="gallery-item d-none d-md-block ">
                <a href="">
                    <img src={drink3} alt="" />
                </a>
            </article>

            <article class="gallery-item d-none d-md-block ">
                <a href="">
                    <img src={drink4} alt="" />
                </a>
            </article>

            <article class="gallery-item  d-none d-md-block ">
                <a href="">
                    <img src={drink5} alt="" />
                </a>
            </article>
        </div>

    </section>
    )
}

export default Gallery
