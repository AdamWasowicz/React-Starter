import React from 'react';
import Home from "../pages/Home";
import Error404 from "../pages/Error404";

export interface IRoute {
    template: string;
    module: React.FunctionComponent;
}

export const routes: IRoute[] = [

    {
        template: '/',
        module: Home
    },

    {
        template: '404',
        module: Error404
    },

    // Add your routes here


    // This is wildcard route
    // It's shown when no other template matches the url
    {
        template: '*',
        module: Error404
    }
];