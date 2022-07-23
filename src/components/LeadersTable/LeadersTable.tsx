import "./LeadersTable.scss"
import {FC} from "react"
import {ILeadersTable} from "./types";

const LeadersTable: FC<ILeadersTable> = ({leaders}) => {

    const byField = (field) => {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }
    return (
        <div className={"liader-table"}>
            <div className={"liader-table__title"}>Список лидеров</div>
            {leaders.sort(byField("time")).slice(0, 5).map(val => {
                return <div className={"liader-table__item"} key={val.id}>
                    <div className={"liader-table__name"}>{`Имя: ${val.name}`}</div>
                    <div className={"liader-table__time"}>{`Время: ${val.time}`}</div>
                </div>
            })}
        </div>
    )
}

export default LeadersTable;

