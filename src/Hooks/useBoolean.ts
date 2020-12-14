import React, { useState } from 'react';

function useBoolean (defaultValue:Boolean) {
    const [ status, setStatus ] = useState( defaultValue );
    const setBooleanStatus = ( value:Boolean ) => {
        setStatus( value );
    };

    return [ status, setBooleanStatus ];
}

export default useBoolean