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
    <Redirect to="plugins/content-manager/collectionType/application::answer.answer" />
  );
};

export default memo(HomePage);
