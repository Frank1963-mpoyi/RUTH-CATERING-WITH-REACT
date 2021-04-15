import React from 'react'
import food1 from "./images/food (1).jpeg";
import food2 from "./images/food (2).jpeg";
import food3 from "./images/food (3).jpeg";
import food4 from "./images/food (4).jpeg";
import food5 from "./images/food (5).jpeg";
import food6 from "./images/food (6).jpeg";
import food7 from "./images/food (7).jpeg";
import "./Gallery.css"



function Gallery() {
    return (
        <section id="gallery"  >
        <div>
            <h2 style={{fontSize:"35px"}} class="title-text2 text-center">MAIN CUISINES</h2>
        </div>

        <div id="gallery-centre" className="galery-img-space">
            <article className="gallery-item d-none d-md-block  ">
                <a href="">
                    <img className="" src={food1} alt="" />
                </a>
            </article>

            <article className="gallery-item">
                <a href="">
                    <img src={food2} alt="" />
                </a>
            </article>

            <article className="gallery-item">
                <a href="">
                    <img src={food3} alt="" />
                </a>
            </article>

            <article className="gallery-item">
                <a href="">
                    <img src={food4} alt="" />
                </a>
            </article>

            <article className="gallery-item">
                <a href="">
                    <img src={food5} alt="" />
                </a>
            </article>

            <article className="gallery-item  ">
                <a href="">
                    <img src={food6} alt="" />
                </a>
            </article>

            <article className="gallery-item  ">
                <a href="">
                    <img src={food7} alt="" />
                </a>
            </article>

            <article className="gallery-item  d-none d-md-block ">
                <a href="">
                    <img src={food1} alt="" />
                </a>
            </article>
            <article className="gallery-item  d-none d-md-block ">
                <a href="">
                    <img src={food2} alt="" />
                </a>
            </article>
            <article className="gallery-item  d-none d-md-block ">
                <a href="">
                    <img src={food3} alt="" />
                </a>
            </article>
            <article className="gallery-item  d-none d-md-block ">
                <a href="">
                    <img src={food4} alt="" />
                </a>
            </article>
            <article className="gallery-item  d-none d-md-block ">
                <a href="">
                    <img src={food5} alt="" />
                </a>
            </article>
        </div>

    </section>
    )
}

export default Gallery
