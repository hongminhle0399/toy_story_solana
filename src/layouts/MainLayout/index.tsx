import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const navigationOptions = [
  {
    text: "Profile",
    to: "/profile",
  },
];

export const MainLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Header navigationOptions={navigationOptions} />
      {children}
      <Footer />
    </div>
  );
}
