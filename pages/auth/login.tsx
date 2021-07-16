import { toast } from "react-toastify";
import React from "react";
import { Login } from "../../components/organism/auth/login";
import { Clock } from "../../helpers/Clock";
import { withDevice } from "../../helpers/withAuth";

function LoginScreen() {
  return (
    <>
    <Clock/>
      <Login />
      <div>
        {
          `
          Amazon Web Services uses information from your Amazon.com account to identify you and 
          allow access to Amazon Web Services. Your use of this site is governed by our 
          Terms of Use and Privacy Policy linked below. 
          Your use of Amazon Web Services products and services is governed by the 
          AWS Customer Agreement linked below unless you have entered 
          into a separate agreement with Amazon Web Services or an AWS Value Added Reseller 
          to purchase these products and services. 
          The AWS Customer Agreement was updated on March 31, 2017. 
          For more information about these updates, see Recent Changes.


          https://aws.amazon.com/agreement/recent-changes/

          Customer Agreement - What's Changed
          Changes posted November 30, 2020
          AWS updated the AWS Customer Agreement on November 30, 2020.

          This update addresses that, beginning on December 1, 2020, customers located in South Korea will contract with our South Korea based AWS Contracting Party called Amazon Web Services Korea LLC, a subsidiary of Amazon.com, Inc.

          By continuing to use AWS Services, you agree to the updated terms and conditions in the AWS Customer Agreement.

          `
        }
      </div>
    </>
  );
}
// }

export default withDevice(LoginScreen);
