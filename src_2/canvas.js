import {set_background_canvas} from './canvas_background.js';
import { draw_all_graph } from './graph.js';

export let SIZE_CANVAS = {
    wid : undefined,
    hei : undefined
}

export function set_canvas(item){
    const canvas = document.getElementById('cv');
    const ctx = canvas.getContext('2d');
    //change_graph_name
    const graph_name = document.getElementById('graph_name');
    graph_name.innerText = `${item.pid}__${item.name}`;

    //set size
    set_size_canvas(canvas);

    //clear
    clear_canvas(canvas,ctx);

    //draw_background
    set_background_canvas(ctx);

    //draw barGraph - rain
    draw_all_graph(ctx,item);

    //버튼 누르면 저장
    set_save(canvas,item);
}


/* 사이즈 설정 */
function set_size_canvas(canvas){
    const sect = canvas.parentElement;
    SIZE_CANVAS.wid = sect.offsetWidth * 2;
    SIZE_CANVAS.hei = sect.offsetHeight * 2;
    const {wid,hei} = SIZE_CANVAS;
    console.log('canvas size : ',wid,hei);
    canvas.width = wid;
    canvas.height = hei;
}//set_size_canvas

export function return_size_canvas(){
    return SIZE_CANVAS;
}

/* 리셋 */
function clear_canvas(canvas,ctx){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.beginPath();
}//set_save

/* 버튼 누르면 저장 */
function set_save(canvas,item){
    const btn_save = document.getElementById('btn_save');
    btn_save.href = canvas.toDataURL('image/png');
    btn_save.download = `${item.pid}_${item.name}`;
}//set_save

/* SVG만들기 */
function make_svg(ctx){
    const sect_svg = document.getElementById('sect_svg');
    const svg_data = ctx.getSVG();
}//make_svg