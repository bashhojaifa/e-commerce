import React, { useState } from "react";
import Breadcrumbs from "../../../components/pageProps/Breadcrumbs.jsx";
import Pagination from "../../../components/pageProps/shopPage/Pagination";

const Products = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      <div className="w-full h-full  ">
        <div className="w-full h-full flex flex-col gap-10">
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </div>
  );
};

export default Products;
