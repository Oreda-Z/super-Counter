import React from "react";
import s from './ControlPanel.module.css';

type PropsType = {
    iteration: () => void
    redirectSettings: () => void
    reset: () => void
    startValue: number
    endValue: number
    counter: number
}

export const ControlPanel: React.FC<PropsType> = (props) => {





    return (
        <div className={s.panel}>
            <div className={s.display}>
                {props.counter < props.endValue && <div className={s.counter}>{props.counter}</div>}
                {props.counter === props.endValue && <div className={s.counterFinish}>{props.counter}</div>}
            </div>
            <div className={s.next}>
                <button
                    disabled={props.counter === props.endValue}
                        className={props.counter < props.endValue? s.nextButton : s.nextButtonDis}
                    onClick={props.iteration}>next</button>
            </div>
            <div className={s.reset}>
                    <button
                        disabled={props.counter === props.startValue}
                        className={props.counter === props.startValue? s.resetButtonDis : s.resetButton}
                        onClick={props.reset}>reset</button>
            </div>
            <div className={s.set}>
                <button onClick={props.redirectSettings}>Set</button>
            </div>
        </div>
    )
}