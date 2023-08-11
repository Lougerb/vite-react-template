import Textbox from "../../Components/Input/Textbox/Textbox";
import Radio from "../../Components/Input/Radio/Radio";
import Checkbox from "../../Components/Input/Checkbox/Checkbox";
import Helmet from "react-helmet";

function Contact() {
    return ( 
        <div className="contact">
            <Helmet>
                <title>Contact</title>
            </Helmet>

            <div className="layout">
                <h2 className="head2">Contact</h2>
            </div>
            <div className="layout">
                <form action="" className="contact-form">
                    <table className="contact-form__table">
                        <tbody className="contact-form__table__tbody">
                            <tr className="contact-form__table__row">
                                <th className="contact-form__table__head">Sample Text</th>
                                <td className="contact-form__table__data">
                                    <Textbox />
                                </td>
                            </tr>
                            <tr className="contact-form__table__row">
                                <th className="contact-form__table__head">Sample Radio</th>
                                <td className="contact-form__table__data contact-form__input__radio">
                                    <Radio name='radioGroupName1' id='rad1' span='Rad 1' />
                                    <Radio name='radioGroupName1' id='rad2' span='Rad 2' />
                                    <Radio name='radioGroupName1' id='rad3' span='Rad 3' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
     );
}

export default Contact;