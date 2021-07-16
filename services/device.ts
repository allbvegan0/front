import { QueryParams } from "../redux/shared";
import ConnectionInstance from "./connection-instance";
import axios from "axios";
import { baseUrl, setHeader } from "./setHeader";

export const getDevice = (params?: QueryParams) =>
  ConnectionInstance.get("device", { params });

export const setDevice = (params?: QueryParams) =>
  ConnectionInstance.post("device", { params });

export const createDevice = async (
  os_type: string,
  os_arch: string,
  cpu_type: string,
  hostname: string
) => {
  console.log("in service===>", os_arch);
  return await axios
    .post(
      baseUrl,
      {
        query: `
  mutation deviceDetect(
    $os_type: String!
    $os_arch: String!
    $hostname: String!
    $cpu_type: String!
  ) {
    createDevice(
      os_type: $os_type
      os_arch: $os_arch
      cpu_type: $cpu_type
      hostname: $hostname
    ) {
      device_id
      id
      DeviceStatus
    }
  }
`,
        variables: {
          os_arch: os_arch,
          os_type: os_type,
          cpu_type: cpu_type,
          hostname: hostname,
        },
      },
      {
        headers: await setHeader(),
      }
    )
    .then((data) => {
      console.log(data);
      return data.data.data.createDevice;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getDeviceDetails = async (_id: number) => {
  console.log("Start device update", _id);
  return await axios
    .post(
      baseUrl,
      {
        query: `
      mutation deviceUpdate($_id: Int!) {
        updateDevice(_id: $_id) {
          device_id
          DeviceStatus
          created_at
          updated_at
        }
      }
    `,
        variables: { _id: _id },
      },
      {
        headers: await setHeader(),
      }
    )
    .then((data) => {
      console.log(data.data.data.updateDevice);
      return data.data.data.updateDevice;
    })
    .catch((error) => {
      console.log(error);
    });
};
