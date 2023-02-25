import { makeAutoObservable } from 'mobx';

const userStore = makeAutoObservable({
  counter: 1,
  inc() { userStore.counter += 1; },
  dec() { userStore.counter -= 1; },
});

export { userStore };
