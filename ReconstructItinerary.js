// You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

// All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

// For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

 

// Example 1:


// Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// Output: ["JFK","MUC","LHR","SFO","SJC"]
// Example 2:


// Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.


var findItinerary = function(tickets) {
    const routeHash = {};
    tickets.forEach((item) => {
        if (!routeHash[item[0]]) {
            routeHash[item[0]] = [item[1]];
        } else {
            routeHash[item[0]].push(item[1]);
        }
    });

    Object.keys(routeHash).forEach((item) => {
        if (routeHash[item].length > 1) {
            routeHash[item].sort();
        }
    });
    
    const response = [];
    
    const dfs = (currentKey) => {
        while (routeHash[currentKey] && routeHash[currentKey].length > 0) {
            const nextKey = routeHash[currentKey].shift(); 
            dfs(nextKey);
        }
        response.unshift(currentKey); 
    };

    dfs("JFK");

    return response;
};

const tickets = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]];
console.log("Response", findItinerary(tickets));