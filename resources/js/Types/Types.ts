import { IconType } from "react-icons/lib";

export interface LoginProps {
    email: string;
    password: string;
}

export type NavigationItem = {
    label: string;
    icon: IconType;
    path: string;
};
