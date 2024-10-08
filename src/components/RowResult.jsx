import { formatter } from "../util/investment";

export default function RowResult({resultOnInvest}){
    return(
        <tr>
            <td>{resultOnInvest.year}</td>
            <td>{formatter.format(resultOnInvest.valueEndOfYear)}</td>
            <td>{formatter.format(resultOnInvest.interest)}</td>
            <td>{formatter.format(resultOnInvest.totalInterest)}</td>
            <td>{formatter.format(resultOnInvest.investCapital)}</td>
        </tr>
    );
}
