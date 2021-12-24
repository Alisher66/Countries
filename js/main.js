import { Data } from "./data.js";
import { Countries } from "./components.js";

const tempApi = new Data();
const data = tempApi.loadData();

const input1 = new Countries(data);
input1.addCards();
input1.filterItem()
//  console.log();
// data.then(console.log)



