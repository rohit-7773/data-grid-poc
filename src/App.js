import RenderList from "./RenderList";
import { h } from "gridjs"

function App() {

  const headings = [
    {
      name: "Name",
      data: row => row.name
    },
    {
      name: "Trips",
      data: row => row.trips
    },
    {
      name: "Actions",
      formatter: (cell, row) => {
        return h ('button', {
          onclick: () => console.log(row.cells)
        }, "edit")
      }
    }
  ]

  const url = "https://api.instantwebtools.net/v1/passenger";

  return (
    <div className="App">
      <RenderList headings={headings} url={url}></RenderList>
    </div>
  );
}

export default App;
