import "./form.scss";

export function PersonalDataForm() {
    return (
        <form>
            <div className="personal__data">
                <legend>Personal data</legend>
                <input
                    type="text"
                    name="name"
                    // value={}
                    // onInput={}
                    placeholder="Write your name"
                />
                <input
                    type="text"
                    name="surname"
                    // value={}
                    // onInput={}
                    placeholder="Write your surname"
                />
                <input
                    type="date"
                    name="birth-date"
                    placeholder="Put your birth date"
                />

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="in__line"
                    />
                    Male
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="in__line"
                    />
                    Female
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        className="in__line"
                    />
                    Other
                </label>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="not-mention"
                        className="in__line"
                    />
                    Prefer not to mention
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Write your email"
                />
                <label>
                    <input type="checkbox" name="isOk" className="in__line" />
                    Would you like to receive our newsletter?
                </label>
            </div>
            <div className="access__data">
                <legend>Access data</legend>
            </div>
        </form>
    );
}
