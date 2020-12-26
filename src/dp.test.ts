import dp from "./dp";

describe("dp", () => {
  it("app/schema-requested", async () => {
    expect(
      await dp().receive({
        type: "app/schema-requested",
        replyToken:
          "eyJhbGciOiJIUzI1NiJ9.MDAwMDAwMDAtMDAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMA.S72aHBcpsVuzyZmE2UWdHs8jNI2Aqdqj7th7b80hAzI",
        parameters: { count: 3 },
      })
    ).toEqual([
      {
        type: "app/schema-generated",
        replyToken:
          "eyJhbGciOiJIUzI1NiJ9.MDAwMDAwMDAtMDAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMA.S72aHBcpsVuzyZmE2UWdHs8jNI2Aqdqj7th7b80hAzI",
        inputSchema: {
          description: "Text to be echoed",
          title: "Text",
          type: "string",
        },
        inputUISchema: {
          "ui:options": { rows: 3 },
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
        replyToken:
          "eyJhbGciOiJIUzI1NiJ9.MDAwMDAwMDAtMDAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMA.S72aHBcpsVuzyZmE2UWdHs8jNI2Aqdqj7th7b80hAzI",
        input: "hello",
        parameters: { count: 3 },
      })
    ).toEqual([
      {
        type: "job/completed",
        replyToken:
          "eyJhbGciOiJIUzI1NiJ9.MDAwMDAwMDAtMDAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMA.S72aHBcpsVuzyZmE2UWdHs8jNI2Aqdqj7th7b80hAzI",
        output: "hello hello hello",
        deps: [{ type: "input" }],
      },
    ]);
  });
});
