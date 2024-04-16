import './index.scss'
import {Data} from "../../../models/models.ts";

type Props = {
    item: Data,
}

const Index = ({item}: Props) => {
    return (
        <div className='team'>
            <div className='circle'>
                <div className='second-circle'>
                    <img src={item.team.logo} alt="team-logo"/>
                </div>
            </div>
            <span>{item.team.name}</span>
        </div>
    )
};

export default Index;