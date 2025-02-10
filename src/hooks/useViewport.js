import { useTheme, useMediaQuery } from "@mui/material";

const useViewport = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("mobile", "tablet"));
  const isTablet = useMediaQuery(theme.breakpoints.between("tablet", "laptop"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("laptop"));
  const isLandscape = useMediaQuery("(orientation: landscape)");

  return { isMobile, isTablet, isDesktop, isLandscape };
};

export default useViewport;