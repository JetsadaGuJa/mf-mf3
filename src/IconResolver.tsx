import React from "react";
import * as Icons from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

interface IconResolverProps extends SvgIconProps {
  iconName: keyof typeof Icons;
}

export default function IconResolver(props: IconResolverProps) {
  const { iconName } = props;
  const IconComponent = Icons[iconName];

  if (!IconComponent) {
    console.error(`Icon "${iconName}" not found`);
    return null;
  }

  return <IconComponent {...props} />;
}
