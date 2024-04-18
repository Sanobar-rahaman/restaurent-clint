import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import slid1 from "../../../assets/home/slide1.jpg"
import slid2 from "../../../assets/home/slide2.jpg"
import slid3 from "../../../assets/home/slide3.jpg"
import slid4 from "../../../assets/home/slide4.jpg"
import slid5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/Sectiontitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={'---From 11:00am to 10:00pm---'}
            heading ={'Order Online'}
            ></SectionTitle>
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-10"
        >
            <SwiperSlide>
                <img src={slid1} alt="" />
                <h2 className=' text-4xl uppercase text-center -mt-16 text-white'>Salades</h2>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slid2} alt="" />
                <h2 className=' text-4xl uppercase text-center -mt-16 text-white'>Pizza</h2>

            </SwiperSlide>
            <SwiperSlide>
                <img src={slid3} alt="" />
                <h2 className=' text-4xl uppercase text-center -mt-16 text-white'>supos</h2>

            </SwiperSlide>
            <SwiperSlide>
                <img src={slid4} alt="" />
                <h2 className=' text-4xl uppercase text-center -mt-16 text-white'>Dessert</h2>

            </SwiperSlide>
            <SwiperSlide>
                <img src={slid5} alt="" />
                <h2 className=' text-4xl uppercase text-center -mt-16 text-white'>Salades</h2>

            </SwiperSlide>
            
        </Swiper>
        </section>
    );
};

export default Category;