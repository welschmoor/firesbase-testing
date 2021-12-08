
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"

import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 125%;
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }

`

const darkTheme = {
  navCol: "lightgrey",
}


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
