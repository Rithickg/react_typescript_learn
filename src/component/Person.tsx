import { FC, useState, ChangeEvent, useContext } from 'react';
import { AppContext } from '../App';

export enum HairColor {
    Blond = "You are blond",
    Brown = "You are brown",
    Pink = "You are pink"
}

interface Props {
    name: string,
    age: number,
    email: string,
    hairColor: HairColor
}



export const Person: FC<Props> = ({ name, age, email, hairColor }) => {
    const text = useContext(AppContext)
    const [country, setCountry] = useState<string>("")

    type NameType = "Jack" | "Rock" | "Frank"

    const nameType: NameType = "Rock"
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

    return (
        <div className='App'>
            <h1>TypeScript</h1>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{email}</h3>
            <input placeholder='Enter your country...' onChange={handleChange} />
            <h3>{country}</h3>
            <h4>{hairColor}</h4>
            <h5>{nameType}</h5>
            <h6>{text?.name}</h6>
        </div>
    );
}
