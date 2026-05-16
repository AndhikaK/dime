import { primitive as p } from "./primitive";

interface ComponentTokens {
  surface: {
    primary: string;
  };
  bottomTab: {
    bg: string;
    border: string;
    text: string;
    icon: {
      inactive: string;
      active: string;
      activeBg: string;
    };
  };
}

// Light and dark each get their own component token map.
// Both reference primitives — but pick different values per mode.
const lightComponent: ComponentTokens = {
  surface: {
    primary: p.color.gray[900],
  },
  bottomTab: {
    bg: p.color.white,
    border: p.color.gray[200],
    text: p.color.gray[500],
    icon: {
      inactive: p.color.gray[500],
      active: p.color.blue[500],
      activeBg: `${p.color.blue[500]}4D`,
    },
  },
};

const darkComponent: ComponentTokens = {
  surface: {
    primary: p.color.gray[900],
  },
  bottomTab: {
    bg: p.color.gray[800],
    border: p.color.gray[700],
    text: p.color.gray[500],
    icon: {
      inactive: p.color.gray[500],
      active: p.color.blue[400],
      activeBg: `${p.color.blue[400]}4D`,
    },
  },
};

export const component = { light: lightComponent, dark: darkComponent };
