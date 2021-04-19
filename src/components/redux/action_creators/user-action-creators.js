import {ON_ADD_TO_BAD, ON_REMOVE_FROM_BAD, ON_USERS_LOADED} from "../action_types";

export const onUserLoaded = (payload) => ({type: ON_USERS_LOADED, payload})
export const OnAddToBad = (payload) => ({type: ON_ADD_TO_BAD, payload})
export const OnRemoveFromBad = (payload) => ({type: ON_REMOVE_FROM_BAD, payload})