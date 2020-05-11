import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Paginator } from 'primereact/paginator';
import { DataTable, Column } from 'primereact/datatable';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { AutoComplete } from 'primereact/autocomplete';

import customersData from "../../api/mocks/customers_getAll";

import "./styles.css";

const QuotationFormContainer = () => {

  const [suggestions, setSuggestions] = useState();
  const [customer, setCustomer] = useState();

  const completeMethod = (args) => {
    console.log(args)
    setSuggestions(customersData.filter(c => c.fullName.toLowerCase().indexOf(args.query.toLowerCase()) >= 0))
  }

  const customerTemplate = (customer) => {
    return (
      <div className="suggestion-item">
        <div className="title">{customer.fullName}</div>
        <div className="subtitle">{customer.email}</div>
      </div>
    )
  }

  const renderCustomerInfo = () => {
    if (customer == null) { return }
    return (
      <table>
        <tbody>
          <tr>
            <td className="info-title">Codigo:</td>
            <td>{customer.code}</td>
          </tr>
          <tr>
            <td className="info-title">Email:</td>
            <td>{customer.email}</td>
          </tr>
          <tr>
            <td className="info-title">Direccion:</td>
            <td>{customer.address}</td>
          </tr>
          <tr>
            <td className="info-title">Telefono:</td>
            <td>{customer.phoneNumber}</td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <Card>
      <h3>NUEVA COTIZACION</h3>
      <div className="p-grid">
        <div className="p-col-6">
          <span className="p-fluid">
            <span className="info-title">Buscar:</span>
              <AutoComplete 
                field="fullName"
                placeholder="Selecciona un cliente"
                itemTemplate={customerTemplate}
                value={customer} 
                onChange={(e) => setCustomer(e.value)}
                suggestions={suggestions} 
                completeMethod={completeMethod} />
          </span>
          { renderCustomerInfo() }
        </div>
      </div>
    </Card>
  )
}

export default QuotationFormContainer;