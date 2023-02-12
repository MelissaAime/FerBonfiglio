import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { Cards } from "../../Components/Cards/cards";

export const MySwiper = () => {
    
    const projects = [
        {
            'title': 'uno',
            'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex asperiores fuga perspiciatis illum fugiat quas modi, quo possimus dolor excepturi odit numquam laborum? Voluptas minima labore tempora aut non?',
            'image' : 'holder.js/100x180',
        },
        {
            'title': 'dos',
            'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex asperiores fuga perspiciatis illum fugiat quas modi, quo possimus dolor excepturi odit numquam laborum? Voluptas minima labore tempora aut non?',
            'image' : "holder.js/100x180",
        },
        {
            'title': 'tres',
            'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex asperiores fuga perspiciatis illum fugiat quas modi, quo possimus dolor excepturi odit numquam laborum? Voluptas minima labore tempora aut non?',
            'image' : 'holder.js/100x180',
        },
        {
            'title': 'cuatro',
            'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex asperiores fuga perspiciatis illum fugiat quas modi, quo possimus dolor excepturi odit numquam laborum? Voluptas minima labore tempora aut non?',
            'image' : "holder.js/100x180",
        },
        {
            'title': 'cinco',
            'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex asperiores fuga perspiciatis illum fugiat quas modi, quo possimus dolor excepturi odit numquam laborum? Voluptas minima labore tempora aut non?',
            'image' : 'holder.js/100x180',
        },
        {
            'title': 'seis',
            'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex asperiores fuga perspiciatis illum fugiat quas modi, quo possimus dolor excepturi odit numquam laborum? Voluptas minima labore tempora aut non?',
            'image' : "holder.js/100x180",
        },
    ]

  return (
    <>
      <Swiper
       slidesPerView={4}
       spaceBetween={30}
       loop={true}
       centeredSlides={true}
       navigation={true}
       modules={[Navigation]}
       className="mySwiper"
      >
            {projects.map(({title, text, image, alt}) => (
            <SwiperSlide>   
                <Cards title={title} text={text} image={image} alt={title}/>
            </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}
