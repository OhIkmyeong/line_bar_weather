import { fetch_data } from '../src/make_table.js';
import {include_select} from './../src/include.js';
import { set_canvas } from './canvas.js';
import { set_cascade_save, set_on_select } from './select.js';


/* 🚩 실행 */
//include
include_select().then(()=>{
    //canvas
    fetch_data()
    .then(items => {
        //셀렉트에서 선택시 반영될 수 있도록
        set_on_select(items);
        //처음값 - 속초
        set_canvas(items[0]);
        //연속저장 버튼 세팅
        set_cascade_save(items);
    });
});


