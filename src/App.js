import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as ACTIONS from './actions'



import {Link, Switch, Route, useHistory} from "react-router-dom";
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
import {ReduxService} from "./services/redux";
import {useWindowSize} from "./hooks";
import TestFormContainer from "./containers/TestForm";
import {InicioConsentimientoContainer} from "./containers/inicio-consentimiento";


const App = (props) => {

    const [isResultVisible, setIsResultVisible] = useState(false);
    const [resultData, setResultData] = useState();
    const history = useHistory();

    const windowSize = useWindowSize();

    const onTestFinished = (outputData) => {
        history.push("/fin")
        console.log("OUTPUT", outputData);
        setResultData(outputData);
        setIsResultVisible(true);
        props.saveTestResult(outputData);
    }

    useEffect(() => {
        window.$("#root").width(windowSize.width);
        window.$("#root").height(windowSize.height);

    }, [windowSize]);

    const renderResult = () => {
        return resultData.map(
            b => (
                <table>
                    <tr>
                        <td>{b.name}</td>
                    </tr>
                    {b.answers.map(
                        a => (
                            <tr>
                                <td>{a.key}</td>
                                <td>{a.answerTime}</td>
                            </tr>
                        ))
                    }
                </table>
            ))
    }

    return (
        <div>
            <div className={"container"}>
                <div className="row justify-content-center">
                    <div className="col-7">
                        <div className="shadow-sm p-3 mb-5 bg-white rounded">
                            <Switch>
                                <Route path="/prueba" exact render={(routeProps) => (<TestFormContainer />)} />
                                <Route path="/" exact component={(routeProps) => <InicioConsentimientoContainer onSiguiente={() => history.push("/prueba")} />}></Route>
                                {/*
                                    <Inic  />} />
                                <Route path="/registro" exact component={RegistroDatosContainer} ></Route>

                                <Route path="/estimulos" exact component={EstimulosContainer} ></Route>
                                <Route path="/instrucciones" exact component={InstruccionesContainer} ></Route>
                                <Route path="/fin" exact component={FinalContainer} ></Route>
                                <Route path="/resultado-prueba" exact render={(routeProps) => (
                                  <ResultContainer {...routeProps} testResult={resultData}></ResultContainer>
                                )} />*/}
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    /*
    return (
      <div className="App p-grid">
        <div className="p-col-2">
          <Menu model={items} />
        </div>
        <div className="p-col">
          {renderContent()}
        </div>
      </div>
    );
    */
}

const mapStateToProps = (state) => {
    return {
        authToken: state.userState.authToken
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        saveTestResult: (result) => dispatch(ACTIONS.saveTestResult(result))
    }
};

const connectedContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default ReduxService(connectedContainer);