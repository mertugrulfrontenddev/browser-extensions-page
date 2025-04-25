import React from "react";
import AppContent from "./AppContent";

const AppList = ({ appList, onToggle, filter }) => {
  return (
    <div className=" p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {appList.map((app, index) => (
        <AppContent
          key={index}
          {...app}
          appList={appList}
          onToggle={onToggle}
          filter={filter} // onTransitionEnd olayını buraya geçiriyoruz
        />
      ))}
    </div>
  );
};

export default AppList;
