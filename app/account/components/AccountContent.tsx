"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";
import Button from "@/components/Button";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { postData } from "@/libs/helpers";

const AccountContent = () => {
  const router = useRouter();
  const subscribeModal = useSubscribeModal();
  const { isLoading, subscription, user } = useUser();


  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  return ( 
    <div className="mb-7 px-6 flex justify-center flex-col items-center">
      {!subscription && (
        <div className="flex flex-col gap-y-4">
        <p>В настоящее время вы используете бесплатную подписку AudioVibe</p>
        <Button 
          onClick={subscribeModal.onOpen}
          className="w-[300px]"
        >
          Оформить подписку
        </Button>
      </div>
      )}
      {subscription && (
        <div className="flex flex-col gap-y-4">
          <p>В настоящее время вы используете план
            <b> {subscription?.prices?.products?.name} </b> 
          </p>
        </div>
      )}
    </div>
  );
}
 
export default AccountContent;
