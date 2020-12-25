import { createSchema as S } from "@dpdpdp/sdk";

export default {
  parameterSchema: S({
    type: "object",
    properties: {
      count: S({
        type: "integer",
        title: "Count",
        description: "Number of times to repeat given text",
        minimum: 1,
        maximum: 100,
        default: 3,
      }),
    },
    required: ["count"],
  }),
  inputSchema: S({
    type: "string",
    title: "Text",
    description: "Text to be echoed",
  }),
  outputSchema: S({
    type: "string",
    title: "Repeated text",
    description: "Repeated input text",
  }),
  ui: {
    parameter: {
      count: {
        "ui:widget": "https://widgets.dpdpdp.com/number@0.1.0",
      },
    },
    input: {
      "ui:widget": "https://widgets.dpdpdp.com/text@0.1.0",
      "ui:options": { rows: 5 },
    },
    output: {
      "ui:widget": "https://widgets.dpdpdp.com/text@0.1.0",
    },
  },
};
