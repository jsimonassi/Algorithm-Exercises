const networkDelayTime = (times, n, k) => {
    const edges = buildGraph(times);

    const distances = Array(n + 1).fill(Infinity);
    distances[k] = 0;

    const priorityQueue = [[0, k]];  // [currentDistance, node]

    while (priorityQueue.length > 0) {
        priorityQueue.sort((a, b) => a[0] - b[0]);
        const [currentDistance, node] = priorityQueue.shift();

        if (currentDistance > distances[node]) continue;

        if (edges[node]) {
            for (const [neighbor, time] of edges[node]) {
                const newDist = currentDistance + time;
                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    priorityQueue.push([newDist, neighbor]);
                }
            }
        }
    }

    const maxDistance = Math.max(...distances.slice(1));
    return maxDistance === Infinity ? -1 : maxDistance;
}

const buildGraph = (times) => {
    const graph = {};
    for (const [u, v, w] of times) {
        if (!(u in graph)) graph[u] = [];
        graph[u].push([v, w]);
    }
    return graph;
}

const times = [[1, 2, 1], [2, 3, 2], [1, 3, 4]];

console.log(networkDelayTime(times, 3, 1)); 