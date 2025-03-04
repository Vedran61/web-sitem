import './App.css';
import servicesData from './servicesData.js';

const Hizmetlerim = () => {
    return (
        <div className='services'>
            <div className='services-title'>
                <h1>HİZMETLERİM</h1>
            </div>
            <div className='services-container'>
                {servicesData.map((service, index) => {
                    return (
                        <div key={index} className='services-format'>
                            <h3>{service.sNo}</h3>
                            <h2>{service.sName}</h2>
                            <p>{service.sDesc}</p>
                            <div className='services-readmore'>
                                Daha fazla ...
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Hizmetlerim;
