import { SyntheticEvent, useState } from "react";
import "./form.scss";

type UserPersonalData = {
    name: string;
    surname: string;
    birthDate: string;
    gender: string;
    email: string;
    isOk: boolean;
    username: string;
    password: string;
    repeatPassword: string;
    accountType: string;
};

export function Form() {
    const userData: UserPersonalData = {
        name: "",
        surname: "",
        birthDate: "",
        gender: "",
        email: "",
        isOk: false,
        username: "",
        password: "",
        repeatPassword: "",
        accountType: "",
    };

    const [counter, setCounter] = useState(0);

    const handleCounter = (value: number) => {
        setCounter(counter + value);
    };

    const [form, setForm] = useState(userData);

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
    };

    const handleForm = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setForm({
            ...form,
            [element.name]:
                element.type === "checkbox" ? element.checked : element.value,
        });
    };

    const form1 = () => {
        const template = (
            <form onSubmit={handleSubmit}>
                <legend>Personal data</legend>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onInput={handleForm}
                    required
                    placeholder="Write your name"
                />
                <input
                    type="text"
                    name="surname"
                    value={form.surname}
                    onInput={handleForm}
                    required
                    placeholder="Write your surname"
                />
                <input
                    type="date"
                    name="birth-date"
                    onInput={handleForm}
                    required
                    placeholder="Put your birth date"
                />

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value={form.gender}
                        onInput={handleForm}
                        className="in__line"
                    />
                    Male
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value={form.gender}
                        onInput={handleForm}
                        className="in__line"
                    />
                    Female
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value={form.gender}
                        onInput={handleForm}
                        className="in__line"
                    />
                    Other
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value={form.gender}
                        onInput={handleForm}
                        className="in__line"
                    />
                    Prefer not to mention
                </label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onInput={handleForm}
                    required
                    placeholder="Write your email"
                />
                <label>
                    <input
                        type="checkbox"
                        name="isOk"
                        className="in__line"
                        checked={form.isOk}
                        onChange={handleForm}
                    />
                    Would you like to receive our newsletter?
                </label>
                <div>
                    <button
                        onInput={handleForm}
                        onClick={() => {
                            handleCounter(1);
                        }}
                    >
                        Continue
                    </button>
                </div>
            </form>
        );
        return template;
    };

    const form2 = () => {
        const template = (
            <form onSubmit={handleSubmit}>
                <legend>Access data</legend>
                <input
                    type="text"
                    name="username"
                    value={form.username}
                    onInput={handleForm}
                    required
                    placeholder="Write your username"
                />
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onInput={handleForm}
                    required
                    placeholder="Write your password"
                />
                <input
                    type="password"
                    name="repeat-password"
                    value={form.repeatPassword}
                    onInput={handleForm}
                    required
                    placeholder="Repeat your password"
                />

                <select name="accountType" onChange={handleForm}>
                    <option value="personal">Personal</option>
                    <option value="pro">Pro</option>
                    <option value="business">Business</option>
                </select>
                <div>
                    <button
                        onInput={handleForm}
                        onClick={() => {
                            handleCounter(-1);
                        }}
                    >
                        Previous
                    </button>
                    <button
                        onInput={handleForm}
                        onClick={() => {
                            handleCounter(1);
                        }}
                    >
                        Continue
                    </button>
                </div>
            </form>
        );
        return template;
    };

    const form3 = () => {
        const template = (
            <>
                <p>Gracias por venir</p>
                <div>
                    <button
                        onInput={handleForm}
                        onClick={() => {
                            handleCounter(-2);
                        }}
                    >
                        Previous
                    </button>
                </div>
            </>
        );
        return template;
    };

    if (counter === 0) return form1();
    if (counter === 1) return form2();
    if (counter === 2) return form3();
    return <></>;
}
