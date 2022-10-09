import { useNavigate } from "react-router-dom";

export const useVidgets = () => {
  const navigate = useNavigate();

  return {
    navigate,
  };
};
