import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import RegistroDatosContainer from "../registro-datos";
import {EstimulosContainer} from "../estimulos";
import {InstruccionesContainer} from "../instrucciones";
import Form from "./form";
import * as ACTIONS from "../../actions";
import {connect} from "react-redux";
import FinalContainer from "./final";
import {TestLayout} from "../../components";


const TestFormContainer = (props) => {

    const [paginaActual, setPaginaActual] = useState(1);
    const [resultId, setResultId] = useState();
    const history = useHistory();

    const iniciarPrueba = (props) => {
        history.push("/prueba");
    }

    const onTestFinished = (result) => {
        props.saveTestResult({ bloques: result, tipo: "BAL" })
          .then(res => {
              setPaginaActual(5)
              setResultId(res.id)
          });
    }

    const renderContent = () => {
        switch (paginaActual) {
            case 1: {
                return <RegistroDatosContainer onSiguiente={() => setPaginaActual(2)}/>
            }
            case 2: {
                return <EstimulosContainer onSiguiente={() => setPaginaActual(3)}></EstimulosContainer>
            }
            case 3: {
                return <InstruccionesContainer onSiguiente={() => setPaginaActual(4)}></InstruccionesContainer>
            }
            case 4: {
                //return <TestForm {...routeProps} onTestFinished={onTestFinished}></TestForm>
                return <Form {...props}  onTestFinished={onTestFinished}/>
            }
            case 5: {
                return <FinalContainer folio={resultId}></FinalContainer>
            }
            default: {
                return <div></div>
            }
        }
    }

    return (
      <TestLayout>{renderContent()}</TestLayout>
    )

}

const mapStateToProps = () => {

};

const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps", mapDispatchToProps)
    return {
        saveTestResult: (result) => dispatch(ACTIONS.saveTestResult(result))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(TestFormContainer);
