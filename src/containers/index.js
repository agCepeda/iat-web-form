import React, { useEffect, useState } from 'react';
import {Link, Switch, Route, useHistory} from "react-router-dom";

import {InicioConsentimientoContainer} from './inicio-consentimiento';
import RegistroDatosContainer from './registro-datos';

import {EstimulosContainer} from './estimulos';
import {InstruccionesContainer} from './instrucciones';
import {generateRandomCode} from "../services/test_builder";
import TestForm from "./TestForm";


export
