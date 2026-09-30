import React from "react";
import Header from "./components/navbar/Header";
import Theme from "./components/Theme";
import { heroMenu } from "./components/navbar/Dt";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Theme>
      <div className="h-screen overflow-hidden">
        <div className="h-full min-w-0 flex flex-col transition-[margin] duration-500 ease-in-out">
          <Header heroMenu={heroMenu} />
          <main className="flex-1 min-h-0 min-w-0 overflow-y-auto overflow-x-hidden">
            <div className="min-h-full flex flex-col">
              <div className="flex-1">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </Theme>
  );
};

export default App;
