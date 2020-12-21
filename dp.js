const { DPBuilder, createSchema: S } = require("@dpdpdp/sdk");

module.exports = () => {
  const dp = new DPBuilder({
    parameterSchema: S({
      type: "object",
      properties: {
        count: S({
          type: "integer",
          title: "Count",
          description: "Number of times to repeat given text",
          minimum: 1,
          maximum: 10,
        }),
      },
      required: ["count"],
    }),
    inputSchema: S({
      type: "string",
      title: "Text",
      description: "Text of which words are to be counted",
    }),
    outputSchema: S({
      type: "number",
      title: "Number of words",
      description: "Number of words found in the input text",
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
        "ui:widget": "https://widgets.dpdpdp.com/number@0.1.0",
      },
    },
  });

  const parameters = dp.parameters();

  const input = dp.input();

  const result = dp.combine(parameters, input, ({ count }, text) =>
    Array.from({ length: count })
      .map(() => text)
      .join(" ")
  );

  dp.output(result);

  return dp.build();
};
