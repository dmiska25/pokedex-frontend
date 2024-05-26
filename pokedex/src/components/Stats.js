import { useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
/** @jsxRuntime classic /
/* @jsx jsx */
import { Global, css, jsx } from "@emotion/react";

const Stats = ({stats, header}) => {
    const MAXSTATVALUE = 255;
    const {hp, speed, attack, defense, "special-attack": specialAttack, "special-defense": specialDefense} = stats;
    const maxStat = Math.max(hp, speed, attack, defense, specialAttack, specialDefense);
    // dinominator will be set to 25% larger than largest pokemon stat or a min of 50% MAXSTAT or a max of MAXSTAT
    const dinominator = Math.min(Math.max(MAXSTATVALUE/2, maxStat*1.25), MAXSTATVALUE);
    const toPercent = stat => (stat/dinominator)*100;

    const globalStyle = css`
        .progress {
            display: flex;
            height: 70%;
            overflow: hidden;
            line-height: 0;
            font-size: .75rem;
            background-color: #e9ecef;
            border-radius: .25rem;
        }
        
        .progress-bar {
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
            color: #fff;
            text-align: center;
            white-space: nowrap;
            background-color: #007bff;
            transition: width .6s ease;
        }
    `;

    const progressBarCell = css`
        width: 70%;
    `;

    const progressBarHeader = css(
        {
            minWidth: "30%",
            textAlign: "left",
            whiteSpace: "nowrap"
        },
        header
    );

    // On mount
    useEffect(() =>  {
        // set progress bar colors
        const getBarColor = (value) => {
            switch(Math.floor(value/30)) {
                case 0: return "red";
                case 1: return "orange";
                case 2: return "gold";
                case 3: return "greenyellow";
                case 4: return "lightseagreen";
                default: return "royalblue";
            }
        };

        const progressBars = document.getElementsByClassName("progress-bar");
        for (let progressBar of progressBars) {
            progressBar.style.backgroundColor = getBarColor(progressBar.textContent);
        };
    }, []);

    return (
        <table css={css`
            width: 50%;
            height: 60%;
            min-width: 18.75rem;
        `}>  
        <Global styles={globalStyle}></Global>
            <tbody>
                <tr>
                    <th css={progressBarHeader}>HP:</th>
                    <td css={progressBarCell}>
                        <ProgressBar now={toPercent(hp)} label={hp}/>
                    </td>
                </tr>
                <tr>
                    <th css={progressBarHeader}>Attack:</th>
                    <td css={progressBarCell}>
                        <ProgressBar now={toPercent(attack)} label={attack}/>
                    </td>
                </tr>
                <tr>
                    <th css={progressBarHeader}>Defense:</th>
                    <td css={progressBarCell}>
                        <ProgressBar now={toPercent(defense)} label={defense}/>
                    </td>
                </tr>
                <tr>
                    <th css={progressBarHeader}>Special Attack:</th>
                    <td css={progressBarCell}>
                        <ProgressBar now={toPercent(specialAttack)} label={specialAttack}/>
                    </td>
                </tr>
                <tr>
                    <th css={progressBarHeader}>Special Defense:</th>
                    <td css={progressBarCell}>
                        <ProgressBar now={toPercent(specialDefense)} label={specialDefense}/>
                    </td>
                </tr>
                <tr>
                    <th css={progressBarHeader}>Speed:</th>
                    <td css={progressBarCell}>
                        <ProgressBar now={toPercent(speed)} label={speed}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Stats;