import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { commonActions } from "../../redux/slices/common";
import { handleCreateDevice } from "../../redux/thunk/device";

const Orgasm = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    let mount = true;
    if (mount) {
      dispatch(handleCreateDevice({}));
    }
    return () => {
      mount = false;
    };
  }, [props, dispatch, handleCreateDevice]);

  return (
    <>
      <h4>Organic Device Detected</h4>
    </>
  );
};

export default Orgasm;
