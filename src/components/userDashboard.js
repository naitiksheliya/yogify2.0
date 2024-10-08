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


  useEffect(() => {
    const fetchBookings = async () => {
      const docRef = doc(db, "users", params.userId);
      console.log("userid",params.userId);
      const docSnap = await getDoc(docRef);
      setBookingIds(docSnap.data().bookingIds)
      console.log(bookingIds);
      if (bookingIds.length > 0) {
        const bookingsRef = collection(db, "bookings");
        const fetchedBookings = [];

        try {
          // for (let i = 0; i < bookingIds.length; i++) {
            // const bookingId = bookingIds[i];
            // console.log("Fetching booking with ID:", bookingIds);
            const q = query(bookingsRef, where('__name__', 'in', bookingIds));
            const querySnapshot = await getDocs(q);
              querySnapshot.forEach((doc) => {
                const bookingData = doc.data();
                console.log(bookingData);
                  fetchedBookings.push({
                    id: doc.id,
                    ...bookingData
                  })
              });

          console.log("Fetched bookings:", fetchedBookings);
          setBookings(fetchedBookings);
        } catch (error) {
          console.error("Error fetching bookings:", error);
          toast.error("Error fetching bookings");
        } finally {
          setLoading(false);
        }
      } else {
        toast.error("No bookings found");
        setLoading(false);
      }
    };

    fetchBookings();
  }, [ auth.currentUser]);

  if (loading) {
    return <div>Loading bookings...</div>;
  }

  if (bookings.length === 0) {
    return <div>No bookings found.</div>;
  }

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
