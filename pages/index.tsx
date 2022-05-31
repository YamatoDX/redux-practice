import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addProfile, deleteProfile } from "@/redux/slices/profileSlice";
import { addProduct, deleteProduct } from "@/redux/slices/productSlice";
import { v4 } from "uuid";

export default function Home() {
  const dispatch = useDispatch();
  const profiles = useSelector(
    (state: RootState) => state.storeProfiles.profiles
  );
  const products = useSelector(
    (state: RootState) => state.storeProducts.products
  );
  return (
    <div className="grid grid-cols-2 gap-2 text-red-500">
      <div className="col-span-1 flex flex-col justify-center items-center">
        {products.length !== 0
          ? products.map((eachProduct) => {
              return (
                <div key={eachProduct.id}>
                  <p>{eachProduct.name}</p>
                  <p>{eachProduct.origin}</p>
                  <p>{eachProduct.price}$</p>
                  <p>{eachProduct.expiryDate} Date</p>
                </div>
              );
            })
          : "No Products available"}
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center">
        {profiles.length !== 0
          ? profiles?.map((eachProfile) => {
              return (
                <div key={eachProfile.id}>
                  <p>{eachProfile.name}</p>
                  <p>{eachProfile.age}</p>
                  <p>{eachProfile.country}$</p>
                  <p>{eachProfile.profession} Date</p>
                </div>
              );
            })
          : "No Profiles available"}
      </div>
    </div>
  );
}
