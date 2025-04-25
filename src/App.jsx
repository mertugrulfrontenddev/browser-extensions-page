import "./App.css";
import myImage from "./assets/logo.svg";
import moon from "./assets/icon-moon.svg";
import FilterButton from "./components/FilterButton";
import { useState } from "react";
import AppList from "./components/AppList";
import devLensImg from "../src/assets/logo-devlens.svg";
import StyleSpyImg from "../src/assets/logo-style-spy.svg";
import SpeedBoostImg from "../src/assets/logo-speed-boost.svg";
import JsonWizardImg from "../src/assets/logo-json-wizard.svg";
import TabMasterPro from "../src/assets/logo-tab-master-pro.svg";
import ViewProtImg from "../src/assets/logo-viewport-buddy.svg";
import MarkupNotesImg from "../src/assets/logo-markup-notes.svg";
import GridGuideImg from "../src/assets/logo-grid-guides.svg";
import PalettePickerImg from "../src/assets/logo-palette-picker.svg";
import LinkCheckerImg from "../src/assets/logo-link-checker.svg";
import DomSnapshotImg from "../src/assets/logo-dom-snapshot.svg";
import sun from "../src/assets/sun.png";

function App() {
  const [appList, setAppList] = useState([
    {
      id: 1,
      name: "DevLens",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      isActive: false,
      url: devLensImg,
    },
    {
      id: 2,
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      isActive: true,
      url: StyleSpyImg,
    },
    {
      id: 3,
      name: "SpeedBoost",
      description:
        "Optimizes browser resource usage to accelerate page loading. ",
      isActive: true,
      url: SpeedBoostImg,
    },
    {
      id: 4,
      name: "JSONWizard",
      description:
        "Formats, validates, and prettifies JSON responses in-browser.",
      isActive: false,
      url: JsonWizardImg,
    },
    {
      id: 5,
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions",
      isActive: true,
      url: TabMasterPro,
    },
    {
      id: 6,
      name: "ViewportBuddy",
      description:
        "Simulates various screen resolutions directly within the browser.",
      isActive: true,
      url: ViewProtImg,
    },
    {
      id: 7,
      name: "Markup Notes",
      description:
        "Enables annotation and notes directly onto webpages for collaborative debugging.",
      isActive: true,
      url: MarkupNotesImg,
    },
    {
      id: 8,
      name: "GridGuides",
      description:
        "Overlay customizable grids and alignment guides on any webpage.",
      isActive: true,
      url: GridGuideImg,
    },
    {
      id: 9,
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      isActive: true,
      url: PalettePickerImg,
    },
    {
      id: 10,
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      isActive: true,
      url: LinkCheckerImg,
    },
    {
      id: 11,
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      isActive: true,
      url: DomSnapshotImg,
    },
  ]);
  const [icon, setIcon] = useState(moon);
  const [filteredAppList, setFilteredAppList] = useState(appList);

  const [filter, setFilter] = useState("all");

  const handleToggle = (id) => {
    const updatedAppList = appList.map((app) =>
      app.id === id ? { ...app, isActive: !app.isActive } : app
    );

    setAppList(updatedAppList);

    // Wait for animation to complete before applying the filter

    applyFilter(updatedAppList); // Apply the correct filter after animation

    // Adjust this time to match your transition duration
  };

  const applyFilter = (updatedAppList) => {
    if (filter === "active") {
      setFilteredAppList(updatedAppList.filter((app) => app.isActive));
    } else if (filter === "inactive") {
      setFilteredAppList(updatedAppList.filter((app) => !app.isActive));
    } else {
      setFilteredAppList(updatedAppList);
    }
  };

  const handleAll = () => {
    setFilter("all");
    setFilteredAppList(appList);
  };

  const handleActive = () => {
    setFilter("active");
    const activeAppList = appList.filter((app) => app.isActive === true);
    setFilteredAppList(activeAppList);
  };

  const handleInactive = () => {
    setFilter("inactive");
    const inactiveAppList = appList.filter((app) => app.isActive === false);
    setFilteredAppList(inactiveAppList);
  };
  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");

    const iconSrc = isDark ? sun : moon;

    setIcon(iconSrc);
  };
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between w-full bg-white-50 p-2 rounded-lg border-2 border-gray-100 shadow-lg">
        <img src={myImage} alt="Logo" />
        <img
          className="bg-gray-200 p-2 w-10 h-10 rounded hover:cursor-pointer dark:bg-white"
          src={icon}
          alt="Moon Icon"
          onClick={toggleDarkMode}
        />
      </div>

      <div className="flex flex-wrap  flex-col sm:flex-row mt-1 ">
        <div className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white  ">
          Extensions List
        </div>

        <div className="flex space-x-4 flex-wrap mt-4 sm:mt-3">
          <FilterButton onClick={handleAll} isActive={filter === "all"}>
            All
          </FilterButton>
          <FilterButton onClick={handleActive} isActive={filter === "active"}>
            Active
          </FilterButton>
          <FilterButton
            onClick={handleInactive}
            isActive={filter === "inactive"}
          >
            Inactive
          </FilterButton>
        </div>
      </div>

      {/* onTransitionEnd fonksiyonunu AppList'e geçiriyoruz */}
      <AppList
        appList={filteredAppList}
        onToggle={handleToggle}
        filter={filter}
      />
    </div>
  );
}

export default App;
