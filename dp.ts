import { DPBuilder } from "@dpdpdp/sdk";
import config from "./config";

export default () => {
  const dp = new DPBuilder(config);

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
