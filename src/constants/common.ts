export const BreakPoints = {
  PHONE: 576,
  LARGE_PHONE: 768,
  TABLET: 992,
  LARGE_TABLET: 1200,
  DESKTOP: 1520,
};

export const Queries = {
  PHONE_UP: `@media only screen and (min-width: ${BreakPoints.PHONE}px)`,
  LARGE_PHONE_UP: `@media only screen and (min-width: ${BreakPoints.LARGE_PHONE}px)`,
  TABLET_UP: `@media only screen and (min-width: ${BreakPoints.TABLET}px)`,
  LARGE_TABLET_UP: `@media only screen and (min-width: ${BreakPoints.LARGE_TABLET}px)`,
  DESKTOP_UP: `@media only screen and (min-width: ${BreakPoints.DESKTOP}px)`,
};
