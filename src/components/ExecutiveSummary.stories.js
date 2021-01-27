import React from "react"
import ExecutiveSummary from "./ExecutiveSummary"
import MiniBar from "./minibar/MiniBar"

// This default export determines where your story goes in the story list
export default {
  title: "ExecutiveSummary",
  component: ExecutiveSummary,
  subcomponents: { MiniBar },
  parameters: {
    // componentSubtitle: "Lorem ipsum dolar sit amet",
  },
}

export const Default = () => <ExecutiveSummary />
