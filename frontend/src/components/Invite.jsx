import { useMemo } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Invite = ({
  className = "",
  menuType = "D/Offline",
  homeSquad,
  online,
  friendProfilePic,
  friendProfilePic1,
  inviteGap,
  homeOnlinePadding,
}) => {
  const inviteStyle = useMemo(() => {
    return {
      gap: inviteGap,
    };
  }, [inviteGap]);

  const homeOnlineStyle = useMemo(() => {
    return {
      padding: homeOnlinePadding,
    };
  }, [homeOnlinePadding]);

  return (
    <Box
      className={`w-[3.25rem] h-[19.438rem] flex flex-col items-start justify-start pt-[0.056rem] pb-[0.012rem] pl-[2.062rem] pr-[0.056rem] box-border gap-[2.193rem] ${className}`}
      data-menutype={menuType}
      style={inviteStyle}
    >
      <Box
        className="w-[3.131rem] h-[4.988rem] flex flex-col items-start justify-start gap-[1.175rem]"
        style={homeOnlineStyle}
      >
        <img
          className="w-[0.688rem] h-[0.688rem] relative z-[2] cursor-pointer"
          loading="lazy"
          alt=""
          src={homeSquad} 
        />
        <img
          className="w-[3.069rem] h-[3.125rem] relative object-contain z-[1] cursor-pointer"
          loading="lazy"
          alt=""
          src="/join.svg"
        />
      </Box>
      <Box
        className="w-[3.131rem] h-[4.988rem] flex flex-col items-start justify-start gap-[1.175rem]"
        style={homeOnlineStyle}
      >
        <img
          className="w-[0.688rem] h-[0.688rem] relative z-[2] cursor-pointer"
          loading="lazy"
          alt=""
          src={online}
        />
        <img
          className="w-[3.069rem] h-[3.125rem] relative object-contain z-[1] cursor-pointer"
          loading="lazy"
          alt=""
          src={friendProfilePic}
        />
      </Box>
      <Box
        className="w-[3.131rem] h-[4.988rem] flex flex-col items-start justify-start gap-[1.175rem]"
        style={homeOnlineStyle}
      >
        <img
          className="w-[0.688rem] h-[0.688rem] relative z-[2] cursor-pointer"
          loading="lazy"
          alt=""
          src="/offline.svg"
        />
        <img
          className="w-[3.069rem] h-[3.125rem] relative object-contain z-[1] cursor-pointer"
          loading="lazy"
          alt=""
          src={friendProfilePic1}
        />
      </Box>
    </Box>
  );
};

Invite.propTypes = {
  className: PropTypes.string,
  homeSquad: PropTypes.string,
  online: PropTypes.string,
  friendProfilePic: PropTypes.string,
  friendProfilePic1: PropTypes.string,

  /** Variant props */
  menuType: PropTypes.string,

  /** Style props */
  inviteGap: PropTypes.string,
  homeOnlinePadding: PropTypes.string,
};

export default Invite;
