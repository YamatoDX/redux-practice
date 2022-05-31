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
        <button
          onClick={() => {
            const newProductObject = {
              id: parseInt(Math.random().toString()),
              name: v4().slice(0, 10),
              origin: v4().slice(0, 10),
              expiryDate: parseInt(Math.random().toString()),
              price: parseInt(Math.random().toString()),
            };
            dispatch(addProduct(newProductObject));
          }}
        >
          Click to add Product
        </button>
        {products.length !== 0
          ? products.map((eachProduct) => {
              return (
                <div key={v4()}>
                  <p>{eachProduct.name}</p>
                  <p>{eachProduct.origin}</p>
                  <p>{eachProduct.price}$</p>
                  <p>{eachProduct.expiryDate} Date</p>
                  <button
                    onClick={() => dispatch(deleteProduct(eachProduct.id))}
                  >
                    Delete
                  </button>
                </div>
              );
            })
          : "No Products available"}
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center">
        <button
          onClick={() => {
            const newProfileObject = {
              id: parseInt(Math.random().toString()),
              name: v4().slice(0, 10),
              age: parseInt(Math.random().toString()),
              profession: v4().slice(0, 10),
              country: v4().slice(0, 10),
            };
            dispatch(addProfile(newProfileObject));
          }}
        >
          Click to add Profile
        </button>
        {profiles.length !== 0
          ? profiles?.map((eachProfile) => {
              return (
                <div key={v4()}>
                  <p>{eachProfile.name}</p>
                  <p>{eachProfile.age}</p>
                  <p>{eachProfile.country}$</p>
                  <p>{eachProfile.profession} Date</p>
                  <button
                    onClick={() => dispatch(deleteProfile(eachProfile.id))}
                  >
                    Delete
                  </button>
                </div>
              );
            })
          : "No Profiles available"}
      </div>
    </div>
  );
}
