import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'

const withRouter = (Child:any) => {
    return ( props:any ) => {
        const location = useLocation();
        const navigate = useNavigate();
        const param = useParams();
        return <Child { ...props } navigate={ navigate } location={ location } param={ param } />;
    }
}

export default withRouter;