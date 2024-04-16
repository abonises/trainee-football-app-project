import React from 'react';
import './index.scss'
import {Data} from '../../../models/models.ts'
import MatchInfo from "../MatchInfo";

type Props = {
    dataTeam: Data[]
}
const Index = ({dataTeam}: Props) => {
    return (
        <div className='team-component'>
            <div className='match-info'>
                {dataTeam!.map((item, i) => (
                    <React.Fragment key={item.team.name}>
                        <MatchInfo item={item}/>
                        {i !== dataTeam!.length - 1 && <p className='versus'>VS</p>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Index;