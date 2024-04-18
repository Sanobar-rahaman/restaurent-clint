import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";


const TestiMonials = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://final-project-server-wheat.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <section className=" my-20">
            <SectionTitle
                subHeading="---What Our Clients Say---"
                heading={"Testimonials"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    review.map(review => <SwiperSlide key={review._id}>

                        <div className=" my-24 mx-auto">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <p>{review.details}</p>
                            <h3 className=" text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default TestiMonials;