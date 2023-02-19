import Link from "next/link";
import React from "react";
import Button from "./Button";

function PageNotFound() {
  return (
    <>
      <div className="flex items-center justify-center pt-28">
        <div className="">
          <div className="text-center">
            <h1 className="text-3xl">404 Page Not Found!</h1>
            <p>Oops! Seems like we are lost.</p>
          </div>
          <div className="flex items-center justify-center my-5">
            <img src="/images/404page.svg" width={200} alt="" />
          </div>
          <div className="text-center">
            <Button className={"bg-secondary-one-base text-white py-2"}>
              <Link href="/">
                <a>Go To Homepage</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
