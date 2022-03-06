import { useState } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from 'react-redux'
import { State, ActionType } from '../store'

export const ClickablePanel: React.FC<{name: string}> = ({name}) => {
  const selectedPanel = useSelector((state: State) => state.selected)
  const dispatch = useDispatch()

  return (
    <div
      className={classNames("flex-item", {
        selected: selectedPanel === name,
        unselected: selectedPanel !== name,
      })}
      onClick={() => {
        dispatch({type: ActionType.CLICK_PANEL, payload: name});
      }}
    >
      <h2>{name}</h2>
      <canvas></canvas>
    </div>
  );
}
