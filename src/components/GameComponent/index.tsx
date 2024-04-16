import './index.scss'
import {Data, PlayersArray} from '../../../models/models.ts'
import React, {useEffect, useState} from 'react';
import CoachComponent from "../CoachComponent";
import PlayerComponent from "../PlayerComponent";

type Props = {
    dataTeam: Data[]
}

const Index = ({dataTeam}: Props) => {
    const [team1, setTeam1] = useState<PlayersArray[]>([]);
    const [team2, setTeam2] = useState<PlayersArray[]>([]);

    useEffect(() => {
        const firstArray = dataTeam[0].startXI
        const secondArray = dataTeam[1].startXI
        setTeam1(firstArray);
        setTeam2(secondArray);
    }, [dataTeam]);


    const fillBoard = (list: { player: { grid?: any; name?: any; }; }[]) => {
        const columns: { [key: string]: JSX.Element[] } = {}
        const columnElements = [];
        list.forEach((item, i) => {
            const {grid, name} = item.player;
            const [column, _row] = grid.split(":");

            if (!columns[column]) {
                columns[column] = [];
            }

            columns[column].push(
                <PlayerComponent i={i} name={name}/>
            );
        });

        for (let column in columns) {
            columnElements.push(
                <div key={column} className='column'>
                    {columns[column]}
                </div>
            );
        }

        return columnElements;
    }

    return (
        <div className='game'>
            <div className='soccer-field'>
                <div className='team-structure'>
                    {fillBoard(team1)}
                </div>
                <div className='team2-structure'>
                    {fillBoard(team2)}
                </div>
            </div>
            <div className='coach'>
                {dataTeam!.map((item, i) => (
                    <React.Fragment key={item.team.name}>
                        <CoachComponent item={item}/>
                        {i !== dataTeam!.length - 1 && <p className='coach-title'>Coach</p>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Index;