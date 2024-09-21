import React, { useState } from "react";
import {
  FaGreaterThan,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

const CollectionsFilters = () => {
  const [showSortFilter, setShowSortFilter] = useState();
  const [showSizeFilter, setShowSizeFilter] = useState(false);
  const [showFabricFilter, setShowFabricFilter] = useState(false);
  const [showCollectionFilter, setShowCollectionFilter] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="min-w-72">
      <p
        className="py-2 text-xl flex items-center cursor-pointer gap-2 font-bold"
        onClick={() => setShowFilter((prev) => !prev)}
      >
        Filters
        <FaGreaterThan
          className={`${
            showFilter ? "rotate-90" : ""
          } h-3 sm:hidden transition`}
        />
      </p>

      {/* Sort By */}
      <div className={`mb-3 ${showFilter ? "" : "hidden"} sm:block`}>
        <div
          className={`capitalize text-sm font-medium text-whit p-2 ${
            showSortFilter
              ? "bg-white text-primary font-semibold border-2 border-gray-300"
              : "bg-primary text-white"
          }`}
        >
          <div className="flex items-center justify-between">
            Sort By
            <span
              onClick={() => setShowSortFilter((prev) => !prev)}
              className={`text-xs cursor-pointer ${
                showSortFilter ? "text-black" : "text-white"
              }`}
            >
              {showSortFilter ? <FaMinus /> : <FaPlus />}
            </span>
          </div>

          <div>
            {showSortFilter && (
              <div className="flex flex-col gap-2 text-sm font-normal text-gray-700 mt-4">
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"Low-high"}
                  />
                  Relavnet
                </p>
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"Low-high"}
                  />
                  Low to High
                </p>
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"Women"}
                  />
                  high to Low
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Size */}
      <div className={`mb-3 ${showFilter ? "" : "hidden"} sm:block`}>
        <div
          className={`capitalize text-sm font-medium text-whit p-2 ${
            showSizeFilter
              ? "bg-white text-primary font-semibold border-2 border-gray-300"
              : "bg-primary text-white"
          }`}
        >
          <div className="flex items-center justify-between">
            Size
            <span
              onClick={() => setShowSizeFilter((prev) => !prev)}
              className={`text-xs cursor-pointer ${
                showSizeFilter ? "text-black" : "text-white"
              }`}
            >
              {showSizeFilter ? <FaMinus /> : <FaPlus />}
            </span>
          </div>

          <div>
            {showSizeFilter && (
              <div className="flex flex-col gap-2 text-sm font-normal text-gray-700 mt-4">
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"XS"}
                  />
                  X Small
                </p>
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"Small"}
                  />
                  Small
                </p>
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"Medium"}
                  />
                  Medium
                </p>
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"Large"}
                  />
                  Large
                </p>
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"X Large"}
                  />
                  X Large
                </p>
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"2XL"}
                  />
                  2Xl
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Collection */}
      <div className={`mb-3 ${showFilter ? "" : "hidden"} sm:block`}>
        <div
          className={`capitalize text-sm font-medium text-whit p-2 ${
            showCollectionFilter
              ? "bg-white text-primary font-semibold border-2 border-gray-300"
              : "bg-primary text-white"
          }`}
        >
          <div className="flex items-center justify-between">
            Collection
            <span
              onClick={() => setShowCollectionFilter((prev) => !prev)}
              className={`text-xs cursor-pointer ${
                showCollectionFilter ? "text-black" : "text-white"
              }`}
            >
              {showCollectionFilter ? <FaMinus /> : <FaPlus />}
            </span>
          </div>

          <div>
            {showCollectionFilter && (
              <div className="flex flex-col gap-2 text-sm font-normal text-gray-700 mt-4">
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"In Stock"}
                  />
                  In Stock
                </p>
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"Women"}
                  />
                  Out Of Stock
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Fabric */}
      <div className={`mb-3 ${showFilter ? "" : "hidden"} sm:block`}>
        <div
          className={`capitalize text-sm font-medium text-whit p-2 ${
            showFabricFilter
              ? "bg-white text-primary font-semibold border-2 border-gray-300"
              : "bg-primary text-white"
          }`}
        >
          <div className="flex items-center justify-between">
            Fabric
            <span
              onClick={() => setShowFabricFilter((prev) => !prev)}
              className={`text-xs cursor-pointer ${
                showFabricFilter ? "text-black" : "text-white"
              }`}
            >
              {showFabricFilter ? <FaMinus /> : <FaPlus />}
            </span>
          </div>

          <div>
            {showFabricFilter && (
              <div className="flex flex-col gap-2 text-sm font-normal text-gray-700 mt-4">
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"Cotton"}
                  />
                  Cotton
                </p>
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"Linen"}
                  />
                  Linen
                </p>
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"Wool"}
                  />
                  Wool
                </p>
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"Silk"}
                  />
                  Silk
                </p>
                <p className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="w-3 cursor-pointer"
                    value={"Cashmere"}
                  />
                  Cashmere
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsFilters;
