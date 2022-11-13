import React from "react";
import { Suspense } from "react";
import { lazy } from "react";

// Dynamic import
const Cat = lazy(() => import('../../components/Cat'))

const GeneralApp = () => {

  return (
    <>
      {/* <Suspense fallback="Loading..." >
        <Cat />
      </Suspense> */}
    </>
  );
};

export default GeneralApp;
