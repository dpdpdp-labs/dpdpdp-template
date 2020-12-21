const dp = require("./dp");

describe("dp", () => {
  it("app/created", async () => {
    expect(await dp().receive({ type: "app/created" })).toEqual([
      {
        inputSchema: {
          description: "Text to be echoed",
          title: "Text",
          type: "string",
        },
        inputUISchema: {
          "ui:options": { rows: 5 },
          "ui:widget": "https://widgets.dpdpdp.com/text@0.1.0",
        },
        outputSchema: {
          description: "Repeated input text",
          title: "Repeated text",
          type: "number",
        },
        outputUISchema: {
          "ui:widget": "https://widgets.dpdpdp.com/text@0.1.0",
        },
        type: "app/schema-generated",
      },
    ]);
  });

  it("job/created", async () => {
    expect(
      await dp().receive({
        type: "job/created",
        input: "hello",
        parameters: { count: 3 },
      })
    ).toEqual([
      {
        type: "job/completed",
        output: "hello hello hello",
        deps: [{ type: "input" }],
      },
    ]);
  });
});
