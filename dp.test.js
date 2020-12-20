const dp = require("./dp");

describe("dp", () => {
  it("app/created", async () => {
    expect(await dp().receive({ type: "app/created" })).toEqual([
      {
        inputSchema: {
          description: "Text of which words are to be counted",
          title: "Text",
          type: "string",
        },
        inputUISchema: {
          "ui:options": { rows: 5 },
          "ui:widget": "https://widgets.dpdpdp.com/text@0.1.0",
        },
        outputSchema: {
          description: "Number of words found in the input text",
          title: "Number of words",
          type: "number",
        },
        outputUISchema: {
          "ui:widget": "https://widgets.dpdpdp.com/number@0.1.0",
        },
        type: "app/schema-generated",
      },
    ]);
  });
});
