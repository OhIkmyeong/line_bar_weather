import { set_canvas } from "./canvas.js";

let start_num = 0;

/* 영문판인지 체크 */
export function check_eng(){
    //영문판인지 체크
    const eng = document.getElementById('eng');
    const is_eng = eng.checked;
    return is_eng;
}


/* 셀렉트에서 직접 선택 */
export function set_on_select(items){
    //셀렉트 선택시 캔버스 그리기 시작
    const sel = document.getElementById('sel');
    sel.addEventListener('change',e=>{
        //해당 정보로 캔버스 그리시작
        const val = e.target.value;
        for(let item of items){
            if(item.name == val){set_canvas(item)}
        }//for
    });//change
}//set_on_select

/* 연속저장 */
export function set_cascade_save(items){
    //버튼 누를시 저장 시작
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