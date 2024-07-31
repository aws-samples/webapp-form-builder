import React, { useCallback } from "react";
import type { LinkProps } from "@cloudscape-design/components/link";

import type { NavigateFunction } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export interface State {
  readonly handleFollow: (
    event: Readonly<CustomEvent<Readonly<LinkProps.FollowDetail>>>,
  ) => void;
}

export default function useLink(): State {
  const navigate: NavigateFunction = useNavigate();

  return {
    handleFollow: useCallback(
      (e: Readonly<CustomEvent<Readonly<LinkProps.FollowDetail>>>): void => {
        if (
          e.detail.external === true ||
          typeof e.detail.href === "undefined"
        ) {
          return;
        }

        e.preventDefault();
        navigate(e.detail.href);
      },
      [navigate],
    ),
  };
}
