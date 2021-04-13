/**
 * ! object表示原始数据类型
 * ! 是出了number， string， boolean， null， undefined之外的类型
 * ! 使用object类型，就可以更好的表示像Object.crete这样的API
 */
declare function create(o: object | null): void;
// let create1 = new Function()

create({ a: 1 });
create(null);
// create(undefined);
// create()