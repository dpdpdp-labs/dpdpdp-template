const { DPBuilder, createSchema: S } = require("@dpdpdp/sdk");

module.exports = () => {
  const dp = new DPBuilder({
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
      input: {
        "ui:widget": "https://widgets.dpdpdp.com/text@0.1.0",
        "ui:options": { rows: 5 },
      },
      output: {
        "ui:widget": "https://widgets.dpdpdp.com/number@0.1.0",
      },
    },
  });

  const input = dp.input();

  const result = dp.map(input, (text) => text.split(" ").length);

  dp.output(result);

  return dp.build();
};
