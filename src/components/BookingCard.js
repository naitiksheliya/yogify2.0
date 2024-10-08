import React from 'react';
import ClassItem from './classItem';
import { FaCalendarAlt, FaClock, FaLaptop, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';

const BookingCard = ({ booking }) => {
  
 console.log(booking);

 const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
};

  return (
    <>
      <div className="max-w-sm w-full mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
      <img className="rounded-t-lg w-full h-48 object-cover" src={ booking.imageUrl} alt={ booking. title} />
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          { booking.instructorprofileImage && (
            <img 
              src={ booking.instructorprofileImage} 
              alt={ booking.instructorName}
              className="w-10 h-10 rounded-full mr-2"
            />
          )}
          { booking.instructorName && (
            <>
              <label className="font-medium text-gray-900 dark:text-white">Instructor Name  : </label>
              <span className="font-medium text-gray-900 dark:text-white">
                { booking.instructorName}
              </span>
            </>
          )}
        </div>
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> dear {booking.username},your booking for { booking.title} is conformed</h1>
        {/* <div className="mb-3 overflow-y-auto h-24 custom-scrollbar">
          <p className="font-normal text-gray-700 dark:text-gray-400">{ description}</p>
        </div> */}
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {/* <button className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
            <FaMapMarkerAlt className="w-3 h-3 me-1" />
            { city}
          </button> */}
          {/* <button className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
            <FaUsers className="w-3 h-3 me-1" />
            { capacity} students
          </button> */}
          <button className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
            <FaCalendarAlt className="w-3 h-3 me-1" />
            {formatDate( booking.date)}
          </button>
          <button className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
            <FaClock className="w-3 h-3 me-1" />
            {formatTime( booking.date)}
          </button>
          <button className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
            { booking.modeOfClasses === 'Online' ? (
              <FaLaptop className="w-3 h-3 me-1" />
            ) : (
              <FaChalkboardTeacher className="w-3 h-3 me-1" />
            )}
            { booking.modeOfClasses}
          </button>
          <button className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-xs px-2.5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
            <FaGraduationCap className="w-3 h-3 me-1" />
            { booking.level}
          </button>
        </div>
        {/* <button
          disabled={!booknowbutton}
          onClick={handleAction}
          className={`inline-flex text-center items-center px-3 py-2 text-sm font-medium text-center rounded-lg focus:outline-none ${
            booknowbutton
              ? 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              : 'text-gray-500 bg-gray-300 cursor-not-allowed'
          }`}
        >
          {!(auth.currentUser && auth.currentUser.uid ===  instructorId) ? (
            <>
              {booknowbutton ? 'Book now' : 'Booked'}
              {booknowbutton && (
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              )}
            </>
          ) : (
            <>
              Edit Class
              <FaEdit className="w-3.5 h-3.5 ms-2" />
            </>
          )}
        </button> */}
      </div>
    </div>
      
    </>
  );
};

export default BookingCard;