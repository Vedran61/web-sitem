import './App.css';
import vdr from './assets/vdr.png'

const Hakkimda = () => {
    return (
        <div className='about'>
            <div className='about-title'>
                <h1>HAKKIMDA</h1>
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={vdr} alt="" />
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <h3 className='about-h3-title'>Merhaba ben Ömer Han Yıldırım</h3>
                        <p className='about-paragraf'>
                            1998 yılında Trabzon&apos;da doğdum. Lise eğitimimi Trabzon Yavuz Sultan Selim Anadolu Lisesi&apos;nde tamamladım. Erzurum Teknik Üniversitesi Bilgisayar Mühendisliği bölümünden 2024 yılında mezun oldum ve şu anda Karadeniz Teknik Üniversitesi&apos;nde yüksek lisans yapmaktayım.
                        </p>
                        <p className='about-paragraf'>Yazılım geliştirme ve problem çözme konularında tutkuluyum, özellikle Java ve Python dillerinde çalışıyorum. Ayrıca React.js ve Node.js ile web uygulamaları geliştiriyorum.</p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'>
                            <p>Java</p>
                            <hr style={{ width: "75%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>Python</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>ReactJs</p>
                            <hr style={{ width: "55%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>NodeJs</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                        <div className='about-skill'>
                            <p>PostgreSQL</p>
                            <hr style={{ width: "40%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hakkimda;
