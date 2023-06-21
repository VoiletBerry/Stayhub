import { NextResponse } from "next/server";
import getCurrentUser from "./getCurrentUser";
import prisma from "@/app/libs/prismadb";

export async function getFavouriteListings() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const favourites = await prisma.listing.findMany({
    where: {
      id: {
        in: [...(currentUser.favouriteIds || null)],
      },
    },
  });

  return favourites;
}
