import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";

export const Footer = () => {
  return (
    <CDBFooter className="shadow bg-black  " style={{ color: "white" }}>
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-3"
        style={{ width: "100%" }}
      >
        <CDBBox
          display="flex"
          justifyContent="center"
          className="flex-wrap "
          bgColor={"secondery"}
        >
          <CDBBox>
            <a
              href="/"
              className="d-flex align-items-center p-0 text-light text-center"
            >
              <img alt="" src="src\aaa.jpg" width="30px" />
              <div className="text-center ml-3 h5 font-weight-bold w-100">
                Shawshank
              </div>
            </a>
            <p className="my-1 text-center " style={{ width: "500px" }}>
              We are creating High Quality Resources and tools to Aid developers
              during the developement of their projects
            </p>
            <CDBBox
              display="flex"
              className="mt-3 w-100 justify-content-center"
            >
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-2 " bgColor={"dark"}>
          &copy; 2020. All rights reserved.
        </small>
      </CDBBox>
    </CDBFooter>
  );
};
