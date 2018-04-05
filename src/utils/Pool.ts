/**
 * @author kozakluke@gmail.com
 */
export default class Pool
{
    private static pools:any[] = [];
    
    public static get<T>(Type:Constructor<T>, autoFree:boolean = false):T
    {
        const pool = this.getPool(Type);
        if (pool.length > 0)
            return autoFree ? pool[0] : pool.pop();
        else
            return autoFree ? this.free(Type, new Type()) : new Type();
    }
    
    private static getPool(Type:any)
    {
        return this.pools[Type] || (this.pools[Type] = []);
    }
    
    public static free<T>(Type:Constructor<T>, ...args:T[]):T
    {
        this.getPool(Type).push(...args);
        return args[0];
    }
    
    public static freeArray<T>(Type:Constructor<T>, array:T[])
    {
        const pool = this.getPool(Type);
        for (let i = array.length; i--;)
            pool.push(array[i]);
    }
}

type Constructor<T> = {
    new(...args:any[]):T;
};
