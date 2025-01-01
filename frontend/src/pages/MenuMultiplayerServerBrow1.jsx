import { Box, Typography } from "@mui/material";
import Invite from "../components/Invite";
import { Link } from "react-router-dom";

const MenuMultiplayerServerBrow1 = () => {
  return (
    <Box className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start pt-[2.268rem] px-[0.187rem] pb-[1.393rem] box-border gap-[19.381rem] leading-[normal] tracking-[normal] mq900:gap-[2.438rem] mq1350:gap-[4.875rem] mq450:gap-[9.688rem] mq1800:flex-wrap">
      <Box className="h-full w-full absolute !m-[0] bottom-[6.75rem] left-[0rem] z-[1] flex items-center justify-center">
        <img
          className="h-full w-full z-[0] object-cover fixed left-[0] top-[0]"
          alt=""
          src="/menu__background.svg"
        />
      </Box>
      <main className="w-[94.119rem] flex flex-col items-start justify-start gap-[5.412rem] max-w-full text-left text-[1.188rem] text-white font-rajdhani mq900:gap-[1.375rem] mq1350:gap-[2.688rem]">
        <header className="w-[38.263rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.5rem] text-gray-300 font-rajdhani">
          <Box className="flex flex-col items-start justify-start max-w-full">
            <Box className="flex flex-row items-end justify-start gap-[1.612rem] max-w-full">
              <Box className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0rem]">
                <Link to="/menu multiplayer/server browser/server info">
                  <img
                    className="w-[0.45rem] h-[0.981rem] relative z-[2] cursor-pointer"
                    loading="lazy"
                    alt=""
                    src="/back.svg"
                  />
                </Link>
              </Box>
              <Box className="flex flex-row items-start justify-start gap-[0.687rem] max-w-full">
                <Box className="flex flex-col items-start justify-start pt-[0.293rem] pb-[0rem] pl-[0rem] pr-[0.125rem] text-[1.125rem] text-white">
                  <a className="[text-decoration:none] relative tracking-[0.06em] uppercase font-semibold text-[inherit] z-[3]">
                    multiplayer
                  </a>
                </Box>
                <Box className="flex flex-row items-start justify-start relative">
                  <Box className="h-[69.581rem] w-[122.031rem] absolute !m-[0] right-[-101.925rem] bottom-[-64.519rem] bg-gray-500 z-[1]" />
                  <Box className="relative tracking-[0.06em] uppercase font-medium z-[2]">
                    /
                  </Box>
                </Box>
                <Box className="flex flex-col items-start justify-start pt-[0.293rem] pb-[0rem] pl-[0rem] pr-[0.125rem] text-[1.125rem] text-white">
                  <a className="[text-decoration:none] relative tracking-[0.06em] uppercase font-semibold text-[inherit] z-[2]">
                    server browser
                  </a>
                </Box>
                <Box className="relative tracking-[0.06em] uppercase font-medium inline-block min-w-[0.813rem] z-[2]">
                  /
                </Box>
              </Box>
            </Box>
            <Typography
              className="m-0 relative uppercase text-white z-[2] mt-[-0.313rem]"
              variant="inherit"
              component="h1"
              sx={{
                fontWeight: "600",
                fontSize: "2.875rem",
                letterSpacing: "0.03em",
              }}
            >
              server info
            </Typography>
          </Box>
          <Box className="flex flex-col absolute top-[0rem] right-[3rem] z-[2] items-center justify-center pt-[1.412rem] px-[0rem] pb-[0rem]">
            <Invite
              menuType="DOff + On"
              homeSquad="/squad.svg"
              online="/online.svg"
              friendProfilePic="/friend profile pic.svg"
              friendProfilePic1="/friend profile pic 1.svg"
            />
          </Box>
        </header>
        <Box className="self-stretch flex flex-row items-start justify-center gap-[0rem] max-w-full mq450:flex-wrap">
          <Box className="flex flex-col items-start justify-start gap-[15.337rem]">
            <Box className="flex flex-col items-end justify-start py-[0rem] pl-[0rem] pr-[1.25rem] gap-[1.012rem]">
              <img
                className="w-[2.5rem] h-[3rem] relative object-cover z-[2] cursor-pointer"
                loading="lazy"
                alt=""
                src="/side-menu__game.svg"
              />
              <img
                className="w-[2.5rem] h-[3rem] relative object-cover z-[2] cursor-pointer"
                alt=""
                src="/side-menu__game_1.svg"
              />
              <Box className="absolute h-[50px] w-[50px] top-[34%] right-[94.84%] bottom-[0%] left-[-3%] border-orange border-r-[3px] border-solid box-border z-[2]" />
              <img
                className="w-[2.5rem] h-[3rem] relative object-cover z-[2] cursor-pointer"
                alt=""
                src="/side-menu__game_2.svg"
              />
              <Box className="flex flex-col items-end justify-start py-[0rem] pl-[1.125rem] pr-[0rem] gap-[1.25rem]">
                <img
                  className="w-[2.5rem] h-[3rem] relative object-cover z-[2] cursor-pointer"
                  alt=""
                  src="/side-menu__game_3.svg"
                />
                <Box className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.493rem]">
                  <img
                    className="h-[2.5rem] w-[2.5rem] relative object-cover z-[2] cursor-pointer"
                    alt=""
                    src="/side-menu__career.svg"
                  />
                </Box>
                <Box className="flex flex-row items-start justify-end pt-[0rem] pb-[0.725rem] pl-[0.25rem] pr-[0.187rem]">
                  <img
                    className="h-[2.019rem] w-[2.019rem] relative z-[2] cursor-pointer"
                    alt=""
                    src="/side-menu.svg"
                  />
                </Box>
                <Box className="flex flex-row items-start justify-end py-[0rem] px-[0.25rem] cursor-pointer">
                  <Box className="h-[1.994rem] w-[2rem] relative z-[2]">
                    <Box className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] opacity-[0.5]">
                      <Box className="absolute h-[50.16%] w-full top-[0%] right-[0%] bottom-[49.84%] left-[0%] bg-white" />
                      <Box className="absolute h-[12.54%] w-full top-[62.38%] right-[0%] bottom-[25.08%] left-[0%] bg-white" />
                      <Box className="absolute h-[12.54%] w-full top-[87.46%] right-[0%] bottom-[0%] left-[0%] bg-white" />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[1.875rem] pr-[0rem]">
              <Box className="flex-1 flex flex-col items-start justify-start gap-[1.593rem]">
                <Box className="w-[5.663rem] h-[1.375rem] flex flex-row items-start justify-start py-[0.187rem] px-[0rem] box-border text-center text-[1rem] text-white">
                  <img
                    className="h-[1rem] w-[1rem] absolute z-[2] cursor-pointer"
                    loading="lazy"
                    alt=""
                    src="/side-menu__help.svg"
                  />
                </Box>
                <img
                  className="h-[1rem] w-[1rem] absolute z-[2] cursor-pointer mt-10"
                  loading="lazy"
                  alt=""
                  src="/side-menu__quit.svg"
                />
              </Box>
            </Box>
          </Box>
          <Box className="flex-1 flex flex-col items-start justify-start pt-[0rem] pb-[0rem] pl-[0rem] pr-[0rem] box-border min-w-[14.125rem] max-w-full text-[1.125rem]">
            <Box className="relative tracking-[0.07em] uppercase font-semibold inline-block min-w-[7.813rem] shrink-0 z-[2] pb-2">
              map rotation
            </Box>
            <Box className="self-stretch flex flex-col items-start justify-start gap-[1.612rem] max-w-full">
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w_4.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      dawnbreaker
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w_5.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      siege of shanghai
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w_4.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      dawnbreaker
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w_5.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      siege of shanghai
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="flex-1 flex flex-col items-start justify-start pt-[0rem] pb-[0rem] pl-[0rem] pr-[0rem] box-border min-w-[14.125rem] max-w-full mq900:pt-[1.563rem] mq900:box-border mq1350:pt-[2.438rem] mq1350:box-border">
            <Box className="relative tracking-[0.07em] uppercase font-semibold inline-block min-w-[7.813rem] shrink-0 z-[2] pb-2">
              &nbsp;
            </Box>
            <Box className="self-stretch flex flex-col items-start justify-start gap-[1.612rem]">
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w_2.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      propaganda
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w_6.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      golmud railway
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w_2.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      propaganda
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w_6.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      golmud railway
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="flex-1 flex flex-col items-start justify-start pt-[0rem] pb-[0rem] pl-[0rem] pr-[0rem] box-border min-w-[14.125rem] max-w-full mq900:pt-[1.563rem] mq900:box-border mq1350:pt-[2.438rem] mq1350:box-border">
            <Box className="relative tracking-[0.07em] uppercase font-semibold inline-block min-w-[7.813rem] shrink-0 z-[2] pb-2">
              &nbsp;
            </Box>
            <Box className="self-stretch flex flex-col items-start justify-start gap-[1.612rem]">
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w_1.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      operation locker
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400 z-[1]" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w_2.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      propaganda
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w_1.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      operation locker
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400 z-[1]" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w_2.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      propaganda
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="flex-1 flex flex-col items-start justify-start pt-[0rem] pb-[0rem] pl-[0rem] pr-[0rem] box-border min-w-[14.125rem] max-w-full mq900:pt-[1.563rem] mq900:box-border mq1350:pt-[2.438rem] mq1350:box-border">
            <Box className="relative tracking-[0.07em] uppercase font-semibold inline-block min-w-[7.813rem] shrink-0 z-[2] pb-2">
              &nbsp;
            </Box>
            <Box className="self-stretch flex-1 flex flex-col items-start justify-start gap-[1.612rem]">
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      lancang dam
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w_5.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      siege of shanghai
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      lancang dam
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] relative gap-[1.35rem] z-[2] cursor-pointer">
                <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                <img
                  style={{ width: "75%" }}
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  alt=""
                  src="/browser__SI-next-image-w_5.svg"
                />
                <Box className="w-[19.069rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                  <Box className="flex-1 flex flex-col items-start justify-start">
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      conquest large
                    </Typography>
                    <Typography
                      className="self-stretch relative uppercase z-[1]"
                      variant="inherit"
                      component="b"
                      sx={{
                        lineHeight: "1.375rem",
                        letterSpacing: "0.04em",
                        fontWeight: "700",
                      }}
                    >
                      siege of shanghai
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
      <Box className="h-[calc(100%_+_1px)] w-[0.063rem] absolute !m-[0] top-[0rem] bottom-[-0.062rem] left-[5.475rem] border-gray-100 border-r-[1px] border-solid box-border z-[2]" />
    </Box>
  );
};

export default MenuMultiplayerServerBrow1;
