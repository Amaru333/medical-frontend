import { IOutsideListenerProps } from "@/interfaces/dashboardInterfaces";
import React, { useEffect, useRef } from "react";

function OutsideListener({ func, children }: IOutsideListenerProps) {
  function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>, func: () => void) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          func();
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, func]);
  }

  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(wrapperRef, func);

  return <div ref={wrapperRef}>{children}</div>;
}

export default OutsideListener;
