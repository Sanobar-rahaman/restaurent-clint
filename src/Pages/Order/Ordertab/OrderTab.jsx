import FoodCard from "../../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';



const OrderTab = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    return (
        <div>
            <div className=" grid md: grid-cols-3 gap-6">
                   {
                        items.map(item=> <FoodCard
                        key={item._id}
                        item={item}
                        ></FoodCard>)
                    }
                   </div>
        </div>
    );
};

export default OrderTab;