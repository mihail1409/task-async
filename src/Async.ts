/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    const promise = new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
    return promise;
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export function getData(): Promise<number[]> {
    //const result: number[] = [];
    const res = Promise.all([mock(100), mock(200), mock(300)]);
    return res;

    /* return mock(100)
        .then((data1) => {
            result.push(data1);
            return mock(200);
        })
        .then((data2) => {
            result.push(data2);
            return mock(300);
        })
        .then((data3) => {
            result.push(data3);
            return result;
        });*/
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    try {
        await Promise.reject(new Error('my error'));
    } catch (err) {
        return (err as Error).message;
    }
}
