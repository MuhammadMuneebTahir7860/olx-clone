import {useState} from 'react';

export function CommonHooks (){
const [visible, setVisible] = useState(5);

    const loadMore = () =>{
        setVisible(preValue=> preValue+10);
    }
    return([visible,loadMore])

}
