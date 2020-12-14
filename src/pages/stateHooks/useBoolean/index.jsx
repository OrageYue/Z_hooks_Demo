import React from 'react';
import { Button, Card } from 'antd';
import BlueBerryBox from '../../../component/codeBox/codeBox'
import useBoolean from '../../../Hooks/useBoolean';
// import useBooleanCode from `raw-loader!../../../Hooks/useBoolean.ts`
function BooleanHook () {

    const [ status, setBooleanStatus ] = useBoolean( false );
    
    return (
        <div>
            <BlueBerryBox code={``} title="useBooleanx" desc="状态切换hook">
                <p>当前状态：
                    <span>{ status.toString() }</span>
                </p>
                <Button type="primary" onClick={ () => setBooleanStatus( !status ) }>切换</Button>
            </BlueBerryBox>
        </div>
    )
};

export default BooleanHook;