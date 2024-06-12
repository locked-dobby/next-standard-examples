import { HomeContainer } from "component/home/home-container";
import { PathRouteProps } from "react-router-dom";

interface RouteElement extends PathRouteProps {}

export const routeElementList: Array<RouteElement> = [
    {
        path: "/",
        element: <HomeContainer />,
    },
];
