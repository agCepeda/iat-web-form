import React, { useState } from 'react';
import {Menu} from 'primereact/menu';
import {Breadcrumb} from 'primereact/breadcrumb';

import logo from './logo.svg';
import './App.css';
import QuotationTable from "./containers/QuotationTable";
import QuotationForm from "./containers/QuotationForm";
import ItemForm from "./containers/ItemForm";
import TestForm from "./containers/TestForm";


import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";
let items = [
  {
      label: 'Options',
      items: [{label: 'New', icon: 'pi pi-fw pi-plus',command:()=>{ window.location.hash="/fileupload"; }},
              {label: 'Delete', icon: 'pi pi-fw pi-trash', url: 'http://primetek.com.tr'}]
  },
  {
      label: 'Account',
      items: [{label: 'Options', icon: 'pi pi-fw pi-cog',command:()=>{ window.location.hash="/"; }},
              {label: 'Sign Out', icon: 'pi pi-fw pi-power-off'} ]
  }
];

const breadItems = [
  {label:'Categories'},
  {label:'Sports'},
  {label:'Football'},
  {label:'Countries'},
  {label:'Spain'},
  {label:'F.C. Barcelona'},
  {label:'Squad'},
  {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
];

const home = {icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact'}

const App = () => {

  const [isResultVisible, setIsResultVisible] = useState(false);
  const [resultData, setResultData] = useState();

  const onTestFinished = (outputData) => {
    setResultData(outputData);
    setIsResultVisible(true);
  }

  const renderResult = () => {
    return resultData.map(
      b => (
        <table>
          <tr><td>{b.name}</td></tr>
      {b.answers.map(a => (<tr><td>{a.key}</td><td>{a.answerTime}</td></tr>))}
        </table>
      ))
  }

  const renderContent = () => {
    if (isResultVisible) {
      return renderResult();
    }
    return <TestForm className="p-col" onTestFinished={onTestFinished}/>;
  }

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
}

export default App;
