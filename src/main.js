import { include_select } from "./include.js";
import { set_select } from "./make_table.js";



/* ✨ 실행 */
include_select()
.then(()=>{
    set_select();
});