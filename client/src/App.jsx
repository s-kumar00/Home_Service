import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ThemeProvider from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
      {/* <Footer />   */}
    </ThemeProvider>
  );
}

export default App;
