import { createPortal } from "react-dom";
import type React from "react";
import { useEffect, useRef } from "react";

import useSingleton from "./hooks/useSingleton";

interface PortalProps {
  children?: React.ReactElement;
  getContainer: () => HTMLElement;
}

export default function Portal(props: PortalProps) {
  const { getContainer, children } = props;

  const containerRef = useRef<HTMLElement>();
  useSingleton(() => {
    containerRef.current = getContainer();
  });

  useEffect(() => {
    return () => {
      containerRef.current?.parentNode?.removeChild(containerRef.current);
    };
  }, []);

  return containerRef.current
    ? createPortal(children, containerRef.current)
    : null;
}
