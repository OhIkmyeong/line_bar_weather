import { OBJ_BOX_TYPE } from "./make_table.js";

let TXT_SMALL_TITLE;
let KEY_ITEM;
let NUM_MONTH = 1;

export function clear_result(sect){
    sect.innerHTML = '';
}//clear_result

export function make_title(sect,item){
    const {pid, name} = item;
    const title = document.createElement('INPUT');
    title.setAttribute('type','text');
    title.readOnly = true;
    title.value = `${pid}_${name}`;
    title.classList.add('title');
    sect.appendChild(title);
}//make_title

export function make_box(sect,item,boxType){
    //create "box"
    const box = document.createElement('DIV');
    box.classList.add('box');
    
    //title_small
    make_small_title(box,boxType);

    //label
    make_labels(item,box,boxType);

    //⚡ append
    sect.appendChild(box);
}

function make_small_title(box,boxType){
    const s_title = document.createElement('H2');
    s_title.classList.add('title_small');
    s_title.classList.add(boxType);

    const {max,avg,min,rain} = OBJ_BOX_TYPE;
    switch(boxType){
        case max :
            TXT_SMALL_TITLE = "최고기온";
            break;
        case avg :
            TXT_SMALL_TITLE = "평균기온";
            break;
        case min :
            TXT_SMALL_TITLE = "최저기온";
            break;
        case rain :
            TXT_SMALL_TITLE = "강수량";
            break;
        default :
            break;
    }

    s_title.innerText = TXT_SMALL_TITLE;
    box.appendChild(s_title);
}//make_small_title

function make_labels(item,box,boxType){
    /* KEY */
    const {avg,max,min,rain} = OBJ_BOX_TYPE;
    switch(boxType){
        case avg :
            KEY_ITEM = "avg";
            break;
        case max :
            KEY_ITEM = "max";
            break;
        case min :
            KEY_ITEM = "min";
            break;
        case rain :
            KEY_ITEM = "rain";
            break;
            default :
                console.log('UNVALID KEY')
                return;
    }//switch

    /* LABEL */
    NUM_MONTH = 1;

    for(let val of item[KEY_ITEM]){
        const lbl = document.createElement('LABEL');
        lbl.classList.add(boxType);

        const span = document.createElement('SPAN');
        span.innerText = `${NUM_MONTH}월`;
        NUM_MONTH++;

        const ipt = document.createElement('INPUT');
        ipt.setAttribute('type','text');
        ipt.readOnly = true;
        ipt.value = get_coord_y(val,KEY_ITEM);

        lbl.appendChild(span);
        lbl.appendChild(ipt)
        box.appendChild(lbl);
    }//for
}//make_labels

/* AI에 얹을 높이 계산 */
function get_coord_y(val,keyName){
    switch(keyName){
        case "rain" : 
            /* 강수량 막대 그래프 */
            //28 : height(box)
            return ((val * 28) / 600).toFixed(2);
            break;
            
        default :
            /* 기온 꺾은선 그래프 */
            //31 : y(box : 3) + height(box : 28)
            //0.56  : height(box : 28) / 50  : (30 ~ -20도 (10도씩 5스텝))
            //11.2 : 0도 미만일때 값 (왜냐면..-20까지 있으니까??)

            return (31 - ((val * 0.56) + 11.2)).toFixed(2);
            break;
    }
}//get_coord_y