import React, { useState } from 'react'
import logo from '../../images/logo-notco.svg'
import useTranslations from '../useTranslations'
import { navigate } from 'gatsby'
import { TermsModal } from './termsModal'
import { PrivacyModal } from './privacyModal'
import { LocaleContext } from '../Layout'

function Footer() {
    const {
        langSelect,
        contact,
        food,
        findUs,
        terms,
        privacy,
        english,
        spanish,
        portuguese,
        instagram,
    } = useTranslations()

    const { locale } = React.useContext(LocaleContext)

    const [termsModal, setTermsModal] = useState(false)
    const [privacyModal, setPrivacyModal] = useState(false)

    const toggleTerms = () => setTermsModal(!termsModal)
    const togglePrivacy = () => setPrivacyModal(!privacyModal)

    return (
        <footer className="page-footer font-small teal pie">
            <TermsModal modal={termsModal} toggle={toggleTerms} locale={locale} />
            <PrivacyModal modal={privacyModal} toggle={togglePrivacy} locale={locale} />
            <div className="container text-md-left pl-5 pr-5 pt-5">
                <div className="row">
                    <div className="col-sm-12 col-md-6 espacio-pie">
                        <img
                            className="pb-5 logo-footer-espacio"
                            src={logo}
                            style={{ width: 81 }}
                            alt="NotCo"
                        />
                        <div className="LanguageSelector">
                            <h2>{langSelect}</h2>
                            <select
                                className="select-footer"
                                onChange={e => navigate(e.target.value)}
                            >
                                <option label={english} value="/">
                                    {english}
                                </option>
                                <option label={portuguese} value="/pt">
                                    {portuguese}
                                </option>
                                <option label={spanish} value="/es">
                                    {spanish}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 espacio-pie">
                        <p className="footer-link">
                            <a href="http://notco.com/#contact">{contact}</a>
                        </p>
                        {/*<p className="footer-link">*/}
                        {/*    <a href="#">{food}</a>*/}
                        {/*</p>*/}
                        <h4 className="findus pt-4">{findUs}</h4>

                        <div className="FindUs__Logos">
                            <div>
                                <a
                                    href="https://www.facebook.com/thenotcompany/"
                                    aria-label="Facebook"
                                    target="_blank"
                                >
                                    <div>
                                        <svg
                                            width="38"
                                            height="38"
                                            viewBox="0 0 38 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19ZM20.3863 19.7439H23.7766L24.2254 15.3829H20.3866V12.8139C20.3866 11.8503 21.0234 11.6241 21.4762 11.6241H24.2369V7.38701L20.432 7.37109C16.2092 7.37109 15.2497 10.5341 15.2497 12.5541V15.3788H12.8067V19.7439H15.2497V32.1644H20.3863V19.7439Z"
                                                fill="#FFFFFF"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a
                                    href={instagram}
                                    aria-label="Instagram"
                                    target="_blank"
                                >
                                    <div>
                                        <svg
                                            width="38"
                                            height="38"
                                            viewBox="0 0 38 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M22.6367 19C22.6367 21.0085 21.0085 22.6367 19 22.6367C16.9915 22.6367 15.3633 21.0085 15.3633 19C15.3633 16.9915 16.9915 15.3633 19 15.3633C21.0085 15.3633 22.6367 16.9915 22.6367 19Z"
                                                fill="#FFFFFF"
                                            />
                                            <path
                                                d="M27.505 12.5655C27.3302 12.0918 27.0513 11.663 26.6889 11.311C26.3369 10.9486 25.9084 10.6697 25.4344 10.4949C25.05 10.3456 24.4725 10.1679 23.4088 10.1194C22.2581 10.067 21.9131 10.0557 19 10.0557C16.0866 10.0557 15.7416 10.0667 14.5912 10.1192C13.5275 10.1679 12.9497 10.3456 12.5656 10.4949C12.0916 10.6697 11.6628 10.9486 11.3111 11.311C10.9487 11.663 10.6698 12.0915 10.4947 12.5655C10.3454 12.9499 10.1677 13.5277 10.1193 14.5914C10.0668 15.7418 10.0555 16.0868 10.0555 19.0002C10.0555 21.9133 10.0668 22.2583 10.1193 23.409C10.1677 24.4727 10.3454 25.0502 10.4947 25.4346C10.6698 25.9086 10.9484 26.3371 11.3108 26.6891C11.6628 27.0515 12.0913 27.3304 12.5653 27.5052C12.9497 27.6548 13.5275 27.8325 14.5912 27.8809C15.7416 27.9334 16.0863 27.9444 18.9997 27.9444C21.9134 27.9444 22.2584 27.9334 23.4085 27.8809C24.4722 27.8325 25.05 27.6548 25.4344 27.5052C26.3859 27.1382 27.138 26.3861 27.505 25.4346C27.6543 25.0502 27.832 24.4727 27.8807 23.409C27.9332 22.2583 27.9442 21.9133 27.9442 19.0002C27.9442 16.0868 27.9332 15.7418 27.8807 14.5914C27.8323 13.5277 27.6546 12.9499 27.505 12.5655ZM19 24.6022C15.9057 24.6022 13.3974 22.0942 13.3974 18.9999C13.3974 15.9056 15.9057 13.3975 19 13.3975C22.094 13.3975 24.6024 15.9056 24.6024 18.9999C24.6024 22.0942 22.094 24.6022 19 24.6022ZM24.8239 14.4853C24.1008 14.4853 23.5146 13.8991 23.5146 13.176C23.5146 12.453 24.1008 11.8668 24.8239 11.8668C25.5469 11.8668 26.1331 12.453 26.1331 13.176C26.1328 13.8991 25.5469 14.4853 24.8239 14.4853Z"
                                                fill="#FFFFFF"
                                            />
                                            <path
                                                d="M19 0C8.50819 0 0 8.50819 0 19C0 29.4918 8.50819 38 19 38C29.4918 38 38 29.4918 38 19C38 8.50819 29.4918 0 19 0ZM29.8443 23.4981C29.7916 24.6595 29.6069 25.4524 29.3373 26.1465C28.7705 27.612 27.612 28.7705 26.1465 29.3373C25.4527 29.6069 24.6595 29.7913 23.4984 29.8443C22.3349 29.8974 21.9632 29.9102 19.0003 29.9102C16.037 29.9102 15.6657 29.8974 14.5019 29.8443C13.3408 29.7913 12.5476 29.6069 11.8538 29.3373C11.1256 29.0633 10.4663 28.6339 9.92125 28.0788C9.36635 27.534 8.93698 26.8744 8.66301 26.1465C8.39339 25.4527 8.20871 24.6595 8.15594 23.4984C8.10231 22.3346 8.08984 21.963 8.08984 19C8.08984 16.037 8.10231 15.6654 8.15565 14.5019C8.20842 13.3405 8.39281 12.5476 8.66243 11.8535C8.9364 11.1256 9.36606 10.466 9.92125 9.92125C10.466 9.36606 11.1256 8.93669 11.8535 8.66272C12.5476 8.3931 13.3405 8.20871 14.5019 8.15565C15.6654 8.1026 16.037 8.08984 19 8.08984C21.963 8.08984 22.3346 8.1026 23.4981 8.15594C24.6595 8.20871 25.4524 8.3931 26.1465 8.66243C26.8744 8.9364 27.534 9.36606 28.079 9.92125C28.6339 10.4663 29.0636 11.1256 29.3373 11.8535C29.6072 12.5476 29.7916 13.3405 29.8446 14.5019C29.8977 15.6654 29.9102 16.037 29.9102 19C29.9102 21.963 29.8977 22.3346 29.8443 23.4981Z"
                                                fill="#FFFFFF"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.linkedin.com/company/the-not-co-/"
                                    aria-label="LinkedIn"
                                    target="_blank"
                                >
                                    <div>
                                        <svg
                                            width="38"
                                            height="38"
                                            viewBox="0 0 38 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19 0C8.50819 0 0 8.50819 0 19C0 29.4918 8.50819 38 19 38C29.4918 38 38 29.4918 38 19C38 8.50819 29.4918 0 19 0ZM13.4788 28.7227H8.85146V14.8011H13.4788V28.7227ZM11.1653 12.9001H11.1351C9.58234 12.9001 8.57806 11.8312 8.57806 10.4953C8.57806 9.1292 9.61307 8.08984 11.196 8.08984C12.779 8.08984 13.7531 9.1292 13.7832 10.4953C13.7832 11.8312 12.779 12.9001 11.1653 12.9001ZM30.1641 28.7227H25.5373V21.275C25.5373 19.4033 24.8673 18.1268 23.1931 18.1268C21.9148 18.1268 21.1535 18.9878 20.8189 19.819C20.6966 20.1165 20.6667 20.5322 20.6667 20.9482V28.7227H16.0397C16.0397 28.7227 16.1003 16.1072 16.0397 14.8011H20.6667V16.7723C21.2816 15.8237 22.3819 14.4744 24.8369 14.4744C27.8813 14.4744 30.1641 16.4641 30.1641 20.7401V28.7227Z"
                                                fill="#FFFFFF"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="https://www.youtube.com/channel/UCT2H7LfjkiIQpusjjVlclxg"
                                    aria-label="YouTube"
                                    target="_blank"
                                >
                                    <div>
                                        <svg
                                            width="38"
                                            height="38"
                                            viewBox="0 0 38 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.6334 22.5596L22.8139 19L16.6334 15.4404V22.5596Z"
                                                fill="#FFFFFF"
                                            />
                                            <path
                                                d="M19 0C8.50819 0 0 8.50819 0 19C0 29.4918 8.50819 38 19 38C29.4918 38 38 29.4918 38 19C38 8.50819 29.4918 0 19 0ZM30.8721 19.0194C30.8721 19.0194 30.8721 22.8727 30.3833 24.7308C30.1093 25.7478 29.3074 26.5497 28.2904 26.8234C26.4323 27.3125 19 27.3125 19 27.3125C19 27.3125 11.5871 27.3125 9.70961 26.804C8.69258 26.5303 7.89067 25.7281 7.6167 24.7111C7.12761 22.8727 7.12761 19 7.12761 19C7.12761 19 7.12761 15.147 7.6167 13.2889C7.89038 12.2719 8.71201 11.4503 9.70961 11.1766C11.5677 10.6875 19 10.6875 19 10.6875C19 10.6875 26.4323 10.6875 28.2904 11.196C29.3074 11.4697 30.1093 12.2719 30.3833 13.2889C30.8918 15.147 30.8721 19.0194 30.8721 19.0194Z"
                                                fill="#FFFFFF"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className=" text-center footer-link cursor-pointer">
                    <a className="pr-4" onClick={toggleTerms}>
                        {terms}
                    </a>{' '}
                    <a onClick={togglePrivacy}>{privacy}</a>
                </p>
            </div>
            <div className="footer-copyright text-center">
                <p className="text-center footer-link">© NotCo 2020</p>
            </div>
        </footer>
    )
}

export default Footer
