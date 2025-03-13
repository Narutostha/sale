import React from "react";
import Header from "@/components/layout/Header";
import FlashSaleSection from "@/components/products/FlashSaleSection";
import PromotionsSection from "@/components/products/PromotionsSection";
import { flashSaleProducts } from "@/data/products";
import { promotions } from "@/data/promotions";

const Index: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800&family=Sen:wght@700&family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        <main>
          <div className="px-[100px] py-10 max-md:px-8 max-sm:px-4">
            <FlashSaleSection products={flashSaleProducts} />
            <PromotionsSection promotions={promotions} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
