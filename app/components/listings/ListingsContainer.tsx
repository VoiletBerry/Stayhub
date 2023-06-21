" use client";

import { Listing, User } from "@prisma/client";
import ListingCard from "./ListingCard";
import Container from "../Container";

interface ListingsContainerProps {
  listings: Listing[];
  currentUser: User | null;
}

const ListingsContainer: React.FC<ListingsContainerProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((item) => (
          <ListingCard key={item.id} currentUser={currentUser} data={item} />
        ))}
      </div>
    </Container>
  );
};

export default ListingsContainer;
