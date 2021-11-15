export async function include_select(){
    const data = await fetch_select();
    const sect_sel = document.getElementById('sect_sel');
    sect_sel.innerHTML = data;
}

export function fetch_select(){
    return fetch('./include/select.html')
    .then(res => res.text());
}//fetch_select