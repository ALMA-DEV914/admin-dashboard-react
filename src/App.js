import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./globalComponents/Topbar";
import Sidebar from "./globalComponents/Sidebar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./scenes/form/form";
import Bar from "./scenes/bar/bar";
import Contacts from "./scenes/contacts";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Pie from "./scenes/pie";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div
            className="app">
              <Sidebar isSidebar={isSidebar}/>
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/team" element={<Team />} />
                <Route path="/pie" element={<Pie />} />
                
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
