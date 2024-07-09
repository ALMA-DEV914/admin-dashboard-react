import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./globalComponents/Topbar";
import Sidebar from "./globalComponents/Sidebar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./scenes/form/form";
import Bar from "./scenes/bar/bar";

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
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
