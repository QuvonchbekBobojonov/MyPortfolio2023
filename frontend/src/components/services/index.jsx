import React from 'react';

function Services() {
    return (
        <section className="services-area page-section scroll-to-page" id="services">
            <div className="custom-container">
                <div className="services-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-stream"></i> Hizmatlar
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">
                            Sizga nimalarni <span> taklif qila olaman?</span>
                        </h1>
                    </div>

                    <div className="services-items">
                        <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-bezier-curve"></i>
                            <h2>Veb sayt yaratish</h2>
                            <p>Istalgan Turdagi Web Saytlar Tayyorlash. Masalan: Internet Magazin, Blog, Axborot
                                Beruvchi Saytlar!</p>
                            <span className="projects"></span>
                        </div>
                        <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-code"></i>
                            <h2>Telegram bot</h2>
                            <p>Istalgan Turdagi Telegram Bot Tayyorlash Va Uni Serverga Qo'yish. Sifatli
                                Ko'rinishda</p>
                            <span className="projects"></span>
                        </div>
                        <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-bezier-curve"></i>
                            <h2>SEO optimallashtirish</h2>
                            <p> Saytni Google, Yandex va boshqa qidiruv tizimlarda optimallashtirish bilan
                                shug’ullanamiz</p>
                            <span className="projects"></span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Services;