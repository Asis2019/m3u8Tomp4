// interface RequestPoolParams<T> {
//   data: T[];
//   maxLimit?: number;
//   iteratee: (params: {
//     index: number;
//     item: T;
//     data: T[];
//   }) => any | Promise<any>;
// }

/**
 * promise concurrency limit calls
 * @param {object[]} data - Called data list
 * @param {number} maxLimit - The number of concurrent calls is limited
 * @param {function} iteratee - Methods for dealing with a single node
 * @returns {promise}
 */
export const requestPool = ({
  data = [],
  maxLimit = 3,
  iteratee = () => {},
}) => {
  const executing = [];
  const enqueue = (index = 0) => {
    // 边界处理
    if (index === data.length) {
      return Promise.all(executing);
    }
    // 每次调用enqueue, 初始化一个promise
    const item = data[index];

    function itemPromise(index) {
      const promise = new Promise(async (resolve) => {
        // 处理单个节点
        await iteratee({ index, item, data });
        resolve(index);
      }).then(() => {
        // 执行结束，从executing删除自身
        const delIndex = executing.indexOf(promise);
        delIndex > -1 && executing.splice(delIndex, 1);
      });
      return promise;
    }
    // 插入executing数字，表示正在执行的promise
    executing.push(itemPromise(index));

    // 使用Promise.rece，每当executing数组中promise数量低于maxLimit，就实例化新的promise并执行
    let race = Promise.resolve();

    if (executing.length >= maxLimit) {
      race = Promise.race(executing);
    }

    // 递归，直到遍历完
    return race.then(() => enqueue(index + 1));
  };

  return enqueue();
};

// Example:
// promiseLimitPool({
//   data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//   maxLimit: 2,
//   iteratee: async ({ item }) => {
//     console.log('onClick -> item', item);
//     await Axios({
//       method: 'get',
//       url: `API接口地址`,
//       params: { page: 0, size: 9 },
//     });
//   },
// });
