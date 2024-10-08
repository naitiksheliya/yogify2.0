import React from 'react';
import '../index.css'; // Import the merged CSS file
import testimonial1 from '../assets/img/testimonial1.jpeg'; // Import images
import testimonial2 from '../assets/img/testimonial2.jpeg';
import testimonial3 from '../assets/img/testimonial3.jpeg';
import testimonial4 from '../assets/img/testimonial4.jpeg';

function Testimonials() {

  return (
    <>
    <h2 className="text-3xl font-extrabold text-white mt-12 mb-6">What Our Practitioners Say</h2>
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Transformative Experience</h3>
            <p className="my-4">Practicing yoga with this app has truly transformed my life. I feel more centered and at peace."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-9 h-9" src={testimonial1} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Emily Johnson</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Yoga Instructor</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">A Journey to Mindfulness</h3>
            <p className="my-4">This app has guided me on my journey to mindfulness and self-discovery. Highly recommend!"</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-9 h-9" src={testimonial2} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Michael Lee</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Wellness Coach</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Rejuvenating Practice</h3>
            <p className="my-4">The guided sessions are rejuvenating and have helped me connect with my inner self."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-9 h-9" src={testimonial3} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Sarah Patel</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Yoga Enthusiast</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Community and Support</h3>
            <p className="my-4">I love the community aspect of this app. It makes my practice feel supported and connected."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-9 h-9" src={testimonial4} alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>David Kim</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Yoga Practitioner</div>
            </div>
        </figcaption>    
    </figure>
</div>
</>
  );
}

export default Testimonials;