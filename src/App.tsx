import { keyframes } from "@emotion/react"
import { CssBaseline, styled, Typography } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import Logo from "./Logo"

const Container = styled("div")(() => ({
  textAlign: "center",
}))

const Content = styled("div")(() => ({
  backgroundColor: "#282c34",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
  color: "white",
}))

const Link = styled("a")(() => ({
  color: "#b1c6cc",
}))

const rotate = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
})

const StyledLogo = styled(Logo)(() => ({
  animation: `${rotate} infinite 20s linear`,
  height: "40vmin",
  pointerEvents: "none",
}))

function App() {
  return (
    <Container>
      <Content>
        <StyledLogo />
        <Typography variant="inherit" style={{ marginBottom: 16 }}>
          Edit <code>src/App.tsx</code> and save to reload.
        </Typography>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Content>
    </Container>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
