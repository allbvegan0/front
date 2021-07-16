// compare tags of material onn chakra
// console.log('')
// create css for this.
// ask what you need.
// help limiting _reducer
// help evolution -darwin

import { Breadcrumb } from "@chakra-ui/breadcrumb";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
// import { FaRoute } from "react-icons/fa";
import { Card } from "../../components/molecules/decorative/card";
import MCard from "../../components/molecules/decorative/m_card";

const MaterialView = () => {
  return (
    <>
      <h2></h2>
    </>
  );
};
const DetectView = () => {
  // create switch for reserved commands
  return <>{}</>;
};

const UI = () => {
  const r = useRouter();
  console.log(r);
  return (
    <div className="._body" style={{ height: "10vh" }}>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">m</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">tag</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <title>withCredentials</title>
      <Card
        style={{
          height: "150%",
          backgroundColor: "red",
          // padding: "-1px",
        }}
      >
        <input style={{ height: "90%", width: "90%" }} type="text" />
        {/* <FaRoute fontSize="40px" /> */}
        <label>Structuring route brreadcrumb</label>
        <Breadcrumb>/home/m/tag</Breadcrumb>
      </Card>

      <MCard />
    </div>
  );
};

export default UI;
