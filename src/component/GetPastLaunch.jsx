import * as React from 'react';
import { useQuery, gql } from '@apollo/client';
import {PAST_LAUNCHES} from '../GraphQl/query.js'

export const GetPastLaunch = () => {

    const {data, error, loading} = useQuery(PAST_LAUNCHES);

    React.useEffect(()=> {

        console.log(data);

    },[data]);

    return (<>Hello</>)
}
