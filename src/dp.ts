import { DPBuilder } from "@dpdpdp/sdk";
import config from "./config";

export default () => {
  const dp = new DPBuilder(config);

  const result = dp.map(dp.parameters(), dp.input(), ({ count }, text) =>
    Array.from({ length: count })
      .map(() => text)
      .join(" ")
  );

  return dp.output(result);
};
