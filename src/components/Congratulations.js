import React, { useEffect } from 'react';
import { useLocation,Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../firebase';
// import { format } from 'date-fns'; // to format the date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
};


function Congratulations() {
  const location = useLocation();
  const {
    // userId,
    username,
    // email,
    instructorName,
    // classId,
    address,
    // title,
    // imageUrl,
    // level,
    date
    // modeofclasses,
  } = location.state;
  console.log(location.state);
  const auth = getAuth();
  // const formattedDate = format(new Date(date), 'MMMM dd, yyyy, hh:mm a');/

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-semibold mb-6 text-white">
          Congratulations, {username}!
        </h2>
        <p className="text-lg text-white mb-4">
          Thank you for booking the class. Your instructor, <span className="font-bold">{instructorName}</span>, is excited to have you!
        </p>
        <p className="text-lg text-white mb-4">
          The class will be held at:
        </p>
        <p className="text-xl font-bold text-yellow-300 bg-gray-900 p-4 rounded-lg mb-4">
          {address}
        </p>
        <p className="text-lg text-white mb-4">
          Date and Time:
        </p>
        <p className="text-xl font-bold text-yellow-300 bg-gray-900 p-4 rounded-lg mb-4">
          {console.log("date",location)}
          {formatDate(date)}
        </p>
        <p className="text-xl font-bold text-yellow-300 bg-gray-900 p-4 rounded-lg mb-4">
          {formatTime(date)}
        </p>
        <p className="text-lg text-white">
          We look forward to seeing you in the class!
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            to="/profile"
            className="block center-align w-60 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg text-center transition duration-300 ease-in-out"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Congratulations;
