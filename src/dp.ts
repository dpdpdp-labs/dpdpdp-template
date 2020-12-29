import { DPBuilder } from "@dpdpdp/sdk";
import config from "./config";

export default () => {
  const dp = new DPBuilder(config);
  const parameters = dp.parameters();
  const input = dp.input();
  const result = dp.map(parameters, input, ({ count }, text) =>
    Array.from({ length: count })
      .map(() => text)
      .join(" ")
  );

  return dp.output(result);
};
