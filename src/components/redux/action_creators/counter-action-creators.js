import {DEC, INC, INC_CUSTOM, RESET} from "../action_types";

export const incAction = () => ({type: INC})
export const decAction = () => ({type: DEC})
export const resAction = () => ({type: RESET})
export const incCustomAction = (payload) => ({type: INC_CUSTOM, payload})