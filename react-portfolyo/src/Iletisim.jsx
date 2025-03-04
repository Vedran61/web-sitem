import "./App.css";

const Iletisim = () => {
    return (
        <div className="contact">
            <div className="contact-title">
                <h1>İLETİŞİM</h1>
            </div>
            <div className="contact-paragraf">
                <p>Herhangi bir sorunuz veya öneriniz varsa aşağıdaki formu kullanarak bana ulaşabilirsiniz.</p>
            </div>
            <form className="contact-form">
                <label htmlFor="name">Adınız:</label>
                <input type="text" placeholder="Adınızı giriniz" name="name" />
                <label htmlFor="email">Mail adresiniz:</label>
                <input type="email" placeholder="Mail adresinizi giriniz" name="email" />
                <label htmlFor="message">Mesajınız:</label>
                <textarea rows="8" placeholder="Mesajınızı yazınız" name="message" />
                <button type="submit" className="contact-submit">Gönder</button>
            </form>
        </div>
    );
};

export default Iletisim;