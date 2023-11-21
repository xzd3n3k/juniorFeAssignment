import {ReactElement} from 'react';
// pokud byste vytvořil soubor ./components/index.ts
// tak by stačilo importovat import { UserCard } from './components'
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
// řádek nad IProps
// osobně ppreferuji generika Array<User> místo User[]

/*
const UserList = ({ users, ...props }: IProps): ReactElement => (
  <div>
*/
// proč props, když je nepoužíváte
const UserList = ({ users, ...props }: IProps): ReactElement => {

    return (
        <div>
            {/* tady by se spíše šikla tabulka z hlediska sémantiky, muduly třídy než tailwindové trídy */}
            {/* clsx('grid grid-cols-3 text-center', style.header) */}
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
