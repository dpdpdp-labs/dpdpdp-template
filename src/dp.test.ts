import dp from "./dp";
import { Bot, Workflow } from "@dpdpdp/jest-preset";

describe("dpdpdp-template", () => {
  it("has parameter schema", async () => {
    const workflow = new Workflow(dp);

    expect(workflow).toHaveParameterSchema({
      properties: {
        count: {
          default: 1,
          description: "Number of times to repeat given text",
          maximum: 100,
          minimum: 1,
          title: "Count",
          type: "integer",
        },
      },
      required: ["count"],
      type: "object",
    });
    expect(workflow).toHaveParameterUISchema({
      count: {
        "ui:widget": "https://widgets.dpdpdp.com/number@0.1.0",
      },
    });
  });

  it("generates input and output schema", async () => {
    const app = new Workflow(dp).createApp({ count: 3 });

    expect(app).toHaveInputSchema({ type: "string" });
    expect(app).toHaveInputUISchema({
      "ui:options": { rows: 3 },
      "ui:widget": "https://widgets.dpdpdp.com/text@0.1.0",
    });
    expect(app).toHaveOutputSchema({ type: "string" });
    expect(app).toHaveOutputUISchema({
      "ui:widget": "https://widgets.dpdpdp.com/text@0.1.0",
    });
  });

  it("generates output", async () => {
    const app = new Workflow(dp).createApp({ count: 1 });

    expect(await app.processJob("你好", new Bot())).toOutput("你好");
  });

  it("repeats input text for the number of times specified in parameters", async () => {
    const app = new Workflow(dp).createApp({ count: 3 });

    expect(await app.processJob("hello", new Bot())).toOutput(
      "hello hello hello"
    );
  });
});
