import { clear_result, make_box, make_title } from "./make_element.js";

export const OBJ_BOX_TYPE = Object.freeze({
    max : "cel_max",
    avg : "cel_avg",
    min : "cel_min",
    rain : "rain"
});

export async function set_select(){
    const data = await fetch_data();

    //π² κ°μ₯ μ²μκ°μ λ³΄μ¬μ€λΌ
    on_change_select(data[0]);

    //π² μ ννλ©΄ λ°λκ²
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

    //title(PID + μ§μ λͺ)
    make_title(sect,item);
    
    //νμ
    const {max, avg, min, rain} = OBJ_BOX_TYPE;

    //μ΅κ³ κΈ°μ¨
    make_box(sect,item,max);
    //νκ· κΈ°μ¨
    make_box(sect,item,avg);
    //μ΅μ κΈ°μ¨
    make_box(sect,item,min);
    //κ°μλ
    make_box(sect,item,rain);
}//on_change_select

