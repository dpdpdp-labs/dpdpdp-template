import dp from "./dp";

describe("dp", () => {
  it("app/created", async () => {
    expect(
      await dp().receive({
        type: "app/created",
        appID: "00000000-0000-0000-0000-000000000000",
        parameters: { count: 3 },
      })
    ).toEqual([
      {
        type: "app/schema-generated",
        appID: "00000000-0000-0000-0000-000000000000",
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
          type: "string",
        },
        outputUISchema: {
          "ui:widget": "https://widgets.dpdpdp.com/text@0.1.0",
        },
      },
    ]);
  });

  it("job/created", async () => {
    expect(
      await dp().receive({
        type: "job/created",
        input: "hello",
        jobID: "00000000-0000-0000-0000-000000000000",
        parameters: { count: 3 },
      })
    ).toEqual([
      {
        type: "job/completed",
        jobID: "00000000-0000-0000-0000-000000000000",
        output: "hello hello hello",
        deps: [{ type: "input" }],
      },
    ]);
  });
});
