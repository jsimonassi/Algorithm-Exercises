const largestComponent = (graph) => {
    const visited = new Set();
    let largestIslandSize = 0;
    
    for(let node in graph){
        const currentIslandSize = explore(graph, node, visited);
        if(currentIslandSize > largestIslandSize){
            largestIslandSize = currentIslandSize   
        }
    }

    return largestIslandSize;
}

const explore = (graph, current, visited) => {
    if(visited.has(current)) return 0;

    visited.add(current);
    let size = 1; //CurrentNode
    for(let neighbor of graph[current]){
       size += explore(graph, neighbor, visited);
    }

    return size;
}


console.log(largestComponent({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}));

