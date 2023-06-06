import React from "react";
import Lottie from "lottie-react";
import cutting from "./cutting.json";

export const Cutting = () => <Lottie animationData={cutting} loop={true} style={{height:300, width:300, overflowY: "hidden"}} />;