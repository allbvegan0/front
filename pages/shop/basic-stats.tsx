import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { toast } from "react-toastify";
import { data } from "../../components/organism/feed/products/data";
import { AppState } from "../../redux/store";

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}
const TaskStatus = () => {
  return <h2>"Pending get data for task" "create 2 users Caller Callee"</h2>;
};

function BasicStatistics(props:Props) {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        What is allb-Mall selling?
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={"We have"} stat={`${data.length} submitted products`} />
        <StatsCard title={`${"piccolo"} can showcase`} stat={`${10} Products`} />
        <StatsCard title={"Add"} stat={"Formula"} />
        <StatsCard
          title={"preview"}
          stat={"iProducts"}
        />
        <StatsCard
          title={"release"}
          stat={"any two"}
        />
        // TaskCard // TaskStatus //TaskList //Todo //The first circle //
        FaFacebook // fooGitHub // <TaskStatus></TaskStatus> // in issue tab
      </SimpleGrid>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        How is your shop doing?
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={"You called"} stat={`${"50,000"} people devices`} />
        <StatsCard title={"Social Profile's Attached"} stat={`"FB","YT"`} />
        <StatsCard title={"Promot Yourself"} stat={"Talk about your products"} />
        <StatsCard title={"Revenue?"} stat={`$ale ${999} units_$old ${2} `} />
        // TaskCard // TaskStatus //TaskList //Todo //The first circle //
        FaFacebook // fooGitHub // <TaskStatus></TaskStatus> // in issue tab
      </SimpleGrid>
    </Box>
  );
}





const mapDispatch = {

};

const mapState = (state: AppState) => ({

  me: state.auth.auth.data,
  user: state.user.user.data,
  addresses: state.address.Addresses.data,

});

const connector = connect(mapState, mapDispatch);
type PropFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropFromRedux {
  shopStatus: string
  shopOwnerType: string
  subscriptionType: string
  LabStatus: string
  allotedSpace:number
  usedSpace:number
  formulas:[]
  Testers_Record:[]
  Released_Products:[]
  SalesRecord: []
  Customers_Record: []
}


export default  connector(BasicStatistics)