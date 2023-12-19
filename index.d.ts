type Status = 'done' | 'fail' | 'always';

interface Options {
  interval?: number;
  timeout?: number;
  condition?: () => boolean;
  change?: (status: Status) => void;
  done?: () => void;
  fail?: () => void;
  always?: () => void;
  complete?: () => void;
}

interface NxStatic {
  waitUntil(inOptions: Options): Promise<void>;
}
