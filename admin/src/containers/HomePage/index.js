/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo } from "react";
import { Redirect } from "react-router-dom";


const HomePage = ({ global: { plugins }, history: { push } }) => {
  return (
    <Redirect to="/" />
  );
};

export default memo(HomePage);
