"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useReantModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useRouter } from "next/navigation";

interface UsermenuProps {
  currentUser?: User | null;
}

const Usermenu: React.FC<UsermenuProps> = ({ currentUser }) => {
  const RegisterModal = useRegisterModal();
  const LoginModal = useLoginModal();
  const RentModal = useRentModal();


  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return LoginModal.onOpen();
    }

    RentModal.onOpen();
  }, [currentUser, LoginModal, RentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-start gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-1 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Stayhub Your Home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-1 border-[1px] border-neutral-100 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => router.push("/trips")}
                  label="My trips"
                />
                <MenuItem
                  onClick={() => router.push("/favourites")}
                  label="My favourites"
                />
                <MenuItem
                  onClick={() => router.push("/reservations")}
                  label="My reservations"
                />
                <MenuItem
                  onClick={() => router.push("/properties")}
                  label="My properties"
                />
                <MenuItem onClick={RentModal.onOpen} label="Stayhub my home" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={LoginModal.onOpen} label="Login" />
                <MenuItem onClick={RegisterModal.onOpen} label="Sign Up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Usermenu;
