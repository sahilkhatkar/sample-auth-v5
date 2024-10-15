"use client";

import React, { useState } from "react";
import myStyle from "./page.module.css";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function Orders({ params }) {
  console.log(params.order)
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <>
      <div>
        <div className={myStyle.orderContainer}>
          <div className={myStyle.header}>
            <button className={myStyle.backBtn} onClick={router.back}>
              <IoIosArrowBack />
              Back
            </button>
            <div>
              <h1>Order Summary</h1>
            </div>
          </div>

          <div className={myStyle.summaryContainer}>
            <div className={myStyle.summaryDetails}>
              <div className={myStyle.completedStep}>
                <div>
                  <span>Order initiated</span>
                  <span>26/07/2024 18:03:01</span>
                </div>
                <div>
                  <span>Remarks</span>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magnam assumenda inventore ad omnis accusantium ea
                    dignissimos quo illo
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <span>Performa Invoice</span>
                  <span>26/07/2024 18:03:01</span>
                </div>
                <div>
                  <span>
                    PI
                    <Link
                      href="https://drive.google.com/open?id=1QVgfaxlCEzGhs8PKgpuNlH0bCl1zlWap"
                      target="_blank"
                    >
                      download
                      {/* <LiaDownloadSolid /> */}
                    </Link>
                  </span>
                  <span>PI#123456</span>
                </div>
                <div>
                  <span>Freight</span>
                  <span>Anjani Courier: 8060</span>
                </div>
              </div>
              <div>
                <div>
                  <span>Accounts Approval</span>
                  <span>26/07/2024 18:03:01</span>
                </div>
                {/* <div>
                  <span>Remarks</span>
                  <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magnam assumenda inventore ad omnis accusantium ea
                    dignissimos quo illo
                  </span>
                </div> */}
              </div>
              <div>
                <div>
                  <span>Inovice</span>
                  <span>26/07/2024 18:03:01</span>
                </div>
                <div>
                  <span>
                    Invoice
                    <Link
                      href="https://drive.google.com/open?id=1QVgfaxlCEzGhs8PKgpuNlH0bCl1zlWap"
                      target="_blank"
                    >
                      download
                    </Link>
                  </span>
                  <span>SLPL/450/24-25</span>
                </div>
              </div>
              <div>
                <div>
                  <span>Goods dispatched</span>
                  <span>26/07/2024 18:03:01</span>
                </div>
                <div>
                  <span>Docket</span>
                  <span>LJFQPO349983098</span>
                </div>
              </div>
              <div>
                <div>
                  <span>Delivered</span>
                  <span>26/07/2024 18:03:01</span>
                </div>
              </div>
            </div>

            <div className={myStyle.orderDetailsContainer}>
              <div className="status">
                <span>Completed</span>
                <span>26/07/2024 18:03:01</span>
              </div>
              <div>
                <h2>Skymap Pharmaceuticals</h2>
                <h2>POR-999</h2>
              </div>
              <div className="orderDetails">
                <div>
                  <span>Job</span>
                  <span>Feropal-300ml Syp 3 PLY Metallic</span>
                </div>
                <div>
                  <span>Dimension</span>
                  <span>66 x 66 x 187</span>
                </div>
                <div>
                  <span>Qty</span>
                  <span>10000</span>
                </div>
                <div>
                  <span>Rate</span>
                  <span>@1500</span>
                </div>
                <div>
                  <span>Delivery mode</span>
                  <span>Freight Add</span>
                </div>
                <div>
                  <span>Payment terms</span>
                  <span>50% ADVANCE & 50% BEFORE DISPATCH</span>
                </div>
                <div>
                  <span>Warranty</span>
                  <span>NA</span>
                </div>
                <div>
                  <span>PI</span>
                  <span>NA</span>
                </div>
                <div>
                  <span>Warranty</span>
                  <span>NA</span>
                </div>
              </div>
              <div>
                <span>Remarks :</span>
                <span>Send at Karol bagh Need give in Kapil sir car</span>
              </div>
              <div className={myStyle.companyDetails}>
                <div>
                  <span>Sales Person</span>
                  <span>Kapil Arora</span>
                </div>
                <div>
                  <span>GST</span>
                  <span>07AAFCL0763P1Z3</span>
                </div>
                <div>
                  <span>Contact</span>
                  <span>9876543210</span>
                </div>
                <div>
                  <span>E-mail</span>
                  <span>likraft@gmail.com</span>
                </div>
                <div>
                  <span>Billing Address</span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, voluptates aliquid?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
