import { Grid } from "gridjs-react";
import "./style.css"

function RenderList(props) {

  const serverConfig = {
    url: props.url,
    then: res => res.data,
    total: res => res.totalPassengers
  }

  const paginationConfig = {
    enabled: true,
    limit: 10,
    server: {
      url: (prev, page, limit) => `${prev}?page=${page}&size=${limit}`
    }
  }

  const search = {
    enabled: true,
    server: {
      url: (prev, keyword) => `${prev}?search=${keyword}`
    }
  }

  const stylingClassNames = {
    table: "table",
    td: "table-td",
    th: "table-th",
    pagination: "pagination",
    paginationSummary: "pagination-summary",
    paginationButton: "pagination-button"
  }

  return (
    <Grid
      columns={props.headings}
      server={serverConfig}
      pagination={paginationConfig}
      search={serverConfig}
      className={stylingClassNames}
    />
  )
}

export default RenderList;