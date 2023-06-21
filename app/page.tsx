import getCurrentUser from "./actions/getCurrentUser";
import getListing, { ListingsParms } from "./actions/getListing";

import Empty from "./components/Empty";
import ListingsContainer from "./components/listings/ListingsContainer";

interface HomeProps {
  searchParams: ListingsParms;
}

export default async function Home({ searchParams }: HomeProps) {
  const listings = await getListing(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <Empty showReset />;
  }

  return <ListingsContainer currentUser={currentUser} listings={listings} />;
}
