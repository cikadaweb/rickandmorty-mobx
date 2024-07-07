import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Container} from "@mui/material";
import TheHeader from "./components/TheHeader";
import MainPage from "./pages/MainPage";
import CharacterPage from "./pages/CharacterPage";

import './App.css';
import {RootStoreContext} from "./stores/RootStore/RootStoreContext.ts";
import RootStore from './stores/RootStore'

const App = () => {

  return (
      <>
        <RootStoreContext.Provider value={new RootStore()}>
            <TheHeader/>

            <Container sx={{mt: 3}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage/>}></Route>
                        <Route path="/character">
                            <Route path=":id" element={<CharacterPage />} />
                        </Route>
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        </RootStoreContext.Provider>
      </>
  )
}

export default App
