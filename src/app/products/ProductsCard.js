"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/features/products/ProductsSlice";

const ProductsCard = () => {
  const products = useSelector((state) => state.products || []);
  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      {products.data.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsCard;
