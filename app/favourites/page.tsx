import getCurrentUser from "../actions/getCurrentUser";
import { getFavouriteListings } from "../actions/getFavouriteListings";
import Empty from "../components/Empty";
import FavouritesClient from "./FavouritesClient";

const page = async () => {
  const currentUser = await getCurrentUser();
  const listings: any = await getFavouriteListings();

  if (!currentUser) {
    return <Empty title="Unauthorised" subtitle="Please Login" />;
  }

  if (listings.length === 0) {
    return (
      <Empty
        title="No favourites"
        subtitle="Looks like you havent added any favourites"
      />
    );
  }

  return <FavouritesClient listings={listings} currentUser={currentUser} />;
};

export default page;
