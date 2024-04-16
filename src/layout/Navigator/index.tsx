import {NavLink, Outlet, Route, Routes} from "react-router-dom";
import './index.scss'
import GameComponent from "../../components/GameComponent";
import {DataTeams} from "../../../models/models.ts";
import {arrayTeams} from "../../../data/data.ts";
import {useState} from "react";
import cn from 'classnames';
import EmptyPage from "../../components/EmptyPage";

type Props = {
    data: DataTeams[] | null
}
export default function Navigator({data}: Props) {
    const [activeTeam, setActiveTeam] = useState<boolean>(true);

    return (
        <div className={cn('nav-layout', !activeTeam && 'disabled')}>
            <div className='logo-box'>
                <span>PREMIER LEAGUE <img src="image61.png" alt="logo"/></span>
            </div>
            <section className='team-outlet'>
                <Outlet/>
            </section>
            <nav>
                <div className="links">
                    {arrayTeams.map((item, i) => (
                        <NavLink key={i} onClick={() => setActiveTeam(true)}
                                 className={cn('link', activeTeam || 'active')}
                                 to={item}>{item.toUpperCase().slice(0, -1) + ' ' + (i+1)}</NavLink>
                    ))}
                </div>
            </nav>
            <section className='game-outlet'>
                {!activeTeam && (
                    <Route index element={<EmptyPage/>}/>
                )}
                <Routes>
                    {data!.map((item, i) => (
                        <Route key={i} path={`team${i + 1}`} element={<GameComponent dataTeam={item}/>}/>
                    ))}
                </Routes>
            </section>
        </div>
    );
}