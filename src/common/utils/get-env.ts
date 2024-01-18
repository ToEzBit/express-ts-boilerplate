function getEnvVar<T extends string | number>(
  key: string,
  type: "string" | "number",
): T {
  const value = process.env[key];
  if (value == null) {
    throw new Error(`Unknown process.env.${key}: ${value}`);
  }

  if (type === "number") {
    const numValue = parseInt(value);
    if (Number.isNaN(numValue)) {
      throw new Error(`process.env.${key} must be a number. Got ${value}`);
    }
    return numValue as T;
  }

  return value as T;
}

export const getEnv = {
  port: () => getEnvVar<number>("PORT", "number"),
  cors: () => getEnvVar<string>("CORS", "string"),
};
