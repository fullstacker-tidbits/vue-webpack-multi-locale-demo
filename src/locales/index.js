import cn from './cn';
import en from './en';

const properties = { cn, en }[process.env.LOCALE];

export default function T(key, ...args) {
  return properties[key].replace(
    /{(\d)}/g,
    (match, num) => (typeof args[num] !== 'undefined' ? args[num] : match),
  );
}
