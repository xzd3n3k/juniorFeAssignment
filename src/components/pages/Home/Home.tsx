import {ReactElement, useState} from 'react';
import style from './Home.module.css';
import { Button, Icon, UserList } from "../../../components/shared";

const Home = (): ReactElement => {

    const [data, setData] = useState<any[]>([]);

    const fetchData = async (): Promise<void> => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const fetchedData = await response.json();
            setData(fetchedData); // Update the state with the fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

  return (
    <main className={style.home}>
        <div className={'flex flex-row gap-3.5'}>
            <h1>User list</h1>
            <Button variant={"secondary"} onClick={fetchData}>
              <Icon iconName="download"/>
            </Button>
        </div>
      <UserList users={data}></UserList>
    </main>
  );
};

export default Home;
