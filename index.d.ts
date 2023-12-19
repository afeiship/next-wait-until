interface Options {
  interval?: number;
  timeout?: number;
  condition?: () => boolean;
  done?: () => void;
  fail?: () => void;
  always?: () => void;
}

interface NxStatic {
  waitUntil(inOptions: Options): Promise<void>;
}
