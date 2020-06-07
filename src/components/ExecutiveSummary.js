import React from "react"
import { getSampleData } from "../fixtures/ExecutiveSummaryData"
import { Badge } from "react-bootstrap"
import BootstrapTable from "react-bootstrap-table-next"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import MiniBar from "../components/MiniBar"
import moment from "moment"
import Dinero from "dinero.js"
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css"
import "../css/trilliant-table.css"

const myData = getSampleData()

export default function ExecutiveSummary() {
  const daysInMarketFormatter = (cell, row) => {
    const myPerc = (cell / row.totalDaysInMarket) * 100
    return (
      <div>
        {cell}
        <MiniBar
          Perc={Math.round(myPerc)}
          daysInMarket={row.daysInMarket}
          backGroundColor='#E5E5E5'
          forGroundColor='#428BCA'
        />
      </div>
    )
  }

  const displayDate = (cell) => {
    const date = moment(cell).format("MM/DD/YYYY").toString()
    return <div>{date}</div>
  }

  const displaySpend = (cell, row) => {
    const spend = Dinero({ amount: cell, precision: 5 }).toRoundedUnit(1)
    const myPerc = (cell / row.budget) * 100
    return (
      <div>
        ${spend}k
        <MiniBar
          Perc={Math.round(myPerc)}
          daysInMarket={row.daysInMarket}
          backGroundColor='#E5E5E5'
          forGroundColor='#4C9D2F'
        />
      </div>
    )
  }

  const displayBudget = (cell) => {
    const budget = Dinero({ amount: cell }).toFormat("$0,0")
    return <div>{budget}</div>
  }

  const displayCpl = (cell) => {
    const cpl = Dinero({ amount: cell }).toFormat("$0,0.00")
    return <div>{cpl}</div>
  }

  const displayStatus = (status) => {
    let variant = "secondary"
    if (status === "live") {
      variant = "primary"
    }
    return (
      <div>
        <Badge variant={variant} style={{ width: "100%", padding: "4px" }}>
          {status}
        </Badge>
      </div>
    )
  }

  const { SearchBar } = Search

  const columns = [
    {
      dataField: "status",
      text: "Status",
      sort: true,
      formatter: displayStatus,
    },
    {
      dataField: "serviceLine",
      text: "Service Line",
      sort: true,
      style: { maxWidth: "200px" },
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
      style: { maxWidth: "200px" },
    },
    {
      dataField: "spendToDate",
      text: "Spend to Date",
      sort: true,
      formatter: displaySpend,
    },
    {
      dataField: "budget",
      text: "Budget",
      sort: true,
      formatter: displayBudget,
    },
    {
      dataField: "leads",
      sort: true,
      text: "Leads",
    },
    {
      dataField: "averageCpl",
      text: "AVG CPL",
      sort: true,
      formatter: displayCpl,
    },
    {
      dataField: "daysInMarket",
      text: "Days In Market",
      sort: true,
      style: { whiteSpace: "nowrap" },
      formatter: daysInMarketFormatter,
    },
    {
      dataField: "startDate",
      text: "Launch Date",
      sort: true,
      formatter: displayDate,
    },
    {
      dataField: "endDate",
      text: "End Date",
      sort: true,
      formatter: displayDate,
    },
  ]
  return (
    <ToolkitProvider
      keyField='id'
      data={myData}
      columns={columns}
      bootstrap4={true}
      search
    >
      {(props) => (
        <div>
          <div className='search-container'>
            <div className='table-name-container'>Strategy List</div>
            <div className='searchbar-container'>
              <SearchBar {...props.searchProps} />
            </div>
          </div>

          <BootstrapTable
            {...props.baseProps}
            bordered={false}
            striped={false}
            hover={true}
            condensed={false}
            headerClasses='table-header'
          />
        </div>
      )}
    </ToolkitProvider>
  )
}
