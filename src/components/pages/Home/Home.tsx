// Linting není použitý => chyby v závorkách, odsazeních
import {ReactElement, useState} from 'react';
import style from './Home.module.css';
// tady mezery u {} jsou, jinde ne
import { Button, Icon, UserList } from "../../../components/shared";

const Home = (): ReactElement => {
// typ any není vhodné používat kvůli nejasnosti typu => popírá to princip typescriptu
// data -> users?
    const [data, setData] = useState<any[]>([]);

    const fetchData = async (): Promise<void> => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const fetchedData = await response.json();
            // jak víte, že tam budou zrovna data, která potřebujete pro komponentu UserLIst?
            // co taková 404?
            setData(fetchedData); // Update the state with the fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

  return (
    <main className={style.home}>
      {/* proč ne třída? */}
        <div className={'flex flex-row gap-3.5'}>
            <h1>User list</h1>
            {/*
              variant="secondary"
              co když bude načítání pomalé, jak se uživatel dozví, že probíhá načítání?
              Pak začne klikat jako zběsilý!
            */}
            <Button variant={"secondary"} onClick={fetchData}>
              <Icon iconName="download"/>
            </Button>
        </div>
      <UserList users={data}></UserList>
    </main>
  );
};

export default Home;
