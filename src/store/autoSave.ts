import { autorun, set, toJS } from 'mobx';

export const autoSaveStore = <Store extends { [K: string]: any }>(_this: Store, name: string) => {
  const storedJson = localStorage.getItem(name);

  if (storedJson) {
    set(_this, JSON.parse(storedJson));
  }

  return autorun(() => {
    const value = toJS(_this);
    localStorage.setItem(name, JSON.stringify(value));
  });
};