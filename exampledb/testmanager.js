import  {Manager}  from './manager.js';

export class ManagerTest {

    test() {
        const mgr = new Manager();
        mgr.initdb();
    }
}

new ManagerTest().test();
