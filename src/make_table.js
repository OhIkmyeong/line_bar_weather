import { clear_result, make_box, make_title } from "./make_element.js";

export const OBJ_BOX_TYPE = Object.freeze({
    max : "cel_max",
    avg : "cel_avg",
    min : "cel_min",
    rain : "rain"
});

export async function set_select(){
    const data = await fetch_data();

    //🎲 가장 처음값을 보여줘라
    on_change_select(data[0]);

    //🎲 선택하면 바뀌게
    const sel = document.getElementById('sel');
    sel.addEventListener('change',(e)=>{
        const val = e.target.value;
        for(let item of data){
            if(item.name == val){on_change_select(item)}
        }
    });
}//set_select

export function fetch_data(){
    return fetch('./data/data.json')
    .then(res=>res.json())
    .then(data => data.item);
}//fetch_data

function on_change_select(item){
    const sect = document.getElementById('sect_result');

    //clear
    clear_result(sect);

    //title(PID + 지점명)
    make_title(sect,item);
    
    //타입
    const {max, avg, min, rain} = OBJ_BOX_TYPE;

    //최고기온
    make_box(sect,item,max);
    //평균기온
    make_box(sect,item,avg);
    //최저기온
    make_box(sect,item,min);
    //강수량
    make_box(sect,item,rain);
}//on_change_select

