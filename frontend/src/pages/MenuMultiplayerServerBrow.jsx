import { Box, Typography, Button } from "@mui/material";
import Invite from "../components/Invite";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MenuMultiplayerServerBrow = () => {
  const [battlefield, setBattlefield] = useState({
    players: "",
    ping: "",
    tickrate: "",
  });

  useEffect(() => {
    const fetchBattlefield = async () => {
      try {
        const response = await fetch("https://my-node-backend-4wu1.onrender.com/api/battlefield");
        const data = await response.json();
        setBattlefield(data);
      } catch (err) {
        console.error("Error fetching settings:", err);
      }
    };

    fetchBattlefield();
  }, []);

  const [settings, setSettings] = useState({
    region: "",
    punkbuster: "",
    fairfight: "",
    password: "",
    preset: "",
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(
          "https://my-node-backend-4wu1.onrender.com/api/battlefield-settings"
        );
        const data = await response.json();
        setSettings(data);
      } catch (err) {
        console.error("Error fetching settings:", err);
      }
    };

    fetchSettings();
  }, []);

  const [advanced, setAdvanced] = useState({
    minimap: "",
    "only squad leader spawn": "",
    vehicles: "",
    "team balance": "",
    "minimap spotting": "",
    hud: "",
    "3p vehicle cam": "",
    "regenerative health": "",
    "kill cam": "",
    "friendly fire": "",
    "3d spotting": "",
    "enemy name tags": "",
  });

  useEffect(() => {
    const fetchAdvanced = async () => {
      try {
        const response = await fetch(
          "https://my-node-backend-4wu1.onrender.com/api/battlefield-advanced"
        );
        const data = await response.json();
        setAdvanced(data);
      } catch (err) {
        console.error("Error fetching settings:", err);
      }
    };

    fetchAdvanced();
  }, []);

  const [rules, setRules] = useState({
    tickets: "",
    "vehicle spawn delay": "",
    "bullet damage": "",
    "kick after team kills": "",
    "player health": "",
    "player respawn time": "",
    "kick after idle": "",
    "ban after kicks": "",
  });

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const response = await fetch(
          "https://my-node-backend-4wu1.onrender.com/api/battlefield-rules"
        );
        const data = await response.json();
        setRules(data);
      } catch (err) {
        console.error("Error fetching settings:", err);
      }
    };

    fetchRules();
  }, []);

  return (
    <Box className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start pt-[2.268rem] px-[0.187rem] pb-[0rem] box-border gap-[19.35rem] leading-[normal] tracking-[normal] text-left text-[1.125rem] text-white font-rajdhani mq900:gap-[4.813rem] mq1350:gap-[9.688rem] mq450:gap-[2.438rem] mq1800:flex-wrap">
      <Box className="h-full w-full absolute !m-[0] bottom-[6.75rem] left-[0rem] z-[1] flex items-center justify-center">
        <img
          className="h-full w-full z-[0] object-cover fixed left-[0] top-[0]"
          alt=""
          src="/menu__background.svg"
        />
      </Box>
      <Box className="h-[calc(100%_+_1px)] w-[0.063rem] absolute !m-[0] top-[0rem] bottom-[-0.062rem] left-[5.475rem] border-gray-100 border-r-[1px] border-solid box-border z-[2]" />
      <Box className="h-[65.231rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[59.918rem] box-border gap-[5rem] max-w-full mq900:gap-[2.5rem] mq900:pb-[25.313rem] mq900:box-border mq1350:h-auto mq1350:pb-[38.938rem] mq1350:box-border mq450:gap-[1.25rem] mq450:pb-[16.438rem] mq450:box-border">
        <header className="w-[38.263rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.5rem] text-gray-300 font-rajdhani">
          <Box className="flex flex-col items-start justify-start shrink-0 max-w-full">
            <Box className="flex flex-row items-end justify-start gap-[1.612rem] max-w-full">
              <Box className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.406rem]">
                <img
                  className="w-[0.45rem] h-[0.981rem] relative z-[2] cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/back.svg"
                />
              </Box>
              <Box className="flex flex-row items-start justify-start gap-[0.687rem] max-w-full">
                <Box className="flex flex-col items-start justify-start pt-[0.293rem] pb-[0rem] pl-[0rem] pr-[0.125rem] text-[1.125rem] text-white">
                  <a className="[text-decoration:none] relative tracking-[0.06em] uppercase font-semibold text-[inherit] z-[3]">
                    multiplayer
                  </a>
                </Box>
                <Typography
                  className="m-0 relative uppercase z-[3]"
                  variant="inherit"
                  component="h3"
                  sx={{ fontWeight: "500", letterSpacing: "0.06em" }}
                >
                  /
                </Typography>
                <Box className="flex flex-col items-start justify-start pt-[0.293rem] pb-[0rem] pl-[0rem] pr-[0.125rem] text-[1.125rem] text-white">
                  <a className="[text-decoration:none] relative tracking-[0.06em] uppercase font-semibold text-[inherit] z-[3]">
                    server browser
                  </a>
                </Box>
                <Typography
                  className="m-0 relative uppercase inline-block min-w-[0.813rem] z-[2]"
                  variant="inherit"
                  component="h3"
                  sx={{ fontWeight: "500", letterSpacing: "0.06em" }}
                >
                  /
                </Typography>
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
          <Box className="flex flex-col absolute top-[0rem] right-[3rem] z-[3] items-center justify-center pt-[1.412rem] px-[0rem] pb-[0rem]">
            <Invite
              menuType="DOff + On"
              homeSquad="/squad.svg"
              online="/online.svg"
              friendProfilePic="/friend profile pic.svg"
              friendProfilePic1="/friend profile pic 1.svg"
            />
          </Box>
        </header>
        <Box className="self-stretch flex flex-row items-start justify-start gap-[0.337rem] shrink-0 max-w-full">
          <Box className="flex flex-col items-start justify-start pt-[0.412rem] px-[0rem] pb-[0rem] mq900:hidden">
            <Box className="self-stretch flex flex-col items-start justify-start gap-[22.337rem]">
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
                <Box className="absolute h-[50px] w-[50px] top-[31%] right-[94.84%] bottom-[0%] left-[-3%] border-orange border-r-[3px] border-solid box-border z-[2]" />
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
          </Box>
          <Box className="flex-1 flex flex-col items-start justify-start gap-[0.981rem] max-w-[calc(100%_-_126px)] mq900:max-w-full">
            <Typography
              className="m-0 relative inline-block max-w-full z-[2] mq900:text-[1.813rem] mq450:text-[1.375rem]"
              variant="inherit"
              component="h1"
              sx={{
                fontWeight: "600",
                fontSize: "2.25rem",
                letterSpacing: "0.06em",
              }}
            >
              #1| NASA | Noobs Welcome | Conquest 40Hz
            </Typography>
            <Box className="flex flex-col items-start justify-start pt-[0rem] pb-[1.112rem] pl-[0rem] pr-[1.25rem] box-border gap-[0.812rem] max-w-full text-gray-300">
              <Box className="flex flex-row items-start justify-start py-[0rem] pl-[1.5rem] pr-[1.437rem] box-border max-w-full shrink-0">
                <Box className="relative tracking-[0.06em] uppercase font-semibold z-[2]">
                  conquest large - siege of shanghai - normal - 40 hz
                </Box>
              </Box>
              <Box className="relative tracking-[0.03em] font-semibold z-[2]">
                <Typography className="m-0" variant="inherit">
                  Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
                  Request, Appeal, Visit us: www.epg.gg | Discord
                </Typography>
                <Typography className="m-0" variant="inherit">
                  https://discord.gg/3r5NK4d
                </Typography>
              </Box>
            </Box>
            <Box className="flex flex-row items-start justify-start pt-[0rem] pb-[1.343rem] pl-[0rem] pr-[1.25rem] box-border gap-[0.5rem] max-w-full mq1350:flex-wrap">
              <Box className="flex flex-col items-end justify-start gap-[1.706rem] max-w-full mq1350:flex-1">
                <Button
                  className="w-[20.25rem] h-[3.5rem] z-[2]"
                  disableElevation
                  variant="outlined"
                  sx={{
                    color: "#fff",
                    fontSize: "18",
                    borderColor: "#fff",
                    borderRadius: "0px 0px 0px 0px",
                    "&:hover": { borderColor: "#fff" },
                    width: 324,
                    height: 56,
                  }}
                >
                  join
                </Button>
                <Box className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[0rem] pr-[0.062rem] box-border max-w-full">
                  <Box className="flex-1 flex flex-col items-start justify-start gap-[0.55rem] max-w-full">
                    <Box className="w-[18.069rem] flex flex-row items-start justify-between gap-[1.25rem]">
                      <Box className="h-[6.381rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.068rem] box-border gap-[1.568rem]">
                        <Box className="flex flex-col items-start justify-start">
                          <Box className="relative tracking-[0.06em] uppercase font-semibold inline-block min-w-[4.625rem] z-[3]">
                            players
                          </Box>
                          <Box className="relative text-[1.875rem] tracking-[0.06em] font-semibold inline-block min-w-[5.375rem] z-[2] mt-[0rem] mq900:text-[1.5rem] mq450:text-[1.125rem]">
                            {battlefield.players}
                          </Box>
                        </Box>
                        <Box className="flex flex-row items-start justify-start py-[0rem] pl-[1rem] pr-[0rem]">
                          <Box className="relative tracking-[0.07em] uppercase font-semibold inline-block min-w-[5.125rem] z-[2]">
                            settings
                          </Box>
                        </Box>
                      </Box>
                      <Box className="flex flex-col items-start justify-start">
                        <Box className="relative tracking-[0.06em] uppercase font-semibold shrink-0 z-[3]">
                          ping
                        </Box>
                        <Box className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] text-[1.875rem]">
                          <Box className="mt-[0rem] relative tracking-[0.06em] font-semibold inline-block min-w-[4.688rem] shrink-0 z-[2] mq900:text-[1.5rem] mq450:text-[1.125rem]">
                            {battlefield.ping}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="self-stretch h-[11.25rem] flex flex-col items-start justify-start pt-[0.555rem] px-[0rem] pb-[0.062rem] box-border gap-[0.275rem] text-[1rem]">
                      {[
                        { label: "region", value: settings.region },
                        { label: "punkbuster", value: settings.punkbuster },
                        { label: "fairfight", value: settings.fairfight },
                        { label: "password", value: settings.password },
                        { label: "preset", value: settings.preset },
                      ].map((setting, index) => (
                        <Box key={index} className="self-stretch">
                          <Box className="flex flex-row items-start justify-start py-[0rem] pl-[1rem] pr-[1.437rem]">
                            <Box className="w-[17.813rem] flex flex-row items-start justify-between gap-[1.25rem]">
                              <Box className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[4.5rem] z-[2]">
                                {setting.label}
                              </Box>
                              <Box className="relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[1.313rem] z-[2]">
                                {setting.value}
                              </Box>
                            </Box>
                          </Box>
                          <Box className="self-stretch h-[0.063rem] relative border-white border-t-[1px] border-solid box-border opacity-[0.1] z-[2]" />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="flex-1 flex flex-col items-start justify-start gap-[0.575rem] min-w-[33.688rem] max-w-full mq900:min-w-full">
                <Box className="self-stretch flex flex-row items-start justify-start gap-[0.5rem] max-w-full mq900:flex-wrap">
                  <Box className="flex flex-col items-start justify-start gap-[1.637rem] max-w-full mq900:flex-1">
                    <Button
                      className="w-[20.25rem] h-[3.5rem] z-[3]"
                      disableElevation
                      variant="outlined"
                      sx={{
                        color: "#fff",
                        fontSize: "18",
                        borderColor: "#fff",
                        borderRadius: "0px 0px 0px 0px",
                        "&:hover": { borderColor: "#fff" },
                        width: 324,
                        height: 56,
                      }}
                    >
                      spectate
                    </Button>
                    <Box className="w-[17.313rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border">
                      <Box className="flex flex-col items-start justify-start">
                        <Box className="relative tracking-[0.06em] uppercase font-semibold z-[3]">
                          tickrate
                        </Box>
                        <Box className="relative text-[1.875rem] tracking-[0.06em] font-semibold inline-block min-w-[5rem] z-[2] mt-[0rem] mq900:text-[1.5rem] mq450:text-[1.125rem]">
                          {battlefield.tickrate}
                        </Box>
                      </Box>
                    </Box>
                    <Box className="flex flex-row items-start justify-start py-[0rem] px-[2.125rem]">
                      <Box className="relative tracking-[0.07em] uppercase font-semibold inline-block min-w-[5.75rem] z-[2]">
                        advanced
                      </Box>
                    </Box>
                  </Box>
                  <Box className="flex-1 flex flex-col items-start justify-start gap-[6.587rem] min-w-[20.25rem] max-w-full mq900:gap-[3.313rem]">
                    <Box className="self-stretch flex flex-row items-start justify-start gap-[0.5rem] max-w-full mq900:flex-wrap">
                      <Button
                        className="w-[20.25rem] h-[3.5rem] z-[3]"
                        disableElevation
                        variant="outlined"
                        sx={{
                          color: "#fff",
                          fontSize: "18",
                          borderColor: "#fff",
                          borderRadius: "0px 0px 0px 0px",
                          "&:hover": { borderColor: "#fff" },
                          width: 324,
                          height: 56,
                        }}
                      >
                        join as commander
                      </Button>
                      <Button
                        className="w-[20.25rem] h-[3.5rem] z-[3]"
                        startIcon={
                          <img width="24px" height="24px" src="/favorite.svg" />
                        }
                        disableElevation
                        variant="outlined"
                        sx={{
                          color: "#fff",
                          fontSize: "18",
                          borderColor: "#fff",
                          borderRadius: "0px 0px 0px 0px",
                          "&:hover": { borderColor: "#fff" },
                          width: 166,
                          height: 56,
                        }}
                      >
                        13672
                      </Button>
                    </Box>
                    <Box className="flex flex-row items-start justify-start py-[0rem] pl-[3.437rem] pr-[3.375rem]">
                      <Box className="relative tracking-[0.07em] uppercase font-semibold inline-block min-w-[3.438rem] z-[2]">
                        rules
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="w-[44.531rem] flex flex-row items-start justify-start py-[0rem] px-[1.125rem] box-border max-w-full text-[1rem]">
                  <Box className="flex-1 flex flex-row items-start justify-start gap-[1.756rem] max-w-full mq900:flex-wrap">
                    <Box className="h-[22.425rem] flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.062rem] box-border gap-[0.287rem] min-w-[13.188rem] max-w-full">
                      {Object.entries(advanced).map(([key, value], index) => (
                        <Box key={index} className="self-stretch">
                          <Box className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[1rem] pr-[1.375rem]">
                            <Box className="w-[17.813rem] flex flex-row items-start justify-between gap-[1.25rem]">
                              <Box className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[4rem] z-[2]">
                                {key}
                              </Box>
                              <Box className="relative tracking-[0.04em] uppercase font-medium text-right inline-block min-w-[1.313rem] z-[2]">
                                {value ? "on" : "off"}
                              </Box>
                            </Box>
                          </Box>
                          <Box className="self-stretch h-[0.063rem] relative border-white border-t-[1px] border-solid box-border opacity-[0.1] z-[2]" />
                        </Box>
                      ))}
                    </Box>
                    <Box className="h-[14.881rem] flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.062rem] box-border gap-[0.287rem] min-w-[13.188rem] max-w-full">
                      {Object.entries(rules).map(([key, value], index) => (
                        <Box key={index} className="self-stretch">
                          <Box className="flex flex-row items-start justify-start py-[0rem] pl-[1rem] pr-[1.437rem]">
                            <Box className="w-[17.75rem] flex flex-row items-start justify-between gap-[1.25rem]">
                              <Box className="relative tracking-[0.04em] uppercase font-medium inline-block min-w-[3.688rem] z-[2]">
                                {key}
                              </Box>
                              <Box className="relative tracking-[0.04em] uppercase font-medium text-right z-[2]">
                                {value}
                              </Box>
                            </Box>
                          </Box>
                          {index < Object.entries(rules).length - 1 && (
                            <Box className="self-stretch h-[0.063rem] relative border-white border-t-[1px] border-solid box-border opacity-[0.1] z-[2]" />
                          )}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="self-stretch flex flex-col items-start justify-start gap-[0.731rem] max-w-full">
              <Box className="relative tracking-[0.07em] uppercase font-semibold inline-block min-w-[7.813rem] shrink-0 z-[2]">
                map rotation
              </Box>
              <Box className="self-start flex flex-row items-start justify-start gap-[0rem] shrink-0 max-w-full z-[2] text-[1.188rem] mq900:grid-cols-[minmax(243px,_1fr)] mq1350:flex-wrap mq1350:justify-center mq1350:grid-cols-[repeat(2,_minmax(243px,_421px))]">
                <Box className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] box-border relative gap-[1.35rem] min-w-[18.625rem] max-w-full">
                  <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                  <img
                    style={{ width: "75%" }}
                    className="self-start h-[4.75rem] relative max-w-full overflow-hidden shrink-0 object-cover z-[6] cursor-pointer"
                    loading="lazy"
                    alt=""
                    src="/browser__SI-next-image-w_4.svg"
                  />
                  <Box className="w-[19.063rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                    <Box className="flex-1 flex flex-col items-start justify-start">
                      <Typography
                        className="self-stretch relative uppercase"
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
                        className="self-stretch relative uppercase"
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
                <Box className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] box-border relative gap-[1.35rem] min-w-[18.625rem] max-w-full">
                  <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                  <img
                    style={{ width: "75%" }}
                    className="self-start h-[4.75rem] relative max-w-full overflow-hidden shrink-0 object-cover z-[6] cursor-pointer"
                    alt=""
                    src="/browser__SI-next-image-w_2.svg"
                  />
                  <Box className="w-[19.063rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                    <Box className="flex-1 flex flex-col items-start justify-start">
                      <Typography
                        className="self-stretch relative uppercase"
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
                        className="self-stretch relative uppercase"
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
                <Box className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] box-border relative gap-[1.35rem] min-w-[18.625rem] max-w-full">
                  <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                  <img
                    style={{ width: "75%" }}
                    className="self-start h-[4.75rem] relative max-w-full overflow-hidden shrink-0 object-cover z-[6] cursor-pointer"
                    alt=""
                    src="/browser__SI-next-image-w_1.svg"
                  />
                  <Box className="w-[19.063rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
                    <Box className="flex-1 flex flex-col items-start justify-start">
                      <Typography
                        className="self-stretch relative uppercase"
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
                        className="self-stretch relative uppercase"
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
                <Box className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.275rem] box-border relative gap-[1.35rem] min-w-[18.625rem] max-w-full">
                  <Box className="w-[75%] h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-400" />
                  <img
                    style={{ width: "75%" }}
                    className="self-start h-[4.75rem] relative max-w-full overflow-hidden shrink-0 object-cover z-[6] cursor-pointer"
                    alt=""
                    src="/browser__SI-next-image-w.svg"
                  />
                  <Box className="w-[19.063rem] flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border">
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
                <Box className="flex flex-col items-start justify-end pt-[2rem] px-[0rem] pb-[0rem] pr-[4rem] cursor-pointer ">
                  <Link to="/menu multiplayer/server browser/server info/show more">
                    <img
                      className="w-[1.5rem] h-[1.5rem] relative z-[2] transform -rotate-90"
                      loading="lazy"
                      alt=""
                      src="/back.svg"
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <main className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
        <section className="absolute top-[-0.856rem] left-[-1.275rem] bg-gray-500 w-[122.031rem] h-[69.581rem] z-[1]" />
        <Box className="absolute top-[65.531rem] left-[8.088rem] [background:linear-gradient(180deg,_rgba(16,_16,_16,_0),_#00657b)] w-[86.356rem] h-[3.188rem] z-[3]" />
        <img
          className="absolute top-[16.763rem] left-[8.119rem] w-[1rem] h-[0.5rem] z-[2]"
          loading="lazy"
          alt=""
          src="/germany-flag.svg"
        />
      </main>
    </Box>
  );
};

export default MenuMultiplayerServerBrow;
