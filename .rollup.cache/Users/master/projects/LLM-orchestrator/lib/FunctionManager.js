import { getLogger } from './Logger';
const l = getLogger('FunctionManager');
export class FunctionManager {
    functions;
    constructor() {
        this.functions = new Map();
    }
    use(name, fn) {
        if (this.functions.has(name)) {
            throw new Error(`A function with the name "${name}" already exists.`);
        }
        l.info(`Registering AI function with the name "${name}".`);
        this.functions.set(name, fn);
    }
}
//# sourceMappingURL=FunctionManager.js.map