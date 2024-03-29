import React, { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
    const [message, setMessage] = useState("");
    const [variant, setVariant] = useState("");

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>

            <div className={styles.controlsWrapper}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{ alignSelf: "baseline" }}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea
                            id="message"
                            className={styles.messageInput}
                            value={message}
                            onChange={(event) => {
                                setMessage(event.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map((option, index) => {
                            const typeOfVariant = `variant-${option}`;
                            return (
                                <label htmlFor={typeOfVariant} key={index}>
                                    <input
                                        id={typeOfVariant}
                                        type="radio"
                                        name="variant"
                                        value={option}
                                        checked={variant === option}
                                        onChange={(event) =>
                                            setVariant(event.target.value)
                                        }
                                    />
                                    {option}
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button>Pop Toast!</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToastPlayground;
