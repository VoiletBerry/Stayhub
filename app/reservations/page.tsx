import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import Empty from "../components/Empty";
import { ReservationClient } from "./ReservationClient";

const ReservationPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <Empty
        title="Unauthorized"
        subtitle="Please login to see your reservations"
      />
    );
  }

  const reservation = await getReservations({
    authorId: currentUser.id,
  });

  if (reservation.length === 0) {
    return (
      <Empty
        title="No Reservation Found"
        subtitle="Looks like no reservation on your property"
      />
    );
  }

  return (
    <ReservationClient reservation={reservation} currentUser={currentUser} />
  );
};

export default ReservationPage;
