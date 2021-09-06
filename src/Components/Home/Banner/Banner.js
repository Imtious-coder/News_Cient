import { Carousel } from 'antd';
import React from 'react';

// Css..
import './Banner.css';
import '../../../../node_modules/antd/dist/antd.min.css'

// Images..
import Image1 from './news1.jfif';
import Image2 from './news2.jfif';
import Image3 from './news3.jfif';

const Banner = () => {
    return (
        <section id="Banner" className="px-5">
            {/* Slider */}
            <div className="Slider">
                <Carousel autoplay>
                    <div className="Slide">
                        <img src={Image1} alt="" />
                    </div>
                    <div className="Slide">
                        <img src={Image2} alt="" />
                    </div>
                    <div className="Slide">
                        <img src={Image3} alt="" />
                    </div>
                </Carousel>
            </div>
            {/* Top News Start */}
            <div className="TopNews">
                {/* Title */}
                <p className="text-center mb-5 pb-1 font-bold text-3xl bg-blue-200">Top News</p>
                {/* News1 */}
                <div className="BannerTopNews">
                    <img src={Image1} alt="" />
                    <div>
                        <p className="text-xl mb-1 font-bold">35% Success</p>
                        <p>PH got 35% more success to achieve their goal. Many of them got JOB/Intern and..</p>
                    </div>
                </div>
                {/* News2 */}
                <div className="BannerTopNews">
                    <img src={Image2} alt="" />
                    <div>
                        <p className="text-xl mb-1 font-bold">35% Success</p>
                        <p>PH got 35% more success to achieve their goal. Many of them got JOB/Intern and..</p>
                    </div>
                </div>
                {/* News3 */}
                <div className="BannerTopNews">
                    <img src={Image3} alt="" />
                    <div>
                        <p className="text-xl mb-1 font-bold">35% Success</p>
                        <p>PH got 35% more success to achieve their goal. Many of them got JOB/Intern and..</p>
                    </div>
                </div>
            </div>
            {/* Top News End */}
        </section>
    );
};

export default Banner;