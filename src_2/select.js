import { set_canvas } from "./canvas.js";

let start_num = 0;

/* 셀렉트에서 직접 선택 */
export function set_on_select(items){
    const sel = document.getElementById('sel');
    sel.addEventListener('change',e=>{
        const val = e.target.value;
        for(let item of items){
            if(item.name == val){set_canvas(item)}
        }//for
    });//change
}//set_on_select

/* 연속저장 */
export function set_cascade_save(items){
    const btn_cascade = document.getElementById('btn_cascade');
    btn_cascade.addEventListener('click',()=>{
        if(start_num >= items.length){
            alert(`${items.length}개 전부 저장 완료`)
            return;}
        set_canvas(items[start_num]);
        const btn_save = document.getElementById('btn_save');
        btn_save.click();
        start_num++;
    });//click
}//set_cascade_save