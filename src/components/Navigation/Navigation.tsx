import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes, IRoute }  from '../../router';


const Navigation: React.FC = () => {
    return (
        <Router>
            <Routes>
                {
                    routes.map((route: IRoute, i: number) => (
                        <Route
                            key={i}
                            path={route.template}
                            element={<route.module/>}
                        />
                    ))
                }
            </Routes>
        </Router>
    )
}

export default Navigation;