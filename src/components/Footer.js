import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_tr9e4iv",  
            "template_l0n6zzl", 
            form.current,
            "kHqBl_kyMBasLhFa-" 
        )
        .then(
            () => {
                setMessageSent(true);
                form.current.reset(); 
            },
            (error) => {
                console.error("EmailJS Error:", error);
            }
        );
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                    <div class="working-hours">
                        <h2 class="footer-title">Робочі години</h2>
                        <p><span class="day">Понеділок, середа, п’ятниця:</span> <span class="time">9:00 – 13:00</span></p>
                        <p><span class="day">Вівторок, четвер:</span> <span class="time">14:00 – 18:00</span></p>
                        <p><span class="day">Онлайн-консультації:</span> <span class="time">9:00 – 20:00</span></p>
                        <p class="note">Консультації на дому проводяться за попередньою домовленістю.</p>
                        <div className="copywrite">© 2025 by Daria Lysunets </div>
                    </div>
                    <div className="contact-form-container">
                        <h2>Залиште мені повідомлення</h2>
                        <form ref={form} onSubmit={sendEmail} className="contact-form">
                            
                            <div className="input-group">
                                <div className="input-wrapper">
                                    <label htmlFor="first_name">Ім’я *</label>
                                    <input type="text" id="first_name" name="first_name" required />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="last_name">Прізвище *</label>
                                    <input type="text" id="last_name" name="last_name" required />
                                </div>
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="user_email">Пошта *</label>
                                <input type="email" id="user_email" name="user_email" required />
                            </div>

                            <div className="input-wrapper">
                                <label htmlFor="message">Повідомлення *</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>

                            <button type="submit">Надіслати</button>
                        </form>
                        {messageSent && <p className="success-message">Повідомлення надіслано!</p>}
                    </div>
            </div>
        </footer>
    );
};

export default Footer; 
