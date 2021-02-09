import React from "react"
import { withDesign } from "storybook-addon-designs"
import { Button } from "react-bootstrap"

export default {
  title: "Button",
  component: Button,
}

const Template = (args) => <Button {...args}>Button</Button>

export const Primary = Template.bind({})
Primary.args = {
  variant: "primary",
}

Primary.parameters = {
  description: "lorem ipsum",
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/O4I9xlnDKGJfN8dnqDSfqw/Bootstrap-Component-Library?node-id=50%3A0",
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
}

export const Success = Template.bind({})
Success.args = {
  variant: "success",
}

Success.parameters = {
  description: "lorem ipsum",
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/O4I9xlnDKGJfN8dnqDSfqw/Bootstrap-Component-Library?node-id=50%3A2",
  },
}

export const Warning = Template.bind({})
Warning.args = {
  variant: "warning",
}

export const Danger = Template.bind({})
Danger.args = {
  variant: "danger",
}

export const Info = Template.bind({})
Info.args = {
  variant: "info",
}

// export default {
//   title: "Button",
//   component: Button,
//   decorators: [withDesign],
//   argTypes: {
//     variant: {
//       description:
//         "One or more button variant combinations buttons may be one of a variety of visual variants such as:",
//     },
//     size: {
//       description: "Specifies a large or small button.",
//       control: {
//         type: "select",
//         options: ["sm", "lg"],
//       },
//     },
//   },
//   args: {
//     variant: "primary",
//     size: "",
//   },
//   parameters: {},
// }

// export const Primary = (args) => <Button {...args}>Primary</Button>

// Primary.parameters = {
//   design: {
//     type: "figma",
//     url:
//       "https://www.figma.com/file/O4I9xlnDKGJfN8dnqDSfqw/Bootstrap-Component-Library?node-id=50%3A0",
//   },
// }

// export const Success = (args) => <Button {...args}>Success</Button>
// Success.parameters = {
//   args: {
//     variant: "success",
//   },
//   design: {
//     type: "figma",
//     url:
//       "https://www.figma.com/file/O4I9xlnDKGJfN8dnqDSfqw/Bootstrap-Component-Library?node-id=50%3A2",
//   },
// }
