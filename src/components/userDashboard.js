import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebase'; // Ensure this path is correct
import { collection, getDocs, query, where } from 'firebase/firestore';
import BookingCard from './BookingCard'; // Make sure this import is correct
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';

function UserDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const auth = getAuth();

  useEffect(() => {
    const fetchBookings = async () => {
      let bookingIds = location.state?.bookingIds;

      if (bookingIds && bookingIds.length > 0) {
        const bookingsRef = collection(db, "bookings");
        const fetchedBookings = [];

        try {
          for (let i = 0; i < bookingIds.length; i++) {
            const bookingId = bookingIds[i];
            console.log("Fetching booking with ID:", bookingId);
            const q = query(bookingsRef, where('__name__', '==', bookingId));
            const querySnapshot = await getDocs(q);
            
            if (!querySnapshot.empty) {
              querySnapshot.forEach((doc) => {
                const bookingData = doc.data();
                fetchedBookings.push({
                  id: doc.id,
                  ...bookingData
                });
              });
            }
          }

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
  }, [location, auth.currentUser]);

  if (loading) {
    return <div>Loading bookings...</div>;
  }

  if (bookings.length === 0) {
    return <div>No bookings found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Your Bookings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {console.log("bookings",bookings)}
        {bookings.map(booking => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;
