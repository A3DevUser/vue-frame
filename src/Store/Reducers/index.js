import { combineReducers } from "redux";
import { SectionRed } from "./SectionRed";
import { ColumnRed } from "./ColumnRed";
import { SubSectionRed } from "./SubSectionRed";
import {NavBarRed}  from "./NavBarRed"
import { FormIdRed,FormDatRed,EmdRed } from "./GeneralStatesRed";
import { GridRed } from "./GridRed";
import { ConfSectionRed } from "./ConfSectionRed";
import { ConfColumnRed } from "./ConfColumnRed";
import { ConfGridRed } from "./ConfGridRed";
import { ModalSectionRed } from "./ModalSectionRed";
import { ModalGridRed } from "./ModalGridRed";
import { ModalColumnRed } from "./ModalColumnRed";
import { SendConfDataRed } from "./SendConfDataRed";
import { DropValRed } from "./DropValRed";

const rootReducers = combineReducers({
    SectionRed,  
    ColumnRed,
    SubSectionRed,
    NavBarRed,
    FormIdRed,
    FormDatRed,
    GridRed,
    ConfSectionRed,
    ConfColumnRed,
    ConfGridRed,
    ModalSectionRed,
    ModalGridRed,
    ModalColumnRed,
    SendConfDataRed,
    DropValRed,
    EmdRed
    });

export default rootReducers