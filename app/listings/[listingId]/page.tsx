import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservations from "@/app/actions/getReservations";
import Empty from "@/app/components/Empty";
import ListingClient from "@/app/components/listings/ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  const reservations = await getReservations(params);

  if (!listing) return <Empty />;

  return <ListingClient listing={listing} currentUser={currentUser} reservations={reservations}/>;
};

export default ListingPage;
