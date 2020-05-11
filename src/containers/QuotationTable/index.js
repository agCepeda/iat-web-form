import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import {Paginator} from 'primereact/paginator';
import {DataTable, Column} from 'primereact/datatable';
import {Card} from 'primereact/card';
import {Panel} from 'primereact/panel';

import QuotationFormContainer from '../QuotationForm';

import quotationData from "../../api/mocks/quotations_getAll";


const QuotationTable = (props) => {
    const [quotations] = useState(quotationData);
    const [pagination] = useState({ first: 1 });
    const [selected, setSelected] = useState([]);

    return (
        <Panel header="COTIZACIONES">
            <div className="p-grid">
                <div className="p-col">
                    <DataTable value={quotations}
                        selection={selected}
                        onSelectionChange={e => setSelected(e.value)}>
                        <Column selectionMode="multiple" />
                        <Column field="folio" header="Folio" />
                        <Column field="customerName" header="Cliente" />
                        <Column field="customerEmail" header="Email" />
                        <Column field="description" header="Descripcion" />
                        <Column field="amount" header="Monto" />
                        <Column field="updatedAt" header="updatedAt" />
                    </DataTable>
                    <Paginator 
                        rows={10} 
                        totalRecords={quotations.length} 
                        first={pagination.first} 
                        onPageChange={(e) => console.log(e)}>
                    </Paginator>
                </div>
            </div>
        </Panel>
    )
}

export default QuotationTable;