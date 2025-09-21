import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import ArrowLineDownLight from "../../assets/icons/light/ArrowLineDown.svg";
import ArrowLineDownDark from "../../assets/icons/dark/ArrowLineDown.svg";

import ArrowLineRightLight from "../../assets/icons/light/ArrowLineRight.svg";
import ArrowLineRightDark from "../../assets/icons/dark/ArrowLineRight.svg";

import BellLight from "../../assets/icons/light/Bell.svg";
import BellDark from "../../assets/icons/dark/Bell.svg";

import BookOpenLight from "../../assets/icons/light/BookOpen.svg";
import BookOpenDark from "../../assets/icons/dark/BookOpen.svg";

import ChartPieSliceLight from "../../assets/icons/light/ChartPieSlice.svg";
import ChartPieSliceDark from "../../assets/icons/dark/ChartPieSlice.svg";

import ChatsTeardropLight from "../../assets/icons/light/ChatsTeardrop.svg";
import ChatsTeardropDark from "../../assets/icons/dark/ChatsTeardrop.svg";

import ClockCounterClockwiseLight from "../../assets/icons/light/ClockCounterClockwise.svg";
import ClockCounterClockwiseDark from "../../assets/icons/dark/ClockCounterClockwise.svg";

import DotLight from "../../assets/icons/light/Dot.svg";
import DotDark from "../../assets/icons/dark/Dot.svg";

import FolderNotchLight from "../../assets/icons/light/FolderNotch.svg";
import FolderNotchDark from "../../assets/icons/dark/FolderNotch.svg";

import IdentificationCardLight from "../../assets/icons/light/IdentificationCard.svg";
import IdentificationCardDark from "../../assets/icons/dark/IdentificationCard.svg";

import IdentificationBadgeLight from "../../assets/icons/light/IdentificationBadge.svg";
import IdentificationBadgeDark from "../../assets/icons/dark/IdentificationBadge.svg";

import NotebookLight from "../../assets/icons/light/Notebook.svg";
import NotebookDark from "../../assets/icons/dark/Notebook.svg";

import SearchLight from "../../assets/icons/light/Search.svg";
import SearchDark from "../../assets/icons/dark/Search.svg";

import ShoppingBagOpenLight from "../../assets/icons/light/ShoppingBagOpen.svg";
import ShoppingBagOpenDark from "../../assets/icons/dark/ShoppingBagOpen.svg";

import SidebarLight from "../../assets/icons/light/Sidebar.svg";
import SidebarDark from "../../assets/icons/dark/Sidebar.svg";

import StarLight from "../../assets/icons/light/Star.svg";
import StarDark from "../../assets/icons/dark/Star.svg";

import SunLight from "../../assets/icons/light/Sun.svg";
import SunDark from "../../assets/icons/dark/Sun.svg";

import UsersThreeLight from "../../assets/icons/light/UsersThree.svg";
import UsersThreeDark from "../../assets/icons/dark/UsersThree.svg";

import BugBeetleLight from "../../assets/icons/light/BugBeetle.svg";
import BugBeetleDark from "../../assets/icons/dark/BugBeetle.svg";

import BroadcastLight from "../../assets/icons/light/Broadcast.svg";
import BroadcastDark from "../../assets/icons/dark/Broadcast.svg";

import UserLight from "../../assets/icons/light/User.svg";
import UserDark from "../../assets/icons/dark/User.svg";

import ArrowRiseLight from "../../assets/icons/light/ArrowRise.svg";
import ArrowRiseDark from "../../assets/icons/dark/ArrowRise.svg";

import ArrowFallLight from "../../assets/icons/light/ArrowFall.svg";
import ArrowFallDark from "../../assets/icons/dark/ArrowFall.svg";

import MapLight from "../../assets/icons/light/Map.svg";
import MapDark from "../../assets/icons/dark/Map.svg";

import CalendarBlankLight from "../../assets/icons/light/CalendarBlank.svg";
import CalendarBlankDark from "../../assets/icons/dark/CalendarBlank.svg";

import ArrowsDownUpLight from "../../assets/icons/light/ArrowsDownUp.svg";
import ArrowsDownUpDark from "../../assets/icons/dark/ArrowsDownUp.svg";

import FunnelSimpleLight from "../../assets/icons/light/FunnelSimple.svg";
import FunnelSimpleDark from "../../assets/icons/dark/FunnelSimple.svg";

import AddLight from "../../assets/icons/light/Add.svg";
import AddDark from "../../assets/icons/dark/Add.svg";


const icons = {
  ArrowLineDown: { light: ArrowLineDownLight, dark: ArrowLineDownDark },
  ArrowLineRight: { light: ArrowLineRightLight, dark: ArrowLineRightDark },
  Bell: { light: BellLight, dark: BellDark },
  BookOpen: { light: BookOpenLight, dark: BookOpenDark },
  ChartPieSlice: { light: ChartPieSliceLight, dark: ChartPieSliceDark },
  ChatsTeardrop: { light: ChatsTeardropLight, dark: ChatsTeardropDark },
  ClockCounterClockwise: { light: ClockCounterClockwiseLight, dark: ClockCounterClockwiseDark },
  Dot: { light: DotLight, dark: DotDark },
  FolderNotch: { light: FolderNotchLight, dark: FolderNotchDark },
  IdentificationBadge: { light: IdentificationBadgeLight, dark: IdentificationBadgeDark },
  IdentificationCard: { light: IdentificationCardLight, dark: IdentificationCardDark },
  Sotebook: { light: NotebookLight, dark: NotebookDark },
  Search: { light: SearchLight, dark: SearchDark },
  ShoppingBagOpen: { light: ShoppingBagOpenLight, dark: ShoppingBagOpenDark },
  Sidebar: { light: SidebarLight, dark: SidebarDark },
  Star: { light: StarLight, dark: StarDark },
  Sun: { light: SunLight, dark: SunDark },
  UsersThree: { light: UsersThreeLight, dark: UsersThreeDark },
  Notebook: { light: NotebookLight, dark: NotebookDark },
  BugBeetle: { light: BugBeetleLight, dark: BugBeetleDark },
  Broadcast: { light: BroadcastLight, dark: BroadcastDark },
  User: { light: UserLight, dark: UserDark },
  ArrowRise: { light: ArrowRiseLight, dark: ArrowRiseDark },
  ArrowFall: { light: ArrowFallLight, dark: ArrowFallDark },
  CalendarBlank: { light: CalendarBlankLight, dark: CalendarBlankDark },
  ArrowsDownUp: { light: ArrowsDownUpLight, dark: ArrowsDownUpDark },
  FunnelSimple: { light: FunnelSimpleLight, dark: FunnelSimpleDark },
  Add: { light: AddLight, dark: AddDark },
  Map: { light: MapLight, dark: MapDark },
};

const Icon = ({
  name,
  alt,
  width = 24,
  height = 24,
  widthPercent,
  heightPercent,
  fixedTheme,
  ...props
}) => {
  const { dark } = useContext(ThemeContext);
  const mode =
    fixedTheme === "dark"
      ? "dark"
      : fixedTheme === "light"
      ? "light"
      : dark
      ? "dark"
      : "light";

  const IconSrc = icons[name]?.[mode];

  if (!IconSrc) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }

  const style = {
    width: widthPercent ? `${widthPercent}%` : `${width}px`,
    height: heightPercent ? `${heightPercent}%` : `${height}px`,
    ...props.style, // allow overriding styles if passed
  };

  return (
    <img
      src={IconSrc}
      alt={alt || name}
      style={style}
      {...props}
    />
  );
};

export default Icon;

