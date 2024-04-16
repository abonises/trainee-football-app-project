import './index.scss'
import {Data} from "../../../models/models.ts";

type Props = {
    item: Data
}

const Index = ({item}: Props) => {
    return (
        <div className='coach-element'>
            <span>{item.coach.name}</span>
            <img src={item.coach.photo} alt="coach-logo"/>
        </div>
    );
};

export default Index;