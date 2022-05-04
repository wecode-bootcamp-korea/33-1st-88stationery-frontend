import React, { useEffect, useState } from "react";
import "./OrderItems.scss";

const Productlist = ({ orderLists }) => {
  return (
    <ul className="OrderedItemUl">
      {orderLists.map(e => {
        return (
          <li key={e.order_id} className="orderedListLi">
            <span className="orderedListOrder">{e.id}</span>
            <div className="orderedProductBox">
              <img src={e.product_image_1} />
              <div className="orderedListProductText">
                <p>{e.product}</p>
              </div>
            </div>
            <div className="orderedListInfoBox">
              <div className="orderedCount">{e.quantity}개</div>
            </div>
            <div className="orderedSumPrice">
              {(e.quantity * e.price).toLocaleString("ko-KR")}원
            </div>
            <div className="orderedStatus">{e.status}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Productlist;

// 배송준비 배송중 배송완료
