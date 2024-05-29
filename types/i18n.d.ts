declare namespace I18nType {
  type LangType = "en" | "zh-CN";

  type Schema = {
    common: {
      hello: string;
    };
  };

  type GetI18nKey<
    T extends Record<string, unknown>,
    K extends keyof T = keyof T
  > = K extends string
    ? T[K] extends Record<string, unknown>
      ? `${K}.${GetI18nKey<T[K]>}`
      : K
    : never;

  type I18nKey = GetI18nKey<Schema>;
}
