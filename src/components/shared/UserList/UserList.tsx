import {ReactElement} from 'react';
import UserCard from './components/UserCard/UserCard';
import style from './UserList.module.css';

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
    users: User[];
}

const UserList = ({ users, ...props }: IProps): ReactElement => {

    return (
        <div>
            <div className={'grid grid-cols-3 text-center ' + style.header}>
                <h2>Name</h2>
                <h2>Email</h2>
                <h2>Phone</h2>
            </div>
            <div className={'flex flex-col'}>
            {users.map((user) => (
                <UserCard key={user.id} user={user}/>
            ))}
            </div>
        </div>
    );
};

export default UserList;
