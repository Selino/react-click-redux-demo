import React from "react"
import { getSampleData } from "../../fixtures/ExecutiveSummaryData"
// import { Badge } from "react-bootstrap"
import Badge from "../Badge/Badge"
import BootstrapTable from "react-bootstrap-table-next"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import MiniBar from "../MiniBar/MiniBar"
import moment from "moment"
import Dinero from "dinero.js"
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css"
import styled from "@emotion/styled"
import colors from "../../tokens/colors"

const Emotion = styled.div`
  table {
    font-size: 0.9rem;
    font-family: Arial, Helvetica, sans-serif;
    table-layout: auto !important;
  }

  .table-container {
    border: solid 1px #ccc;
    border-radius: 5px;
  }

  .table-header {
    font-variant-caps: all-small-caps;
    background-color: #f5f5f5;
  }

  .search-container {
    padding: 0.5rem;
    line-height: -0.2rem;
  }

  .table-name-container {
    display: inline-block;
    height: 1.5rem;
    max-width: 200px;
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: solid 1px #ccc;
    font-weight: bold;
    font-size: 0.9rem;
    font-variant-caps: all-small-caps;
  }

  .searchbar-container {
    display: inline-block;
    width: 300px;
  }
`

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
          forGroundColor={colors.alertSuccess}
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
    let variant = colors.graysGray2
    if (status === "live") {
      variant = colors.primaryInactive
    }
    return <Badge text={status} variant={variant} />
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
    <Emotion>
      <ToolkitProvider
        keyField='id'
        data={myData}
        columns={columns}
        bootstrap4={true}
        search
      >
        {(props) => (
          <div className='body-container table-container'>
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
    </Emotion>
  )
}
