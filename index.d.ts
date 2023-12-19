interface Options {
  interval?: number;
  timeout?: number;
}

interface NxStatic {
  waitUntil(inConditionFn: () => boolean, inOptions?: Options): Promise<void>;
}
