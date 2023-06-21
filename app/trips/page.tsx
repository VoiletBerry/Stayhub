import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import Empty from "../components/Empty";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <Empty title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <Empty
        title="No trips found"
        subtitle="Looks like you havent reserved any trips."
      />
    );
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />;
};

export default TripsPage;
