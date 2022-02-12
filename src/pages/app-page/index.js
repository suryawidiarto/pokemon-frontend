import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/navigation-bar";
import NotificationPop from "../../components/notification-pop";
import SideBar from "../../components/side-bar";

const AppPage = () => {
  const notification = useSelector((state) => state.notification);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <NavigationBar toggleSideBar={toggleSideBar} />
      <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <Outlet />
      <NotificationPop
        variantPop={notification.variantPop}
        isPop={notification.isPop}
        messagePop={notification.messagePop}
      />
    </div>
  );
};

export default AppPage;
