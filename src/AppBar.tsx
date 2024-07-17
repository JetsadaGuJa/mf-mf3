import React, { useState } from "react";
import { AppBar, Button, IconButton, Toolbar } from "@mui/material";

export default function AppBarComp(props: {
  iconElement: JSX.Element;
  logoElement: JSX.Element;
  onClickLogo: (e: number) => void;
}) {
  const [count, setCount] = useState<number>(0);
  const { iconElement, logoElement, onClickLogo } = props;

  const handleClick = (count: number) => {
    setCount(count + 1);
    onClickLogo(count + 1);
  };
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          className="menu-expand"
          onClick={() => handleClick(count)}
        >
          {iconElement}
        </IconButton>
        {logoElement}
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
