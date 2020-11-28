import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sayDecreaseQty, sayIncreaseQty } from "../redux/productItemReducer";

let ProductItem = () => {
  let dispatch = useDispatch();
  let productInfo = useSelector((state) => {
    return state.productItemReducer;
  });

  let incrQty = () => {
    dispatch(sayIncreaseQty());
  };

  let decrQty = () => {
    dispatch(sayDecreaseQty());
  };

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-secondary text-white">
                <p className="h3">Cart ProductItem</p>
              </div>
              <div className="card-body">
                <table className="table table-hover text-center table-striped table-light">
                  <thead className="bg-dark text-white">
                    <tr>
                      <th>SNO</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{productInfo.SNO}</td>
                      <td>
                        <img
                          src={productInfo.IMAGE}
                          alt=""
                          width="50"
                          height="50"
                        />
                      </td>
                      <td>{productInfo.NAME}</td>
                      <td>&#8377; {productInfo.PRICE}</td>
                      <td>
                        <i
                          className="fa fa-minus-circle mx-1"
                          onClick={decrQty}
                        />
                        {productInfo.QTY}
                        <i
                          className="fa fa-plus-circle mx-1"
                          onClick={incrQty}
                        />
                      </td>
                      <td>{productInfo.QTY * productInfo.PRICE}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductItem;
