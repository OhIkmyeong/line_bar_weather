import { return_size_canvas } from "./canvas.js";
import { set_info_bgBox } from "./graph.js";

let SIZE_CANVAS;
const fontWeight = '500';

/* 배경 설정 */
export function set_background_canvas(ctx){
    //배경 하늘색 사각형
    background_box(ctx);

    //좌측 도씨
    background_mm(ctx);
    //우측 섭씨
    background_celcius(ctx);
    //월
    background_month(ctx);
}//set_background_canvas


function background_box(ctx){
    SIZE_CANVAS = return_size_canvas();
    const {wid,hei} = SIZE_CANVAS;

    ctx.fillStyle = '#ebf2fa';
    ctx.strokeStyle = '#666';

    const box_line_width = (wid * 0.4) / 100;
    ctx.lineWidth = box_line_width;

    const box_x = (wid * 14) / 100;
    const box_y = (hei * 3) / 34;
    const box_wid = (wid * 71.5) / 100;
    console.log('blue box size : ',box_x,box_y);

    ctx.strokeRect(box_x,box_y, box_wid, wid);
    ctx.fillRect(box_x,box_y, box_wid, wid);

    set_info_bgBox(box_x, box_y, box_wid, wid);
}//background_box

function background_mm(ctx){
    const {wid, hei} = SIZE_CANVAS;

    //mm
    const size_mm = (wid * 5.6) / 100;
    ctx.font = `${fontWeight} ${size_mm}px kopubDotum`;
    ctx.fillStyle = '#000';
    ctx.fillText('mm',wid * 4 / 100 , wid * 3 / 100);

    //단위
    ctx.textAlign = "right";
    const size_per = (wid * 5.8) / 100;
    ctx.font = `${fontWeight} ${size_per}px kopubDotum`;
    const x_per = wid * 12 / 100;
    const y_per = (92 - 10.3) / 6;
    const y_start = hei * y_per * 0.8;

    let text_per = 600;
    for(let i=0; i<7; i++){
        const this_text = String(text_per); 
        ctx.fillText(this_text,x_per,((hei * y_per * i) + y_start) / 100);
        text_per -= 100;
    }
}//background_mm

function background_celcius(ctx){
    const {wid,hei} = SIZE_CANVAS;
    ctx.textAlign = "left";

    //도
    const size_cc = (wid * 5.3) / 100;
    ctx.font = `${fontWeight} ${size_cc}px kopubDotum`;
    const x_cc = wid * 87 / 100;
    ctx.fillText('°C', x_cc, wid * 4 / 100);

    //단위
    const size_per = (wid * 5.8) / 100;
    ctx.font = `${fontWeight} ${size_per}px kopubDotum`;
    const x_per = wid * 88 / 100;
    const y_per = 98.5 / 6;
    const y_start = hei * y_per * 0.65;

    let text_per = 30;
    for(let i=0; i<6; i++){
        const this_text = String(text_per); 
        ctx.fillText(this_text,x_per,((hei * y_per * i) + y_start) / 100);
        text_per -= 10;
    }
}//background_celcius

function background_month(ctx){
    const {wid,hei} = SIZE_CANVAS;
    const y = (hei * 97) / 100;

    //월
    const x_month = (wid * 83) / 100;
    ctx.fillText('월', x_month, y);

    //1 ~ 9
    const m_start = (wid * 17) / 100;
    const x_per  = (wid * 5.5) / 100;
    let month = 1;
    for(let i=0; i<9; i++){
        ctx.fillText(String(month),m_start + (x_per * i), y);
        month++;
    }

    //10
    ctx.fillText("1", m_start + (x_per * 8.8), y);
    ctx.fillText("0", m_start + (x_per * 8.8) + (m_start / 7), y);

    //11
    ctx.fillText("1", m_start + (x_per * 9.9), y);
    ctx.fillText("1", m_start + (x_per * 9.85) + (m_start / 8), y);

    //12
    ctx.fillText("1", m_start + (x_per * 10.8), y);
    ctx.fillText("2", m_start + (x_per * 10.8) + (m_start / 8), y);
}