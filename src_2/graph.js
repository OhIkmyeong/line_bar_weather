import { return_size_canvas } from "./canvas.js";

let SIZE_CANVAS;
let stroke_color,dash_val;

let bgBox = {
    x:undefined,
    y : undefined,
    width : undefined,
    height : undefined,
    for_bar : undefined
}

/* 그래프를 그리기 위한 준비... */
export function set_info_bgBox(x,y,width,height){
    bgBox.x = x;
    bgBox.y = y;
    bgBox.width = width;
    bgBox.height = height;
    bgBox.for_bar = y + height;
}//set_info_bgBox

/* DRAW GRAPH */
export function draw_all_graph(ctx,item){
    console.log(item);
    //SIZE CANVAS 설정;
    SIZE_CANVAS = return_size_canvas();

    //꺾은선 - 최고기온
    draw_line_graph(ctx,item,"max");
    draw_line_graph(ctx,item,"avg");
    draw_line_graph(ctx,item,"min");

    //BAR GRAPH - rain
    draw_rain_graph(ctx,item);
}//draw_all_graph

/* 꺾은선 - 최고기온 */
function draw_line_graph(ctx,item,type){
    const {x,y,width,height} = bgBox;
    const line_type = item[type];

    ctx.beginPath();
    ctx.lineWidth = (width * 1.3) / 100;
    
    switch(type){
        case "max":
            stroke_color = '#ff8c00';
            break;
        case "avg":
            stroke_color = '#af0a96';
            break;
        case "min":
            stroke_color = '#009b96';
            break;
    }
    ctx.strokeStyle = stroke_color;

    switch(type){
        case "avg" :
            dash_val = [];
            break;
            default : 
            dash_val = [(width / 28),(width * 0.3 / 28)];
            break;
    }
    ctx.setLineDash(dash_val);
    
    const dot_x_start = x + (SIZE_CANVAS.wid * 4.5 / 100);
    const dot_per =  ((width * 2.15) / 28);

    const y_per = height / 50;
    const center_y = y_per * 20;

    let prev_x = dot_x_start;
    let prev_y = (height + y) - ((line_type
        [0] * (y_per)) + center_y);
    
    ctx.moveTo(prev_x, prev_y);

    for(let i=1; i<line_type.length; i++){
        const dot_x = dot_x_start + (dot_per * i);
        const dot_y = (height + y) - ((line_type[i] * (y_per)) + center_y);
        ctx.lineTo(dot_x,dot_y);
        ctx.stroke();

        prev_x = dot_x;
        prev_y = dot_y;
    }//for
}//draw_line_graph

/* rain GRAPH */
function draw_rain_graph(ctx,item){
    const {x,width,height,for_bar} = bgBox;
    const {rain} = item;
    const bar_wid = SIZE_CANVAS.wid / 28;
    
    const bar_x_start = x + (SIZE_CANVAS.wid * 2.9 / 100);
    const bar_x_per = ((width * 2.15) / 28);

    ctx.fillStyle = '#3889e9';
    ctx.strokeStyle = '#002896';
    ctx.lineWidth = (width * 0.6) / 100;
    ctx.setLineDash([]);

    for(let i=0; i<rain.length; i++){
        const bar_x_final = bar_x_start + (bar_x_per * i);
        const bar_hei = (rain[i] * height) / 600;
        ctx.fillRect(bar_x_final,for_bar - bar_hei,bar_wid, bar_hei);
        ctx.strokeRect(bar_x_final,for_bar - bar_hei,bar_wid, bar_hei);
    }//for
}//draw_rain_graph