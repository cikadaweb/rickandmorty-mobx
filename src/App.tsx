import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Container} from "@mui/material";
import TheHeader from "./components/TheHeader";
import MainPage from "./pages/MainPage";
import CharacterPage from "./pages/CharacterPage";

import './App.css';

const App = () => {

  return (
      <>
        <TheHeader/>

        <Container sx={{mt: 3}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}></Route>
                    <Route path="/character">
                        <Route path=":id" element={<CharacterPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Container>
      </>
  )
}

export default App
