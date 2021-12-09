
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Create from "./pages/Create"
import Recipe from "./pages/Recipe"

import { createGlobalStyle, ThemeProvider } from "styled-components"


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

  .active {
    border-bottom: 2px solid rgb(50, 150, 160);
    padding-bottom: 5px;
  }

`;

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
          <Route path="/create" element={<Create />} />
          <Route path="/recipies/:id" element={<Recipe />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
