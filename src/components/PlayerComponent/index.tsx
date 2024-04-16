import {IoIosPerson} from "react-icons/io";
import './index.scss'

type Props = {
    i: number,
    name: string
}

const Index = ({i, name}: Props) => {
    return (
        <div key={i} className='player-element'>
            <div className='player-photo'>
                <IoIosPerson/>
            </div>
            <span>{name}</span>
        </div>
    );
};

export default Index;