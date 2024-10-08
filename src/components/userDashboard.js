import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import { db } from '../firebase'; // Ensure this path is correct
import { collection, doc,getDoc,getDocs, query, where } from 'firebase/firestore';
import BookingCard from './BookingCard'; // Make sure this import is correct
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';

function UserDashboard() {
  const [bookingIds, setBookingIds] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const params = useParams()


  const fetchBookings = async () => {
    setLoading(true);
    
    try {
      // Fetch user document
      const docRef = doc(db, "users", params.userId);
      console.log("userid", params.userId);
      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        console.error("No user found");
        toast.error("User not found");
        return;
      }
      
      const userData = docSnap.data();
      const bookingIds = userData?.bookingIds || [];
  
      // Check if bookingIds is empty or undefined
      if (!bookingIds.length) {
        console.log("No bookings found for user.");
        toast.info("No bookings found.");
        return;
      }
  
      setBookingIds(bookingIds);
      console.log("Booking IDs:", bookingIds);
  
      // Fetch bookings data
      const bookingsRef = collection(db, "bookings");
      const fetchedBookings = [];
  
      const q = query(bookingsRef, where('__name__', 'in', bookingIds));
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        const bookingData = doc.data();
        fetchedBookings.push({
          id: doc.id,
          ...bookingData,
        });
      });
  
      console.log("Fetched bookings:", fetchedBookings);
      setBookings(fetchedBookings);
  
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Error fetching bookings");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchBookings();
  }, [params.userId]);
  

  return (

    <>
      <h2 className="text-3xl font-extrabold text-white mb-6">Your Bookings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {bookings.map(booking => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
    </>
  );
}

export default UserDashboard;
