import {ReactElement} from 'react';
import style from './UserCard.module.css';

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};
interface IProps {
    user: User;
}

const UserCard = ({ user, ...props }: IProps): ReactElement => {
    return (
        <div onClick={() => {window.open(`https://mapy.cz/turisticka?source=coor&id=${user.address.geo.lng}%2C${user.address.geo.lat}&x=${user.address.geo.lng}&y=${user.address.geo.lat}z=16`, '_blank');}}
             className={'grid grid-cols-3 hover:bg-blue-light text-center cursor-pointer select-none ' + style.row}>
            <div className={style.column}>{user.name}</div>
            <div className={style.column}>{user.email}</div>
            <div className={style.column}>{user.phone}</div>
        </div>
    );
};
export default UserCard;
