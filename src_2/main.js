import { fetch_data } from '../src/make_table.js';
import {include_select} from './../src/include.js';
import { set_canvas } from './canvas.js';
import { set_cascade_save, set_on_select } from './select.js';


/* π© μ€ν */
//include
include_select().then(()=>{
    //canvas
    fetch_data()
    .then(items => {
        //μλ νΈμμ μ νμ λ°μλ  μ μλλ‘
        set_on_select(items);
        //μ²μκ° - μμ΄
        set_canvas(items[0],false);
        //μ°μμ μ₯ λ²νΌ μΈν
        set_cascade_save(items);
    });
});


