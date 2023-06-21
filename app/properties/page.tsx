import getCurrentUser from "../actions/getCurrentUser";
import getListing from "../actions/getListing";
import Empty from "../components/Empty";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <Empty title="Unauthorized" subtitle="Please login" />;
  }

  const listings = await getListing({ userId: currentUser.id });

  if (listings === null || listings.length === 0) {
    return (
      <Empty
        title="No properties found"
        subtitle="Looks like you have no properties."
      />
    );
  }

  return <PropertiesClient listings={listings} currentUser={currentUser} />;
};

export default PropertiesPage;
